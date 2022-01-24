import React, { useState } from 'react'
import Img from '../asset/images/Group 18.png'
import Dummy_Data from '../Dummy_Data.json'
import { Card } from './Card'
import detailPage from '../App'
import { Link } from 'react-router-dom'
const Body = () => {
    const [items, setitems] = useState(Dummy_Data);
    return (
        

            <section className="section__content bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                           <Link to="/detail-page"><h2 className="heading"><img src={Img} alt="icon" className="icon"/> PROMOTIONAL CONTENT</h2></Link>
                            </div>
                        {
                            items.map((elem, i) =>
                                <div key={i} className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                    <Card audio={elem.audio} image={elem.image} content={elem.content} play={elem.play} video={elem.video} view={elem.view}/>
                                </div>
                            )
                        }
                    </div>
                    
                </div>
            </section>

       
    )
}

export default Body
