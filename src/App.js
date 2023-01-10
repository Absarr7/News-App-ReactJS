import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Loading from './components/Loading';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {mode: "light"};
  }

  toggleMode = ()=>{
    console.log(this.state.mode);
    if (this.state.mode === "light") {
      this.setState({mode: "dark"});
      document.body.style.backgroundColor = '#121212';
    }
    else if (this.state.mode === "dark") {
      this.setState({mode: "light"});
      document.body.style.backgroundColor = 'white';
    }
  }


  render() {
    return (
      <div>
      <Navbar toggleMode={this.toggleMode} mode={this.state.mode}/>
      <News toggleMode={this.toggleMode} mode={this.state.mode} pageSize={9}/>

      </div>
    )
  }
}

