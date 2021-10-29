import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory, NavLink } from 'react-router-dom';
import { login } from '../../store/session';
import './Auth.css'
import Button from 'react-bootstrap/Button'


const LoginForm = () => {
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const pageImg = "https://cdn.discordapp.com/attachments/900530489574703194/903747623159218206/unknown.png";


  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const demoUser = async (e) => {
    e.preventDefault();
    const weAreIn = await dispatch(login("demo@aa.io", "password"));
    if (weAreIn) {
      history.push("/businesses")
    }
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/businesses' />;
  }

  return (
    <div id="login-signup-container">
      <form className="log-in-form" onSubmit={onLogin}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div id="auth-container">
          <div className="left-section">
              <h2 id="auth-title">Log in to Meowp</h2>
              <div className="auth-title-h">
                <p className="stc"> New to Meowp?</p>
                <NavLink className="stc signup" to="/sign-up">Sign up</NavLink>
              </div>
            <div className="auth-input-section">
              <label className="auth-label" htmlFor='email'>Email</label>
              <input
                name='email'
                type='email'
                value={email}
                onChange={updateEmail}
                className="auth-input"
              />
            </div>
            <div className="auth-input-section">
              <label className="auth-label" htmlFor='password'>Password</label>
              <input
                name='password'
                type='password'
                placeholder='Password'
                value={password}
                onChange={updatePassword}
                className="auth-input"
              />
            </div>
            <div className="auth-btns">
              <Button type='submit' variant="danger">Login</Button>
              <Button
              onClick={demoUser}
              type='submit'
              className="demo_user_modal"
              variant="secondary">Demo User</Button>{' '}
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

export default LoginForm;
