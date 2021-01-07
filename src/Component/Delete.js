import React, { Component } from "react";

export default class Update extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container" style={{ paddingTop: "50px" }}>
        <h1> Delete Users </h1>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group col-md-6">
            <label>
              Type the user id you want to delete
            </label>
            <input
              type="text"
              name="userid"
              value={this.state.value}
              onChange={this.handleChange}
              class="form-control"
              id="id"
              placeholder="userid"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}