import React, { useState } from 'react';
import { Button, Input } from '@material-ui/core';
// import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import axios from 'axios'
import './App.css';
import $ from 'jquery'
import './loader'
import 'bootstrap/dist/css/bootstrap.css';
import Categorycard from './Categorycard';



function App() {
  
  $('[lang="ka"]').hide();

  const myFunctionka = () => {
   
    $('[lang="en"]').hide();
    $('[lang="ka"]').show();
  }
  const myFunctionen = () =>{
    $('[lang="ka"]').hide();
    $('[lang="en"]').show();
  }

  return (
    <div className="App">
      <div className="productmain">
        <div className="mainheading">
          <h4>
            <strong lang="en">Water Pump Selection</strong>
            <strong lang="ka">ನೀರಿನ ಪಂಪ್ ಆಯ್ಕೆ</strong>
          </h4>
          <button id="switch-lang" onClick="myFunctionka">Switch Language</button>
        </div>

        <div className="container">
          <div className="categoryinfo">
            <div className="category_heading">
              <h5 lang="en">For Domestic and Community</h5>
              <h5 lang="ka">ಗೃಹ ಮತ್ತು ವಸತಿ ನಿಲಯಕ್ಕೆ</h5>
            </div>

            <Categorycard />





            {/* <div className="list-group">
              <a href="soborewell.js" className="list-group-item" lang="en">
                Sump and Open Borewell
              </a>
              <a href="soborewell.js" className="list-group-item" lang="ka">
                ತೊಟ್ಟಿ ಮತ್ತು ತೆರೆದ ಭಾವಿ
              </a>
              <a href="dcborewell.js" className="list-group-item" lang="en">
                Bore Well
              </a>
              <a href="dcborewell.js" className="list-group-item" lang="ka">
                ಕೊಳವೆ ಭಾವಿ
              </a>
            </div> */}
          </div>
          <div className="categoryinfo">
            <div className="category_heading">
              <h5 lang="en">For Agriculture</h5>
              <h5 lang="ka">ವ್ಯವಸಾಯಕ್ಕೆ</h5>
            </div>
            <div className="list-group">
              <a href="aowell.js" className="list-group-item" lang="en">Open Well</a>
              <a href="aowell.js" className="list-group-item" lang="ka">
                ತೆರೆದ ಭಾವಿ
              </a>
              <a href="agriborewell.js" className="list-group-item" lang="en">
                Bore Well
              </a>
              <a href="agriborewell.js" className="list-group-item" lang="ka">
                ಕೊಳವೆ ಭಾವಿ
              </a>
              <a href="acorrp.js" className="list-group-item" lang="en">
                Canal or River
              </a>
              <a href="acorrp.js" className="list-group-item" lang="ka">
                ಕಾಲುವೆ ಅಥವಾ ನದಿ
              </a>
              <a href="alip.js" className="list-group-item" lang="en">
                Lift Irrigation
              </a>
              <a href="alip.js" className="list-group-item" lang="ka">ಏತ್ ನೀರಾವರಿ</a>
              <a href="agrisol.js" className="list-group-item" lang="en">
                Solar Pumps
              </a>
              <a href="agrisol.js" className="list-group-item" lang="ka">
                ಸೌರಶಕ್ತಿ ಪಂಪುಗಳು
              </a>
            </div>
          </div>
          <div className="categoryinfo">
            <div className="category_heading">
              <h5 lang="en">For Industry</h5>
              <h5 lang="ka">ಕೈಗಾರಿಕೆಗೆ</h5>
            </div>
            <div className="list-group">
              <a href="indpol.js" className="list-group-item" lang="en">Polder</a>
              <a href="indpol.js" className="list-group-item" lang="ka">
                ತೊಟ್ಟಿ ಅಥವಾ ಹೊಂಡದ (ಕೊಳ)
              </a>
              <a href="#" className="list-group-item" lang="en">
                Special Purpose Pumps
              </a>
              <a href="#" className="list-group-item" lang="ka">
                ವಿಶೇಷ ಉದ್ದೇಶದ ಪಂಪುಗಳು
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
