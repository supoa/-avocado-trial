import nc from "next-connect";
import bcrypt from "bcryptjs";
import Message from "../../../models/Message";
import User from "../../../models/User";

import db from "../../../utils/db";
import { signToken, isAdmin, isAuth } from "../../../utils/auth";

const handler = nc();

handler.use(isAuth);
// get all the messages for specific chatId
handler.get(async (req, res) => {
  try {
    await db.connect();
    const messages = await Message.find({ chat: req.query.chatId }).populate({
      path: "sender",
      select: "_id  email isAdmin",
    });

    await db.disconnect();

    res.status(200).send(messages);
  } catch (error) {
    console.log(error);
    res.status(400);
    throw new Error(error.message);
  }
});



// Generate Message with admin
handler.post(async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      console.log("Invalid data passed into request");
      return res.status(400).send({ message: "invalid data" });
    }

    await db.connect();

    const admin = await User.findOne({ isAdmin: true }, { _id: 1 });

    const data = {
      sender: admin._id,
      text,
      chat: req.query.chatId,
    };

    const newMessage = await new Message(data);
    const message = await newMessage.save();

    const createdOne = await Message.findOne({ _id: message._id })
      .populate("sender", "name pic")
      .populate({
        path: "chat",
        populate: {
          path: "users",
          select: "name pic email isAdmin",
        },
      });
    await db.disconnect();

    console.log({ createdOne });

    res.status(200).send(createdOne);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});




export default handler;
