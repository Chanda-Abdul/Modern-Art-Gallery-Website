import React from "react";
import Hero from "./Hero";
import LocationButton from "./LocationButton";
import { Flex } from "./styles/Flex.styled";
import { IntroStyled } from "./styles/Intro.styled";

const Intro = () => {
  return (
    <>
    
      <Hero />
      <Flex>
        <IntroStyled>
        <div className="intro">
       
          <h1 className="title">Modern Art Gallery</h1>
          <div className="title-text">
          <p class="byline">
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you?<br/>Visit us
            and find out.
          </p>
          </div>
          <LocationButton />
          
        </div>
        </IntroStyled>
        </Flex>
    </>
  );
};

export default Intro;
