import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </Router>

  </StrictMode>
)
