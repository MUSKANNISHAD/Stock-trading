import React, { useState } from 'react'

import { BuyActionWindow } from "./BuyActionWindow.jsx";


export const GeneralContext = React.createContext({

  openBuyWindow: (uid) => { },
  closeBuyWindow: () => { },
})


export const GeneralContextProvider = (props) => {

  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUid, setSelectedStockUid] = useState("");

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUid(uid);
  }

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUid("");
  }

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow
      }}>
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUid} />}
    </GeneralContext.Provider>
  )
}
