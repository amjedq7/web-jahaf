import { useEffect } from 'react'

export default function Privacy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="container mx-auto px-4 pt-0 pb-16 lg:pb-24 animate-fade-in">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-8">
          Zásady ochrany osobních údajů
        </h1>

        <div className="space-y-8 text-slate-600 leading-relaxed">
          
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Úvodní ustanovení</h2>
            <p>
              Tyto zásady ochrany osobních údajů vysvětlují, jakým způsobem společnost <strong>JAHAF UROLOGIE s.r.o.</strong> (dále jen „Správce“) nakládá s osobními údaji. Naše webové stránky slouží výhradně k informačním účelům a <strong>nesbírají žádné osobní údaje</strong> prostřednictvím kontaktních formulářů ani nevyužívají marketingové či analytické cookies třetích stran.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Totožnost a kontaktní údaje správce</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Název:</strong> JAHAF UROLOGIE s.r.o.</li>
              <li><strong>Sídlo:</strong> Dlouhá 40/70, Nové Modlany, 417 42 Krupka</li>
              <li><strong>IČO:</strong> 19748612</li>
              <li><strong>Zápis v rejstříku:</strong> Krajský soud v Ústí nad Labem, oddíl C, vložka 51064</li>
              <li><strong>E-mail:</strong> ordinace@urologie-jahaf.cz</li>
              <li><strong>Telefon:</strong> +420 770 666 268</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Zpracování údajů při telefonickém nebo e-mailovém kontaktu</h2>
            <p>
              Pokud nás kontaktujete telefonicky nebo prostřednictvím e-mailu (např. za účelem objednání k vyšetření), budeme vaše osobní údaje (jméno, příjmení, telefonní číslo, e-mailová adresa, případně zdravotní stav) zpracovávat výhradně za účelem:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Vyřízení vašeho dotazu nebo požadavku.</li>
              <li>Plánování návštěvy v naší urologické ordinaci.</li>
              <li>Poskytování zdravotních služeb (pokud se stanete naším pacientem).</li>
            </ul>
            <p className="mt-2">
              Zákonným důvodem pro toto zpracování je nezbytnost pro splnění smlouvy (případně provedení opatření před uzavřením smlouvy) a poskytování zdravotní péče podle platné legislativy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Cookies a sledování návštěvnosti</h2>
            <p>
              Tyto webové stránky <strong>nepoužívají</strong> žádné marketingové, analytické ani sledovací soubory cookies (např. Google Analytics, Facebook Pixel apod.). Na vašem zařízení nejsou ukládána žádná data, která by sloužila k vašemu sledování napříč internetem nebo k cílení reklamy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Práva subjektu údajů</h2>
            <p>
              Podle obecného nařízení o ochraně osobních údajů (GDPR) máte mimo jiné právo:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Požadovat od nás informaci, jaké vaše osobní údaje zpracovávame.</li>
              <li>Vyžádat si u nás přístup k těmto údajům a tyto nechat aktualizovat nebo opravit.</li>
              <li>Požadovat po nás výmaz těchto osobních údajů, pokud nám zákon neukládá povinnost je uchovávat (např. ze zákona o zdravotních službách).</li>
              <li>V případě pochybností o dodržování povinností souvisejících se zpracováním osobních údajů se obrátit na nás nebo na Úřad pro ochranu osobních údajů.</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  )
}
