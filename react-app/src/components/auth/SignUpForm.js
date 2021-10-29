import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom';
import { signUp } from '../../store/session';



const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [validationErrors, setValidationErrors] = useState({});

  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const validate = () => {
    const validationErrors = {};

    if(typeof username !== "undefined") {
      const re = /^\S*$/;
      if(username.length < 4 || username > 25 || !re.test(username)) {
        validationErrors["username"] = "Please enter a valid username, username length must be greater than 4 and less than 25 characters"
      }
    }

    if(!password || password.length > 20) {
      validationErrors["password"] = "Please enter a valid password, password length must be less than 20 characters"
    }

    if(!repeatPassword || repeatPassword !== password) {
      validationErrors["repeatPassword"] = "Password don't match, please enter matching password"
    }

    return validationErrors;

  }



  const onSignUp = async (e) => {
    e.preventDefault();
    const errors = validate();

    if(Object.keys(errors).length > 0) return setValidationErrors(errors);

    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div id="auth-container">

        <h1 id="auth-title">Sign Up for Meowp</h1>
        <div>
          <label>User Name</label>
          <input
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
          ></input>
          {validationErrors.username && (
            <div className="error-handling">
              {validationErrors.username}
            </div>
          )}
        </div>
        <div>
          <label>Email</label>
          <input
            type='email'
            name='email'
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
          ></input>
          { validationErrors.password && (
            <div className="error-handling">
              {validationErrors.password}
            </div>
          )}
        </div>
        <div>
          <label>Repeat Password</label>
          <input
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
          {validationErrors.repeatPassword && (
            <div className="error-handling">
            {validationErrors.repeatPassword}
          </div>
          )}
        </div>
        <button type='submit'>Sign Up</button>
        <div className="loginSignupText">
          Already have an account? <NavLink to="/login">Log In </NavLink>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
