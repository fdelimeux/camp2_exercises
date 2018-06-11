import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import App from './App';

it('Check if value change when using searchImg', () => {
   const wrapper = shallow(<App />);
  // const statebefore = wrapper.state();
  // console.log(statebefore);
});
