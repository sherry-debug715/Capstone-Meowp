import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import Button from 'react-bootstrap/Button';
import '../NavBar/NavBar.css'


const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
    window.location.href = "/";
  };


  return <Button onClick={onLogout} variant="danger" size="sm">Log Out</Button>
};

export default LogoutButton;
