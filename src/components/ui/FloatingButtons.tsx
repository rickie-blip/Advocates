
export default function FloatingButtons() {
  return (
    <>
      <div className="fixed bottom-20 left-4 sm:bottom-6 sm:left-6 z-40 flex flex-col space-y-3 font-sans">
        <a
          href="#priority-booking"
          className="flex items-center space-x-2 bg-gradient-to-r from-[#8C6D1F] to-[#C59B27] text-white py-3 px-4 sm:px-5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all text-[10px] sm:text-xs font-bold tracking-wider uppercase border border-amber-300"
        >
          <span className="text-base">📅</span>
          <span>Fast Strategy Session</span>
        </a>
      </div>
      <a
        href="https://wa.me/254700000000?text=Hello%20Aegis%20Lexington%20Chambers.%20I%20require%20urgent%20legal%20counsel."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        title="Contact us on WhatsApp"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center hover:bg-[#1DA851] transition-all hover:scale-105 active:scale-95 border-2 border-white/70"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-7 h-7 sm:w-8 sm:h-8 fill-current">
          <path d="M12.04 2a9.75 9.75 0 0 0-8.31 14.85L2.5 21.35l4.64-1.21A9.75 9.75 0 1 0 12.04 2Zm0 17.72a7.93 7.93 0 0 1-4.05-1.11l-.29-.17-2.75.72.73-2.67-.19-.3A7.93 7.93 0 1 1 12.04 19.72Zm4.35-5.95c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06a6.47 6.47 0 0 1-1.9-1.17 7.1 7.1 0 0 1-1.31-1.64c-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.65.57.25 1.02.4 1.37.51.58.18 1.1.16 1.52.1.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
        </svg>
      </a>
    </>
  );
}
