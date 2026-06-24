export default function Sluzby() {
  const services = [
    {
      title: "Vyšetření močových cest",
      desc: "Komplexní diagnostika a léčba onemocnění močových cest. Řešení problémů s močovou inkontinencí a léčba močových kamenů."
    },
    {
      title: "Nádorová onemocnění",
      desc: "Prevence, včasná diagnostika a léčba nádorových onemocnění ledvin, prostaty, močového měchýře a varlat. Léčba zánětů prostaty."
    },
    {
      title: "Onemocnění varlat",
      desc: "Odborné vyšetření a léčba akutních i chronických onemocnění varlat a šourku s využitím moderních diagnostických metod."
    },
    {
      title: "Ultrazvuk a diagnostika",
      desc: "Kompletní ultrazvuková diagnostika močových cest, vyšetřování tumor-markerů (PSA) a provádění biopsií."
    },
    {
      title: "Uroflowmetrie",
      desc: "Neinvazivní a bezbolestné vyšetření průtoku moči pro přesnou diagnostiku poruch močení a stavu zbytnělé prostaty."
    },
    {
      title: "Cystoskopie",
      desc: "Detailní endoskopické vyšetření močového měchýře a močové trubice pomocí špičkového cystoskopu přímo v naší ordinaci."
    }
  ]

  return (
    <div className="container mx-auto px-4 pt-0 pb-16 lg:pb-24 animate-fade-in">
      
      {/* Header Section */}
      <div className="text-center max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950">
          S čím Vám můžeme pomoci?
        </h1>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-100 transition-all duration-300 group flex flex-col items-center text-center justify-center min-h-[200px]"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
              {service.title}
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Equipment Section */}
      <div className="max-w-6xl mx-auto bg-slate-50 rounded-3xl p-8 md:p-16 border border-slate-100">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 text-center mb-12">
          Vybavení ordinace
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-12 text-center">
          
          {/* Sonograf */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 sm:w-56 sm:h-56 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 p-4 overflow-hidden group">
              <img 
                src="/galerie/sonograf.jpg" 
                alt="Sonograf" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.classList.add('bg-slate-100');
                }}
              />
              <span className="text-5xl text-slate-300 absolute -z-10">🖥️</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">Sonograf</h3>
          </div>

          {/* Uroflowmetrie */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 sm:w-56 sm:h-56 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 p-4 overflow-hidden group">
              <img 
                src="/galerie/uroflowmetrie.jpg" 
                alt="Uroflowmetrie" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.classList.add('bg-slate-100');
                }}
              />
              <span className="text-5xl text-slate-300 absolute -z-10">🔬</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">Uroflowmetrie</h3>
          </div>

          {/* Cystoskop */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 sm:w-56 sm:h-56 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 p-4 overflow-hidden group">
              <img 
                src="/galerie/cystoskop.jpg" 
                alt="Cystoskop" 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.classList.add('bg-slate-100');
                }}
              />
              <span className="text-5xl text-slate-300 absolute -z-10">🔦</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">Cystoskop</h3>
          </div>

        </div>
      </div>

    </div>
  )
}
