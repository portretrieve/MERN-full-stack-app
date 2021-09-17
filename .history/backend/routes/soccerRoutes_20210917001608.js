import { addNewPlayer } from "../controllers/playerControllers";

export default const routes = (app) => {
  app.route("/players").post(addNewPlayer);
};
