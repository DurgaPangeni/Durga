import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Profile from './Component/Profile/Profile';
import AboutUs from './Component/AboutUs/AboutUs';
import Contact from './Component/Contact/Contact';
import Services from './Component/Services/Services';
import Navbar from './Component/Navbar/Navbar';
import Appointment from './Component/Appointment/Appointment';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route  path="/Home"element={ <Home/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Services" element={<Services/>}/>
      <Route path="/Appointment" element={<Appointment/>}/>

    </Routes>
    <Footer> Copyright Claim</Footer>
    </>
    
    
  );
  
}

export default App;
