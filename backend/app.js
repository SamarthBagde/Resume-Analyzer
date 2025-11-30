const express = require("express");
const resumeRouter = require("./routes/resumeRoutes.js");

const app = express();

app.use(express.json());

app.get("/ping", (req, res) => {
  res.send("pong , server up and running");
});

app.use("/api/resume", resumeRouter);

module.exports = app;
