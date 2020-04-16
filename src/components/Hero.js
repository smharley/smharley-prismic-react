import React from 'react';
import { RichText } from 'prismic-reactjs';

const Hero = ({ heading }) => (
  <div className="home">
    <h1 className="home-heading">{RichText.asText(heading)}</h1>
  </div>
)

export default Hero
