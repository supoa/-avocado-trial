import nc from "next-connect";
import bcrypt from "bcryptjs";
import User from "../../../models/User";
import { validate } from "email-validator";

import db from "../../../utils/db";
import { signToken, isAdmin, isAuth } from "../../../utils/auth";
import {
  mailOptionForAnnouncement,
  mailOptionForUpdatedUser,
  transporter,
} from "../../../utils/mail";

const handler = nc();

// get all the users by admin

// handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  try {
    await db.connect();
    const users = await User.find({}).select("name email _id");

    await db.disconnect();
    return res.send(users);
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});

handler.post(async (req, res) => {
  console.log("start to send mail");
  const { content, name, email } = req.body;
  console.log({ name, email });

  if (!validate(email.trim())) {
    res.status(200).send({ message: "sucessfully sent" });
    return;
  }

  let Failed = [];
  let Success = [];
  const recipient = { name, email };

  function later(delay) {
    return new Promise(function (resolve) {
      setTimeout(resolve, delay);
      console.log("delayed");
    });
  }

  later("5000");

  await new Promise((resolve, reject) => {
    // verify connection configuration
    console.log("verifying");
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  console.log("verified");

  await new Promise((resolve, reject) => {
    // send mail
    console.log("start sending mail");
    transporter.sendMail(
      mailOptionForAnnouncement(recipient, content),
      (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      }
    );
  });

  res.status(200).send({ message: "sucessfully sent" });
});

// update user only by admin
export default handler;
