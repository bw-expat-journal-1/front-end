import React, { useState } from "react";

export class Register extends React.Component {
  state = {
    newAccount: {
      username: "",
      password: "",
      email: "",
      name: "",
      age: "",
      terms: false,
    },
  };

  changeHandler = (e) => {
    const value = e.target.name === "terms" ? e.target.checked : e.target.value;
    this.setState({
      newAccount: {
        ...this.state.newAccount,
        [e.target.name]: value,
      },
    });
  };

  render() {
    return (
      <form>
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={this.state.newAccount.username}
          onChange={this.changeHandler}
        />

        <label>Password: </label>
        <input
          type="text"
          name="password"
          value={this.state.newAccount.password}
          onChange={this.changeHandler}
        />

        <label>Email: </label>
        <input
          type="text"
          name="email"
          value={this.state.newAccount.email}
          onChange={this.changeHandler}
        />

        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={this.state.newAccount.name}
          onChange={this.changeHandler}
        />

        <label>Age: </label>
        <input
          type="text"
          name="age"
          value={this.state.newAccount.age}
          onChange={this.changeHandler}
        />

        <input
          type="checkbox"
          name="terms"
          value={this.state.newAccount.terms}
          onChange={this.changeHandler}
        />
        <span>Terms and conditions</span>

        <button>Register</button>
      </form>
    );
  }
}
