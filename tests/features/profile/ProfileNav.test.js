import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { ProfileNav } from 'src/features/profile';

describe('profile/ProfileNav', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <ProfileNav />
    );

    expect(
      renderedComponent.find('.profile-profile-nav').getElement()
    ).to.exist;
  });
});
