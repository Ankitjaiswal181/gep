import React from 'react'
const CardsTv = (props) => {
    return (
        <div className="card card__tv ">
            
            <img src={props.image} alt="imageCard" />
            <img className="Tvad_Play" src={props.play} alt="playButton"/>
     
            
            <div className="blueBorder"></div>
            
            <div className="container imageContentTv" >
                
                <h4>TITLE</h4>
                <p>Short description goes here</p>
                
                
                

            </div>
        </div>
        
    )
}

export default CardsTv
