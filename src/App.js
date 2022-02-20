import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import Home from "./components/Home";
import "./App.css";
import Location from "./components/Location";

const theme = {
  mobile: "375px",
  tablet: "768px",
  desktop: "1275px",
};

function App() {
  return (
    <ThemeProvider theme={theme}> <>
    <GlobalStyles/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/location" element={<Location />} />
        </Routes>
      </Router>
    </>
    </ThemeProvider>
   
  );
}

export default App;
