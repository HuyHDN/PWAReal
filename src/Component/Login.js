import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Login extends Component {
    constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userPassword: ""
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
    console.log("A userName was submitted: " + this.state.userName);
    console.log("A userPassword was submitted: " + this.state.userPassword);

    event.preventDefault();
  }

  render() {
      return (
        <div className="container" style={{ paddingTop: "50px" }}>
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
            <div class="form-group col-md-6">
              <label>User Name</label>
              <input
                type="text"
                name="userName"
                value={this.state.userName}
                onChange={this.handleInputChange}
                class="form-control"
                id="userName"
                placeholder="User Name"
              />
              <label>Password</label>
              <input
                type="password"
                name="userPassword"
                value={this.state.userPassword}
                onChange={this.handleInputChange}
                class="form-control"
                id="userPassword"
                placeholder="Password"
              />
            </div>
            <Link to={'/'}>
              <button type="submit" class="btn btn-primary">
                Login
              </button>
            </Link>
          </form>
        </div>
      );
  }
}