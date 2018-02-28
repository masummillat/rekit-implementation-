import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { LoginSignup } from 'src/features/home';

describe('home/LoginSignup', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <LoginSignup />
    );

    expect(
      renderedComponent.find('.home-login-signup').getElement()
    ).to.exist;
  });
});
