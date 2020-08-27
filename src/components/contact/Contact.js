import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
      formData: {
        firstName: "",
        lastName: "",
      },
    };
  }

  handleChange = (event) => {
    const formData = { ...this.state.formData };
    formData[event.target.name] = event.target.value;

    this.setState({
      formData,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      submitted: true,
    });
  };

  handleResetClick = (event) => {
    this.setState({
      submitted: false,
      formData: {
        firstName: "",
        lastName: "",
      },
    });
  };

  render() {
    if (this.state.submitted) {
      return (
        <div className="Thanks">
          <h2>THANKS!!!!!</h2>
          <button type="reset" onClick={this.handleResetClick}>
            Reset
          </button>
        </div>
      );
    }

    return (
      <div className="Contact">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstName">First name</label>
            <input
              name="firstName"
              placeholder="Enter Name"
              value={this.state.formData.firstName}
              onChange={this.handleChange}
            ></input>
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              name="lastName"
              placeholder="Enter Name"
              value={this.state.formData.lastName}
              onChange={this.handleChange}
            ></input>
          </div>
          <button>Submit</button>
          <div>
            Full Name: {this.state.formData.firstName}
            {this.state.formData.lastName}
          </div>
        </form>
      </div>
    );
  }
}

export default Contact;
