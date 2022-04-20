const express = require("express");
const asyncHandler = require("express-async-handler");

const route = require("express").Router();

const Todo = require("../Models/EntryModel");

route.get("/", async (req, res) => {
  const todo = await Todo.find();
  res.status(200);
  // console.log(`here is your data${todo}`);
});

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
    res.json({
      message: "its put request",
    });
  })
);
route.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    res.json({
      message: "its delete request",
    });
  })
);

module.exports = route;
