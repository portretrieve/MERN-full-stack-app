import {
  addNewPlayer,
  getAllPlayers,
  getPlayerWithId
} from "../controllers/playerControllers";

const routes = (app) => {
  app.route("/players").get(getAllPlayers).post(addNewPlayer);
  app.route("/players/:PlayerId").get(getPlayerWithId);
};

export default routes;
