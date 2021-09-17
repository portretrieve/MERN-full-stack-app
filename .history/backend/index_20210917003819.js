import express from "express";
import mongoose from "mongoose";
import routes from "./routes/soccerRoutes";
import { addNewPlayer } from "./controllers/playerControllers";
const app = express();
const PORT = 3000;

//Mongo Connection
// mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/soccerDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

// routes(app);

app.get("/", (req, res, next) => {
  res.send("Our Soccer application is running at" + PORT);
  next();
});

app.post("/players", addNewPlayer);

app.listen(PORT, () => {
  console.log("App running at PORT " + PORT);
});
