// Import necessary librairies
import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LuSearch, LuSearchX } from 'react-icons/lu';
import { FaRegMessage } from 'react-icons/fa6';

// Import actions
import {
  changeInputSearch,
  fetchCitiesSearch,
  resetSearch,
} from '../../../actions/searchActions';
import { fetchActivitiesFromCity } from '../../../actions/activityActions';

// Import stylesheet
import './Header.scss';

const Header = () => {
  const isLogged = false; // To remove at API plug
  const cityList = useSelector((state) => state.search.cityList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // THIS CODE-BLOCK HANDLE SEARCH INPUT WITH CITIES SUGGESTIONS
  const input = useSelector((state) => state.search.input);
  // Local state to stock the timeout between each input
  const [searchTimeout, setSearchTimeout] = useState(null);
  // Function to handle input search. Called at each input change
  const handleInputSearch = (value) => {
    // Update input search in the store
    dispatch(changeInputSearch(value));
    // If a timeout is already set, we clear it
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    if (value.length > 2) {
      // Launch a new timeout to call Cities search API after 500ms
      const timeout = setTimeout(() => {
        dispatch(fetchCitiesSearch(value));
      }, 500);
      // Update searchTimeout state with the new timeout
      setSearchTimeout(timeout);
    }
  };
  // THIS CODE-BLOCK HANDLE REMOVING OF CITIES SUGGESTIONS WHEN CLICKING OUTSIDE
  useEffect(() => {
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

  return (
    <header className={`Header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="Header-left">
        <Link to="/">
          <div className="Header-left-logo-container">
            <img
              className="Header-left-logo"
              src="/src/assets/Logo_BW.svg"
              alt="Logo de WePeak"
            />
          </div>
        </Link>

        {!isSearchOpen && (
          <button
            type="button"
            className="Header-left-openSearch open"
            onClick={handleSearchButtonClick}
          >
            <LuSearch className="Header-left-openSearch-icon" />
          </button>
        )}
        {isSearchOpen && (
          <button
            type="button"
            className="Header-left-openSearch close"
            onClick={handleSearchButtonClick}
          >
            <LuSearchX className="Header-left-openSearch-icon" />
          </button>
        )}
      </div>

      {isSearchOpen && (
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
                handleInputSearch(e.target.value);
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
          <ul className="Header-nav-links">
            <li className="Header-nav-link messages">
              <NavLink to="/messages">
                <FaRegMessage className="messages-icon" />
              </NavLink>
            </li>
            <li className="Header-nav-link profile">
              <NavLink to="/profile">
                <div className="profile-picture-container">
                  <img
                    src="https://ca.slack-edge.com/T060RPZMDH6-U061SDTH4TF-c278721b6e6d-512"
                    alt=""
                  />
                </div>
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
