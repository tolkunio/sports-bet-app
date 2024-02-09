import React from 'react';
import './App.scss';
import {Header} from "./layout/header/Header";
import Events from "./layout/section/Events/Events";
import {Footer} from "./layout/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Events/>
      <Footer/>
    </div>
  );
}

export default App;
