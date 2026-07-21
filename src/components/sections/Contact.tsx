
export default function Contact() {
  return (
    <section className="py-20 bg-white dark:bg-[#0B0F19] transition-colors border-b border-gray-150 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              <span className="text-[10px] font-sans font-black uppercase text-amber-600 dark:text-[#C59B27] tracking-widest block">Chambers Headquarters</span>
              <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mt-1">Visit Our Chambers</h2>
              <p className="text-xs text-gray-500 dark:text-slate-400 mt-2 font-sans leading-relaxed">
                Mercy & Co Advocates' office is situated in the heart of Kabarnet Town, Baringo County, serving clients across the Rift Valley region and beyond.
              </p>
            </div>

            <div className="space-y-5 font-sans text-xs">
              {[
                { icon: '📍', title: 'Office Location', text: 'Mercy & Co Advocates, Kabarnet Town, Baringo County, Kenya' },
                { icon: '📞', title: 'Direct Inquiries Hotlines', text: 'Main Chambers: +254 20 700 000\nPartner Strategy Line: +254 711 999 888' },
                { icon: '✉️', title: 'Secured Channels Email', text: 'advisory@mercyandco.advocates\nlitigation@mercyandco.advocates' },
                { icon: '🕒', title: 'Chamber Hours', text: 'Monday to Friday: 8:00 AM – 6:00 PM (EAT)\nSaturday Strategic Audits: By Special Executive Referral' },
              ].map(item => (
                <div key={item.title} className="flex items-start space-x-4">
                  <span className="text-2xl mt-1">{item.icon}</span>
                  <div>
                    <h4 className="font-extrabold text-slate-900 dark:text-slate-100">{item.title}</h4>
                    <p className="text-gray-500 dark:text-slate-400 mt-1 leading-relaxed whitespace-pre-line">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 h-[350px] lg:h-[450px] relative rounded-none overflow-hidden border border-gray-150 dark:border-slate-800 shadow-lg bg-gray-50 dark:bg-slate-900 flex flex-col items-center justify-center text-center p-6">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C59B27_1.5px,transparent_1.5px)] [background-size:20px_20px]"></div>
            <div className="relative z-10 space-y-4 max-w-sm font-sans">
              <span className="text-4xl">🗺️</span>
              <h4 className="text-base font-serif font-bold text-slate-900 dark:text-slate-100">Kabarnet Town, Baringo County</h4>
              <p className="text-[11px] text-gray-500 dark:text-slate-400 leading-relaxed">
                Conveniently located in Kabarnet Town, serving clients across Baringo County and the wider Rift Valley region.
              </p>
              <div className="flex justify-center space-x-3 text-xs font-bold">
                <a href="https://maps.google.com" target="_blank" rel="noreferrer"
                  className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 py-2.5 px-4 text-slate-800 dark:text-slate-200 shadow-sm">
                  Open in Google Maps
                </a>
                <a href="https://wa.me/254711999888" className="bg-[#0B4F30] text-white py-2.5 px-4">
                  Direct Security Gate Ping
                </a>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/3 -translate-y-10 animate-bounce">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#C59B27] text-white flex items-center justify-center font-bold text-xs border-2 border-white shadow-xl">⚖️</div>
                <div className="w-1.5 h-3 bg-[#C59B27] mx-auto -mt-0.5 shadow-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
