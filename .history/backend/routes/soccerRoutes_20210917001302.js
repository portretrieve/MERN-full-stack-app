import { addNewPlayer } from "../controllers/playerControllers";

export default routes = (app) => {
  app.route("/players").post(addNewPlayer);
};
