import { Link } from 'react-router-dom'
import bgImage from '../assets/web-jahaf-background.jpeg'

export default function Home() {
  return (
    <div className="-mt-8">
      
      {/* HERO SEKCE */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat lg:h-[600px] flex items-center py-20 lg:py-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/80 to-blue-900/40"></div>

        <div className="container mx-auto px-4 z-10 text-white flex flex-col lg:flex-row gap-12 lg:gap-8 items-center justify-between">
          
          {/* Levá strana - Hlavní text */}
          <div className="max-w-2xl lg:w-3/5">
            <span className="bg-blue-500/20 text-blue-200 border border-blue-400/30 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase inline-block">
              Urologická ordinace Teplice
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-6 mb-6 leading-tight">
              Odborná urologická péče pro vaše zdraví
            </h1>
            
            <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed max-w-xl">
              MUDr. Abbas Jahaf nabízí komplexní vyšetření močových cest, prostaty a onkologickou prevenci v moderně vybavené ordinaci.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/kontakt" 
                className="bg-blue-600 hover:bg-blue-500 text-white text-center px-8 py-3.5 rounded-lg font-semibold shadow-lg transition-colors"
              >
                Zobrazit kontakty a ordinaci
              </Link>
              <Link 
                to="/o-klinice" 
                className="bg-white/10 hover:bg-white/20 text-white text-center px-8 py-3.5 rounded-lg font-semibold backdrop-blur-sm border border-white/20 transition-colors"
              >
                Přehled vyšetření
              </Link>
            </div>
          </div>

          {/* Pravá strana - Informační panel */}
          <div className="w-full lg:w-2/5 max-w-md mx-auto lg:mx-0">
            <div className="bg-slate-900/50 backdrop-blur-md border border-white/20 rounded-2xl p-6 lg:p-8 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-3">
                <span className="text-2xl">📢</span> Aktuální informace
              </h3>
              
              <div className="space-y-4">
                
                {/* Přijímáme nové pacienty */}
                <div className="bg-emerald-500/20 border border-emerald-400/30 rounded-xl p-4 flex items-start gap-4">
                  <div className="text-emerald-400 mt-0.5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Přijímáme nové pacienty</h4>
                    <p className="text-emerald-100 text-sm mt-1">Ordinace je plně otevřena pro nové pacienty.</p>
                  </div>
                </div>

                {/* Objednávání */}
                <div className="bg-blue-500/20 border border-blue-400/30 rounded-xl p-4 flex items-start gap-4">
                  <div className="text-blue-300 mt-0.5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Nutné objednání</h4>
                    <p className="text-blue-100 text-sm mt-1">K vyšetření se prosím předem objednejte.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
