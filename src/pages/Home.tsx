import { Megaphone } from 'lucide-react'
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
          <div className="max-w-2xl lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Odborná urologická péče pro vaše zdraví
            </h1>
            
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-xl">
              MUDr. Abbas Jahaf nabízí komplexní vyšetření močových cest, prostaty a onkologickou prevenci v moderně vybavené ordinaci.
            </p>
          </div>

          {/* Pravá strana - Informační panel */}
          <div className="w-full lg:w-1/2 max-w-lg mx-auto lg:mx-0 lg:ml-auto">
            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 lg:p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Megaphone className="w-6 h-6 text-blue-400" /> Aktuální informace
              </h3>
              
              <div className="bg-slate-800/80 border border-slate-700/50 rounded-xl p-5 lg:p-6">
                
                {/* Přijímáme nové pacienty */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="text-emerald-400 bg-emerald-500/20 p-2 rounded-lg shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-emerald-400 text-lg">Přijímáme nové pacienty</h4>
                </div>

                {/* Oddělovač a informace o dovolené */}
                <div className="border-t border-slate-700/50 pt-5">
                  <p className="text-sky-300 flex items-center gap-3 font-medium text-base">
                    <span className="text-sky-400 shrink-0 bg-sky-500/20 p-1.5 rounded-lg">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </span>
                    Momentálně nečerpáme žádnou dovolenou.
                  </p>
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
            <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Moderná diagnostika</h3>
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
