import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";

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
      {/* <News toggleMode={this.toggleMode} mode={this.state.mode} pageSize={12} country="us" category="technology"/> */}
        <BrowserRouter>
        <Navbar toggleMode={this.toggleMode} mode={this.state.mode}/>
          <Routes>
            <Route exact path='/' element={<News toggleMode={this.toggleMode} mode={this.state.mode} pageSize={12} country="us" category="general"/>}></Route>
            <Route exact path='/technology' element={<News key="technology" toggleMode={this.toggleMode} mode={this.state.mode} pageSize={12} country="us" category="technology"/>}></Route>
            <Route exact path='/sports' element={<News key="sports" toggleMode={this.toggleMode} mode={this.state.mode} pageSize={12} country="us" category="sports"/>}></Route>
            <Route exact path='/entertainment' element={<News key="entertainment" toggleMode={this.toggleMode} mode={this.state.mode} pageSize={12} country="us" category="entertainment"/>}></Route>
            <Route exact path='/business' element={<News key="business" toggleMode={this.toggleMode} mode={this.state.mode} pageSize={12} country="us" category="business"/>}></Route>
            <Route exact path='/health' element={<News key="health" toggleMode={this.toggleMode} mode={this.state.mode} pageSize={12} country="us" category="health"/>}></Route>
            <Route exact path='/science' element={<News key="science" toggleMode={this.toggleMode} mode={this.state.mode} pageSize={12} country="us" category="science"/>}></Route>
            <Route exact path='/india' element={<News key="in" toggleMode={this.toggleMode} mode={this.state.mode} pageSize={12} country="in" category="general"/>}></Route>
            

          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

