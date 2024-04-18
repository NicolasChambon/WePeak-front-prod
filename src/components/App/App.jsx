import { Route, Routes, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import About from '../views/About/About';
import Activities from '../views/Activities/Activities';
import Activity from '../views/Activity/Activity';
import Header from '../views/Header/Header';
import Contact from '../views/Contact/Contact';
import CreateActivity from '../views/CreateActivity/CreateActivity';
import Error404 from '../views/Error404/Error404';
import Footer from '../views/Footer/Footer';
import Home from '../views/Home/Home';
import Legal from '../views/Legal/Legal';
import Login from '../views/Login/Login';
import PopUp from '../utils/PopUp/PopUp';
import Privacy from '../views/Privacy/Privacy';
import Profile from '../views/Profile/Profile';
import ProfileEdition from '../views/ProfileEdition/ProfileEdition';
import Register from '../views/Register/Register';
import UserPage from '../views/UserPage/UserPage';

import './App.scss';

const App = () => {
  const location = useLocation();
  const message = useSelector((state) => state.global.popUpMessage.message);

  const excludedPaths = ['/login', '/register', '/login/first-time'];
  const isExcludedPath = excludedPaths.includes(location.pathname);

  const getPageTitle = (pathname) => {
    switch (pathname) {
      case '/':
        return 'Home';
      case '/about':
        return 'About';
      case '/activities':
        return 'Activities';
      case '/contact':
        return 'Contact';
      case '/legal':
        return 'Legal';
      case '/login':
        return 'Login';
      case '/privacy':
        return 'Privacy';
      case '/profile':
        return 'Profile';
      case '/profile/edit':
        return 'Edit Profile';
      case '/register':
        return 'Register';
      default:
        return 'Page Not Found';
    }
  };

  useEffect(() => {
    document.title = `WePeak | ${getPageTitle(location.pathname)}`;
  }, [location.pathname]);

  return (
    <div className="App">
      {!isExcludedPath && <Header />}
      {message && <PopUp />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/activities/:slug" element={<Activity />} />
        <Route path="/activities/create" element={<CreateActivity />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/:slug" element={<Login />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<ProfileEdition />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users/:slug" element={<UserPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      {!isExcludedPath && <Footer />}
    </div>
  );
};

export default App;
