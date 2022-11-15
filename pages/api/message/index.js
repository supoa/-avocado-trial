import nc from "next-connect";
import bcrypt from "bcryptjs";
import Message from "../../../models/Message";
import User from "../../../models/User";
import CryptoJS from "crypto-js";

import db from "../../../utils/db";
import { signToken, isAdmin, isAuth } from "../../../utils/auth";
const secretKey = "btc";
const handler = nc();

// create message in specifi chat Id
handler.use(isAuth);
handler.post(async (req, res) => {
  try {
    const { text, chatId } = req.body;
    if (!text || !chatId) {
      console.log("Invalid data passed into request");
      return res.status(400).send({ message: "invalid data" });
    }
    const data = {
      sender: req.user._id,
      text,
      chat: chatId,
    };

    await db.connect();

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
      })
      .populate({
        path: "sender",
        select: "_id isAdmin",
      });
    await db.disconnect();

    res.status(200).send(createdOne);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

handler.use(isAuth, isAdmin);
handler.get(async (req, res) => {
  try {
    await db.connect();
    let timeNow = new Date();
    timeNow.setDate(timeNow.getDate() - 3);
    console.log(timeNow);

    const admin = await User.findOne({ isAdmin: true });
    const messages = await Message.find({
      sender: { $ne: admin._id },
      createdAt: { $gt: timeNow },
    })
      // .distinct("sender")
      .populate("sender", "_id picture name")
      .sort({ createdAt: -1 });

    await db.disconnect();

    res.status(200).send(messages);
  } catch (error) {
    console.log(error);
    res.status(400);
    throw new Error(error.message);
  }
});

export default handler;
