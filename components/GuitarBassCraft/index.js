import React from 'react';
import './GuitarBassCraftSection.css';
import Hero from './hero';
import Problem from './problem';
import Audience from './audience';
import Pricing from './pricing';

export default function GuitarBassCraftSection() {
  return (
    <div className="gbc-container">
      <Hero />
      <Problem />
      <Pricing />
      <Audience />
    </div>
  );
}
