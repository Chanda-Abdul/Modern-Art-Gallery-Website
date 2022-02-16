import React from "react";
import Hero from "./Hero";
import LocationButton from "./LocationButton";
import { Flex } from "./styles/Flex.styled";

const Intro = () => {
  return (
    <>
      <Hero />
     
        <div className="intro">
        <Flex>
          <h1 className="title">Modern Art Gallery</h1>
          <p class="byline">
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you?<br/>Visit us
            and find out.
          </p>
          <LocationButton />
          </Flex>
        </div>
      
    </>
  );
};

export default Intro;
