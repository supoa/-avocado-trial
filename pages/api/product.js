import nc from "next-connect";
import bcrypt from "bcryptjs";
import Product from "../../models/Product";
import db from "../../utils/db";
import { signToken, isAdmin, isAuth } from "../../utils/auth";

const handler = nc();

handler.get(async (req, res) => {
  try {
    await db.connect();
    const product = await Product.find().sort({ _id: -1 });
    await db.disconnect();
    return res.status(200).send(product);
  } catch (error) {
    console.log(error);
  }
});

handler.use(isAuth, isAdmin);
handler.post(async (req, res) => {
  try {
    await db.connect();
    const newProduct = await new Product({
      ...req.body,
    });
    const product = await newProduct.save();
    res.status(200).send(product);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

handler.delete(async (req, res) => {
  try {
    await db.connect();

    const resp = await Product.findOneAndDelete({ _id: req.query.id });
    console.log(resp);
    res.status(200).send(resp);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

handler.put(async (req, res) => {
  try {
    await db.connect();
    const newProduct = await Product.findOneAndUpdate(
      { _id: req.body.id },
      {
        ...req.body,
      },
      {
        new: true,
      }
    );

    const product = await Product.find({});
    res.status(200).send(product);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

export default handler;
