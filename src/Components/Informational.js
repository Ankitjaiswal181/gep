import React, { useState } from 'react'
import Img from '../asset/images/Group 254.png'
import DummyData from '../Dummy_info.json'
import { Card } from './Card';
const Informational = () => {
    const [items, setItems] = useState(DummyData);
    
    return (
        <section className="section__content bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="heading"><img src={Img} alt="icon" className="icon"/> Informational CONTENT</h2>
                            </div>
                        {
                            items.map((elem, i) =>
                                <div key={i} className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                    <Card image={elem.image} content={elem.content} play={elem.play} video={elem.video} view={elem.view}/>
                                </div>
                            )
                        }
                    </div>
                    
                </div>
            </section>

       
    )
}

export default Informational
