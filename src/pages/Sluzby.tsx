import { Link } from 'react-router-dom'

export default function Sluzby() {
  const services = [
    {
      title: "Komplexní urologické vyšetření",
      description: "Diagnostika a léčba onemocnění ledvin, močových cest a mužských pohlavních orgánů.",
      icon: "🩺"
    },
    {
      title: "Ultrazvuková diagnostika (SONO)",
      description: "Moderní a bezbolestné vyšetření močového ústrojí a orgánů šourku pomocí ultrazvuku.",
      icon: "🖥️"
    },
    {
      title: "Preventivní vyšetření prostaty",
      description: "Včasná diagnostika onemocnění prostaty včetně odběrů krve na nádorové markery (PSA).",
      icon: "👨‍⚕️"
    },
    {
      title: "Uroflowmetrie",
      description: "Speciální vyšetření průtoku moči pro odhalení funkčních poruch dolních močových cest.",
      icon: "💧"
    },
    {
      title: "Biopsie prostaty",
      description: "Odběr vzorků tkáně prostaty při podezření na závažnější onemocnění, prováděno ambulantně.",
      icon: "🔬"
    },
    {
      title: "Drobné chirurgické zákroky",
      description: "Provádění menších urologických zákroků přímo v prostředí naší moderní ambulance.",
      icon: "🩹"
    }
  ]

  return (
    <div className="container mx-auto px-4 pt-0 pb-16 lg:pb-24 animate-fade-in">
      <div className="text-center max-w-7xl mx-auto mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-4">Naše Služby</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Poskytujeme široké spektrum diagnostických a léčebných postupů v oboru urologie s využitím moderního přístrojového vybavení.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
            <p className="text-slate-600 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto border border-blue-100">
        <h3 className="text-2xl font-bold text-blue-950 mb-4">Potřebujete vyšetření?</h3>
        <p className="text-slate-700 mb-6">Neodkládejte své zdravotní potíže. Objednejte se na vyšetření ještě dnes.</p>
        <Link to="/kontakt" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-semibold shadow-sm transition-colors">
          Zobrazit kontakty pro objednání
        </Link>
      </div>
    </div>
  )
}
