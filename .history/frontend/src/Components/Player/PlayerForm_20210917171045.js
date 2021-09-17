import axios from "axios";
import React from "react";

class PlayerForm extends React.Component {
  firstNameRef = React.createRef();
  lastNameRef = React.createRef();
  emailRef = React.createRef();

  submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/players", {
        firstName: this.firstNameRef.current.value,
        lastName: this.lastNameRef.current.value,
        email: this.emailRef.current.value
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
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
                ref={this.firstNameRef}
                type="text"
                class="validate"
              />
              <label htmlFor="firstName">First Name</label>
            </div>
            <div class="input-field col s6">
              <input
                id="lastName"
                ref={this.lastNameRef}
                type="text"
                class="validate"
              />
              <label for="lastName">Last Name</label>
            </div>
            <div class="input-field col s6">
              <input
                id="lastName"
                ref={this.emailRef}
                type="email"
                class="validate"
              />
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
