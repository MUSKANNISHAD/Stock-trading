import React from 'react';
import LeftSection from './LeftSection.jsx';
import RightSection from './RightSection.jsx';
import Universe from './Universe.jsx';
import Hero from './Hero.jsx';

export default function productPage() {
    return (
        <div>
            <Hero />
            <LeftSection imageUrl="/media/kite.png"
                productName="kite"
                productDescription="Our ultra fast flagship trading platform with streaming market data,adavandced charts an elegant Ui and more.Enjoy the kite expericen seamlessly on your Android and IOS devices "
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore="" />
            <RightSection
                imageUrl="/media/console.png"
                productDescription="The central deashboard for your Zerodha account .Gain insights into your trades and investmenst with-in depth reports and visualisations."
                productName="Console"
                learnMore="" />
            <LeftSection imageUrl="/media/coin.png"
                productName="Coin"
                productDescription="Buy direct mutual funds online,commision-free ,delivered directly to your demat account.
                Enjoy the investment experince on your Android and IOS devices "
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore="" />
            <RightSection
                imageUrl="/media/kiteconnect.png"
                productDescription="Build Powerful trading platforms and experince with our super simple http/JSON APIs.if you are a startup ,build your investment appand showcase it our clientbase."
                productName="Kite Connect API"
                learnMore="" />
            <LeftSection imageUrl="/media/varsity.png"
                productName="Varsity mobile"
                productDescription="An easy to grasp,collection of stock market lessons with-in depth coverage and illustrations.Content is broken down into bite-Size cards to help you learn on the  go."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore="" />
                <p>Want to know more about our technology stack?Checkout the Zerodha.tech blog.</p>
            <Universe />

        </div>
    )
}
