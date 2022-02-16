import React from "react";
import Footer from "./Footer";
import Inspo from "./Inspo";
import Intro from "./Intro";
import YourDay from "./YourDay";

const Home = () => {
  return (
    <>
      <Intro />
      <YourDay />
      <Inspo />
      <Footer bgcolor="var(--almost-black)" color="var(--white)"/>
    </>
  );
};

export default Home;
