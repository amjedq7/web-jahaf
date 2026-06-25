import { HashRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Onas from './pages/Onas'
import Sluzby from './pages/Sluzby'
import Pojisteni from './pages/Pojisteni'
import Ordinace from './pages/Ordinace'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
        <Navbar />
        <main className="flex-grow mt-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/o-nas" element={<Onas />} />
            <Route path="/sluzby" element={<Sluzby />} />
            <Route path="/pojisteni" element={<Pojisteni />} />
            <Route path="/ordinace" element={<Ordinace />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
