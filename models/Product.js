import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    
  {
    content: { type: String },
    title: { type: String },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
