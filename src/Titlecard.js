import React, { useState } from 'react'
import './Titlecard.css'



function Titlecard({lang, engtitle, kantitle}) {

  //   const [lang, setLang] = useState('English')

  // const handleToggle = () => {
  //   if (lang === 'English'){
  //     setLang('Kannada')
  //   }
  //   else{
  //     setLang('English')
  //   }
  // }

  return (
      <div className="cc__container">
        <div className="productmain">
            { lang==="English" ? (
              <>
                <div className="mainheading">
              
                  <h4>
                    <strong lang="en" id="en">{engtitle}</strong>
                  </h4>
              
                </div>
              </>
            ) : (
                <>
                    <div className="mainheading">
                        <h4>
                            <strong lang="en" id="en">{kantitle}</strong>
                        </h4>
                    </div>
                </>
            )}
          
        </div>
      </div>
  )
}

export default Titlecard

