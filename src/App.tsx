import React from 'react';
import './App.scss';
import {Header} from "./layout/header/Header";
import {Footer} from "./layout/footer/Footer";
import Events from "./layout/section/Events/Events";

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
