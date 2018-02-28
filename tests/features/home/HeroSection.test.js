import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { HeroSection } from 'src/features/home';

describe('home/HeroSection', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <HeroSection />
    );

    expect(
      renderedComponent.find('.home-hero-section').getElement()
    ).to.exist;
  });
});
