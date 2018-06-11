import React from 'react';
import {View, StatusBar} from 'react-native';
import Bottom from './bottom';
import Drawer from './routes';


class AllMenu extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar hidden={true}/>
        <Drawer />
        {/* <Bottom /> */}
      </View>
    )

  }
}

export default AllMenu;
