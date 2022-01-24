import React, { useEffect, useState } from 'react'
import Img from '../asset/images/Group 801.png'
import { Card } from './Card'
import DummyData from '../ImageLibrary.json'

const ImageLibrary = () => {
    const [items, setItems] = useState(DummyData)
   

  
  
// card-gallery-code
const [imageToShow, setImageToShow] = useState('');
const [lightboxDisplay, setLightBoxDisplay] = useState(false);

// const imageCards = items.map((image) => (
//   // <img className="image-card"  src={image} />
 
// ));

  const imageCards= items.map((data) => {
  
    
    // setImageToShow(image.image)
    // console.log(image.image)
    return data.image;
})
// console.log(imageCards);
const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };
  
  //show next image in lightbox
const showNext = (e) => {
e.stopPropagation();
let currentIndex = imageCards.indexOf(imageToShow);
console.log(imageCards.indexOf(imageToShow));
if (currentIndex >= imageCards.length - 1) {
  setLightBoxDisplay(false);
} else {
  let nextImage = imageCards[currentIndex + 1];
  // console.log(nextImage);
  setImageToShow(nextImage);
}
};

//show previous image in lightbox
const showPrev = (e) => {
e.stopPropagation();
let currentIndex = imageCards.indexOf(imageToShow);
if (currentIndex <= 0) {
  setLightBoxDisplay(false);
} else {
  let nextImage = imageCards[currentIndex - 1];
  setImageToShow(nextImage);
}
};
  
    return (
     
        <section className="section__content bg-white">
                <div className="container">
                
                    <div className="row">
                   
                        <div className="col-md-12 imageLibrary align-items-end" >
                            <h2 className="heading"><img src={Img} alt="icon" className="icon"/> IMAGE LIBRARY</h2>
                            <a href="#">View All</a>
                            </div>
                        {
                            items.map((elem, i) =>
                            
                                <div key={i} className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3"onClick={() => showImage(elem.image)} >
                                 
                                    <Card 
                                    // id={elem.id}
                                    image={elem.image} 
                                    content={elem.content} 
                                    play={elem.play} 
                                    video={elem.video} 
                                    view={elem.view} 
                                    />
                                
                                </div>
                            )
                        }
                       { lightboxDisplay ? 
   <div id="lightbox" onClick={hideLightBox}>
          <button onClick={showPrev}><i class="far fa-chevron-left"></i>  </button>
          <img id="lightbox-img" src={imageToShow}/>
          <button onClick={showNext}> <i class="far fa-chevron-right"></i> </button>
        </div>
       : "" }
                    
                    </div>
                 
                </div>
            </section>
          
       
    )
}

export default ImageLibrary
