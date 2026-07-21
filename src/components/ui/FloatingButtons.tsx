
export default function FloatingButtons() {
  return (
    <>
      <div className="fixed bottom-6 left-6 z-40 flex flex-col space-y-3 font-sans">
        <a
          href="#priority-booking"
          className="flex items-center space-x-2 bg-gradient-to-r from-[#8C6D1F] to-[#C59B27] text-white py-3 px-5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all text-xs font-bold tracking-wider uppercase border border-amber-300"
        >
          <span className="text-base">📅</span>
          <span>Fast Strategy Session</span>
        </a>
      </div>
      <a
        href="https://wa.me/254700000000?text=Hello%20Aegis%20Lexington%20Chambers.%20I%20require%20urgent%20legal%20counsel."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#0B4F30] text-slate-100 py-3.5 px-5 rounded-full shadow-2xl flex items-center space-x-3 font-sans font-bold hover:bg-[#06331F] transition-all hover:scale-105 border-2 border-amber-500/40"
      >
        <span className="text-lg">🛡️</span>
        <span className="text-xs tracking-wider uppercase">Direct Counsel (WA)</span>
      </a>
    </>
  );
}
