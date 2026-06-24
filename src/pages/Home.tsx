import { Link } from 'react-router-dom'
import bgImage from '../assets/web-jahaf-background.jpeg'

export default function Home() {
  return (
    <div className="-mt-8">
      
      {/* HERO SEKCE */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat h-[550px] flex items-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-transparent"></div>

        <div className="container mx-auto px-4 z-10 text-white max-w-3xl">
          <span className="bg-blue-500/20 text-blue-200 border border-blue-400/30 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase">
            Urologická ambulance Teplice
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-6 mb-6 leading-tight">
            Odborná urologická péče pro vaše zdraví
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
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
      </section>

      {/* TŘI HLAVNÍ PILÍŘE ORDINACE */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Proč navštívit naši ambulanci?</h2>
          <p className="text-slate-600 text-lg">Zakládáme si na profesionalitě, špičkové diagnostice a individuálním přístupu ke každému pacientovi.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Výhoda 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="h-14 w-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 font-bold text-2xl mb-6">🩺</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Moderní diagnostika</h3>
            <p className="text-slate-600">
              Ordinace je vybavena pro kompletní ultrazvukovou diagnostiku, vyšetřování tumor-markerů (PSA) i provádění biopsií.
            </p>
          </div>

          {/* Výhoda 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="h-14 w-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 font-bold text-2xl mb-6">👨‍⚕️</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Zkušený specialista</h3>
            <p className="text-slate-600">
              MUDr. Jahaf má bohaté zkušenosti s léčbou urologických onemocnění. Mluví plynule česky, anglicky, německy a arabsky.
            </p>
          </div>

          {/* Výhoda 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="h-14 w-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 font-bold text-2xl mb-6">📋</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Smluvní pojišťovny</h3>
            <p className="text-slate-600">
              Spolupracujeme s většinou zdravotních pojišťoven: <span className="font-semibold text-slate-800">VZP, ZPMV, ČPZP, OZP, VoZP a RBP</span>.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
