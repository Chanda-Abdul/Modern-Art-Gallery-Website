import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Inspo from "./components/Inspo";
import Intro from "./components/Intro";
import YourDay from "./components/YourDay";
import "./App.css";
import Footer from "./components/Footer";
import Location from "./components/Location";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Intro />
                <YourDay />
                <Inspo />
                <Footer/>
              </div>
            }
          />
          <Route exact path="/location" element={<Location/>} />
        </Routes>
      </Router>
      <div>
        
      </div>
    </>
  );
}

export default App;
