
import './App.css';
import Home from './Component/Home/Home';
import { Route, Routes,Navigate } from 'react-router-dom';
import Profile from './Component/Profile/Profile';
import AboutUs from './Component/AboutUs/AboutUs';
import Contact from './Component/Contact/Contact';
import Services from './Component/Services/Services';
import Navbar from './Component/Navbar/Navbar';
import Appointment from './Component/Appointment/Appointment';
import Footer from './Component/Footer/Footer';
import LogInPage from './Component/LogInPage/LogInPage';
import { useState } from 'react';


function App() {
  const [isLoggedIn, setIsLoggedIn]= useState(false);
  return (
    <>
 {/* Conditionally render Navbar */}
 {isLoggedIn && <Navbar />}

<Routes>
  {/* Public Route */}
  <Route path="/" element={<LogInPage onLogin={() => setIsLoggedIn(true)} />} />

  {/* Protected Routes */}
  {isLoggedIn ? (
    <>
      <Route path="/Home" element={<Home />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Appointment" element={<Appointment />} />
      <Footer/>
    </>
  ) : (
    // Redirect to login if not logged in
    <Route path="*" element={<Navigate to="/" replace />} />
  )}
</Routes>
    </>
    
    
  );
  
}

export default App;
