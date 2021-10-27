import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllCategoriesThunk } from '../../store/categories';
import LogoutButton from '../auth/LogoutButton';
import CreateBusinessModal from '../CreateBusinessForm/CreateBusinessModal';
import ProfileIcon from './ProfileButton';


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
      <div id="profile-icon-create-business">
        <ProfileIcon user={sessionUser} />
        <div className="create-business-button">
              <CreateBusinessModal />
        </div>
      </div>
    );
  } else {
    sessionAuth = (
      <div id="login-signup-container">
        <div id="login-signup-form">
          <NavLink
            style={{ textDecoration:'none'}}
            to='/login'
            exact={true}
            activeClassName='active'
          >
            Log In
          </NavLink>
          <NavLink
            style={{ textDecoration:'none'}}
            to='/sign-up'
            exact={true}
            activeClassName='active'
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <>
      <nav>
        <div className="navbar-container">
          <ul>
            <li>
              <NavLink  style={{ textDecoration:'none'}} to='/' exact={true} activeClassName='active'>
                Home
              </NavLink>
            </li>
            {loaded && sessionAuth}
          </ul>
        </div>
        <div className="navbar-container">
          {categoriesArray?.map(category => {
            return (
                <NavLink to={`/categories/${category.id}`} key={category?.id} style={{ textDecoration:'none'}} value={category?.id}>{category?.name}</NavLink>
              )
          })}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
