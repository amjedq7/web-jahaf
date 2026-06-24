import { Link } from 'react-router-dom'
import bgImage from '../assets/web-jahaf-background.jpeg'

export default function Home() {
  return (
    <div className="-mt-8">
      
      {/* HERO SEKCE */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat min-h-[600px] flex items-center py-20 lg:py-24"
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

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link 
                to="/o-nas" 
                className="bg-white/10 hover:bg-white/20 text-white text-center px-8 py-3.5 rounded-lg font-semibold backdrop-blur-sm border border-white/20 transition-colors"
              >
                O nás
              </Link>
              <Link 
                to="/sluzby" 
                className="bg-blue-600 hover:bg-blue-500 text-white text-center px-8 py-3.5 rounded-lg font-semibold shadow-lg transition-colors"
              >
                Služby
              </Link>
              <Link 
                to="/kontakt" 
                className="bg-white/10 hover:bg-white/20 text-white text-center px-8 py-3.5 rounded-lg font-semibold backdrop-blur-sm border border-white/20 transition-colors"
              >
                Kontakt
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
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-100 text-lg">Přijímáme nové pacienty</h4>
                    <p className="text-sm text-emerald-200/80 mt-1">Kapacita ordinace aktuálně umožňuje registraci nových pacientů.</p>
                  </div>
                </div>

                {/* Upozornění na dovolenou */}
                <div className="bg-amber-500/20 border border-amber-400/30 rounded-xl p-4 flex items-start gap-4">
                  <div className="text-amber-400 mt-0.5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-100 text-lg">Dovolená</h4>
                    <p className="text-sm text-amber-200/80 mt-1">Momentálně nečerpáme žádnou dovolenou</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TŘI HLAVNÍ PILÍŘE ORDINACE */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Proč navštívit naši ordinaci?</h2>
          <p className="text-slate-600 text-lg">Zakládáme si na profesionalitě, špičkové diagnostice a individuálním přístupu ke každému pacientovi.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Výhoda 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 hover:border-blue-300 transition-all duration-300 group flex flex-col items-center text-center justify-center min-h-[200px]">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Moderní diagnostika</h3>
            <p className="text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors">
              Ordinace je vybavena pro kompletní ultrazvukovou diagnostiku, vyšetřování tumor-markerů (PSA) i provádění biopsií.
            </p>
          </div>

          {/* Výhoda 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 hover:border-blue-300 transition-all duration-300 group flex flex-col items-center text-center justify-center min-h-[200px]">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Zkušený specialista</h3>
            <p className="text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors">
              MUDr. Jahaf má bohaté zkušenosti s léčbou urologických onemocnění. Mluví česky, anglicky, německy a arabsky.
            </p>
          </div>

          {/* Výhoda 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 hover:border-blue-300 transition-all duration-300 group flex flex-col items-center text-center justify-center min-h-[200px]">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Smluvní pojišťovny</h3>
            <p className="text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors">
              Máme smlouvy s většinou zdravotních pojišťoven: <span className="font-semibold text-slate-800">VZP, ZPMV, ČPZP, OZP, VoZP a RBP</span>.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
