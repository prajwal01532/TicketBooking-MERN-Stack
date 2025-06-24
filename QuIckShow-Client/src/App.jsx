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
import Layout from './pages/admin/Layout';
import Dashboard from './pages/admin/DashBoard';
import ListBookings from './pages/admin/ListBookings';
import ListShows from './pages/admin/ListShows';
import AddShows from './pages/admin/AddShows';


const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      <Toaster position="top-center" />
      
      {/* Conditionally render NavBar */}
      {!isAdminRoute && <NavBar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/:date" element={<SeatLayout />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/favorite" element={<Favorite />} />

        <Route path='/admin/*' element={<Layout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="add-shows" element={<AddShows/>}/>
        <Route path="list-shows" element={<ListShows/>}/>
        <Route path="list-bookings" element={<ListBookings/>}/>


        </Route>
      </Routes>
      
      {/* Conditionally render Footer */}
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;