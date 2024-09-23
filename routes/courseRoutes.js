// const express = require("express");
// const Router = express.Router();

const { Router } = require("express");

const courseRouter = Router();

courseRouter.get("/preview", (req, res) => {
  res.json({
    message: "preview avbl courses endPoint",
  });
});
courseRouter.post("/purchase", (req, res) => {
  res.json({
    message: "purchase avbl courses endPoint",
  });
});

module.exports = { courseRouter: courseRouter };
