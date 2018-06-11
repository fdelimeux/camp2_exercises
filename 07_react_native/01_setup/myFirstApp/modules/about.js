import React from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native';
import { NavigationActions, DrawerNavigator } from 'react-navigation';

class Test extends React.Component {
  render() {
    console.log('ok');
    return (
      <View>
      <Text>
        test
      </Text>
      <Text>
        test
      </Text>
      <Text>
        test
      </Text>
    </View>
    )
  };
}


function Main () {
  return (
    <ImageBackground source={{ uri: 'http://backgroundcheckall.com/wp-content/uploads/2017/12/app-background-android-3.jpg'}}
      style={styles.backgroundImage}
      >
        <SafeAreaView style={styles.container}>
      <Text style={[styles.textWhite, styles.titlebig]}>About</Text>
    </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  textWhite:{
    color:'white',
  },
  backgroundImage: {
    flex: 1,
    width:null,
    height:null,
    top:0,
    bottom:0,
    right:0,
    left:0,
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom:0,
  },
  menu: {
    flexDirection:'row',
    justifyContent: 'space-around',
  },
  titlebig: {
    fontSize : 50,
  },
  menuitem: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    height:50,
    flex:1,
  },

  menubtn:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#25567F',
    height:60,
    width:400,
  },

  btntext:{
    fontSize:22,

  }

  });

//   const MyApp = create DrawerNavigator({
//   Home: {
//     screen: Main,
//   },
//   Notifications: {
//     screen: Test,
//   },
// });

export default Main
