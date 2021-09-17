import React from "react";
import axios from "axios";
import "./App.css";
import PlayerList from "./Player/PlayerList";
import PlayerSingle from "./Player/PlayerSingle";
import PlayerForm from "./Player/PlayerForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      currentPlayer: {}
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/players")
      .then((response) => {
        this.setState({ players: response.data });
      })
      .catch((err) => console.log(err));
  }

  updateCurrentPlayer = (item) => {
    this.setState({
      currentPlayer: item
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <nav>
            <div class="nav-wrapper">
              <a href="#!" className="brand-logo">
                Logo
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <a href="sass.html">Sass</a>
                </li>
                <li>
                  <a href="badges.html">Components</a>
                </li>
                <li>
                  <a href="collapsible.html">JavaScript</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="row">
          <div className="col s3">
            <PlayerList
              players={this.state.players}
              updateCurrentPlayer={this.updateCurrentPlayer}
            />
          </div>
          <div className="col s9">
            <PlayerSingle />
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <PlayerForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
