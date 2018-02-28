import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Profile } from 'src/features/profile';

describe('profile/Profile', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <Profile />
    );

    expect(
      renderedComponent.find('.profile-profile').getElement()
    ).to.exist;
  });
});
