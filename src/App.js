import React, { useEffect, useState } from 'react';
import { Button, Input } from '@material-ui/core';
// import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import axios from 'axios'
import './App.css';
// import $ from 'jquery'
import './loader'
import 'bootstrap/dist/css/bootstrap.css';
import Categorycard from './Categorycard';
import Titlecard from './Titlecard';



function App(props) {

  const [lang, setLang] = useState('English')

  const handleToggle = () => {
    if (lang === 'English'){
      setLang('Kannada')
    }
    else{
      setLang('English')
    }
  }

  
  return (
    
    <div className="App">
      {/* { lang==='English' ? (
        <div className="productmain">
          <div className="mainheading">
            
            <h4>
              <strong lang="en" id="en">Water Pump Selection</strong>
            </h4>
            <button id="switch-lang" onClick={handleTogggle} >Switch Language</button>
          </div>

          <div className="container">
            <div className="categoryinfo">
              <div className="category_heading">
                <h5 lang="en" id="en">For Domestic and Community</h5>
              </div>
          </div>
          </div>

           
        </div>
            ) : (
        <div className="productmain">
          <div className="mainheading">
            
            <h4>
              <strong lang="ka" id="ka">ನೀರಿನ ಪಂಪ್ ಆಯ್ಕೆ</strong>
            </h4>
            <button id="switch-lang" onClick={handleTogggle} >Switch Language</button>
          </div>

          <div className="container">
            <div className="categoryinfo">
                <div className="category_heading">
                  <h5 lang="ka" id="ka">ಗೃಹ ಮತ್ತು ವಸತಿ ನಿಲಯಕ್ಕೆ</h5>
                </div>
              </div>
          </div>
          </div>
        )
      } */}
            <div className="title_container">
              <Titlecard lang={lang} engtitle ="Water Pump Selection" kantitle="ನೀರಿನ ಪಂಪ್ ಆಯ್ಕೆ" />
              <button id="switch-lang" onClick={handleToggle} >Switch Language</button>
            </div>
            <div className="grid_container">
              <Categorycard lang={lang} engtitle="Sump / Open Well" kantitle="ತೊಟ್ಟಿ ಮತ್ತು ತೆರೆದ ಭಾವಿ" imgURL="https://images-na.ssl-images-amazon.com/images/I/31C9enlXjGL.jpg"/>
              <Categorycard lang={lang} engtitle="BoreWell" kantitle="ಕೊಳವೆ ಭಾವಿ" imgURL="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT5lT4VXuvOoGw8Mfrz3wph8Eg-gmtR3WwYz6LQeIE23yJAPjRYhekKJsT8pjwtGO8cVavf4tK4bocxH5O1S6NG0CNLK5i_1w&usqp=CAE"/>
            </div>
            

    </div>
  )
}

export default App
