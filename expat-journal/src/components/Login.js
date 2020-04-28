import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../store/actions/loginAction";

class Login extends React.Component {
  state = {
    account: {
      username: "",
      password: "",
    },
  };

  changeHandler = (e) => {
    e.preventDefault();
    this.setState({
      account: {
        ...this.state.account,
        [e.target.name]: e.target.value,
      },
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.login(this.state.account).then(() => {
      console.log("Credentials accepted", this.state);
      this.props.history.push("/register");
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={this.state.account.username}
            onChange={this.changeHandler}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="text"
            name="password"
            value={this.state.account.password}
            onChange={this.changeHandler}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggingIn: state.isLoggingIn,
  username: state.username,
});

export default connect(mapStateToProps, { login })(Login);
