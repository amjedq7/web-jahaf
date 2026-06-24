import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto">
      <div className="container mx-auto px-4 py-8 lg:py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8 lg:gap-10">
          
          {/* Brand Info (Left) */}
          <div className="max-w-sm">
            <h3 className="text-2xl font-extrabold text-white tracking-wider mb-2">
              UROLOGIE JAHAF
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Odborná urologická ambulance
            </p>
          </div>

          {/* Navigation Links (Middle) */}
          <div className="flex flex-col mt-4 md:mt-0">
            {/* Added w-fit so the grid hugs the links, perfectly centering the title above them on mobile */}
            <div className="grid grid-cols-2 gap-x-8 md:gap-x-12 gap-y-3 w-fit">
              <h4 className="text-lg font-bold text-white mb-2 col-span-2 text-center md:-ml-5">Menu</h4>
              
              <Link to="/" className="hover:text-blue-400 transition-colors w-fit">Domů</Link>
              <Link to="/pojisteni" className="hover:text-blue-400 transition-colors w-fit">Pojištění</Link>
              <Link to="/o-nas" className="hover:text-blue-400 transition-colors w-fit">O nás</Link>
              <Link to="/ordinace" className="hover:text-blue-400 transition-colors w-fit">Ordinace</Link>
              <Link to="/sluzby" className="hover:text-blue-400 transition-colors w-fit">Služby</Link>
              <Link to="/kontakt" className="hover:text-blue-400 transition-colors w-fit">Kontakt</Link>
            </div>
          </div>

          {/* Contact Info (Right) */}
          <div className="flex flex-col mt-4 md:mt-0">
            <Link to="/kontakt" className="text-lg font-bold text-white hover:text-blue-400 transition-colors mb-4 w-fit block">
              Kontakt
            </Link>
            <div className="flex flex-col gap-3">
              <a href="tel:+420770666268" className="hover:text-blue-400 transition-colors flex items-center gap-3 w-fit">
                <span className="text-xl">📞</span> <span className="font-medium text-slate-200">+420 770 666 268</span>
              </a>
              <a href="mailto:ordinace@urologie-jahaf.cz" className="hover:text-blue-400 transition-colors flex items-center gap-3 w-fit">
                <span className="text-xl">✉️</span> <span className="font-medium text-slate-200">ordinace@urologie-jahaf.cz</span>
              </a>
              <div className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <span className="font-medium text-slate-200">
                  Krupská 3291<br />
                  415 01 Teplice
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="max-w-6xl mx-auto border-t border-slate-800 mt-8 pt-6 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Urologie Jahaf. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  )
}
