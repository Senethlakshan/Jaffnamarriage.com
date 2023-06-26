import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/items/home/Navbar";
import Homepage from "./components/pages/Homepage";


const App = () => {
  return (
    <Router>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />     
      </Routes>
    </Router>
  );
};

export default App;