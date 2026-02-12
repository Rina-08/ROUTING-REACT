import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Register from './Pages/Register';
import Login from './Pages/Login';

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
           <Route path="/login" element={<Login />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
};

export default App;
