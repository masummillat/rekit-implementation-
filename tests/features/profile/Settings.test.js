import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Settings } from 'src/features/profile/Settings';

describe('profile/Settings', () => {
  it('renders node with correct class name', () => {
    const props = {
      profile: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Settings {...props} />
    );

    expect(
      renderedComponent.find('.profile-settings').getElement()
    ).to.exist;
  });
});
