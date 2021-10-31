import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom';
import { signUp } from '../../store/session';
import './Auth.css'
import Button from 'react-bootstrap/Button'


const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const pageImg = "https://cdn.discordapp.com/attachments/900530489574703194/903747623159218206/unknown.png";

  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const validate = () => {
    const validationErrors = {};

    if(typeof username !== "undefined") {
      const re = /^\S*$/;
      if(username.length < 4 || username.length > 25 || !re.test(username)) {
        validationErrors["username"] = "Please enter a valid username, username length must be greater than 4 and less than 25 characters"
      }
    }

    if(!password || password.length < 6 || password.length > 20) {
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
    <div id="login-signup-container">
      <form onSubmit={onSignUp}>
        <div id="auth-container">
          <div className="left-section">
            <h2 id="auth-title">Sign Up for Meowp</h2>
            <p className="stc">Connect with great local businesses</p>
            <div className="auth-input-section">
              <label className="auth-label">User Name</label>
              <input
                type='text'
                name='username'
                onChange={updateUsername}
                value={username}
                className="auth-input"
              ></input>
              {validationErrors.username && (
                <div className="error-handling">
                  {validationErrors.username}
                </div>
              )}
            </div>
            <div className="auth-input-section">
              <label className="auth-label">Email</label>
              <input
                type='email'
                name='email'
                onChange={updateEmail}
                value={email}
                className="auth-input"
              ></input>
            </div>
            <div className="auth-input-section">
              <label className="auth-label">Password</label>
              <input
                type='password'
                name='password'
                onChange={updatePassword}
                value={password}
                className="auth-input"
              ></input>
              { validationErrors.password && (
                <div className="error-handling">
                  {validationErrors.password}
                </div>
              )}
            </div>
            <div className="auth-input-section">
              <label className="auth-label">Repeat Password</label>
              <input
                type='password'
                name='repeat_password'
                onChange={updateRepeatPassword}
                value={repeatPassword}
                required={true}
                className="auth-input"
              ></input>
              {validationErrors.repeatPassword && (
                <div className="error-handling">
                {validationErrors.repeatPassword}
              </div>
              )}
            </div>
            <div className="auth-btns">
              <Button
              type="submit"
              id="signup-btn"
              size="lg"
              variant="danger">Sign Up</Button>
            </div>
            <div className="loginSignupText">
              <span>Already have on Meowp?</span><NavLink className="login-btn-st" to="/login">Log In </NavLink>
            </div>
          </div>
          <div className="right-section">
            <img className="auth-image" src={pageImg} alt="auth image"/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
