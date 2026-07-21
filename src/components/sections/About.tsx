
const ETHOS_CARDS = [
  { icon: '🏛️', title: 'Unparalleled Preparation', text: 'We prepare every corporate dispute and defense outline as if it is bound for supreme appellate trial, rendering our positioning bulletproof.' },
  { icon: '💼', title: 'Bespoke Structural Security', text: 'Asset structures, compliance checks, and cross-border trusts are meticulously verified to shield family values and generational transfer plans.' },
  { icon: '🛡️', title: 'Ironclad Confidentiality', text: 'Every legal consulting workflow, data deposit, and message logs are secured using state-of-the-art secure legal data portals.' },
  { icon: '⚖️', title: 'Elite Professional Network', text: 'Direct connections with supreme international arbitrators, forensic auditors, regulatory agencies, and institutional banking structures.' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-[#0B0F19] transition-colors border-b border-gray-150 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] font-sans font-black uppercase text-amber-600 dark:text-[#C59B27] tracking-widest">Our Legal Philosophy</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100">
              Upholding Sovereign Security & Institutional Legacy
            </h2>
            <div className="w-16 h-1 bg-[#C59B27] rounded-none"></div>
            <p className="text-gray-600 dark:text-slate-300 text-sm font-sans leading-relaxed">
              Legal challenges are not resolved purely on procedural routine; they are conquered through diligent preparation, strategic counsel, and unwavering client alignment. Mercy & Co Advocates stands as a trusted legal partner for the people and businesses of Kabarnet Town and Baringo County.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ETHOS_CARDS.map((card) => (
              <div key={card.title} className="p-6 bg-gray-50 dark:bg-[#101625] border border-gray-150 dark:border-slate-800 transition-all">
                <span className="text-3xl block mb-4">{card.icon}</span>
                <h3 className="text-base font-serif font-bold text-slate-900 dark:text-slate-100 mb-2">{card.title}</h3>
                <p className="text-xs text-gray-500 dark:text-slate-400 font-sans leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
