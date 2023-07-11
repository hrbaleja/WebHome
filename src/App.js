import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import HomePage from './Page/HomePage';
import ServicesPage from './Page/ServicesPage';
import SolutionsPage from './Page/SolutionsPage';
import ProductsPage from './Page/ProductsPage';
import AboutUsPage from './Page/AboutUsPage';
import ContactUsPage from './Page/ContactUsPage';
import Footer from './Component/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
