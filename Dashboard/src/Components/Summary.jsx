import React from "react";

export default function Summary() {
    return (
        <div className="summary-page">

            {/* Page Header */}
            <div className="summary-header">
                <div>
                    <h1>Good morning, User 👋</h1>
                    <p>Here's your portfolio overview for today.</p>
                </div>

                <div className="market-status">
                    <span className="status-dot"></span>
                    Market overview
                </div>
            </div>

            {/* Equity Section */}
            <section className="summary-section">

                <div className="section-heading">
                    <div>
                        <h2>Equity</h2>
                        <p>Your account balance and available funds</p>
                    </div>
                </div>

                <div className="summary-grid">

                    {/* Available Balance */}
                    <div className="summary-card balance-card">
                        <div className="card-label">
                            Available margin
                        </div>

                        <h3>₹3,740.00</h3>

                        <div className="card-footer">
                            <span className="card-icon">₹</span>
                            <span>Ready to invest</span>
                        </div>
                    </div>

                    {/* Opening Balance */}
                    <div className="summary-card">
                        <div className="card-label">
                            Opening balance
                        </div>

                        <h3>₹3,740.00</h3>

                        <div className="card-footer">
                            <span>Today's starting balance</span>
                        </div>
                    </div>

                    {/* Used Margin */}
                    <div className="summary-card">
                        <div className="card-label">
                            Margins used
                        </div>

                        <h3>₹0.00</h3>

                        <div className="card-footer">
                            <span className="neutral-badge">
                                0% utilized
                            </span>
                        </div>
                    </div>

                </div>
            </section>

            {/* Holdings Section */}
            <section className="summary-section">

                <div className="section-heading">
                    <div>
                        <h2>Holdings</h2>
                        <p>Your long-term investment portfolio</p>
                    </div>

                    <span className="holdings-count">
                        13 Stocks
                    </span>
                </div>

                <div className="summary-grid">

                    {/* Total P&L */}
                    <div className="summary-card pnl-card">
                        <div className="card-label">
                            Total P&L
                        </div>

                        <h3 className="profit">
                            +₹1,550.00
                        </h3>

                        <span className="profit-badge">
                            ↗ +5.20%
                        </span>
                    </div>

                    {/* Current Value */}
                    <div className="summary-card">
                        <div className="card-label">
                            Current value
                        </div>

                        <h3>₹31,430.00</h3>

                        <div className="card-footer">
                            <span>Market value of holdings</span>
                        </div>
                    </div>

                    {/* Investment */}
                    <div className="summary-card">
                        <div className="card-label">
                            Total investment
                        </div>

                        <h3>₹29,880.00</h3>

                        <div className="card-footer">
                            <span>Amount invested</span>
                        </div>
                    </div>

                </div>
            </section>

            {/* Portfolio Insight */}
            <section className="portfolio-insight">

                <div className="insight-icon">
                    ↗
                </div>

                <div>
                    <h3>Your portfolio is in profit!</h3>
                    <p>
                        Your holdings have generated a return of
                        <strong> 5.20% </strong>
                        on your total investment.
                    </p>
                </div>

            </section>

        </div>
    );
}
