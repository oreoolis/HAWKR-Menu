import './App.css';

import NavBar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Menu from './pages/menu';
import Business from './pages/business';
import Contact from './pages/contact';

function App() {
  return (
    <section className="main">
      <Router>
        <NavBar />
        <div>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/business" element={<Business />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </section>
  );
}

export default App;
