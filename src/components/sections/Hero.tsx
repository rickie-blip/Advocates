import jwsImage from '../../assets/jws.jpeg';

export default function Hero() {
  return (
    <section id="home" className="relative py-12 sm:py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-[#0B0F19] dark:via-[#0F141F] dark:to-[#171E2D] border-b border-gray-150 dark:border-slate-900 transition-colors">
      <img
        src={jwsImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-y-0 right-0 h-full w-full lg:w-[62%] object-cover object-center -scale-x-100 opacity-20 sm:opacity-30 dark:opacity-25 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-50/95 to-gray-50/35 dark:from-[#0B0F19] dark:via-[#0B0F19]/90 dark:to-[#0B0F19]/35 pointer-events-none"></div>
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#C59B27]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex max-w-full items-center space-x-2 bg-amber-500/10 border border-amber-500/30 dark:border-[#C59B27]/30 px-4 py-2">
              <span className="text-[10px] font-sans font-black text-amber-700 dark:text-[#C59B27] uppercase tracking-[0.2em] flex items-center">
                ⚖️ Preeminent Civil Trial & Corporate Advisory Counsel
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight leading-tight text-slate-900 dark:text-slate-100">
              Formidable Defense.<br />
              <span className="italic font-normal text-[#C59B27]">Uncompromising Integrity.</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed">
              Mercy & Co Advocates represents individuals, families, and businesses in complex legal disputes and advisory matters across Baringo County and the wider Rift Valley region.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 font-sans text-xs tracking-wider uppercase font-bold">
              <a href="#priority-booking" className="bg-gradient-to-r from-[#8C6D1F] to-[#C59B27] text-white px-8 py-4 text-center border border-amber-300 hover:shadow-lg transition-all">
                Schedule Strategy Session
              </a>
              <a href="#practice-areas" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border border-gray-300 dark:border-slate-700 px-8 py-4 text-center hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                Explore Practice Areas
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-200 dark:border-slate-800 text-left">
              {[
                { value: '97%', label: 'Dispute Success Rate' },
                { value: '$1.4B+', label: 'Transaction Value Advising' },
                { value: '180+', label: 'Corporate Clients' },
                { value: '15yr+', label: 'Avg Partner Tenure' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-serif text-[#C59B27] font-semibold">{stat.value}</p>
                  <p className="text-[10px] font-sans font-extrabold text-gray-500 uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
