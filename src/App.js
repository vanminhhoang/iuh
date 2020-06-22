import React from 'react';
import './assets/css/AppCss/App.css';
import Header from './assets/components/Header';
import Section from './assets/components/Section';


function App() {
  return (
    <div className="App">
        <div className="div-container">
          <Header/>
          <Section/>  
        </div>
    </div>
  );
}


export default App;
