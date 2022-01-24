import React from 'react'

const Cards = (props) => {
    return (
        <div className="cards bg-white">
            <figure>
            <img src={props.image} alt="ImageCard" className='upeventImage'  />
            </figure>
            
            <div className="container content">
                <p >{props.platform}</p>
                <h4>{props.title}</h4>
                <div className='dates'>
                    <h5>{props.date}</h5>
                    <p>{props.place}</p>

                
                </div>
                <div className='addtocalender'>
                <a href="#">ADD TO CALENDER +</a>
                </div>
            </div>
            

        </div>
    )
}

export default Cards
