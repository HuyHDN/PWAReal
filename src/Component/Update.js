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
    console.log("A userid was submitted: " + this.state.userid);
    console.log("A password was submitted: " + this.state.password);
    console.log("A fullname was submitted: " + this.state.fullname);
    console.log("A address was submitted: " + this.state.address);
    console.log("A userrole was submitted: " + this.state.userrole);
    console.log("A status was submitted: " + this.state.status);

    event.preventDefault();
  }

  render() {
    return (
      <div className="container" style={{ paddingTop: "150px" }}>
        <h1> Update Users </h1>
        <form onSubmit={this.handleSubmit}>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="userid">User Id</label>
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
            <label for="fullname">Full Name</label>
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
            <label for="address">Address</label>
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
              <label for="userrole">User Role</label>
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