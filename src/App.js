import { Routes, Route } from 'react-router-dom';
import ContactForm from "./components/ContactForm";
import { Navbar } from "./components/Navbar";
import './App.css';
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";



function App() {
  return (
    <div className="App">
    <Navbar/>
     
    <Routes>
        <Route path="/" element={<Home />} />         {/* Home page route */}
        <Route path="/about" element={<About />} />   {/* About Us page route */}
        <Route path="/contact" element={<ContactForm />} /> {/* Contact Us page route */}
    </Routes>


     <Footer/>
    </div>
  );
}

export default App;
