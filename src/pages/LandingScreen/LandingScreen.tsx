import React from 'react'
import Hero from './Hero'
import BodyCard from './BodyCard'
import Youtube from './Youtube'
import Dragged from './Dragged'
import DraggingPage from '../HomeScreen/DraggingPage'

const LandingScreen = () => {
    return (
        <div>
            <Hero />
            <BodyCard />
            <Youtube />
            <br />
            <br />
            <br />

            {/* <Dragged /> */}
            <br />
            <br />
            <br />
            <DraggingPage />

        </div>
    )
}

export default LandingScreen