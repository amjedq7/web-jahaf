import vzpLogo from '../assets/galerie/logo-vzp.png'
import vozpLogo from '../assets/galerie/logo-vozp.png'
import cpzpLogo from '../assets/galerie/logo-cpzp.png'
import ozpLogo from '../assets/galerie/logo-ozp.png'
import zpmvLogo from '../assets/galerie/logo-zpmv.png'
import rbpLogo from '../assets/galerie/logo-rbp.png'

export default function Pojisteni() {
  const insurances = [
    { code: "111", name: "Všeobecná zdravotní pojišťovna ČR", short: "VZP", logo: vzpLogo },
    { code: "201", name: "Vojenská zdravotní pojišťovna ČR", short: "VoZP", logo: vozpLogo },
    { code: "205", name: "Česká průmyslová zdravotní pojišťovna", short: "ČPZP", logo: cpzpLogo },
    { code: "207", name: "Oborová zdravotní pojišťovna", short: "OZP", logo: ozpLogo },
    { code: "211", name: "Zdravotní pojišťovna ministerstva vnitra ČR", short: "ZPMV", logo: zpmvLogo },
    { code: "213", name: "RBP, zdravotní pojišťovna", short: "RBP", logo: rbpLogo },
  ]

  return (
    <div className="container mx-auto px-4 pt-0 pb-16 lg:pb-24 animate-fade-in">
      
      <div className="text-center max-w-7xl mx-auto mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950">Smluvní Pojišťovny</h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {insurances.map((ins, index) => (
          <div 
            key={index} 
            className="group bg-white p-8 lg:p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:bg-blue-50/50 hover:border-blue-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-32 h-24 sm:w-40 sm:h-28 bg-white rounded-2xl flex items-center justify-center p-3 shadow-sm border border-slate-100 group-hover:border-blue-200 transition-colors mb-6">
              <img 
                src={ins.logo} 
                alt={`Logo ${ins.short}`} 
                className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    target.parentElement.innerHTML = `<span class="font-bold text-2xl text-slate-400 group-hover:text-blue-400 transition-colors">${ins.code}</span>`;
                  }
                }}
              />
            </div>
            
            <div className="flex-1 flex flex-col justify-center w-full">
              <h3 className="font-extrabold text-slate-900 text-3xl mb-2 group-hover:text-blue-700 transition-colors">{ins.short}</h3>
              <p className="text-slate-500 text-lg leading-snug">{ins.name}</p>
              
              <div className="mt-auto pt-6">
                <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-600 font-semibold text-sm rounded-full group-hover:bg-blue-100 group-hover:text-blue-800 transition-colors">
                  Kód pojišťovny: {ins.code}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
