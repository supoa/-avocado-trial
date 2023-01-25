import nc from "next-connect";
import bcrypt from "bcryptjs";
import Announcement from "../../models/Announcement";
import User from "../../models/User";
import db from "../../utils/db";
import { signToken, isAdmin, isAuth } from "../../utils/auth";
import {
  mailOptionForAnnouncement,
  mailOptionsForNewUser,
  transporter,
} from "../../utils/mail";

const handler = nc();

handler.get(async (req, res) => {
  try {
    await db.connect();
    let notice = await Announcement.find().sort({ _id: -1 }).limit(1);
    await db.disconnect();
    // notice = notice[0].content.split("#");

    return res.status(200).send(notice[0]);
  } catch (error) {
    console.log(error);
  }
});

handler.use(isAuth, isAdmin);
handler.post(async (req, res) => {
  try {
    await db.connect();
    const newNotice = await new Announcement({
      ...req.body,
    });
    let notice = await newNotice.save();
    let users = await User.find({});
    console.log({ usersCount: users.length });

    const content = notice.content.split("#");

    let Failed = [];
    let Success = [];

    // var sendMail = function (index) {
    //   if (index >= users.length) {
    //     return;
    //   }

    //   var recipient = users[index];

    //   transporter.sendMail(
    //     mailOptionForAnnouncement(recipient, content),
    //     function (error, info) {
    //       if (error) {
    //         console.log(error);
    //         Failed.push(recipient.email);
    //         console.log(Failed);
    //       } else {
    //         console.log(
    //           "Email sent: " + info.response + "to" + " " + recipient.email
    //         );

    //         Success.push(recipient);
    //         console.log({ success: Success.length });
    //       }

    //       setTimeout(function () {
    //         sendMail(index + 1);
    //       }, 10000);
    //     }
    //   );
    // };

    // sendMail(0);

    const TestRecipient = {
      name: "Test",
      email: "sohanur25800@gmail.com",
    };

    transporter.sendMail(
      mailOptionForAnnouncement(TestRecipient, content),
      function (error, info) {
        if (error) {
          console.log(error);
          Failed.push(TestRecipient.email);
          console.log(Failed);
        } else {
          console.log(
            "Email sent: " + info.response + "to" + " " + recipient.email
          );

          Success.push(TestRecipient);
          console.log({ success: Success.length });
        }
      }
    );

    res.status(200).send(notice);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

export default handler;
