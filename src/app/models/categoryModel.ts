import { Schema, model, Document } from "mongoose";

interface Category extends Document {
  name: string;
  image: string;
  products: Array<object>;
}

const categorySchema = new Schema<Category>({
  name: { type: String, required: true },
  image: { type: String, required: true },
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

export default model<Category>("Category", categorySchema);
