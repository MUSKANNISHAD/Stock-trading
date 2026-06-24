import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './LandingPage/Home/homePage.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from './LandingPage/signUp/signup.jsx';
import Pricing from './LandingPage/Home/Pricing.jsx';
import AboutPage from './LandingPage/About/AboutPage.jsx';
import SupportPage from './LandingPage/Support/SupportPage.jsx';
import Navbar from './LandingPage/Navbar.jsx';
import Footer from './LandingPage/Home/Footer.jsx';
import NotFound from './LandingPage/NotFound.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path=".signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/support" element={<SupportPage />} />
      {/* <Route path="/products/" element={<ProductPage/>}/> */}
      <Route path="*"  element={<NotFound/>}/>
    </Routes>
    <Footer />

  </BrowserRouter>
)
