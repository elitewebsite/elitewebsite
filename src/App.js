import './App.css';
import Nav from './Components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer'
import Home from './Components/Home'
import { Routes, Route } from 'react-router-dom'
import Series from './Components/Series'
import Products from './Components/Products'
import About from './Components/About'
import { Singleproduct } from './Components/Singleproduct';
import Gallery from './Components/Gallery';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact'
import Notfound from './Components/Notfound';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/series/:mainlight" element={<Series />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productinfo" element={<Singleproduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
