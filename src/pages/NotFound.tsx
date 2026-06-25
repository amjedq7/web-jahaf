import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 lg:py-32 flex flex-col items-center justify-center text-center animate-fade-in">
      <div className="w-24 h-24 sm:w-32 sm:h-32 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-8 shadow-sm">
        <svg className="w-12 h-12 sm:w-16 sm:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h1 className="text-6xl sm:text-8xl font-extrabold text-blue-950 mb-4">404</h1>
      <h2 className="text-2xl sm:text-4xl font-bold text-slate-800 mb-6">Stránka nenalezena</h2>
      <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto leading-relaxed">
        Omlouváme se, ale stránka, kterou hledáte, pravděpodobně neexistuje. Mohla být přesunuta, vymazána, nebo jste zadali špatnou adresu.
      </p>
      <Link 
        to="/" 
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold shadow-md transition-all hover:-translate-y-1 inline-flex items-center gap-3"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Zpět na hlavní stránku
      </Link>
    </div>
  )
}
