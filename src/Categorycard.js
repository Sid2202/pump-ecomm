import React from 'react'
import './Categorycard.css';

function Categorycard({lang, imgURL, engtitle, kantitle}) {
    return (
        <div className="cc__container">
            <div className="cc__image">
                <img src={imgURL} alt="Imageeeee" />
            </div>
            { lang==="English" ? (
            <>
                <div className="cc__title">
                    <h5>{engtitle}</h5>
                </div> 
            </>
            ) : (
                <>
                    <div className="cc__title">
                        <h5>{kantitle}</h5>
                    </div>
                </>
            )}
            
        </div>
    )
}

export default Categorycard
