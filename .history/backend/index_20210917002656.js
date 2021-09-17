import express from "express";
import mongoose from "mongoose";
import routes from "./routes/soccerRoutes";
const app = express();
const PORT = 3000;

//Mongo Connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/soccerDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

routes(app);
app.use(express.json());

app.get("/", (req, res, next) => {
  res.send("Our Soccer application is running at" + PORT);
});

app.listen(PORT, () => {
  console.log("App running at PORT " + PORT);
});
