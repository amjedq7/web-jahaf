import { useEffect } from 'react'

export default function Privacy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="container mx-auto px-4 pt-0 pb-16 lg:pb-24 animate-fade-in">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
        
        <h1 className="text-3xl font-extrabold text-blue-950 mb-6">
          Zásady ochrany osobních údajů
        </h1>

        <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
          <p>
            Společnost <strong>JAHAF UROLOGIE s.r.o.</strong> (IČO: 19748612) plně respektuje vaše soukromí.
          </p>
          
          <p>
            Naše webové stránky slouží výhradně k informačním účelům. <strong>Nepoužíváme žádné analytické ani marketingové cookies</strong>, nesledujeme vaši aktivitu a nesbíráme žádné osobní údaje návštěvníků webu.
          </p>

          <p>
            S vašimi osobními údaji (jako je jméno, telefon nebo e-mail) pracujeme pouze v případě, že nás sami přímo kontaktujete za účelem objednání do ordinace. Tyto údaje využíváme výhradně pro komunikaci s vámi a k poskytování zdravotní péče v souladu se zákonem.
          </p>
        </div>
      </div>
    </div>
  )
}
