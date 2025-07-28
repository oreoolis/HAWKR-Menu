import './App.css';

import NavBar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Menu from './pages/menu';
import Business from './pages/business';
import Contact from './pages/contact';
import Footer from './components/footer';

const bg_style = {
  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url(${process.env.REACT_APP_BG_URL})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  margin: 0,
  padding: 0,
  height: '100%',
}

function App() {
  return (
    <div className="main" style={bg_style}>
      <Router>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/business" element={<Business />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
