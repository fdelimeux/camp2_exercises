import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, Dimensions, TouchableHighlight, StatusBar } from 'react-native';
import DisplayTime from './modules/displaytime';

const { height } = Dimensions.get('window');

class Timer extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentTime : 0,
      history:[],
      run:false,
    }
    this.addtime = this.addtime.bind(this);
  }

  addtime() {
      this.setState({currentTime: this.state.currentTime + 1});
  }

  start() {
    if (!this.state.run) {
      this.setState({run:true});
      this.currentInterval = setInterval(this.addtime, 1000);
    }
  }

  stop() {
    clearInterval(this.currentInterval);
    this.setState({run:false});
  }

  reset() {
    clearInterval(this.currentInterval);
    this.setState({currentTime: 0});
  }

  toHistory() {
    this.setState({history : this.state.currentTime});
    console.log(this.state.history);
  }

  render() {
    return (
      <ImageBackground source={{ uri: 'http://backgroundcheckall.com/wp-content/uploads/2017/12/background-time-3.jpg'}}
        style={styles.backgroundImage}>
          <StatusBar hidden={true}/>
          <View style={styles.timer}>
            <Text style={styles.timertxt}>{DisplayTime(this.state.currentTime)}</Text>
            <View style={styles.command}>
              <TouchableHighlight onPress={() => this.start()} style={[styles.btn,styles.btngreen]}>
                <Text>Start</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => this.stop()} style={[styles.btn,styles.btnred]}>
                <Text>Stop</Text>
              </TouchableHighlight>
              <TouchableHighlight
              onPress={() => this.reset()}
              style={styles.btn}>
              <Text>
                Reset
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
            onPress={() => this.toHistory()}
            style={styles.btn}>
            <Text>
              Save
            </Text>
          </TouchableHighlight>
            </View>

          </View>
          <View style={styles.bottom}>
            <TouchableHighlight
            onPress={() => this.reset()}
            style={styles.btn}>
            <Text>History</Text>
          </TouchableHighlight>
            <Text style={{color:'white'}}>Menu2</Text>
          </View>


    </ImageBackground>
    )
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Timer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  menu:{
    flexDirection : 'row',
    justifyContent : 'center',
    width: '100%'
  },
  timer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  timertxt:{
    color:'white',
    fontSize:135,
  },
  backgroundImage: {
    flex: 1,

    width:'100%',
    height:null,
    top:0,
    bottom:0,
    right:0,
    left:0,
    justifyContent:'center',
    alignItems:'center',
  },
  command:{
    flexWrap:'wrap',
    flexDirection:'row',
    justifyContent:'center',
  },
  btn: {
    flex:0,
    backgroundColor:'#c1c1c1',
    borderRadius:23,
    justifyContent:'center',
    alignItems:'center',
    width:120,
    height:50,
    margin:20,
  },
  btnred:{
    backgroundColor:'#A31D14',
  },
  btngreen:{
    backgroundColor:'#00A328',
  },
  bottom:{
    flex:0,
    width:'80%',
    flexDirection:'row',
    justifyContent:'space-around'
  }
});
