import React, { useState,useEffect } from 'react'


export const Card = (props) => {
    const video= props.video;
    const audio =props.audio;
    // const imageNew=props.image
    // console.log(imageNew);
    const [playing,setPlaying]=useState(false);

    // useEffect(() => {
    //   playing? audio.play() : audio.pause();
    //   setPlaying(true);
    // }, [playing])

    const play = () => {
        // console.log("hello");
        document.querySelector('.video-popup').style.display = 'block';
        document.querySelector('.video-popup .video-popup__inner .video-con').innerHTML = (props.audio===''||props.video==='')?'<audio src='+audio+' controls autoPlay />':'<video src='+video+' controls autoPlay  />';
        
    }
    const closeButton = () => {
        document.querySelector('.video-popup').style.display = 'none';
        setPlaying(false);
    }

    // const Button=()=>{
    //     document.querySelector('.video-popup').style.display='none';
    // }
    
    return (
      
         
        
        <div className="card" >
            <img src={props.image} alt="imageCard" className="imageCard"  />
            {(props.play === '') ? '' : <img className="play" src={props.play} alt="playButton" onClick={play} />}
            <div className="imageContent row-no-padding">
                <div className="row align-items-end">
                    <div className="col-9 col-md-9">
                        <h3 className="mb-0">{props.content}</h3>
                    </div>
                    {(props.view === '') ? '' :
                        <div className="col-3 col-md-3 text-right">

                            <a href="#" className="d-block"> {props.view}</a>

                        </div>
                    }
                   

                     
                </div>


            </div>

            <div className="video-popup">
                <div className="video-popup__inner">
                    <span className="close__button" onClick={closeButton} >{playing ?'' :"Pause"}&times;</span>
                        <div className="video-con">
                    </div>
                </div>
            </div>
        </div>
    
    
    )
}
