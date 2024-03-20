import express from "express";
import { books } from "../models/books.js";

const routerBook = express.Router();

routerBook.get("/books", async (req, res) => {
  const response = await books.find();
  res.send(response);
});

routerBook.post("/books", async (req, res) => {
  const body = req.body;
  const book = new Book(body);
  const response = await book.save();
  res.send(response);
});
routerBook.get("/books/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  res.send(response);
});
routerBook.put("/books/:id", async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const response = await books.findOneAndUpdate({ _id: id }, body, {
    new: true,
  });
  res.send(response);
});

routerBook.delete("/books/:id", async (req, res) => {
  const id = req.params.id;
  const response = await books.findOneAndDelete({ _id: id });
  res.send(response);
});
export default routerBook;
