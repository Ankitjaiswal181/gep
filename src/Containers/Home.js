import React from 'react'
import Body from '../Components/Body'
import ImageLibrary from '../Components/ImageLibrary'
import Informational from '../Components/Informational'
import UpcomingEvent from '../Components/UpcomingEvent'
import { SRLWrapper } from 'simple-react-lightbox'
const Home = () => {
    return (
        <>
        
          <Body/>
          <Informational/>
          <UpcomingEvent/>
          <ImageLibrary/>  
    
        </>
    )
}

export default Home
