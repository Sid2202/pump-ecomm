import React, { useEffect, useState } from 'react';
import { Button, Input } from '@material-ui/core';
// import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import axios from 'axios'
import './App.css';
import $ from 'jquery'
import './loader'
import 'bootstrap/dist/css/bootstrap.css';
import Categorycard from './Categorycard';



function App(props) {

  const [lang, setLang] = useState('Kannada')

  const handleTogggle = () => {
    if (lang == 'English'){
      setLang('Kannada')
    }
    else{
      setLang('English')
    }
  }

  // useEffect(() => {
    
  //     var eng = document.getElementById("en");
  //     var kan = document.getElementById("ka");

  //     if (lang == 'English')
  //     {
  //       eng.style.display = "block";
  //       kan.style.display = "none";
  //     }

  //     else
  //     {
  //       eng.style.display = "none";
  //       kan.style.display = "block";
  //     }


  // }, [lang])
  return (
    <div className="App">
      <div className="productmain">
        <div className="mainheading">
          <h4>
            <strong lang="en" id="en">Water Pump Selection</strong>
            <strong lang="ka" id="ka">ನೀರಿನ ಪಂಪ್ ಆಯ್ಕೆ</strong>
          </h4>
          <button id="switch-lang" onClick={handleTogggle} >Switch Language</button>
        </div>

        <div className="container">
          <div className="categoryinfo">
            <div className="category_heading">
              <h5 lang="en" id="en">For Domestic and Community</h5>
              <h5 lang="ka" id="ka">ಗೃಹ ಮತ್ತು ವಸತಿ ನಿಲಯಕ್ಕೆ</h5>
            </div>

            <Categorycard />





            {/* <div className="list-group">
              <a href="soborewell.js" className="list-group-item" lang="en" id="en">
                Sump and Open Borewell
              </a>
              <a href="soborewell.js" className="list-group-item" lang="ka" id="ka">
                ತೊಟ್ಟಿ ಮತ್ತು ತೆರೆದ ಭಾವಿ
              </a>
              <a href="dcborewell.js" className="list-group-item" lang="en" id="en">
                Bore Well
              </a>
              <a href="dcborewell.js" className="list-group-item" lang="ka" id="ka">
                ಕೊಳವೆ ಭಾವಿ
              </a>
            </div> */}
          </div>
          {/* <div className="categoryinfo">
            <div className="category_heading">
              <h5 lang="en" id="en">For Agriculture</h5>
              <h5 lang="ka" id="ka">ವ್ಯವಸಾಯಕ್ಕೆ</h5>
            </div>
            <div className="list-group">
              <a href="aowell.js" className="list-group-item" lang="en" id="en">Open Well</a>
              <a href="aowell.js" className="list-group-item" lang="ka" id="ka">
                ತೆರೆದ ಭಾವಿ
              </a>
              <a href="agriborewell.js" className="list-group-item" lang="en" id="en">
                Bore Well
              </a>
              <a href="agriborewell.js" className="list-group-item" lang="ka" id="ka">
                ಕೊಳವೆ ಭಾವಿ
              </a>
              <a href="acorrp.js" className="list-group-item" lang="en" id="en">
                Canal or River
              </a>
              <a href="acorrp.js" className="list-group-item" lang="ka" id="ka">
                ಕಾಲುವೆ ಅಥವಾ ನದಿ
              </a>
              <a href="alip.js" className="list-group-item" lang="en" id="en">
                Lift Irrigation
              </a>
              <a href="alip.js" className="list-group-item" lang="ka" id="ka">ಏತ್ ನೀರಾವರಿ</a>
              <a href="agrisol.js" className="list-group-item" lang="en" id="en">
                Solar Pumps
              </a>
              <a href="agrisol.js" className="list-group-item" lang="ka" id="ka">
                ಸೌರಶಕ್ತಿ ಪಂಪುಗಳು
              </a>
            </div>
          </div>
          <div className="categoryinfo">
            <div className="category_heading">
              <h5 lang="en" id="en">For Industry</h5>
              <h5 lang="ka" id="ka">ಕೈಗಾರಿಕೆಗೆ</h5>
            </div>
            <div className="list-group">
              <a href="indpol.js" className="list-group-item" lang="en" id="en">Polder</a>
              <a href="indpol.js" className="list-group-item" lang="ka" id="ka">
                ತೊಟ್ಟಿ ಅಥವಾ ಹೊಂಡದ (ಕೊಳ)
              </a>
              <a href="#" className="list-group-item" lang="en" id="en">
                Special Purpose Pumps
              </a>
              <a href="#" className="list-group-item" lang="ka" id="ka">
                ವಿಶೇಷ ಉದ್ದೇಶದ ಪಂಪುಗಳು
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default App
