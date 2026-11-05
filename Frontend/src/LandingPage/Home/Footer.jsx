import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Footer.css";

export default function Footer() {
  const location = useLocation();
  const handleSamePageClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };
  return (
    <div className="container border-top mb-5 mt-8 pt-5">
      <div className="row">
        <div className="col">
          <img src="/media/logo.svg" alt="logo" style={{ width: "50%" }} /> <br></br>
          <br></br>
          <p> &copy; 2010-2024, not zerodha broking Ltd. <br></br>All rights reserves.</p>
        </div>
        <div className="col">
          <h5>Company</h5>
          <Link to="/about" onClick={() => handleSamePageClick("/about")} style={{ textDecoration: "none" }}>About</Link><br></br>
          <Link to="/products/" onClick={() => handleSamePageClick("/products/")} style={{ textDecoration: "none" }}>Products</Link><br></br>
          <Link to="/pricing" onClick={() => handleSamePageClick("/pricing")}style={{ textDecoration: "none" }}>Pricing</Link><br></br>
          <Link to="#" onClick={() => handleSamePageClick("#")} style={{ textDecoration: "none" }}>Refferal Programme</Link><br></br>
          <Link to="#" onClick={() => handleSamePageClick("#")} style={{ textDecoration: "none" }}>Carrers</Link><br></br>
          <Link to="#" onClick={() => handleSamePageClick("#")} style={{ textDecoration: "none" }}>Zerodha.tech</Link><br></br>
          <Link to="#" onClick={() => handleSamePageClick("#")} style={{ textDecoration: "none" }}>Press & media</Link><br></br>
          <Link to="#" onClick={() => handleSamePageClick("#")} style={{ textDecoration: "none" }}>Zerodha care(CSR)</Link> <br></br>

        </div>
        <div className="col">
          <h5>Support</h5>
          <Link to="#" onClick={() => handleSamePageClick("#")} style={{ textDecoration: "none" }}> Contact</Link><br></br>
          <Link to="/support" onClick={() => handleSamePageClick("/support")} style={{ textDecoration: "none" }}>Support Portal</Link><br></br>
          <Link to="#" onClick={() => handleSamePageClick("#")} style={{ textDecoration: "none" }}>Z-Connect blog</Link><br></br>
          <Link to="#" onClick={() => handleSamePageClick("#")} style={{ textDecoration: "none" }}>List of Charges</Link><br></br>
          <Link to="#" onClick={() => handleSamePageClick("#")} style={{ textDecoration: "none" }}>Downloads & Resources</Link>
        </div>
        <div className="col">
          <h5>Account</h5>
          <Link style={{ textDecoration: "none" }} to="#" onClick={() => handleSamePageClick("#")}>Open an Account</Link><br></br>
          <Link style={{ textDecoration: "none" }} to="#" onClick={() => handleSamePageClick("#")}> Fund Transfer</Link><br></br>
          <Link style={{ textDecoration: "none" }} to="#" onClick={() => handleSamePageClick("#")}> 60 day challange</Link>

        </div>

      </div>
      <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
        <p>
          Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
          INZ000031633 CDSL: Depository services through Zerodha Securities
          Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
          through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
          no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
          #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
          J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
          complaints pertaining to securities broking please write to
          complaints@zerodha.com, for DP related to dp@zerodha.com. Please
          ensure you carefully read the Risk Disclosure Document as prescribed
          by SEBI | ICF
        </p>
        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name,
          PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
          Communication, Speedy redressal of the grievances
        </p>

        <p>
          Investments in securities market are subject to market risks; read
          all the related documents carefully before investing.
        </p>
        <p>
          "Prevent unauthorised transactions in your account. Update your
          mobile numbers/email IDs with your stock brokers. Receive
          information of your transactions directly from Exchange on your
          mobile/email at the end of the day. Issued in the interest of
          investors. KYC is one time exercise while dealing in securities
          markets - once KYC is done through a SEBI registered intermediary
          (broker, DP, Mutual Fund etc.), you need not undergo the same
          process again when you approach another intermediary." Dear
          Investor, if you are subscribing to an IPO, there is no need to
          issue a cheque. Please write the Bank account number and sign the
          IPO application form to authorize your bank to make payment in case
          of allotment. In case of non allotment the funds will remain in your
          bank account. As a business we don't give stock tips, and have not
          authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please
          create a ticket here.
        </p>
      </div>
    </div>
  )
}
