import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { OwnStor } from 'src/features/profile';

describe('profile/OwnStor', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <OwnStor />
    );

    expect(
      renderedComponent.find('.profile-own-stor').getElement()
    ).to.exist;
  });
});
