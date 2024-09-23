const express = require("express");
const app = express();

app.post("/user/signup", (req, res) => {
  res.json({
    message: "user signup endpoint",
  });
});

app.post("user/signin", function (req, res) {
  res.json({
    message: "user signin endpoint",
  });
});

app.get("/courses", (req, res) => {
  res.json({
    message: "all courses endpoint",
  });
});

app.post("/user/purchase", (req, res) => {
  res.json({
    message: "courses purchase endpoint",
  });
});

app.get("/user/purchases", (res, res) => {
  res.json({
    message: " users courses endpoint",
  });
});

app.listen(3000);
