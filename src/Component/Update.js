import React, { Component } from "react";

export default class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: "",
      password: "",
      fullname: "",
      address: "",
      userrole: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    console.log("A userid was submitted: " + this.state.userid);
    console.log("A password was submitted: " + this.state.password);
    console.log("A fullname was submitted: " + this.state.fullname);
    console.log("A address was submitted: " + this.state.address);
    console.log("A userrole was submitted: " + this.state.userrole);

    event.preventDefault();
  }

  render() {
    return (
      <div className="container" style={{ paddingTop: "150px" }}>
        <h1> Update Users </h1>
        <form onSubmit={this.handleSubmit}>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">User Id</label>
              <input
                type="text"
                name="userid"
                value={this.state.userid}
                onChange={this.handleInputChange}
                class="form-control"
                id="id"
                placeholder="userid"
              />{" "}
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Password</label>
              <input
                type="password"
                name="password"
                class="form-control"
                value={this.state.password}
                onChange={this.handleInputChange}
                id="password"
                placeholder="Password"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Full Name</label>
            <input
              type="text"
              name="fullname"
              class="form-control"
              value={this.state.fullname}
              onChange={this.handleInputChange}
              id="fullname"
              placeholder="Full Name"
            />
          </div>
          <div class="form-group">
            <label for="inputAddress2">Address</label>
            <input
              type="text"
              name="address"
              class="form-control"
              value={this.state.address}
              onChange={this.handleInputChange}
              id="inputAddress2"
              placeholder="Address"
            />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">User Role</label>
              <input
                name="userrole"
                type="text"
                value={this.state.userrole}
                onChange={this.handleInputChange}
                class="form-control"
                id="User Role"
                placeholder="User Role"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputState">Active?</label>
              <select id="inputState" class="form-control">
                <option value="Yes" selected>
                  Yes
                </option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    );
  }
}