import React from 'react';
import { mount } from 'enzyme';

import Search from '../Search';

it('Should be a controlled input', () => {
  let value = '';

  const changeValue = jest.fn().mockImplementation((event) => {
    value = event.target.value;
  });

  const wrapper = mount(<Search onSearch={changeValue} value={value} />);

  wrapper.find('input').simulate('change', { target: { value: 'Leocode' } });

  expect(changeValue).toHaveBeenCalledTimes(1);
  expect(value).toBe('Leocode');
});
