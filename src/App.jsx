import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './navbar'
import Home from './page/home'
import About from './page/about'
import Services from './page/services'
import Portofolio from './page/portofolio'
import Contact from './page/contact'

function Footer() {
  return (
    <footer className="border-t border-pink-100 bg-white px-6 py-6 text-center">
      <p className="font-bold text-[#B85C82]">
        Pinkora Creative
      </p>
      <p className="mt-2 text-sm text-[#725565]">
        © {new Date().getFullYear()} Pinkora Creative.
        All rights reserved.
      </p>
    </footer>
  )
}

function App() {
  return (
    <>

    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/portofolio" element={<Portofolio/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </BrowserRouter>

  </>
  )
}

export default App