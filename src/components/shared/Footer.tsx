export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Clinic brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Urologie MUDr. Jahaf</h3>
            <p className="text-sm leading-relaxed">
              Poskytujeme komplexní a špičkovou urologickou péči s důrazem na individuální přístup a moderní diagnostické metody.
            </p>
          </div>

          {/* Column 2: Contact info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Kontakt</h3>
            <ul className="text-sm space-y-2">
              <li>Tel: +420 123 456 789</li>
              <li>Email: info@urologiejahaf.cz</li>
              <li>Adresa: Zdravotní ulice 123, 110 00 Praha</li>
            </ul>
          </div>

          {/* Column 3: Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Ordinační hodiny</h3>
            <ul className="text-sm space-y-2">
              <li className="flex justify-between"><span>Pondělí - Pátek</span> <span>08:00 - 16:00</span></li>
              <li className="flex justify-between"><span>Sobota - Neděle</span> <span>Zavřeno</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-sm">
          <p>© 2026 Urologie Jahaf. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
};


