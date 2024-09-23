const express = require("express");
const app = express();
const { userRouter } = require("./routes/userRoutes");
const { courseRouter } = require("./routes/courseRoutes");
app.use("/user", userRouter);
app.use("/course", courseRouter);

app.listen(3000);
