import React, { Component } from 'react';
import './App.css';

function Image(props) {
  return (
    <img className="picture" src={props.imgurl}/>
  )
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imgurl:'https://free4kwallpaper.com/wp-content/uploads/2016/01/Cute-White-Dog-4K-Wallpaper.jpg'
    };
    this.searchImg = this.searchImg.bind(this);
  }
  componentDidMount() {
    this.searchImg();
  }
  searchImg() {
    fetch('https://random.dog/woof.json')
    .then(value => value.json())
    .then(img => this.setState({imgurl : img.url}));
  }


  render() {
    return (
      <div>
      <button onClick={this.searchImg}>Change it</button>
      <Image imgurl={this.state.imgurl}/>
      </div>
    );
  }
}

export default App;
