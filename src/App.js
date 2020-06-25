import React from 'react';
import './assets/css/AppCss/App.css';
import Header from './assets/components/Header';
import Section from './assets/components/Section';
import EX from './assets/components/InputPassword';



function App() {
  return (
    <div className="App">
        <div className="div-container">
          <Header/>
          <Section/>  
          {/* <EX/> */}
        </div>
    </div>
  );
}


export default React.memo(App);
