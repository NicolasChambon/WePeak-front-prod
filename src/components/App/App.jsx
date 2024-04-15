import { Route, Routes, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from '../views/Header/Header';
import PopUp from '../utils/PopUp/PopUp';
import Home from '../views/Home/Home';
import Activities from '../views/Activities/Activities';
import Activity from '../views/Activity/Activity';
import Contact from '../views/Contact/Contact';
import Login from '../views/Login/Login';
import Register from '../views/Register/Register';
import Profile from '../views/Profile/Profile';
import ProfileEdition from '../views/ProfileEdition/ProfileEdition';
import UserPage from '../views/UserPage/UserPage';
import Error404 from '../views/Error404/Error404';
import Footer from '../views/Footer/Footer';

import './App.scss';

const App = () => {
  const location = useLocation();
  const message = useSelector((state) => state.global.popUpMessage.message);

  const excludedPaths = ['/login', '/register'];
  const isExcludedPath = excludedPaths.includes(location.pathname);

  return (
    <div className="App">
      {!isExcludedPath && <Header />}
      {message && <PopUp />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/activities/:slug" element={<Activity />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<ProfileEdition />} />
        <Route path="/users/:slug" element={<UserPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      {!isExcludedPath && <Footer />}
    </div>
  );
};

export default App;
