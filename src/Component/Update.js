import React, { Component } from "react";

export default class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      password: "",
      fullName: "",
      address: "",
      userRole: "",
      status: "",
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
    console.log("A userId was submitted: " + this.state.userId);
    console.log("A password was submitted: " + this.state.password);
    console.log("A fullName was submitted: " + this.state.fullName);
    console.log("A address was submitted: " + this.state.address);
    console.log("A userRole was submitted: " + this.state.userRole);
    console.log("A status was submitted: " + this.state.status);

    event.preventDefault();
  }

  render() {
    return (
      <div className="container" style={{ paddingTop: "50px" }}>
        <h1> Update Users </h1>
        <form onSubmit={this.handleSubmit}>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="userId">User Id</label>
              <input
                type="text"
                name="userId"
                value={this.state.userId}
                onChange={this.handleInputChange}
                class="form-control"
                id="userId"
                placeholder="userId"
              />{" "}
            </div>
            <div class="form-group col-md-6">
              <label for="password">Password</label>
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
            <label for="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              class="form-control"
              value={this.state.fullName}
              onChange={this.handleInputChange}
              id="fullName"
              placeholder="Full Name"
            />
          </div>
          <div class="form-group">
            <label for="address">Address</label>
            <input
              type="text"
              name="address"
              class="form-control"
              value={this.state.address}
              onChange={this.handleInputChange}
              id="address"
              placeholder="Address"
            />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="userRole">User Role</label>
              <input
                name="userRole"
                type="text"
                value={this.state.userRole}
                onChange={this.handleInputChange}
                class="form-control"
                id="userRole"
                placeholder="User Role"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="status">Active?</label>
              <select
                name="status"
                class="form-control"
                value={this.state.status}
                onChange={this.handleInputChange}
                id="status"
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
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