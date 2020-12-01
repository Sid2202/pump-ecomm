import './acorp.css'

function acorp() {
  return (
    <div>
      <div className="productmain">
          <div className="mainheading">
            <strong>
              <h5 lang="en">Agriculture Canal or River Pump Selection</h5>
            </strong>
            <button id="switch-lang">
              <span lang="en">ಕನ್ನಡ</span>
              <span lang="ka">English</span>
            </button>
          </div>

        { lang=='English' ? (

          <div className="container">
            <form action="/acorrp.php">
              <div className="forminput">
                <h5 lang="en">Water to be Pumped per Minute</h5>
                &emsp;
                <input type="number"   className="" />
                <strong><h6 lang="en">in litres</h6></strong>
              </div>

              <div className="forminput">
                <h5 lang="en">Height to be pumped from Canal or River</h5>
                &emsp;
                <input type="number"    className="" />
                <strong><h6 lang="en">in metres</h6></strong>
              </div>
              <div className="forminput">
                <h5 lang="en">Horizontal Distance to be Pumped</h5>
                &emsp;
                <input type="number"    className="" />
                <strong><h6 lang="en">in metres</h6></strong>
              </div>

              <div className="formwaterpump">
                <h5 lang="en">Which Make Pump Required</h5>
                &emsp;
                <select type="number" placeholder="Metres" className="">
                  <h6><strong>in metres</strong></h6>
                  <option value="">Select</option>
                  <option value="">UNEEL</option>
                </select>
              </div>
              <div className="buttons">
                <button type="button" className="btn btn-light" id="clearbtn">
                  CLEAR
                </button>
                <button type="submit" className="btn btn-light" id="searchbtn">
                  SEARCH
                </button>
              </div>
            </form>
          </div>
        ) : (

          <div className="container">
            <form action="/acorrp.php">
              <div className="forminput">
                <h5 lang="ka">ನಮಿಶಕ್ಕೆ ಎಶ್ಟು ನೀರನ್ನು ಪಂಪ್ ಮಾಡಬೆಕು</h5>
                &emsp;
                <input type="number"   className="" />
                <strong><h6 lang="ka">ಲೀಟರ್ಗಳಲ್ಲಿ</h6></strong>
              </div>

              <div className="forminput">
                <h5 lang="ka">ಕಾಲುವೆ ಅಥವಾ ನದಿ ಮಟ್ಟದಿಂದ ಎಶ್ಟು ಎತ್ತರಕ್ಕೆ ನೀರನ್ನು ಎತ್ತಬೆಕು</h5>
                &emsp;
                <input type="number"    className="" />
                <strong><h6 lang="ka">ಮೀಟರ್ಗಳಲ್ಲಿ</h6></strong>
              </div>
              <div className="forminput">
                <h5 lang="ka">ಎಶ್ಟು ದೂರಕ್ಕೆ ನೀರನ್ಣು ತಳ್ಳಬೆಕು</h5>
                &emsp;
                <input type="number"    className="" />
                <strong><h6 lang="ka">ಮೀಟರ್ಗಳಲ್ಲಿ</h6></strong>
              </div>

              <div className="formwaterpump">
                <h5 lang="ka">ಯಾವ ತಯಾರಿಕೆಯ ಪಂಪ್ ಬೇಕಾಗಿದೆ</h5>
                &emsp;
                <select type="number" placeholder="Metres" className="">
                  <h6><strong>in metres</strong></h6>
                  <option value="">Select</option>
                  <option value="">UNEEL</option>
                </select>
              </div>
              <div className="buttons">
                <button type="button" className="btn btn-light" id="clearbtn">
                  CLEAR
                </button>
                <button type="submit" className="btn btn-light" id="searchbtn">
                  SEARCH
                </button>
              </div>
            </form>
          </div>
        
        )
      </div>
    </div>
  )
}

export default acorp
