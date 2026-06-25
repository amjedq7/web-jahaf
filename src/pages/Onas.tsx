import profileImg from '../assets/galerie/web-jahaf-profile.jpg'

export default function Onas() {
  return (
    <div className="container mx-auto px-4 pt-0 pb-16 lg:pb-24 animate-fade-in">
      
      <div className="text-center max-w-7xl mx-auto mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950">O nás</h1>
      </div>

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="grid lg:grid-cols-5">
          
          <div className="lg:col-span-2 bg-slate-100 flex justify-center items-center p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-slate-200">
            <img 
              src={profileImg} 
              alt="MUDr. Abbas Jahaf" 
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg border-8 border-white"
            />
          </div>

          <div className="lg:col-span-3 p-8 md:p-14 flex flex-col justify-center bg-slate-100">
            
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-3">
                MUDr. Abbas Jahaf
              </h1>
              <h2 className="text-xl text-blue-600 font-bold tracking-widest uppercase">
                Urolog
              </h2>
            </div>

            <div className="space-y-6 text-slate-900 leading-relaxed text-lg font-medium">
              <p>
                Vystudoval Lékařskou fakultu Masarykovy univerzity v Brně v roce 1998. V roce 2002 získal atestaci I. stupně pro obor Urologie – první stupeň.
              </p>
              <p>
                V roce 2009 získal specializovanou způsobilost. Dále získal diplom celoživotního vzdělávání, je članem Lékařské komory ČR. Je také členem české a mezinárodních urologických společností.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-white shadow-sm border border-slate-200 rounded-2xl flex items-center justify-center text-blue-700 text-2xl shrink-0">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-0.5">
                    Jazykové znalosti
                  </span>
                  <p className="font-bold text-slate-900 text-lg md:text-xl">
                    Čeština, Angličtina, Arabština, Němčina
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
