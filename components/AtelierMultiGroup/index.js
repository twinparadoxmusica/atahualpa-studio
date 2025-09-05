import React from 'react';
import './GuitarBassCraftSection.css';
import Hero from './hero';
import Problem from './problem';
import Pricing from './pricing';

export default function GuitarBassCraftSection() {
  return (
    <div className="gbc-container">
      <Hero />
      <Problem />
      <Pricing />
    </div>
  );
}
