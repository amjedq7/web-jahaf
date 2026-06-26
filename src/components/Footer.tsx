import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto">
      <div className="container mx-auto px-4 py-8 lg:py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 lg:gap-10">
          
          <div className="max-w-sm flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl font-extrabold text-white tracking-wider mb-2">
              UROLOGIE JAHAF
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Odborná urologická ambulance
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start mt-4 md:mt-0">
            <div className="grid grid-cols-2 gap-x-8 md:gap-x-12 gap-y-3 w-fit text-center md:text-left">
              <h4 className="text-lg font-bold text-white mb-2 col-span-2">Menu</h4>
              
              <Link to="/" className="hover:text-blue-400 transition-colors">Domů</Link>
              <Link to="/pojisteni" className="hover:text-blue-400 transition-colors">Pojištění</Link>
              <Link to="/o-nas" className="hover:text-blue-400 transition-colors">O nás</Link>
              <Link to="/ordinace" className="hover:text-blue-400 transition-colors">Ordinace</Link>
              <Link to="/sluzby" className="hover:text-blue-400 transition-colors">Služby</Link>
              <Link to="/kontakt" className="hover:text-blue-400 transition-colors">Kontakt</Link>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start mt-4 md:mt-0">
            <Link to="/kontakt" className="text-lg font-bold text-white hover:text-blue-400 transition-colors mb-4 w-fit block text-center md:text-left">
              Kontakt
            </Link>
            <div className="flex flex-col items-center md:items-start gap-3">
              <a href="tel:+420770666268" className="hover:text-blue-400 transition-colors flex items-center justify-center md:justify-start gap-3 w-fit">
                <Phone className="w-5 h-5" /> <span className="font-medium text-slate-200">+420 770 666 268</span>
              </a>
              <a href="mailto:ordinace@urologie-jahaf.cz" className="hover:text-blue-400 transition-colors flex items-center justify-center md:justify-start gap-3 w-fit">
                <Mail className="w-5 h-5" /> <span className="font-medium text-slate-200">ordinace@urologie-jahaf.cz</span>
              </a>
              <div className="flex items-start justify-center md:justify-start gap-3 w-fit">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span className="font-medium text-slate-200 text-left">
                  Krupská 3291<br />
                  415 01 Teplice
                </span>
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-6xl mx-auto border-t border-slate-800 mt-8 pt-6 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Urologie Jahaf. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  )
}
