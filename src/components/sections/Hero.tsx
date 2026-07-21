import coaImage from '../../assets/coa.png';

export default function Hero() {
  return (
    <section id="home" className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-[#0B0F19] dark:via-[#0F141F] dark:to-[#171E2D] border-b border-gray-150 dark:border-slate-900 transition-colors">
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#C59B27]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 dark:border-[#C59B27]/30 px-4 py-2">
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

          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex flex-col items-center justify-center">
            {/* Kenyan Coat of Arms */}
            <div className="relative flex flex-col items-center justify-center">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
                {/* Outer decorative ring */}
                <div className="absolute inset-0 rounded-full border-4 border-[#C59B27]/40 animate-pulse"></div>
                <div className="absolute inset-3 rounded-full border-2 border-[#C59B27]/20"></div>
                {/* Coat of Arms image */}
                <img
                  src={coaImage}
                  alt="Coat of Arms of Kenya"
                  className="w-full h-full object-cover rounded-full drop-shadow-2xl relative z-10 p-4"
                />
              </div>
              {/* Harambee ribbon */}
              <div className="mt-4 bg-gradient-to-r from-[#8C6D1F] to-[#C59B27] px-8 py-2 border border-amber-300 shadow-lg">
                <p className="text-white font-serif font-bold tracking-[0.3em] text-sm uppercase">Harambee</p>
              </div>
            </div>
            {/* Client quote */}
            <div className="mt-6 bg-white/95 dark:bg-slate-900/95 p-5 shadow-lg border border-amber-500/20 max-w-sm">
              <div className="flex items-center space-x-1 mb-1 text-amber-500 text-xs">
                {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
              </div>
              <p className="text-xs italic text-gray-700 dark:text-slate-300 font-serif">
                {"\"Mercy & Co Advocates handled our land dispute with professionalism and deep knowledge of Kenyan law. Highly recommended.\""}
              </p>
              <p className="text-[9px] font-sans font-black text-[#C59B27] uppercase mt-2 tracking-widest">— Client, Baringo County</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
