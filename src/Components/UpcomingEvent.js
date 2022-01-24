import React,{useState} from 'react'
import Img from '../asset/images/Path 15872.png'
import { Card } from './Card'
import DummyData from '../Dummy__Calender.json'
import Cards from './Cards'

const UpcomingEvent = () => {
    const [items, setItems] = useState(DummyData)
    return (
        <section className="section__content bg">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="heading"><img src={Img} alt="icon" className="icon"/> UPCOMING EVENTS</h2>
                    </div>
                {
                    items.map((elem, i) =>
                        <div key={i} className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                            <Cards image={elem.image} platform={elem.platform} title={elem.title} date={elem.date} place={elem.place}/>
                        </div>
                    )
                }
            </div>
            
        </div>
    </section>


)
}

export default UpcomingEvent
