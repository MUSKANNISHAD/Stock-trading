import React from 'react'

export default function Hero() {
    return (
        <div className="container">
            <div className="row p-5 mt-5 border-bottom text-center">
                <h1>Pricing</h1>
                <h3 className='fs-4 text-muted mt-3'>Free equity investments and flat ₹20 traday and F&O trades </h3>
            </div>
            <div className="row p-5 mt-5">

                <div className="col-4 text-center">
                    <img src="/media/pricing0.svg" alt="pricing0" />
                    <h2 className='fs-3'>Free equity deliver</h2>
                    <p>All equity delivery investments(NSE,BSE) are absolutely free- ₹0 brokerage.</p>
                </div>
                <div className="col-4 text-center">
                    <img src="/media/intradayTrades.svg" alt="pricing0" />
                    <h2 className='fs-3'>Intraday and F&O <br></br> trades</h2>
                    <p>Flat Rs.20 or 0.03% (whichever is lower ) per executed order on intraday trades accross equity,currency and commodity trades</p>

                </div>
                <div className="col-4 text-center">
                    <img src="/media/pricing0.svg" alt="pricing0" />
                    <h2 className='fs-3'>Free direct MF</h2>
                    <p>All direct mutual funds investments are absolutely free -₹0 commision and DP charges.</p>
                </div>


            </div>

        </div >
    )
}
