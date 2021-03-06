import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import BusinessesDisplay from './components/BusinessesDisplay';
import BusinessDetail from './components/BusinessDetail';
import BusinessOfCategory from './components/CategoryFilter';
import HomePage from './components/Home';
import Footer from './components/Footer';


function App() {

  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (

    <BrowserRouter>
      <NavBar loaded={loaded} />
      {loaded && (
        <Switch>
          <Route path="/" exact={true}>
            <HomePage />
          </Route>
          <Route path='/login' exact={true}>
            <LoginForm />
          </Route>
          <Route path='/sign-up' exact={true}>
            <SignUpForm />
          </Route>
          <ProtectedRoute path='/users' exact={true} >
            <UsersList/>
          </ProtectedRoute>
          <ProtectedRoute path='/users/:userId' exact={true} >
            <User />
          </ProtectedRoute>
          <Route path='/businesses' exact={true} >
            <BusinessesDisplay />
          </Route>
          <Route path='/businesses/:businessId' exact={true} >
            <BusinessDetail />
          </Route>
          <Route path='/categories/:categoryId' exact={true} >
            <BusinessOfCategory />
          </Route>
          <ProtectedRoute path='/' exact={true} >
            <h1>My Home Page</h1>
          </ProtectedRoute>
        </Switch>
      )}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
