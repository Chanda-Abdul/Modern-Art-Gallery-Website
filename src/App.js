import React from "react";
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import Home from "./components/Home";
import "./App.css";
import Location from "./components/Location";

const theme = {
  colors: {
    // header: "#ebfbff",
    // body: "#fff",
    // footer: "#003333",
  },
  mobile: "375px",
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
