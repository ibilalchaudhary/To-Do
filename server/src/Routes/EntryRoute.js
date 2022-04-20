const { json } = require("express");
const express = require("express");
const asyncHandler = require("express-async-handler");

const route = require("express").Router();

const Todo = require("../Models/EntryModel");

route.get(
  "/",
  asyncHandler(async (req, res) => {
    const todo = await Todo.find();
    res.status(200).json(todo);
  })
);

route.post(
  "/",
  asyncHandler(async (req, res) => {
    if (!req.body.text) {
      res.status(400);
      throw new Error("please add value here");
    }

    const posttodo = await Todo.create({
      text: req.body.text,
    });
    res.status(200).json(posttodo);
  })
);
route.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      res.status(400);
      throw new Error("didn't update find");
    }

    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedTodo);
  })
);
route.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      res.status(400);
      throw new Error("didn't update find");
    }

    await todo.remove();
    res.status(200).json({ id: req.params.id });
  })
);

module.exports = route;
