import React from 'react';
import { mount } from 'enzyme';

import Pagination from '../Pagination';
import Page from '../Page';

it('Should render "totalNumberOfPages" rows', () => {
  const props = {
    currentPageNumber: 1,
    totalNumberOfPages: 7,
    onChange: jest.fn(),
  };

  const wrapper = mount(<Pagination {...props} />);

  const pages = wrapper.find(Page)

  pages.at(3).find('button').simulate('click');

  expect(pages).toHaveLength(props.totalNumberOfPages);
  expect(props.onChange).toHaveBeenCalledWith(3);
});
