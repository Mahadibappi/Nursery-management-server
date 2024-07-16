import { Schema, model, Document } from "mongoose";

interface Product extends Document {
  title: string;
  price: number;
  description: string;
  rating: number;
  image: string;
  category: string;
  height: string;
  potSize: string;
}

const productSchema = new Schema<Product>(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    height: { type: String, required: true },
    potSize: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default model<Product>("Product", productSchema);
//
