import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllCategoriesThunk } from '../../store/categories';
import LogoutButton from '../auth/LogoutButton';
import CreateBusinessModal from '../CreateBusinessForm/CreateBusinessModal';
import ProfileIcon from './ProfileButton';
import Button from 'react-bootstrap/Button';
import './NavBar.css'

const NavBar = ( { loaded } ) => {

  const dispatch = useDispatch();
  const categoriesObj = useSelector( state => state?.categories);
  const categoriesArray = Object.values(categoriesObj)
	const sessionUser = useSelector((state) => state.session?.user);


  useEffect(() => {
    dispatch(getAllCategoriesThunk())
  }, [dispatch]);

  let sessionAuth;
  if (sessionUser) {
    sessionAuth = (
      <>
        <nav id="log-in-nav-bar-container">
          <div id="navbar-container">
            <div className="logo-brand">
              <NavLink  style={{ textDecoration:'none'}} to='/' exact={true} activeClassName='active'>
                <img alt="logo" className="meowp-logo" src="https://cdn.discordapp.com/attachments/900530489574703194/903389504939900958/unknown.png"></img>
              </NavLink>
              <NavLink  style={{ textDecoration:'none'}} to='/' exact={true} activeClassName='active'>
                <span id="application-brand">Meowp</span>
              </NavLink>
            </div>
            <div id="profile-icon-create-business">
              <div><ProfileIcon user={sessionUser} />
              </div>
              <div className="create-business-button">
                    <CreateBusinessModal />
              </div>
            </div>
          </div>
          <div className="navbar-container">
            <div className="category-container">
              {categoriesArray?.map(category => {
                return (
                    <NavLink
                    to={`/categories/${category.id}`}
                    key={category?.id}
                    style={{
                      textDecoration:'none',
                      color: 'rgba(43,39,60,1)'
                    }}
                    value={category?.id}>
                      {category?.name}
                    </NavLink>
                  )
              })}
          </div>
        </div>
      </nav>
    </>
    );
  } else {
    sessionAuth = (
      <>
        <nav id="nav-var-container">
          <div id="navbar-container">
            <div className="logo-brand">
              <NavLink  style={{ textDecoration:'none'}} to='/' exact={true} activeClassName='active'>
                <img alt="logo" className="meowp-logo" src="https://cdn.discordapp.com/attachments/900530489574703194/903389504939900958/unknown.png"></img>
              </NavLink>
              <NavLink  style={{ textDecoration:'none'}} to='/' exact={true} activeClassName='active'>
                <span id="application-brand">Meowp</span>
              </NavLink>
            </div>
            <div id="login-signup-container">
                <div className="login-btn">
                  <NavLink
                    style={{ textDecoration:'none'}}
                    to='/login'
                    exact={true}
                    activeClassName='active'
                  >
                    <Button variant="light">Log In</Button>
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    style={{ textDecoration:'none'}}
                    to='/sign-up'
                    exact={true}
                    activeClassName='active'
                  >
                    <Button variant="danger">Sign Up</Button>
                  </NavLink>
                </div>
            </div>
          </div>
        </nav>

      </>
    );
  }

  return (
    <>
      {/* <nav id="nav-var-container">
        <div id="navbar-container"> */}
          {/* <div className="logo-brand">
            <NavLink  style={{ textDecoration:'none'}} to='/' exact={true} activeClassName='active'>
              <img alt="logo" className="meowp-logo" src="https://cdn.discordapp.com/attachments/900530489574703194/903389504939900958/unknown.png"></img>
            </NavLink>
            <NavLink  style={{ textDecoration:'none'}} to='/' exact={true} activeClassName='active'>
              <span id="application-brand">Meowp</span>
            </NavLink>
          </div> */}
          {/* <div className="session-auth"> */}
          {loaded && sessionAuth}
          {/* </div> */}
        {/* </div> */}

        {/* <div className="navbar-container">
          {categoriesArray?.map(category => {
            return (
                <NavLink to={`/categories/${category.id}`} key={category?.id} style={{ textDecoration:'none'}} value={category?.id}>{category?.name}</NavLink>
              )
          })}
        </div> */}
      {/* </nav> */}
    </>
  );
}

export default NavBar;
