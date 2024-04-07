import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import Header from '../views/Header/Header';
import Home from '../views/Home/Home';
import Activity from '../views/Activity/Activity';
import Contact from '../views/Contact/Contact';
import Error404 from '../views/Error404/Error404';
import Footer from '../views/Footer/Footer';

import './App.scss';
import Activities from '../views/Activities/Activities';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities/:slug" element={<Activity />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
