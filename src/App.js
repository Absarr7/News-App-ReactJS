import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: "light",
      country: "in",
      Progress: 0,
      search: ''
    };
  }
  
  pageSize = 12;
  

  toggleMode = () => {
    console.log(this.state.mode);
    if (this.state.mode === "light") {
      this.setState({ mode: "dark" });
      document.body.style.backgroundColor = "#121212";
    } else if (this.state.mode === "dark") {
      this.setState({ mode: "light" });
      document.body.style.backgroundColor = "#FBFFFF";
    }
  };


  // set the progress function..
  setProgress = (progress)=>{
    this.setState({Progress: progress})
  }

  handleSubmit = (event)=>{
    event.preventDefault();
  }
  
  updateSearchValue = (event)=>{
    const value = event.target.value;
    this.setState({search: value});
    console.log(this.state.search);
    }
  }

  onBtnSubmit = ()=>{
    
  }


  render() {
    return (
      <div>
        <BrowserRouter>
      <Navbar toggleMode={this.toggleMode} mode={this.state.mode} search={this.search} updateSearchValue={this.updateSearchValue} handleSubmit={this.handleSubmit}/>
       <LoadingBar
        color='#ffc107'
        progress={this.state.Progress}
        height= {3}
        shadow= {false}
        // onLoaderFinished={console.log("hello")}
      />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News 
                  search={this.state.search}
                  setProgress={this.setProgress}
                  toggleMode={this.toggleMode}
                  ApiKey={this.apiKey}
                  mode={this.state.mode}
                  pageSize={this.pageSize}
                  country={this.state.country}
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News 
                  search={this.state.search}
                  setProgress={this.setProgress}
                  key="technology"
                  toggleMode={this.toggleMode}
                  ApiKey={this.apiKey}
                  mode={this.state.mode}
                  pageSize={this.pageSize}
                  country={this.state.country}
                  category="technology"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  search={this.state.search}
                  setProgress={this.setProgress}
                  key="sports"
                  toggleMode={this.toggleMode}
                  ApiKey={this.apiKey}
                  mode={this.state.mode}
                  pageSize={this.pageSize}
                  country={this.state.country}
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  search={this.state.search}
                  setProgress={this.setProgress}
                  key="entertainment"
                  toggleMode={this.toggleMode}
                  ApiKey={this.apiKey}
                  mode={this.state.mode}
                  pageSize={this.pageSize}
                  country={this.state.country}
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  search={this.state.search}
                  setProgress={this.setProgress}
                  key="business"
                  toggleMode={this.toggleMode}
                  ApiKey={this.apiKey}
                  mode={this.state.mode}
                  pageSize={this.pageSize}
                  country={this.state.country}
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  search={this.state.search}
                  setProgress={this.setProgress}
                  key="health"
                  toggleMode={this.toggleMode}
                  ApiKey={this.apiKey}
                  mode={this.state.mode}
                  pageSize={this.pageSize}
                  country={this.state.country}
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  search={this.state.search}
                  setProgress={this.setProgress}
                  key="science"
                  toggleMode={this.toggleMode}
                  ApiKey={this.apiKey}
                  mode={this.state.mode}
                  pageSize={this.pageSize}
                  country={this.state.country}
                  category="science"
                />
              }></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
