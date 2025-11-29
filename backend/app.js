import express from "express";

const app = express();

app.get("/ping", (req, res) => {
  res.send("pong , server up and running");
});

export default app;
