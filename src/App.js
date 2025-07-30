import './App.css';

import { AnimatePresence, motion } from 'framer-motion';

import NavBar from './components/navbar';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home';
import Menu from './pages/menu';
import Business from './pages/business';
import Contact from './pages/contact';
import Footer from './components/footer';

const REACT_APP_BG_URL= "https://hawkr-menuapp-bucket.s3.ap-southeast-1.amazonaws.com/images/6.png";

const bg_style = {
  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(${REACT_APP_BG_URL})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  margin: 0,
  padding: 0,
  height: '100%',
}

//animated router handler
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <Routes location = {location} key = {location.pathname}>
        <Route index element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/home" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/menu" element={<PageWrapper><Menu /></PageWrapper>} />
        <Route path="/business" element={<PageWrapper><Business /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  )
}


// renders transition animation
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}

// main app skeleton
function App() {
  return (
    <div className="main" style={bg_style}>
      <Router>
        <NavBar />
        <AnimatedRoutes />
      </Router>
      <Footer />
    </div >
  );
}

export default App;
