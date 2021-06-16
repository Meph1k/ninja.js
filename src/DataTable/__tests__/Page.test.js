import React from 'react';
import { mount } from 'enzyme';

import Page from '../Page';

it('Should render "totalNumberOfPages" rows', () => {
  const props = {
    pageNumber: 1,
    currentPageNumber: 4,
    onChange: jest.fn(),
  };

  let wrapper = mount(<Page {...props} />);

  expect(wrapper.find('button').hasClass('button-outline')).toEqual(false);

  wrapper = mount(<Page {...props} currentPageNumber={1} />);

  expect(wrapper.find('button').hasClass('button-outline')).toEqual(true);
});
