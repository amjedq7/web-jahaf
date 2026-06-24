import { useState } from 'react'

export default function Ordinace() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null)
  
  // Generates an array of 15 image paths: /galerie/web-jahaf-1.jpeg to /galerie/web-jahaf-15.jpeg
  const photos = Array.from({ length: 15 }, (_, i) => `/galerie/web-jahaf-${i + 1}.jpeg`)

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
            {/* Lupa icon on hover */}
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

      {/* Lightbox Modal (Full screen image view) */}
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
            alt="Detailní náhled ordinace" 
            className="max-w-full max-h-full rounded-lg shadow-2xl object-contain cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      
    </div>
  )
}
