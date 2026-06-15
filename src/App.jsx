import './App.css'
import { Routes, Route } from "react-router-dom";
import Topbar from "./Headers/Topbar"
import Header from "./Headers/Header"
import Home from "./Pages/Home"
import About from "./Pages/About"
import MainFooter from "./Footers/MainFooter";
import ShopAll from "./Pages/ShopAll"
import FooterTwo from "./Footers/FooterTwo"
import Contact from "./Pages/Contact"
function App() {
  return (
    <>
      <section id='topbar' className='py-3'>
        <Topbar text='5% off your first purchase! Shop now!' />
      </section>
      <header className='py-3' id='mainHeader'>
        <Header />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/shop" element={<ShopAll />} />
         <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className="mt-10" style={{ backgroundColor: '#eeeeeebf', }}>
        <FooterTwo />
      </footer>
    </>
  )
}

export default App
