import { addNewPlayer, getAllPlayers } from "../controllers/playerControllers";

const routes = (app) => {
  app.route("/").;
    app.route("/players")
        get(getAllPlayers)
        .post(addNewPlayer);
};

export default routes;
