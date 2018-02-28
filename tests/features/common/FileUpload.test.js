import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { FileUpload } from 'src/features/common/FileUpload';

describe('common/FileUpload', () => {
  it('renders node with correct class name', () => {
    const props = {
      common: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <FileUpload {...props} />
    );

    expect(
      renderedComponent.find('.common-file-upload').getElement()
    ).to.exist;
  });
});
