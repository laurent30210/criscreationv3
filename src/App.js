import React from 'react';
import { motion } from 'framer-motion';

import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import Instagram from './components/Instagram';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Price from './components/Price';

function App() {
  return (
    <motion.div initial="hidden" animate="show">  
        <ScrollToTop />
        <Home />
        <About />
        <Instagram />
        <Services />
        <Portfolio />
        <Price />
        <Contact />
        <Footer />    
      </motion.div>  )
}


export default App