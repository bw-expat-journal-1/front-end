import React, { useState } from "react";

export const Register = () => {
  const [newAccount, setNewAccount] = useState({
    username: "",
    password: "",
    email: "",
    age: "",
    terms: false,
  });

  const changeHandler = (e) => {
    const value = e.target.name === "terms" ? e.target.checked : e.target.value;
    setNewAccount({
      ...newAccount,
      [e.target.name]: value,
    });
  };

  return (
    <div>
      <label>Username: </label>
      <input
        type="text"
        name="username"
        value={newAccount.username}
        onChange={changeHandler}
      />

      <label>Password: </label>
      <input
        type="text"
        name="password"
        value={newAccount.password}
        onChange={changeHandler}
      />

      <label>Email: </label>
      <input
        type="text"
        name="email"
        value={newAccount.email}
        onChange={changeHandler}
      />

      <label>Age: </label>
      <input
        type="text"
        name="age"
        value={newAccount.age}
        onChange={changeHandler}
      />

      <input
        type="checkbox"
        name="terms"
        value={newAccount.terms}
        onChange={changeHandler}
      />
      <span>Terms and conditions</span>

      <button>Register</button>
    </div>
  );
};

// username , password, email, name, age, terms and conditions.
