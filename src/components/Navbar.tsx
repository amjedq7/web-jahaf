import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/web-jahaf-logo.jpg' 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const closeMenu = () => setIsOpen(false)

  // Dynamic classes for Desktop links
  const desktopLink = (path: string) => {
    return location.pathname === path
      ? "text-blue-700 border-b-2 border-blue-600 pb-1 transition-colors"
      : "text-slate-600 hover:text-blue-600 border-b-2 border-transparent pb-1 transition-colors"
  }

  // Dynamic classes for Mobile links
  const mobileLink = (path: string) => {
    return location.pathname === path
      ? "block py-3.5 text-blue-700 font-bold border-l-4 border-blue-600 pl-6 bg-blue-50/50"
      : "block py-3.5 text-slate-600 hover:text-blue-600 border-l-4 border-transparent pl-6 border-b border-slate-50"
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Left Side: Logo and Title */}
        <Link to="/" className="flex items-center gap-4 sm:gap-5" onClick={closeMenu}>
          <img 
            src={logo} 
            alt="Logo Urologie Jahaf" 
            className="h-14 sm:h-20 w-auto object-contain rounded-sm" 
          />
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-extrabold text-blue-950 tracking-wider">
              UROLOGIE JAHAF
            </span>
            <span className="text-sm sm:text-base text-slate-500 font-bold uppercase tracking-widest hidden sm:block">
              MUDr. Abbas Jahaf
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-6 xl:gap-8 font-semibold text-lg items-center">
          <Link to="/" className={desktopLink("/")}>Domů</Link>
          <Link to="/o-nas" className={desktopLink("/o-nas")}>O nás</Link>
          <Link to="/sluzby" className={desktopLink("/sluzby")}>Služby</Link>
          <Link to="/pojisteni" className={desktopLink("/pojisteni")}>Pojištění</Link>
          <Link to="/ordinace" className={desktopLink("/ordinace")}>Ordinace</Link>
          <Link to="/kontakt" className={desktopLink("/kontakt")}>Kontakt</Link>
          
          <Link 
            to="/kontakt" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-full shadow-sm transition-colors hidden xl:block"
          >
            Ordinační doba
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="lg:hidden p-2 text-slate-600 hover:text-blue-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl z-40">
          <div className="flex flex-col py-3 font-semibold text-lg">
            <Link to="/" onClick={closeMenu} className={mobileLink("/")}>Domů</Link>
            <Link to="/o-nas" onClick={closeMenu} className={mobileLink("/o-nas")}>O nás</Link>
            <Link to="/sluzby" onClick={closeMenu} className={mobileLink("/sluzby")}>Služby</Link>
            <Link to="/pojisteni" onClick={closeMenu} className={mobileLink("/pojisteni")}>Pojištění</Link>
            <Link to="/ordinace" onClick={closeMenu} className={mobileLink("/ordinace")}>Ordinace</Link>
            <Link to="/kontakt" onClick={closeMenu} className={mobileLink("/kontakt")}>Kontakt</Link>
            
            <div className="px-6 mt-5 mb-2">
              <Link 
                to="/kontakt" 
                onClick={closeMenu}
                className="block bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-4 rounded-xl shadow-sm transition-colors"
              >
                Ordinační doba
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
