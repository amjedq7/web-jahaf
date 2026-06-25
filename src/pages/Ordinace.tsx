import { useState, useEffect } from 'react'

export default function Ordinace() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null)
  
  // Vytažení všech jpeg obrázků ze složky galerie pomocí Vite glob import
  const modules = import.meta.glob('../assets/galerie/web-jahaf-*.jpeg', { eager: true, import: 'default' })
  
  // Převod objektu na seřazené pole URL adres
  const photos = Object.keys(modules)
    .sort((a, b) => {
      const numA = parseInt(a.match(/web-jahaf-(\d+)\.jpeg$/)?.[1] || '0')
      const numB = parseInt(b.match(/web-jahaf-(\d+)\.jpeg$/)?.[1] || '0')
      return numA - numB
    })
    .map(key => modules[key] as string)

  // Zjištění indexu aktuálně otevřené fotky
  const currentIndex = selectedImg ? photos.indexOf(selectedImg) : -1

  // Funkce pro předchozí obrázek
  const handlePrevious = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    if (currentIndex !== -1) {
      const prevIndex = (currentIndex - 1 + photos.length) % photos.length
      setSelectedImg(photos[prevIndex])
    }
  }

  // Funkce pro další obrázek
  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    if (currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % photos.length
      setSelectedImg(photos[nextIndex])
    }
  }

  // Klávesnicová navigace (šipky doleva/doprava, Escape pro zavření)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImg) return
      if (e.key === 'ArrowLeft') handlePrevious()
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'Escape') setSelectedImg(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImg, currentIndex])

  return (
    <div className="container mx-auto px-4 pt-0 pb-16 lg:pb-24 animate-fade-in">
      
      <div className="text-center max-w-7xl mx-auto mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950">Naše Ordinace</h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {photos.map((src, index) => (
          <div 
            key={index}
            className="aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-sm border border-slate-100 group bg-slate-50 relative"
            onClick={() => setSelectedImg(src)}
          >
            <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center pointer-events-none">
              <svg className="w-12 h-12 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
            
            <img 
              src={src} 
              alt={`Fotografie ordinace ${index + 1}`} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-900/95 flex items-center justify-center p-4 sm:p-8 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedImg(null)}
        >
          {/* Zavírací křížek */}
          <button 
            className="absolute top-4 right-4 sm:top-8 sm:right-8 text-slate-300 hover:text-white transition-colors focus:outline-none bg-slate-800/50 hover:bg-slate-700/50 rounded-full p-2 z-50"
            onClick={() => setSelectedImg(null)}
            aria-label="Zavřít náhled"
          >
            <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Šipka doleva */}
          <button 
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-slate-300 hover:text-white transition-all focus:outline-none bg-slate-800/50 hover:bg-slate-700/50 hover:scale-110 rounded-full p-2 sm:p-3 z-50"
            onClick={handlePrevious}
            aria-label="Předchozí obrázek"
          >
            <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Samotná fotka */}
          <img 
            src={selectedImg} 
            alt="Detailní náhled ordinace" 
            className="max-w-full max-h-full rounded-lg shadow-2xl object-contain cursor-default select-none"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Šipka doprava */}
          <button 
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-slate-300 hover:text-white transition-all focus:outline-none bg-slate-800/50 hover:bg-slate-700/50 hover:scale-110 rounded-full p-2 sm:p-3 z-50"
            onClick={handleNext}
            aria-label="Další obrázek"
          >
            <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
      
    </div>
  )
}
