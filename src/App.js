import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'

//components
import Nav from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About'
import Series from './Components/Series'
import Products from './Components/Products'
import { Singleproduct } from './Components/Singleproduct';
import Gallery from './Components/Gallery';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact'
import Notfound from './Components/Notfound';
import Footer from './Components/Footer'
import MainLightData from './Components/MainLightData';


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/series/:mainlight" element={<Series />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productinfo" element={<Singleproduct />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mainlightcategories" element={<MainLightData />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
