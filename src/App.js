import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

const App = (props)=> {

  const [mode, setMode] = useState("light");
  const [country, setCountry] = useState("in");
  let [progress, setprogress] = useState(0);
  const [search, setSearch] = useState('');
  const [finalSearch, setFinalSearch] = useState('')


  
  const pageSize = 12;
  
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#121212";
    } else if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "#FBFFFF";
    }
  };


  // set the progress function..
  const setProgress = (progress)=>{
    setprogress(progress)
  }

    return (
      <div>
        <BrowserRouter>
      <Navbar toggleMode={toggleMode} mode={mode}/>
       <LoadingBar
        color='#ffc107'
        progress={progress}
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
                  setProgress={setProgress}
                  toggleMode={toggleMode}
                  mode={mode}
                  pageSize={pageSize}
                  country={country}
                  category="general"
                  
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News 
                  setProgress={setProgress}
                  key="technology"
                  toggleMode={toggleMode}
                  mode={mode}
                  pageSize={pageSize}
                  country={country}
                  category="technology"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={setProgress}
                  key="sports"
                  toggleMode={toggleMode}
                  mode={mode}
                  pageSize={pageSize}
                  country={country}
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={setProgress}
                  key="entertainment"
                  toggleMode={toggleMode}
                  mode={mode}
                  pageSize={pageSize}
                  country={country}
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={setProgress}
                  key="business"
                  toggleMode={toggleMode}
                  mode={mode}
                  pageSize={pageSize}
                  country={country}
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={setProgress}
                  key="health"
                  toggleMode={toggleMode}
                  mode={mode}
                  pageSize={pageSize}
                  country={country}
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={setProgress}
                  key="science"
                  toggleMode={toggleMode}
                  mode={mode}
                  pageSize={pageSize}
                  country={country}
                  category="science"
                />
              }></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  };
export default App;
