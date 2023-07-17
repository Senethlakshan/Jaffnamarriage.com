import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/items/home/Navbar";
import Homepage from "./components/pages/Homepage";
import LoginPage from './components/items/home/LoginPage';
import RegisterPage from "./components/items/home/RegisterPage";
import Aboutus from './components/pages/Aboutus';
import Contactpage from "./components/pages/Contactpage";
import RegProcesswrap from "./components/items/home/RegProcesswrap";
import UserDashbord from "./components/pages/userPanel/UserDashbord";


const App = () => {
  return (
    <Router>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />     
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contactpage />} /> 
        <Route path="/regiter-process" element={<RegProcesswrap />} /> 
        <Route path="/user-panel" element={<RegProcesswrap />} /> 
      </Routes>
    </Router>
  );
};

export default App;