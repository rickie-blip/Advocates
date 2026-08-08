
interface FooterProps {
  onSetActiveTab: (tab: string) => void;
}

export default function Footer({ onSetActiveTab }: FooterProps) {
  return (
    <footer className="bg-[#070A11] text-gray-400 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 font-sans text-xs">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="border border-[#C59B27] p-2 rounded-full">
              <span className="text-sm font-serif text-[#C59B27] tracking-widest font-bold">MC</span>
            </div>
            <div>
              <span className="text-sm font-serif font-bold text-white block tracking-widest">MERCY & CO</span>
              <span className="text-[8px] tracking-widest font-black uppercase text-amber-500 -mt-1 block">Advocates</span>
            </div>
          </div>
          <p className="text-gray-500 leading-relaxed pt-2">
            Serving clients across Baringo County and the Rift Valley region with dedicated legal representation and advisory services.
          </p>
          <div className="pt-2 flex space-x-2">
            <span className="bg-[#101625] border border-slate-800 px-3 py-1.5 rounded-none text-[9px] font-black uppercase text-gray-400">
              ⭐ Tier-1 Corporate Legal Advisor
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-serif font-bold text-white tracking-wider">Practice Divisions</h4>
          <ul className="space-y-2.5 text-xs text-gray-500">
            <li><a href="#practice-areas" onClick={() => onSetActiveTab('corporate')} className="hover:text-[#C59B27] transition-colors">Corporate Mergers & Restructure</a></li>
            <li><a href="#practice-areas" onClick={() => onSetActiveTab('litigation')} className="hover:text-[#C59B27] transition-colors">Complex Civil Arbitration</a></li>
            <li><a href="#practice-areas" onClick={() => onSetActiveTab('estate')} className="hover:text-[#C59B27] transition-colors">Trust Administration & Wills</a></li>
            <li><a href="#practice-areas" onClick={() => onSetActiveTab('tech')} className="hover:text-[#C59B27] transition-colors">AI Regulatory Governance & Patents</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-serif font-bold text-white tracking-wider">Resources</h4>
          <ul className="space-y-2.5 text-xs text-gray-500">
            <li><a href="#insights" className="hover:text-[#C59B27] transition-colors">Legal Insights</a></li>
            <li><a href="#insights/conveyancing" className="hover:text-[#C59B27] transition-colors">Conveyancing Guide</a></li>
            <li><a href="#priority-booking" className="hover:text-[#C59B27] transition-colors">Reserve Consultation</a></li>
            <li><a href="#case-quiz" className="hover:text-[#C59B27] transition-colors">Case Viability Auditing</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-serif font-bold text-white tracking-wider">Strategic Referrals</h4>
          <p className="text-gray-500 leading-relaxed">
            Our chambers accept attorney-led legal referrals and institutional general counsel assignments under selective conflict filters.
          </p>
          <div className="pt-2">
            <a
              href="#priority-booking"
              className="bg-[#101625] border border-slate-800 text-[#C59B27] py-2.5 px-4 block hover:bg-[#C59B27] hover:text-white transition-all text-center font-black uppercase tracking-wider text-[10px]"
            >
              Inquire referral terms
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-900 text-center text-xs text-gray-600 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Mercy & Co Advocates. Kabarnet Town, Baringo County, Kenya. All Rights Reserved. Fully Licensed Advocates.</p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          <span className="hover:text-white cursor-pointer">Confidentiality Terms</span>
          <span className="hover:text-white cursor-pointer">Regulatory Disclaimers</span>
          <span className="hover:text-white cursor-pointer">Conflict Search Audit</span>
        </div>
      </div>
    </footer>
  );
}
