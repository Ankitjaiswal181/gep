import React,{useState} from 'react'
import Img from '../asset/images/Group 863.png'
import DummyData from '../TVads.json'
import CardsTv from '../Components/CardsTv'
const DetailedPage = () => {
    const [items, setItems] = useState(DummyData)
    return (
        <section className="section__content bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="heading"><span className="icon"><img src={Img} alt="icon" /></span> Television Spots</h2>
                    </div>
                    {
                        items.map((elem, i) =>
                            <div key={i} className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                                <CardsTv image={elem.image} play={elem.play}  />
                            </div>
                        )
                    }
                </div>
            </div>
        </section>

    
    )
}

export default DetailedPage
