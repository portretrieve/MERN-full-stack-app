import axios from "axios";
import React from "react";


class PlayerForm extends React.Component {

    myRef = React.createRef();

  submitHandler = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/players", {
        firstName: this.myRef.current.value,
        lastName : 
    });
  };

  render() {
    return (
      <div class="row">
        <h4 className="center">Add a new Player</h4>
        <form class="col s12" onSubmit={this.submitHandler}>
          <div class="row">
            <div class="input-field col s6">
              <input
                id="firstName"
                ref={ this.myRef}
                type="text"
                class="validate"
              />
              <label htmlFor="firstName">First Name</label>
            </div>
            <div class="input-field col s6">
              <input
                id="lastName"
                ref="lastName"
                type="text"
                class="validate"
              />
              <label for="lastName">Last Name</label>
            </div>
            <div class="input-field col s6">
              <input id="lastName" ref="email" type="email" class="validate" />
              <label htmlFor="lastName">Email</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light">Add Player</button>
        </form>
      </div>
    );
  }
}

export default PlayerForm;
