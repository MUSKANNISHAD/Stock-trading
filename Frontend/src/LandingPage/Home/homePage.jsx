import React from 'react';
import Hero from './Hero.jsx';
import Awards from './Awards';
import Education from './Education';
import Pricing from './Pricing';
import Footer from './Footer';
import Navbar from '../Navbar';
import Stats from '../Stats';
import OpenAccount from '../OpenAccount';


export default function homePage() {
    return (
        <div>
            <>
                <Navbar />
                <Hero />
                <Awards />
                <Stats />
                <Pricing />
                <Education />
                <OpenAccount />
                <Footer />




            </>
        </div>
    )
}
