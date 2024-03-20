import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: Number,
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

export const books = mongoose.model("books", bookSchema);
