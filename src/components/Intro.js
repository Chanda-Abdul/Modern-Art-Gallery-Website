import React from 'react'
import Hero from './Hero'
import LocationButton from './LocationButton'

const Intro = () => {
  return (
    <>
    <Hero/>
    <div className='intro'>
    <h1 className='hero-title'>Modern Art Gallery</h1>
    <p class="byline-copy">The arts in the collection of the Modern Art Gallery all started from a
        spark of inspiration. Will these pieces inspire you? Visit us and find
        out.</p>
    <LocationButton/>
    </div>
    </>
  )
}

export default Intro