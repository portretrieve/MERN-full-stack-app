import "./App.css";
import PlayerList from "./Player/PlayerList";
import PlayerSingle from "./Player/PlayerSingle";
import PlayerForm from "./Player/PlayerForm";

function App() {
  return (
    <div>
      <PlayerForm />
      <PlayerList />
      <PlayerSingle />
    </div>
  );
}

export default App;
