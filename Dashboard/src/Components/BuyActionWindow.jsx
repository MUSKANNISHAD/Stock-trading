import { Link } from "react-router-dom";
import "./BuyActionWindow.css";
import { GeneralContext } from "./GeneralContext.jsx";
import { useState } from "react";
import { ClientServer } from '../ClientServer.js';



export const BuyActionWindow = ({ uid }) => {

    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);

    const handleBuyClick = () => {
        ClientServer.post("/newOrder", {
            name: uid,
            qty: stockQuantity,
            price: stockPrice,
            mode: "BUY"
        });
        GeneralContext.closoBuyWindow();
    };

    const handleCancleClick = () => {
        GeneralContext.closoBuyWindow();
    }

    return (
        <div className="container" id="buy-window" draggable="true">
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input
                            type="number"
                            name="qty"
                            id="qty"
                            value={stockQuantity}
                            onChange={(e) => setStockQuantity(e.target.value)}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Price</legend>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            step="0.05"
                            value={stockPrice}
                            onChange={(e) => setStockPrice(e.target.value)}
                        />
                    </fieldset>
                </div>
            </div>
            <div className="buttons">
                <span>Margin required $140.65</span>
                <Link className="btn btn-blue" onClick={handleBuyClick}>Buy</Link>
                <Link className="btn btn-grey" onClick={handleCancleClick}>Cancel</Link>
            </div>
        </div>
    );
}
