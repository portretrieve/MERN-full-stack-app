import { addNewPlayer } from "../controllers/playerControllers";

const routes = (app) => {
  app.route("/players").post(addNewPlayer);
};
