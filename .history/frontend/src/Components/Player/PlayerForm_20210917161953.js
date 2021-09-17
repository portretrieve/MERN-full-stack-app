import React from "react";

class PlayerForm extends React.Component {
  render() {
    return (
      <div class="row">
        <h1 className="center"></h1>
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <input id="first_name" type="text" class="validate" />
              <label for="first_name">First Name</label>
            </div>
            <div class="input-field col s6">
              <input id="last_name" type="text" class="validate" />
              <label for="last_name">Last Name</label>
            </div>
            <div class="input-field col s6">
              <input id="last_name" type="text" class="validate" />
              <label for="last_name">Last Name</label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerForm;
