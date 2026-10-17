import { Link } from 'react-router-dom'
import logo from './assets/hero.png'

function Navbar () {
    return (
        <>

        <nav className="sticky top-0 z-50 border-b border-pink-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

            <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Logo Pinkora Creative" className="h-12 w-12 object-contain"/>

            <span className="text-lg font-bold tracking-wide text-[#B85C82]"> Pinkora Creative
            </span>
            </Link>

            <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm font-medium text-[#422536] md:gap-6">
                <Link to="/" className="transition duration-200 hover:text-[#B85C82]"> Home</Link>

                <Link to="/about" className="transition duration-200 hover:text-[#B85C82]"> About </Link>

                <Link to="/services" className="transition duration-200 hover:text-[#B85C82]"> Services </Link>

                <Link to="/portofolio" className="transition duration-200 hover:text-[#B85C82]">Portofolio</Link>

                <Link to="/contact" className="transition duration-200 hover:text-[#B85C82]"> Contact </Link>

            </div>
        </div>
        </nav>
        
        </>
    )
}

export default Navbar
