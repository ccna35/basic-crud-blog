const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const axios = require("axios");
const Post = require("../models/post");
const PORT = 8000;

const app = express();

app.use(cors());
app.use(express.json());

// connect to mongoDB

const dbURI =
  "mongodb+srv://ccna35:test123@cluster0.s9hqp.mongodb.net/testDB?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  .then((result) => app.listen(PORT))
  .catch((err) => console.log(err));

// Save a post to the DB

app.post("/add-post", (req, res) => {
  const post = new Post({
    title: req.body.title,
    body: req.body.body,
  });

  post
    .save()
    .then((result) => {
      res.send(result);
      console.log("done");
    })
    .catch((err) => {
      console.log(err.message);
    });
});

// Get all posts

app.get("/posts", (req, res) => {
  Post.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

// Get a single post

app.get("/post/:id", (req, res) => {
  const { id } = req.params;
  Post.findById(id)
    .then((result) => res.send(result))
    .catch((err) => {
      err.message;
    });
});

// Delete a single post

app.delete("/post/:id", (req, res) => {
  const { id } = req.params;

  Post.findByIdAndDelete(id)
    .then((result) => res.send(result))
    .catch((err) => console.log(err.message));
});

// Update a signle post

app.put("/post/edit/:id", (req, res) => {
  const { id } = req.params;

  const post = {
    title: req.body.title,
    body: req.body.body,
  };

  console.log(req.body);

  Post.findByIdAndUpdate(id, post)
    .then((result) => res.send(result))
    .catch((err) => console.log(err.message));
});
