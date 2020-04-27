import React from "react";

export const Register = () => {
  return (
    <div>
      <label>Username: </label>
      <input type="text" />

      <label>Password: </label>
      <input type="text" />

      <label>Email: </label>
      <input type="text" />

      <label>Age: </label>
      <input type="text" />

      <input type="checkbox" />
      <span>Terms and conditions</span>

      <button>Register</button>
    </div>
  );
};

// username , password, email, name, age, terms and conditions.
