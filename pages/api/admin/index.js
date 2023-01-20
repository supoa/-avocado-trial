import nc from "next-connect";
import bcrypt from "bcryptjs";
import User from "../../../models/User";

import db from "../../../utils/db";
import { signToken, isAdmin, isAuth } from "../../../utils/auth";

const handler = nc();

// get all the users by admin

handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  try {
    await db.connect();
    const users = await User.find({});
    await db.disconnect();
    return res.send(users);
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});

// update user data from admin
handler.put(async (req, res) => {
  console.log("updating by admin");
  try {
    await db.connect();

    const user = await User.findOneAndUpdate(
      { _id: req.query.id },
      {
        ...req.body,
      },
      {
        new: true,
      }
    );
    console.log(user);
    await db.disconnect();
    return res.send(user);
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});

// update user only by admin
export default handler;
