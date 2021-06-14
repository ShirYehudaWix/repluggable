import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Topbar} from "./Topbar/Topbar";
import {MainView} from "./MainView/MainView";

function App() {
  return (
    <div className="App">
      <Topbar/>
      <MainView/>
    </div>
  );
}

export default App;
