import Main from './main';
import About from './about';
import Html from './html';
import Bottom from './bottom';
import React from 'react';
import {createDrawerNavigator} from 'react-navigation';
import { Icon } from 'react-native-elements';
import Reactpage from './react'

const Drawer = createDrawerNavigator({

  Main: {
    screen: Main,
    navigationOptions: {
      drawerLabel: 'Main',
      drawerIcon: () => (<Icon name='home' type='font-awesome' color='white'/>),
    }
  },
  Html5: {
    screen: Html,
    navigationOptions: {
      drawerLabel: ' ',
      drawerIcon: () => (<Icon name='html5' type='font-awesome' color='white'/>),
    }
  },
  React: {
    screen: Reactpage,
    navigationOptions: {
      drawerLabel: ' ',
      drawerIcon: () => (<Icon name='react' type='material-community' color='white'/>),
    }
  },
  About: {
    screen: About,
    navigationOptions: {
      drawerLabel: ' ',
      drawerIcon: () => (<Icon name='info-circle' type='font-awesome' color='white'/>),
    }
  },

}, {
  drawerWidth: 60,
  drawerBackgroundColor : '#01557F',
  initialRouteName : 'Main',
});

export default Drawer;
