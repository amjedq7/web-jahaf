import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  const location = useLocation()
  const [highlight, setHighlight] = useState('')

  useEffect(() => {
    if (location.hash) {
      const scrollTimer = setTimeout(() => {
        const id = location.hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 150)

      const startTimer = setTimeout(() => setHighlight(location.hash), 200)
      
      const endTimer = setTimeout(() => {
        setHighlight('')
      }, 2200)
      
      return () => {
        clearTimeout(scrollTimer)
        clearTimeout(startTimer)
        clearTimeout(endTimer)
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.hash, location.key])

  const getGlow = (id: string) => {
    return highlight === id
      ? "border-blue-400 ring-4 ring-blue-400/30 shadow-[0_0_35px_rgba(59,130,246,0.35)] scale-[1.02] transition-all duration-300 z-10"
      : "border-slate-100 shadow-sm transition-all duration-1000"
  }

  return (
    <div className="container mx-auto px-4 pt-0 pb-16 lg:pb-24 animate-fade-in">
      
      <div className="text-center max-w-7xl mx-auto mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-4">Kontakt a Ordinační hodiny</h1>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
        
        <div className="flex flex-col gap-6">
          {/* Kontaktní údaje */}
          <div id="kontakt" className={`bg-white p-8 rounded-2xl ${getGlow('#kontakt')} relative scroll-mt-28`}>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Kontaktní údaje</h2>
            
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Telefon</p>
                  <a href="tel:+420770666268" className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    +420 770 666 268
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">E-mail</p>
                  <a href="mailto:ordinace@urologie-jahaf.cz" className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    ordinace@urologie-jahaf.cz
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Adresa ordinace</p>
                  <p className="text-lg font-medium text-slate-900">
                    Krupská 3291 <br />
                    415 01 Teplice
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="bg-slate-200 h-72 sm:h-80 rounded-2xl overflow-hidden border border-slate-100 relative shadow-sm">
            <iframe 
              title="Mapa ordinace - Krupská 3291, Teplice"
              src="https://maps.google.com/maps?q=Krupsk%C3%A1%203291,%20Teplice&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {/* Ordinační hodiny */}
          <div id="hodiny" className={`bg-white p-8 rounded-2xl flex flex-col ${getGlow('#hodiny')} relative scroll-mt-28`}>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Ordinační hodiny</h2>
            
            <div className="divide-y divide-slate-100 flex-grow flex flex-col justify-center">
              <div className="py-5 flex justify-between items-center">
                <span className="text-lg font-bold text-slate-700">Pondělí</span>
                <span className="text-lg text-slate-900 font-bold">15:00 - 18:00</span>
              </div>
              <div className="py-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
                <span className="text-lg font-bold text-slate-700">Úterý</span>
                <span className="text-lg text-slate-900 font-bold text-left sm:text-right">
                  07:00 - 12:00 <span className="hidden sm:inline text-slate-400 mx-1">|</span><br className="sm:hidden" /> 13:00 - 17:00
                </span>
              </div>
              <div className="py-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
                <span className="text-lg font-bold text-slate-700">Středa</span>
                <span className="text-lg text-slate-900 font-bold text-left sm:text-right">
                  07:00 - 12:00 <span className="hidden sm:inline text-slate-400 mx-1">|</span><br className="sm:hidden" /> 13:00 - 17:00
                </span>
              </div>
              <div className="py-5 flex justify-between items-center">
                <span className="text-lg font-bold text-slate-700">Čtvrtek</span>
                <span className="text-lg text-slate-900 font-bold">15:00 - 18:00</span>
              </div>
              <div className="py-5 flex justify-between items-center">
                <span className="text-lg font-bold text-slate-700">Pátek</span>
                <span className="text-lg text-slate-900 font-bold">07:00 - 13:00</span>
              </div>
              <div className="py-5 flex justify-between items-center opacity-50">
                <span className="text-lg font-bold text-slate-500">Víkend</span>
                <span className="text-lg text-slate-500 font-bold">Zavřeno</span>
              </div>
            </div>
          </div>

          {/* Povinné informace podle § 435 NOZ */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h3 className="text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">Identifikační údaje</h3>
            <div className="text-sm text-slate-600 space-y-2 leading-relaxed">
              <p><strong className="text-slate-800 font-semibold">JAHAF UROLOGIE s.r.o.</strong></p>
              <p><strong>Sídlo:</strong> Dlouhá 40/70, Nové Modlany, 417 42 Krupka</p>
              <p><strong>IČO:</strong> 19748612</p>
              <p>
                Společnost je zapsána v obchodním rejstříku vedeném Krajským soudem v Ústí nad Labem, oddíl C, vložka 51064.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
