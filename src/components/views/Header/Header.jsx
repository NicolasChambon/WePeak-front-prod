// Import necessary librairies
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LuSearch, LuSearchX, LuUser, LuLogOut } from 'react-icons/lu';
import {
  IoIosAddCircleOutline,
  IoIosArrowDown,
  IoIosArrowUp,
} from 'react-icons/io';

// Import images
import Logo_BW from '../../../assets/Logo_BW.svg';

// Import actions
import {
  changeInputSearch,
  fetchCitiesSearch,
  resetSearch,
} from '../../../actions/searchActions';
import { fetchActivitiesFromCity } from '../../../actions/activityActions';
import { logout, fetchUserWithId } from '../../../actions/userActions';

// Import utils
import rewriteImagePath from '../../../utils/rewriteImagePath';

// Import stylesheet
import './Header.scss';

const Header = () => {
  const cityList = useSelector((state) => state.search.cityList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem('token'));
  const userId = JSON.parse(localStorage.getItem('id'));
  const isLogged = token !== null;

  useEffect(() => {
    // If userId is not null, fetch the user with the id
    if (userId) {
      dispatch(fetchUserWithId(userId, 'current', navigate));
    }
  }, []);

  let userPictureUrl = '';
  const thumbnail = useSelector((state) => state.user.currentUser.thumbnail);
  if (isLogged) {
    userPictureUrl = rewriteImagePath(thumbnail);
  }

  // THIS CODE-BLOCK HANDLE SEARCH INPUT WITH CITIES SUGGESTIONS
  const input = useSelector((state) => state.search.input);
  // Local state to stock the timeout between each input
  const [searchTimeout, setSearchTimeout] = useState(null);
  // Function to handle input search. Called at each input change
  const handleInputSearch = (value, identifier) => {
    // Update input search in the store
    dispatch(changeInputSearch(value));
    // If a timeout is already set, we clear it
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    if (value.length > 2) {
      // Launch a new timeout to call Cities search API after 500ms
      const timeout = setTimeout(() => {
        dispatch(fetchCitiesSearch(identifier));
      }, 500);
      // Update searchTimeout state with the new timeout
      setSearchTimeout(timeout);
    }
  };
  // THIS CODE-BLOCK HANDLE REMOVING OF CITIES SUGGESTIONS WHEN CLICKING OUTSIDE
  useEffect(() => {
    if (cityList.length < 20 && cityList.length > 0) {
      const handleClickOutside = (e) => {
        // If click is outside the search input, we reset the city list suggestion
        if (!e.target.closest('.Header-form-search')) {
          dispatch(resetSearch());
        }
      };
      // Event listener on click
      document.addEventListener('click', handleClickOutside);
      // Clean event listener on component unmount
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }
  });

  // THIS CODE-BLOCK HANDLE HEADER BOTTOM SHADOW
  const [isScrolled, setIsScrolled] = useState(false);
  // onScroll function which will be called at each scroll
  const onScroll = () => {
    // If vertical scroll is greater than 0, we set isScrolled to true
    const scrolled = window.scrollY > 0;
    setIsScrolled(scrolled);
  };

  // THIS CODE-BLOCK HANDLE SEARCH DISPLAY IN DESKTOP, TABLET AND MOBILE VERSIONS
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  // At each scroll, we call the onScroll function
  window.addEventListener('scroll', onScroll);
  // Manange display of search bar in tablet and mobile version
  const handleSearchButtonClick = () => {
    setIsSearchOpen(!isSearchOpen);
    dispatch(resetSearch());
  };
  useEffect(() => {
    const handleResize = () => {
      // Change isSearchOpen state to true if window width is greater than 992px
      setIsSearchOpen(window.innerWidth > 992 ? true : isSearchOpen);
    };
    // Call handleResize() at the first render
    handleResize();
    // Event listener on window resize
    window.addEventListener('resize', handleResize);
    // Clean event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  // THIS CODE-BLOCK HANDLE LOGOUT
  const handleClickLogoutBtn = () => {
    dispatch(logout());
    navigate('/');
  };

  // THIS CODE-BLOCK HANDLE PROFILE DROPDOWN
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  // if current page is /activities/create, we hide the search bar
  let isSearchAvailable = true;
  if (window.location.pathname === '/activities/create') {
    isSearchAvailable = false;
  }

  return (
    <header className={`Header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="Header-left">
        <Link to="/">
          <div className="Header-left-logo-container">
            <img
              className="Header-left-logo"
              src={Logo_BW}
              alt="Logo de WePeak"
            />
          </div>
        </Link>

        {!isSearchOpen && isSearchAvailable && (
          <button
            type="button"
            className="Header-left-openSearch open"
            onClick={handleSearchButtonClick}
          >
            <LuSearch className="Header-left-openSearch-icon" />
          </button>
        )}
        {isSearchOpen && isSearchAvailable && (
          <button
            type="button"
            className="Header-left-openSearch close"
            onClick={handleSearchButtonClick}
          >
            <LuSearchX className="Header-left-openSearch-icon" />
          </button>
        )}
      </div>

      {isSearchOpen && isSearchAvailable && (
        <form
          className="Header-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="Header-form-search">
            <input
              type="text"
              placeholder="Commune, code postal"
              value={input}
              onChange={(e) => {
                handleInputSearch(e.target.value, 'headerSearchBar');
              }}
            />
            {input.length > 2 &&
              cityList.length < 20 &&
              cityList.length > 0 && (
                <div className="Header-form-search-cities">
                  {cityList.map((city) => (
                    <button
                      key={city.postalCode}
                      type="button"
                      className="Header-form-search-cities-city"
                      onClick={() => {
                        handleSearchButtonClick();
                        dispatch(
                          fetchActivitiesFromCity(
                            { lat: city.lat, lng: city.lng },
                            navigate,
                            city.placeName
                          )
                        );
                      }}
                    >
                      {city.placeName}, {city.postalCode}
                    </button>
                  ))}
                </div>
              )}
          </div>

          <button className="Header-form-submit" type="submit">
            <LuSearch className="search-logo" />
          </button>
        </form>
      )}

      <nav className="Header-nav">
        {!isLogged && (
          <ul className="Header-nav-links">
            <li className="Header-nav-link">
              <NavLink className="connect" to="/login">
                Se connecter
              </NavLink>
            </li>
            <li className="Header-nav-link">
              <NavLink className="register" to="/register">
                S&apos;inscrire
              </NavLink>
            </li>
          </ul>
        )}
        {isLogged && (
          <div className="Header-nav-links">
            <div className="Header-nav-link create">
              <NavLink to="/activities/create">
                <IoIosAddCircleOutline className="create-icon" />
                <p>Créer une activité</p>
              </NavLink>
            </div>
            <button
              type="button"
              className="Header-nav-link profile"
              onClick={() => {
                handleProfileClick();
              }}
            >
              <div className="profile-picture-container">
                <img src={userPictureUrl} alt="" />
              </div>
              {isProfileOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
          </div>
        )}
      </nav>
      {isLogged && (
        <div
          className={isProfileOpen ? 'Header-profile' : 'Header-profile closed'}
        >
          <Link
            to="/profile"
            className="Header-profile-profileLink"
            onClick={() => {
              handleProfileClick();
            }}
          >
            <LuUser />
            <p>Afficher mon profil</p>
          </Link>
          <button
            type="button"
            className="Header-profile-logout"
            onClick={() => {
              handleClickLogoutBtn();
            }}
          >
            <LuLogOut />
            <p>Se déconnecter</p>
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
