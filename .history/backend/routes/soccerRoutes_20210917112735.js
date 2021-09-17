import {
  addNewPlayer,
  getAllPlayers,
  getPlayerWithId,
  updatePlayer
} from "../controllers/playerControllers";

const routes = (app) => {
  app.route("/players").get(getAllPlayers).post(addNewPlayer);
  app.route("/players/:PlayerId").get(getPlayerWithId).put(updatePlayer);
};

export default routes;
