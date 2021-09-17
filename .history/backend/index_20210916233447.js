import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 3000;

//Mongo Connection

app.get("/", (req, res, next) => {
  res.send("Our Soccer application is running at" + PORT);
});

app.listen(PORT, () => {
  console.log("App running at PORT " + PORT);
});
