import { Schema, model, Document } from "mongoose";

interface Product extends Document {
  title: string;
  price: number;
  description: string;
  rating: number;
  category: {
    image: string;
    details: Array<object>;
  };
}

const productSchema = new Schema<Product>(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true },
    category: {
      image: { type: String, required: true },
      details: [{ type: Object }],
    },
  },
  {
    timestamps: true,
  }
);

export default model<Product>("Product", productSchema);
