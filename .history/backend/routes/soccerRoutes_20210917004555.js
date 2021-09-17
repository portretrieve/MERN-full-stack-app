import { addNewPlayer, getAllPlayers } from "../controllers/playerControllers";

const routes = (app) => {
  app.route("/").get(getAllPlayers);

  app.route("/players").post(addNewPlayer);
};

export default routes;
