import './App.css';
import Nav from './Components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer'
import Home from './Components/Home'
import { Routes, Route } from 'react-router-dom'
import Series from './Components/Series'
import Products from './Components/Products'
import { Singleproduct } from './Components/Singleproduct';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/series/:mainlight" element={<Series />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productinfo" element={<Singleproduct />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
