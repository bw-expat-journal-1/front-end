import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialFormValues = {
  username: "",
  password: "",
};

const initialFormErrors = {
  username: "",
  password: "",
};
//FORM SCHEMA for login page
const formSchema = yup.object().shape({
  username: yup.string().required("username is required"),
  password: yup.string().required("password is required"),
});

function Login() {
  const [login, setLogin] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [formDisabled, setFormDisabled] = useState(true);
  const history = useHistory();

  //DISABLES submit button until all form values are entered without errors
  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setFormDisabled(!valid);
    });
  }, [formValues]);

  //INPUT CHANGES
  const onInputChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    //VALIDATES the form and checks for any errors
    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({ ...formValues, [name]: value });
  };

  //SUBMITS
  const onSubmit = (evt) => {
    evt.preventDefault();

    const newLogin = {
      username: formValues.username,
      password: formValues.password,
    };
    setLogin([...login, newLogin]);
    setFormValues(initialFormValues);

    axiosWithAuth()
      .post("/api/auth/login", formValues)
      .then((res) => {
        // console.log(res.data);
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("userId", JSON.stringify(res.data.userId));
        history.push("/post");
      })
      .catch((err) => console.log({ err }));
  };

  return (
    <div className="login">
      <header>
        <h1>Login</h1>
      </header>

      <label>Username </label>
      <input
        value={formValues.username}
        type="text"
        name="username"
        onChange={onInputChange}
      />

      <label>Password </label>
      <input
        value={formValues.password}
        type="password"
        name="password"
        onChange={onInputChange}
      />
      <br />
      <button onClick={onSubmit} disabled={formDisabled}>
        Login
      </button>
    </div>
  );
}

export default Login;
