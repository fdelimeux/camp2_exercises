import Main from './main';
import About from './about';
import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation';

const Bottom = createMaterialTopTabNavigator({
  Main: {
    screen:Main
  },
  About: {
    screen:About
  },
});

export default Bottom;
