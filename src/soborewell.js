import React, { useState } from 'react';
import { Button, Input } from '@material-ui/core';
// import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import axios from 'axios'
import './soborewell.css';
import $ from 'jquery'
import './loader'
var cors = require('cors')

// app.use(cors())

function soborewell() {

  
  
  const [waterreq, setwaterreq] = useState('');
  const [height, setHeight] = useState('');
  const [powsup, setPowsup] = useState('');
  const [pumpmake, setPumpmake] = useState('');

  const radioval = (event)  => {
    setPowsup(event.target.value);
  }

  const getsubmit =  (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("totalwater",waterreq);
    formData.append("totalheight", height);
    formData.append("powsup", powsup);
    formData.append("pump_make", pumpmake);

    const url = "http://192.168.29.241:80/PumpBackend/";  
    axios.post(url, formData)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }

  $('[lang="ka" id="ka"]').hide();

const myFunctionka = () => {
 
  $('[lang="en" id="en"]').hide();
  $('[lang="ka" id="ka"]').show();
}
const myFunctionen = () =>{
  $('[lang="ka" id="ka"]').hide();
  $('[lang="en" id="en"]').show();
}


    
  
  return (
    <div className="App">
      <div className="productmain">
        <div className="mainheading">
          <div className="headermenu">
             <a href="index.php"><i  className="material-icons ripple">arrow_back_ios</i> </a>
             <a id="switch-langka" className="langbutton" onClick={myFunctionka}>
                <span>ಕನ್ನಡ</span>
                
              </a>
             <a id="switch-langen" className="langbutton" onClick={myFunctionen}>
               
                <span >English</span>
              </a>
             <a href="index.php"><i className="material-icons ripple">home</i></a> 
             
          </div>
        <h5>
          <span lang="en" id="en">Domestic Sump / Open Well Pump Selection</span>
          <span lang="ka" id="ka">
            ಗೃಹ ಮತ್ತು ವಸತಿ ನಿಲಯಕ್ಕೆ ತೊಟ್ಟಿ / ತೆರೆದ ಭಾವಿ ಪಂಪಿನ ಆಯ್ಕೆ
          </span>
        </h5>
      
      </div>

      <div className="container">
        <form action="soborewell.php">
          <div className="card">
            <div className="forminput">
              <h5 lang="ka" id="ka">ನೀರಿನ ಅವಶ್ಯಕತೆ ದಿನಕ್ಕೆ ಲೀಟರ್ಗಳಲ್ಲಿ</h5>
              <h5 lang="en" id="en">Total Water Required per day</h5>
              &emsp;
              <div className="input-suffix">
                <input type="number"   className="" name="totalwater" onChange={async (e) => setwaterreq(e.target.value)} />
                <h6>
                  <strong lang="en" id="en">in litres</strong>
                  <strong lang="ka" id="ka">ಲೀಟರ್ಗಳಲ್ಲಿ</strong>
                </h6>
              </div>
            </div>

            <div className="forminput">
              <h5 lang="ka" id="ka">
                ಒಟ್ಟು ಎಷ್ಟು ಎತ್ತರಕ್ಕೆ ನೀರನ್ನು ಎತ್ತಬೇಕು ಮೀಟರ್ಗಳಲ್ಲಿ
              </h5>
              <h5 lang="en" id="en">Total Height to be pumped</h5>
              &emsp;
              <div className="input-suffix" >
                <input type="number" className="" onChange={async (e) => setHeight(e.target.value)}/>
                <h6 >
                  <strong lang="en" id="en">in metres</strong>
                  <strong lang="ka" id="ka">ಮೀಟರ್ಗಳಲ್ಲಿ</strong>
                </h6>
              </div>
            </div>
          </div>
            
          <div className="card">
            <div className="formradio">
              <h4 lang="ka" id="ka">ನೀರಿನ ಅವಶ್ಯಕತೆ ದಿನಕ್ಕೆ ಲೀಟರ್ಗಳಲ್ಲಿ</h4>
              <h4 lang="en" id="en" >Power Supply available</h4>
              <h6 >*Select Any One</h6>
              &emsp;

              <div className="radioinput">
                <span lang="ka" id="ka">ಒಂದು ಫೇಸ್ ೨೩೦ ವೋಲ್ಟ್</span>
                <span lang="en" id="en">Single Phase 230V</span>
                <input type="radio" name="power" id="rdbtn1" value="230" onChange={e => setPowsup(e.target.value)} />
              </div>

              <div className="radioinput">
                <span lang="ka" id="ka">ಮೂರು ಫೇಸ್ ೪೧೫ ವೋಲ್ಟ್</span>
                <span lang="en" id="en">Three Phase 415V</span>
                <input type="radio" name="power" value="415" onChange={e => setPowsup(e.target.value)}/>
              </div>

            </div>
            <div className="formwaterpump" >
              <h5 lang="ka" id="ka">
                ಒಟ್ಟು ಎಷ್ಟು ಎತ್ತರಕ್ಕೆ ನೀರನ್ನು ಎತ್ತಬೇಕು ಮೀಟರ್ಗಳಲ್ಲಿ
              </h5>
              <h5 lang="en" id="en">Which Make Pump Required</h5>
              &emsp;
              <select type="number" className="" onSelect={(e) => setPumpmake(e.target.value)} defaultValue={"Any Make"}>
                <option value="Any Make">Any Make</option>
                <option value="UNEEL">UNEEL</option>
              </select>
            </div>
          </div>
          

          <div className="buttons">
            <Button type="button" lang="en" id="en" className="btn btn-light" id="clearbtn">
              CLEAR
            </Button>
            <Button type="button" lang="ka" id="ka" className="btn btn-light" id="clearbtn">
              ಅಳಿಸಿಹಾಕು
            </Button>
            <Button
              type="submit"
              lang="en" id="en"
              className="btn btn-light"
              id="searchbtn"
              name=""
              onClick={getsubmit}

            >
              SEARCH
            </Button>
            <Button
              type="submit"
              lang="ka" id="ka"
              className="btn btn-light"
              id="searchbtn"
              onClick={getsubmit}
            >
              ಹುಡುಕು
            </Button>
          </div>
        </form>
      </div>
    </div>
    </div>

  );
}
export default soborewell;
