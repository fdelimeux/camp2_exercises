import React from 'react';
import { Platform, StatusBar, ScrollView, StyleSheet, Text, View, Button, ImageBackground, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements';
import About from './about';
const { width } = Dimensions.get('window');

class Main extends React.Component {



  render() {
    return (
      <ImageBackground source={{ uri: 'http://backgroundcheckall.com/wp-content/uploads/2017/12/app-background-android-3.jpg'}}
        style={styles.backgroundImage}
        >
          <SafeAreaView style={styles.container}>
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false} >
        <Text style={[styles.textWhite, styles.titlebig]}>Welcome to Coding School</Text>
        <Text style={[styles.textWhite, styles.titlebig]}>Coding</Text>
        <Text style={[styles.textWhite, styles.titlebig]}>School</Text>


      </ScrollView>
      </SafeAreaView>
      </ImageBackground>
  )
}}

const styles = StyleSheet.create({
  textWhite:{
    color:'white',
    width:width,
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
