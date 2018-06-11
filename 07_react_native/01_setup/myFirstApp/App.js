import React from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Drawer from './modules/routes';
import Bottom from './modules/bottom';
import Main from './modules/main';
import AllMenu from './modules/allmenu'
import {AppRegistry} from 'react-native';


class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
       <AllMenu/>
       <Text>Test</Text>
     </View>
    );
  }
}


export default App
