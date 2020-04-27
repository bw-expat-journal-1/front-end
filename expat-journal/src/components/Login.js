import React, { useState, useEffect }from 'react';
import * as yup from 'yup';

const initialFormValues = {
    username: '',
    password: '',
  }
  
  const initialFormErrors = {
    username: '',
    password: '',
  }
  //FORM SCHEMA for login page 
  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required('username is required'),
    password: yup
      .string()
      .required('password is required'),
  })

  function Login() {
    const [login, setLogin] = useState([])
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [formDisabled, setFormDisabled] = useState(true)

    //DISABLES submit button until all form values are entered without errors
    useEffect(() => {
      formSchema.isValid(formValues)
        .then(valid => {
          setFormDisabled(!valid)
        })
    }, [formValues])

    //INPUT CHANGES
    const onInputChange = evt => {
      const name = evt.target.name
      const value = evt.target.value
      //VALIDATES the form and checks for any errors
      yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })
      setFormValues({...formValues, [name]: value},)
    }

    //SUBMITS
    const onSubmit = evt => {
      evt.preventDefault()
  
      const newLogin = {
        username: formValues.username,
        password: formValues.password,
      }
      setLogin([ ...login, newLogin ])
      setFormValues(initialFormValues)
    }
    return(
      <div className='login'>
        <header><h1>ExPat Journal</h1></header>

        <label>Username </label>
        <input 
        value={formValues.username}
        type='text' 
        name ='username'
        onChange={onInputChange}
        />

        <label>Password </label>
        <input 
        value={formValues.password}
        type='password'
        name='password'
        onChange={onInputChange}
        />

        <button onClick={onSubmit} disabled={formDisabled}>Login</button>
      </div>
    )
  }

  export default Login