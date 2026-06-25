import { useState } from 'react'

export default function Sluzby() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null)

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

  // Použití import.meta.env.BASE_URL pro správné načítání na GitHub Pages
  const equipment = [
    { name: "Sonograf", src: `${import.meta.env.BASE_URL}galerie/sonograf.jpg` },
    { name: "Uroflowmetrie", src: `${import.meta.env.BASE_URL}galerie/uroflowmetrie.jpg` },
    { name: "Cystoskop", src: `${import.meta.env.BASE_URL}galerie/cystoskop.jpg` }
  ]

  return (
    <div className="animate-fade-in pb-12">
      
      {/* HORNÍ SEKCE */}
      <div className="container mx-auto px-4 pt-0 pb-16">
        <div className="text-center max-w-7xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950">
            S čím Vám můžeme pomoci?
          </h1>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 hover:border-blue-300 cursor-pointer transition-all duration-300 group flex flex-col items-center text-center justify-center min-h-[200px]"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SPODNÍ SEKCE */}
      <div className="w-full bg-teal-100/30 border-y-2 border-teal-200/50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 text-center mb-12">
              Vybavení ordinace
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {equipment.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  
                  <div 
                    className="w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-md border border-teal-200/50 group bg-white relative mb-6"
                    onClick={() => setSelectedImg(item.src)}
                  >
                    <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center pointer-events-none">
                      <svg className="w-12 h-12 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                    
                    <img 
                      src={item.src} 
                      alt={item.name} 
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">{item.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-900/95 flex items-center justify-center p-4 sm:p-8 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedImg(null)}
        >
          <button 
            className="absolute top-4 right-4 sm:top-8 sm:right-8 text-slate-300 hover:text-white transition-colors focus:outline-none bg-slate-800/50 hover:bg-slate-700/50 rounded-full p-2"
            onClick={() => setSelectedImg(null)}
            aria-label="Zavřít náhled"
          >
            <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <img 
            src={selectedImg} 
            alt="Detailní náhled vybavení" 
            className="max-w-full max-h-full rounded-lg shadow-xl object-contain cursor-default bg-white p-4"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </div>
  )
}
