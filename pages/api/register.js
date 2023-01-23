import nc from "next-connect";
import bcrypt from "bcryptjs";
import User from "../../models/User";
import mongoose from "mongoose";
import nodemailer from "nodemailer";

import db from "../../utils/db";
import { signToken } from "../../utils/auth";
import {
  mailOptionsForNewUser,
  mailOptionForReferance,
  mailOptionForAdmin,
  transporter,
} from "../../utils/mail";

const handler = nc();
handler.post(async (req, res) => {
  try {
    await db.connect();

    let existRef;

    if (req.body.reference) {
      if (!mongoose.Types.ObjectId.isValid(req.body.reference)) {
        res.status(302).send({ error: "Not a Refaral Code" });
        throw new Error("Not Reference Id");
        return;
      }
      existRef = await User.findOne({ _id: req.body.reference });
      console.log({ existRef });
      if (!existRef) {
        res.status(404).send({ error: "Wrong Reference" });
        throw new Error("Wrong Reference Id");
      }
    }

    const exist = await User.findOne({ email: req.body.email });
    if (exist) {
      throw new Error("User already Exist");
    }

    const newUser = new User({
      ...req.body,
      password: bcrypt.hashSync(req.body.password),
    });

    const user = await newUser.save();

    //  sent mail to the referal user
    if (existRef) {
      existRef.teamMembers.push(user._id);
      await existRef.save();
      // send mail to the referance

      transporter.sendMail(
        mailOptionForReferance(existRef, user),
        function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent  : " + info.response);
          }
        }
      );
    }

    // send email to newly signed Up user
    transporter.sendMail(mailOptionsForNewUser(user), function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    // fecth admin and send mail to the admin user
    const admin = await User.findOne({ isAdmin: true });
    if (admin) {
      transporter.sendMail(
        mailOptionForAdmin(admin, user),
        function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        }
      );
    }

    await db.disconnect();

    const token = signToken(user);
    res.send({
      token,
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      picture: user.picture,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

export default handler;
