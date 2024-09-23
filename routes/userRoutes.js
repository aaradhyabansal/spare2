// const express = require("express");
// const router = express.Router();

const { Router } = require("express");

const userRouter = Router();

userRouter.post("/signup", (req, res) => {
  res.json({
    message: "user signup endpoint",
  });
});

userRouter.post("/signin", (req, res) => {
  res.json({
    message: "user signin endpoint",
  });
});

userRouter.get("/purchase", (req, res) => {
  res.json({
    message: "user's Courses endpoint",
  });
});

module.exports = { userRouter: userRouter };
