import React from "react";
import { connect } from "react-redux";

import { axiosWithAuth } from "../utils/axiosWithAuth";

export class Login extends React.Component {
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
    // this.props.login(this.state.account).then(() => {
    //   console.log("Credentials accepted", this.state);
    //   this.props.history.push("/");
    // });
    axiosWithAuth()
      .post("/api/login", this.state.account)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.payload));
        this.props.history.push("/");
      })
      .catch((err) => console.log({ err }));
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
