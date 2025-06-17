import React from 'react';
import { useLocation, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import SeatLayout from './pages/SeatLayout';
import MyBookings from './pages/MyBookings';
import Favorite from './pages/Favorite';

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      <Toaster position="top-right" />
      
      {/* Conditionally render NavBar */}
      {!isAdminRoute && <NavBar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/:date" element={<SeatLayout />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
      
      {/* Conditionally render Footer */}
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;