"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
var react_1 = require("react");
// Static Data for Practice Areas
var PRACTICE_AREAS = [
    {
        id: 'corporate',
        title: 'Corporate & M&A',
        icon: '💼',
        description: 'High-stakes merger advisory, venture financing, intellectual property shielding, and international restructuring.',
        highlights: ['Venture Capital Rounds', 'Cross-Border Deals', 'IP Portfolio Optimization', 'Regulatory Compliance'],
        leadAttorney: 'Victoria Sterling, Esq.'
    },
    {
        id: 'litigation',
        title: 'Trial & Complex Litigation',
        icon: '⚖️',
        description: 'Relentless courtroom representation for multi-million dollar commercial disputes, antitrust matters, and class actions.',
        highlights: ['Commercial Arbitration', 'Federal Appeals', 'Trade Secret Defense', 'White Collar Defense'],
        leadAttorney: 'Marcus Vance, Senior Partner'
    },
    {
        id: 'estate',
        title: 'Private Wealth & Trust',
        icon: '🏛️',
        description: 'Sophisticated wealth preservation, customized estate restructuring, trust management, and philanthropic planning.',
        highlights: ['Asset Protection Trusts', 'Generational Wealth Transfer', 'Tax Minimization Plans', 'Family Foundations'],
        leadAttorney: 'Eleanor Sterling-Chase'
    },
    {
        id: 'tech',
        title: 'Emerging Tech & IP',
        icon: '🛡️',
        description: 'Legal architects guiding breakthrough artificial intelligence, biotechnology, and cybersecurity ventures.',
        highlights: ['AI Governance Advisory', 'Patent Filings & Licensing', 'Data Privacy Audits', 'Software Copyright Litigation'],
        leadAttorney: 'David Vance, PhD, JD'
    }
];
var ATTORNEYS = [
    {
        id: 'attorney-1',
        name: 'Marcus Vance',
        role: 'Managing Partner',
        education: 'Harvard Law School (JD, Magna Cum Laude)',
        experience: '24+ Years Litigation',
        specialties: ['Class Action Disputes', 'White Collar Defense', 'Antitrust'],
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80',
        bio: 'Former federal prosecutor who has successfully litigated over $1.2B in civil recoveries and structured defense arguments for Fortune 100 entities.'
    },
    {
        id: 'attorney-2',
        name: 'Victoria Sterling',
        role: 'Senior Partner, Corporate Sector',
        education: 'Yale Law School (JD), Wharton (MBA)',
        experience: '18+ Years Corporate Advisory',
        specialties: ['Mergers & Acquisitions', 'Venture Capital', 'IP Licensing'],
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
        bio: 'Renowned structural strategist advising unicorn technology startups and handling high-value enterprise acquisitions globally.'
    },
    {
        id: 'attorney-3',
        name: 'Eleanor Sterling-Chase',
        role: 'Partner, Private Client Group',
        education: 'Stanford Law School (JD)',
        experience: '15+ Years Trust Law',
        specialties: ['Wealth Preservation', 'Offshore Trusts', 'Tax Planning'],
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80',
        bio: 'Trusted legal confidante to prominent multi-generational families, delivering ironclad estate frameworks and asset allocation protections.'
    },
    {
        id: 'attorney-4',
        name: 'David Vance, PhD',
        role: 'Of Counsel, IP & Tech',
        education: 'MIT (PhD in CS), Columbia Law School (JD)',
        experience: '11+ Years Tech Patenting',
        specialties: ['AI Regulatory Defense', 'Biotech Patenting', 'SaaS Licensing'],
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80',
        bio: 'Fuses high-level scientific expertise with advanced intellectual property architecture. Regularly testifies before federal commerce subcommittees.'
    }
];
var FAQS = [
    {
        question: "What makes Aegis Lexington different from traditional law firms?",
        answer: "Unlike legacy firms, we blend top-tier legal brilliance (averaging 15+ years of elite defense/advisory) with transparent modern technology, customized pricing predictability, and proactive risk defense dashboards for corporate clients."
    },
    {
        question: "Do you offer contingency-fee arrangements?",
        answer: "For premium Commercial Disputes, Intellectual Property infringements, and Complex Civil litigations, we selectively offer structured hybrid or performance-driven fee structures. Our billing structures are entirely tailored to asset alignment."
    },
    {
        question: "How long does a typical custom corporate restructuring take?",
        answer: "Most structural M&A setups or asset transfers take 4 to 8 weeks to audit, draft, secure regulatory approval, and fully execute. We assign dedicated legal managers to ensure rapid, zero-friction workflows."
    },
    {
        question: "Can we book an immediate consultation over secure video conference?",
        answer: "Yes. All initial strategy calls can be routed securely through end-to-end encrypted video link. You can book directly using our online priority portal below."
    }
];
function App() {
    var _a = (0, react_1.useState)('corporate'), activeTab = _a[0], setActiveTab = _a[1];
    var _b = (0, react_1.useState)(true), darkTheme = _b[0], setDarkTheme = _b[1];
    var _c = (0, react_1.useState)({ show: false, message: '', type: 'success' }), toast = _c[0], setToast = _c[1];
    // Calculator State variables
    var _d = (0, react_1.useState)('contract'), calcType = _d[0], setCalcType = _d[1];
    var _e = (0, react_1.useState)(150000), directDamages = _e[0], setDirectDamages = _e[1];
    var _f = (0, react_1.useState)(2), multiplier = _f[0], setMultiplier = _f[1];
    var _g = (0, react_1.useState)(33), feePercentage = _g[0], setFeePercentage = _g[1];
    // Case Viability Quiz State
    var _h = (0, react_1.useState)(0), quizStep = _h[0], setQuizStep = _h[1];
    var _j = (0, react_1.useState)({
        category: '',
        timeframe: '',
        evidence: '',
        lossValue: ''
    }), quizAnswers = _j[0], setQuizAnswers = _j[1];
    var _k = (0, react_1.useState)(null), quizResult = _k[0], setQuizResult = _k[1];
    // Client Portal Mock state
    var _l = (0, react_1.useState)(false), isPortalLoggedIn = _l[0], setIsPortalLoggedIn = _l[1];
    var portalEmail = (0, react_1.useState)('sterling.ventures@client.com')[0];
    var portalPassword = (0, react_1.useState)('••••••••')[0];
    var _m = (0, react_1.useState)([
        { sender: 'Attorney Victoria Sterling', text: 'I have finalized the draft of the Series B Financing agreement. Let me know if you would like to run through the governance provisions tomorrow morning.', time: '10:14 AM' },
        { sender: 'You', text: 'Looks perfect. Let us do a call tomorrow at 10 AM EST.', time: '11:30 AM' }
    ]), portalMessages = _m[0], setPortalMessages = _m[1];
    var _o = (0, react_1.useState)(''), newPortalMsg = _o[0], setNewPortalMsg = _o[1];
    // Strategy Session Form State
    var _p = (0, react_1.useState)({
        clientName: '',
        clientEmail: '',
        clientPhone: '',
        practiceArea: 'corporate',
        priority: 'medium',
        prefDate: '',
        summaryText: ''
    }), bookingForm = _p[0], setBookingForm = _p[1];
    // Display Custom Toast
    var triggerToast = function (message, type) {
        if (type === void 0) { type = 'success'; }
        setToast({ show: true, message: message, type: type });
        setTimeout(function () {
            setToast({ show: false, message: '', type: 'success' });
        }, 4000);
    };
    (0, react_1.useEffect)(function () {
        document.documentElement.style.scrollBehavior = 'smooth';
        if (darkTheme) {
            document.documentElement.classList.add('dark');
        }
        else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkTheme]);
    // Settlement Estimation Engine
    var calculatedSettlement = (0, react_1.useMemo)(function () {
        var directNum = Number(directDamages) || 0;
        var multNum = Number(multiplier) || 1;
        var feePct = Number(feePercentage) || 33;
        var gross = 0;
        if (calcType === 'contract') {
            gross = directNum * (1 + (multNum - 1) * 0.4);
        }
        else if (calcType === 'ip') {
            gross = directNum * (1.5 * multNum);
        }
        else {
            gross = directNum * multNum;
        }
        var attorneyFees = gross * (feePct / 100);
        var netPayout = gross - attorneyFees;
        return {
            gross: Math.round(gross),
            fees: Math.round(attorneyFees),
            net: Math.round(netPayout)
        };
    }, [calcType, directDamages, multiplier, feePercentage]);
    var handleQuizAnswer = function (key, value) {
        var _a;
        var updated = __assign(__assign({}, quizAnswers), (_a = {}, _a[key] = value, _a));
        setQuizAnswers(updated);
        if (key === 'category') {
            setQuizStep(1);
        }
        else if (key === 'timeframe') {
            setQuizStep(2);
        }
        else if (key === 'evidence') {
            setQuizStep(3);
        }
        else if (key === 'lossValue') {
            evaluateCaseViability(updated);
        }
    };
    var evaluateCaseViability = function (answers) {
        var timeframe = answers.timeframe, evidence = answers.evidence, lossValue = answers.lossValue;
        var score = 0;
        if (timeframe === 'recent')
            score += 3;
        if (timeframe === 'mid')
            score += 2;
        if (timeframe === 'old')
            score += 0;
        if (evidence === 'strong')
            score += 4;
        if (evidence === 'partial')
            score += 2;
        if (evidence === 'none')
            score += 0;
        if (lossValue === 'high')
            score += 3;
        if (lossValue === 'medium')
            score += 2;
        if (lossValue === 'low')
            score += 1;
        var title = "";
        var recommendation = "";
        var badgeColor = "";
        if (score >= 8) {
            title = "Excellent Case Prospects";
            badgeColor = "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
            recommendation = "Our analysis shows high document backing and active statute of limitations. We recommend an urgent 30-minute Partner Review Strategy Call immediately.";
        }
        else if (score >= 5) {
            title = "Moderate Case Viability";
            badgeColor = "bg-amber-500/10 text-amber-500 border-amber-500/20";
            recommendation = "Your dispute has clear merits, but requires structured discovery. A senior associate should audit your documentation. Recommended step: standard consultation.";
        }
        else {
            title = "Complex Legal Obstacles";
            badgeColor = "bg-rose-500/10 text-rose-500 border-rose-500/20";
            recommendation = "Either time limitations or lack of documentary evidence present hurdles. We suggest scheduling a direct regulatory consultation to analyze non-litigious workarounds.";
        }
        setQuizResult({
            score: score,
            title: title,
            recommendation: recommendation,
            badgeColor: badgeColor
        });
        setQuizStep(4);
    };
    var handleResetQuiz = function () {
        setQuizStep(0);
        setQuizAnswers({ category: '', timeframe: '', evidence: '', lossValue: '' });
        setQuizResult(null);
    };
    var handleSendPortalMsg = function (e) {
        e.preventDefault();
        if (!newPortalMsg.trim())
            return;
        setPortalMessages(__spreadArray(__spreadArray([], portalMessages, true), [
            { sender: 'You', text: newPortalMsg, time: 'Just Now' }
        ], false));
        setNewPortalMsg('');
        triggerToast('Secure encrypted message successfully dispatched.', 'success');
    };
    var handleBookingSubmit = function (e) {
        e.preventDefault();
        if (!bookingForm.clientName || !bookingForm.clientEmail || !bookingForm.clientPhone) {
            triggerToast('Please complete all mandatory contact fields.', 'error');
            return;
        }
        triggerToast("Success! Strategy reservation initiated. A Senior Paralegal will call you to confirm the date of ".concat(bookingForm.prefDate || 'next business day', "."), 'success');
        setBookingForm({
            clientName: '',
            clientEmail: '',
            clientPhone: '',
            practiceArea: 'corporate',
            priority: 'medium',
            prefDate: '',
            summaryText: ''
        });
    };
    return (<div className={"min-h-screen font-serif transition-colors duration-300 ".concat(darkTheme ? 'bg-[#0F141F] text-slate-100' : 'bg-[#FAF9F5] text-slate-900')}>
      
      {/* Toast Notification */}
      {toast.show && (<div className="fixed bottom-6 right-6 z-50 animate-slide-in max-w-sm w-full bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border-l-4 border-[#C59B27] p-5 flex items-center justify-between border border-gray-150 dark:border-slate-800">
          <div className="flex items-center space-x-3">
            <span className="text-xl">⚖️</span>
            <div>
              <p className="text-[10px] text-amber-600 dark:text-[#C59B27] font-sans font-extrabold uppercase tracking-widest">Aegis Chambers</p>
              <p className="text-xs font-sans text-gray-700 dark:text-gray-200">{toast.message}</p>
            </div>
          </div>
          <button onClick={function () { return setToast({ show: false, message: '', type: 'success' }); }} className="text-gray-400 hover:text-gray-600 text-lg font-bold">
            ×
          </button>
        </div>)}

      {/* Floating Strategy trigger */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col space-y-3 font-sans">
        <a href="#priority-booking" className="flex items-center space-x-2 bg-gradient-to-r from-[#8C6D1F] to-[#C59B27] text-white py-3 px-5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all text-xs font-bold tracking-wider uppercase border border-amber-300">
          <span className="text-base">📅</span>
          <span>Fast Strategy Session</span>
        </a>
      </div>

      {/* WhatsApp Callout */}
      <a href="https://wa.me/254700000000?text=Hello%20Aegis%20Lexington%20Chambers.%20I%20require%20urgent%20legal%20counsel." target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-40 bg-[#0B4F30] text-slate-100 py-3.5 px-5 rounded-full shadow-2xl flex items-center space-x-3 font-sans font-bold hover:bg-[#06331F] transition-all hover:scale-105 border-2 border-amber-500/40">
        <span className="text-lg">🛡️</span>
        <span className="text-xs tracking-wider uppercase">Direct Counsel (WA)</span>
      </a>

      
      {/* Header Bar */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-white/95 dark:bg-[#0F141F]/95 border-b border-gray-150 dark:border-slate-900 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          
          {/* Logo Area */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="border-2 border-[#C59B27] p-3 rounded-full flex items-center justify-center transition-all group-hover:bg-[#C59B27]/10">
              <span className="text-2xl font-serif text-[#C59B27] font-semibold tracking-widest">AL</span>
            </div>
            <div>
              <span className="text-lg sm:text-xl font-bold tracking-widest text-slate-900 dark:text-slate-100 block">
                AEGIS LEXINGTON
              </span>
              <span className="text-[9px] tracking-[0.3em] font-sans font-extrabold uppercase text-amber-600 dark:text-[#C59B27] block -mt-1">
                LAW CHAMBERS
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-sans font-bold uppercase tracking-wider">
            <a href="#about" className="text-gray-600 dark:text-slate-300 hover:text-[#C59B27] dark:hover:text-[#C59B27] transition-colors">Our Ethos</a>
            <a href="#practice-areas" className="text-gray-600 dark:text-slate-300 hover:text-[#C59B27] dark:hover:text-[#C59B27] transition-colors">Specialties</a>
            <a href="#attorneys" className="text-gray-600 dark:text-slate-300 hover:text-[#C59B27] dark:hover:text-[#C59B27] transition-colors">Counsel</a>
            <a href="#calculator" className="text-gray-600 dark:text-slate-300 hover:text-[#C59B27] dark:hover:text-[#C59B27] transition-colors">Estimator</a>
            <a href="#client-portal" className="text-gray-600 dark:text-slate-300 hover:text-[#C59B27] dark:hover:text-[#C59B27] transition-colors">Secure Portal</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            
            {/* Dark Mode Toggle */}
            <button onClick={function () { return setDarkTheme(!darkTheme); }} className="p-2.5 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all" title="Toggle system aesthetic">
              {darkTheme ? (<span className="text-lg">☀️</span>) : (<span className="text-lg">🌙</span>)}
            </button>

            <a href="#priority-booking" className="hidden lg:inline-block bg-gradient-to-r from-[#8C6D1F] to-[#C59B27] hover:from-[#735817] hover:to-[#B08920] text-slate-100 py-3 px-6 rounded-none font-sans font-extrabold text-[10px] tracking-widest uppercase border border-amber-400">
              Request Strategy Call
            </a>
          </div>

        </div>
      </header>

      
      {/* Hero Section */}
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
                Aegis Lexington represents institutions, family offices, and leading founders in complex legal disputes and strategic structural restructurings across East Africa and globally.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 font-sans text-xs tracking-wider uppercase font-bold">
                <a href="#priority-booking" className="bg-gradient-to-r from-[#8C6D1F] to-[#C59B27] text-white px-8 py-4 text-center border border-amber-300 hover:scale-101 hover:shadow-lg transition-all">
                  Schedule Strategy Session
                </a>
                <a href="#practice-areas" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border border-gray-300 dark:border-slate-700 px-8 py-4 text-center hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                  Explore Practice Areas
                </a>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-200 dark:border-slate-800 text-left">
                <div>
                  <p className="text-3xl font-serif text-[#C59B27] font-semibold">97%</p>
                  <p className="text-[10px] font-sans font-extrabold text-gray-500 uppercase tracking-widest mt-1">Dispute Success Rate</p>
                </div>
                <div>
                  <p className="text-3xl font-serif text-[#C59B27] font-semibold">$1.4B+</p>
                  <p className="text-[10px] font-sans font-extrabold text-gray-500 uppercase tracking-widest mt-1">Transaction Value Advising</p>
                </div>
                <div>
                  <p className="text-3xl font-serif text-[#C59B27] font-semibold">180+</p>
                  <p className="text-[10px] font-sans font-extrabold text-gray-500 uppercase tracking-widest mt-1">Corporate Clients</p>
                </div>
                <div>
                  <p className="text-3xl font-serif text-[#C59B27] font-semibold">15yr+</p>
                  <p className="text-[10px] font-sans font-extrabold text-gray-500 uppercase tracking-widest mt-1">Avg Partner Tenure</p>
                </div>
              </div>

            </div>

            
            {/* Hero Graphical Cards */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-none overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80" alt="Elite courthouse pillar symbolizing legal strength and stability" className="w-full h-[400px] object-cover"/>
                
                {/* Floating client quote badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-slate-900/95 p-5 rounded-none shadow-lg backdrop-blur-sm border border-amber-500/20">
                  <div className="flex items-center space-x-1 mb-1 text-amber-500 text-xs">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <p className="text-xs italic text-gray-700 dark:text-slate-300 font-serif">
                    {"\"Aegis Lexington defended our intellectual property assets during an aggressive corporate restructuring. Their tactical legal maneuverings saved our seed technology.\""}
                  </p>
                  <p className="text-[9px] font-sans font-black text-[#C59B27] uppercase mt-2 tracking-widest">— CEO, Summit Bio-Enterprises</p>
                </div>
              </div>

              {/* Gold Badge */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-tr from-[#8C6D1F] to-[#C59B27] text-white p-5 shadow-xl flex flex-col items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300 border border-amber-300">
                <span className="text-[9px] font-sans font-black uppercase tracking-widest">AV-PREEMINENT</span>
                <span className="text-sm font-serif font-semibold mt-1">Martindale Rated</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      
      {/* Ethos Division */}
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
                Legal challenges are not resolved purely on procedural routine; they are conquered through absolute intellectual dominance, strategic preparation, and unwavering client alignment. Aegis Lexington stands as a sovereign guard over your business affairs and family legacies.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div className="p-6 bg-gray-50 dark:bg-[#101625] border border-gray-150 dark:border-slate-800 transition-all">
                <span className="text-3xl block mb-4">🏛️</span>
                <h3 className="text-base font-serif font-bold text-slate-900 dark:text-slate-100 mb-2">Unparalleled Preparation</h3>
                <p className="text-xs text-gray-500 dark:text-slate-400 font-sans leading-relaxed">
                  We prepare every corporate dispute and defense outline as if it is bound for supreme appellate trial, rendering our positioning bulletproof.
                </p>
              </div>

              <div className="p-6 bg-gray-50 dark:bg-[#101625] border border-gray-150 dark:border-slate-800 transition-all">
                <span className="text-3xl block mb-4">💼</span>
                <h3 className="text-base font-serif font-bold text-slate-900 dark:text-slate-100 mb-2">Bespoke Structural Security</h3>
                <p className="text-xs text-gray-500 dark:text-slate-400 font-sans leading-relaxed">
                  Asset structures, compliance checks, and cross-border trusts are meticulously verified to shield family values and generational transfer plans.
                </p>
              </div>

              <div className="p-6 bg-gray-50 dark:bg-[#101625] border border-gray-150 dark:border-slate-800 transition-all">
                <span className="text-3xl block mb-4">🛡️</span>
                <h3 className="text-base font-serif font-bold text-slate-900 dark:text-slate-100 mb-2">Ironclad Confidentiality</h3>
                <p className="text-xs text-gray-500 dark:text-slate-400 font-sans leading-relaxed">
                  Every legal consulting workflow, data deposit, and message logs are secured using state-of-the-art secure legal data portals.
                </p>
              </div>

              <div className="p-6 bg-gray-50 dark:bg-[#101625] border border-gray-150 dark:border-slate-800 transition-all">
                <span className="text-3xl block mb-4">⚖️</span>
                <h3 className="text-base font-serif font-bold text-slate-900 dark:text-slate-100 mb-2">Elite Professional Network</h3>
                <p className="text-xs text-gray-500 dark:text-slate-400 font-sans leading-relaxed">
                  Direct connections with supreme international arbitrators, forensic auditors, regulatory agencies, and institutional banking structures.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      
      {/* Practice Areas */}
      <section id="practice-areas" className="py-20 bg-gray-50 dark:bg-[#0F141F] transition-colors border-b border-gray-150 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[10px] font-sans font-black uppercase text-amber-600 dark:text-[#C59B27] tracking-widest block">Core Expertise</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100">Practices Anchored in Excellence</h2>
            <div className="w-16 h-1 bg-[#C59B27] mx-auto rounded-none"></div>
            <p className="text-sm text-gray-500 dark:text-slate-400 font-sans max-w-xl mx-auto leading-relaxed">
              We focus our high-caliber litigation capability and structuring insight across four foundational sectors, ensuring our client mandates receive precision care.
            </p>
          </div>

          {/* Interactive Filtering Tabs */}
          <div className="flex items-center justify-center space-x-2 sm:space-x-4 overflow-x-auto pb-4 mb-8 font-sans text-xs tracking-wider uppercase font-bold">
            {PRACTICE_AREAS.map(function (pa) { return (<button key={pa.id} onClick={function () {
                setActiveTab(pa.id);
                triggerToast("Selected practice division: ".concat(pa.title), 'info');
            }} className={"px-5 py-3 rounded-none transition-all whitespace-nowrap ".concat(activeTab === pa.id
                ? 'bg-gradient-to-r from-[#8C6D1F] to-[#C59B27] text-white shadow-lg'
                : 'bg-white dark:bg-slate-900 text-gray-600 dark:text-slate-300 border border-gray-150 dark:border-slate-800')}>
                <span className="mr-2">{pa.icon}</span>
                {pa.title}
              </button>); })}
          </div>

          {/* Selected Practice Area detailed panel display */}
          <div className="bg-white dark:bg-[#101625] border border-gray-150 dark:border-slate-850 p-8 sm:p-12 shadow-xl">
            {PRACTICE_AREAS.filter(function (pa) { return pa.id === activeTab; }).map(function (pa) { return (<div key={pa.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center space-x-3 text-3xl">
                    <span>{pa.icon}</span>
                    <h3 className="font-serif font-bold text-slate-900 dark:text-slate-100">{pa.title}</h3>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-slate-300 font-sans leading-relaxed">
                    {pa.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-gray-100 dark:border-slate-800">
                    <p className="text-[10px] font-sans font-black uppercase text-gray-400 tracking-wider">Representative Segments Covered:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {pa.highlights.map(function (highlight, idx) { return (<div key={idx} className="flex items-center space-x-2 text-xs font-sans text-gray-700 dark:text-slate-300">
                          <span className="text-[#C59B27] text-sm">✦</span>
                          <span>{highlight}</span>
                        </div>); })}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-gray-50 dark:bg-[#0B0F19] p-6 border-l-4 border-[#C59B27] space-y-4">
                  <p className="text-[9px] font-sans font-black text-amber-600 dark:text-[#C59B27] uppercase tracking-widest">DIVISION LEAD ATTENTION</p>
                  <p className="text-lg font-serif font-bold text-slate-900 dark:text-slate-100">{pa.leadAttorney}</p>
                  <p className="text-xs text-gray-500 dark:text-slate-400 font-sans leading-relaxed">
                    Personally oversees file routing, strategy optimization, and is responsible for client liaison for this division.
                  </p>
                  <a href="#priority-booking" onClick={function () { return setBookingForm(function (prev) { return (__assign(__assign({}, prev), { practiceArea: pa.id })); }); }} className="inline-block bg-[#0F141F] dark:bg-slate-900 hover:bg-[#C59B27] hover:text-white text-slate-200 text-[10px] font-sans font-black uppercase tracking-widest py-3 px-5 transition-colors border border-gray-700 dark:border-slate-800">
                    Discuss Case with Team
                  </a>
                </div>

              </div>); })}
          </div>

        </div>
      </section>

      
      {/* Elite Counsel Profiles */}
      <section id="attorneys" className="py-20 bg-white dark:bg-[#0B0F19] transition-colors border-b border-gray-150 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[10px] font-sans font-black uppercase text-amber-600 dark:text-[#C59B27] tracking-widest block">Elite Advisors</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100">Distinguished Legal Minds</h2>
            <div className="w-16 h-1 bg-[#C59B27] mx-auto rounded-none"></div>
            <p className="text-sm text-gray-500 dark:text-slate-400 font-sans max-w-xl mx-auto leading-relaxed">
              We are defined by the analytical genius of our advocates, fusing rigorous Ivy League academic backgrounds with stellar trial track records.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ATTORNEYS.map(function (attorney) { return (<div key={attorney.id} className="bg-gray-50 dark:bg-[#101625] border border-gray-150 dark:border-slate-850 shadow-md group overflow-hidden flex flex-col justify-between">
                <div>
                  {/* Portrait Section */}
                  <div className="relative overflow-hidden bg-slate-200 dark:bg-slate-950">
                    <img src={attorney.image} alt={attorney.name} className="w-full h-72 object-cover group-hover:scale-103 transition-transform duration-300"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F141F] via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-4">
                      <p className="text-[9px] font-sans font-black uppercase tracking-widest text-[#C59B27]">{attorney.role}</p>
                      <h4 className="text-base font-serif font-bold text-white mt-1">{attorney.name}</h4>
                    </div>
                  </div>

                  {/* Attorney detailed details */}
                  <div className="p-5 space-y-4">
                    <div className="space-y-1 text-[11px] font-sans">
                      <p className="text-gray-400"><strong className="text-slate-700 dark:text-slate-300">Edu:</strong> {attorney.education}</p>
                      <p className="text-gray-400"><strong className="text-slate-700 dark:text-slate-300">Exp:</strong> {attorney.experience}</p>
                    </div>

                    <p className="text-[11px] text-gray-500 dark:text-slate-400 font-sans leading-relaxed">
                      {attorney.bio}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <a href="#priority-booking" onClick={function () {
                setBookingForm(function (prev) { return (__assign(__assign({}, prev), { summaryText: "Preferred counsel: Partner ".concat(attorney.name, ". Corporate / Private strategic inquiry.") })); });
                triggerToast("Routing strategy direct to ".concat(attorney.name, "'s chamber administrative clerk."), 'success');
            }} className="w-full text-center block bg-[#0F141F] dark:bg-slate-900 hover:bg-[#C59B27] hover:text-white text-slate-100 text-[10px] font-sans font-black uppercase tracking-widest py-2.5 transition-colors border border-gray-700 dark:border-slate-800">
                    Direct Inquiry
                  </a>
                </div>

              </div>); })}
          </div>

        </div>
      </section>

      
      {/* Interactive Settlement Estimator */}
      <section id="calculator" className="py-20 bg-gray-50 dark:bg-[#0F141F] transition-colors border-b border-gray-150 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[10px] font-sans font-black uppercase text-amber-600 dark:text-[#C59B27] tracking-widest block">Interactive Planning Tool</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100">Dispute Recoveries Estimator</h2>
            <div className="w-16 h-1 bg-[#C59B27] mx-auto rounded-none"></div>
            <p className="text-sm text-gray-500 dark:text-slate-400 font-sans max-w-xl mx-auto leading-relaxed">
              Calculate structured gross recovery estimates and net client outcomes based on financial contract damage thresholds or intellectual property infringements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Sliders & Selectors */}
            <div className="lg:col-span-7 bg-white dark:bg-[#101625] border border-gray-150 dark:border-slate-850 p-6 sm:p-8 shadow-xl space-y-6">
              
              <div className="space-y-2">
                <label className="block text-[11px] font-sans font-black text-gray-400 uppercase tracking-wider">Select Litigation Type</label>
                <div className="grid grid-cols-3 gap-3 font-sans text-xs">
                  <button onClick={function () { return setCalcType('contract'); }} className={"py-3 text-center rounded-none font-bold uppercase transition-all ".concat(calcType === 'contract'
            ? 'bg-[#C59B27] text-white'
            : 'bg-gray-100 dark:bg-slate-900 text-gray-600 dark:text-gray-300')}>
                    Contract Breach
                  </button>
                  <button onClick={function () { return setCalcType('ip'); }} className={"py-3 text-center rounded-none font-bold uppercase transition-all ".concat(calcType === 'ip'
            ? 'bg-[#C59B27] text-white'
            : 'bg-gray-100 dark:bg-slate-900 text-gray-600 dark:text-gray-300')}>
                    IP Infringement
                  </button>
                  <button onClick={function () { return setCalcType('civil'); }} className={"py-3 text-center rounded-none font-bold uppercase transition-all ".concat(calcType === 'civil'
            ? 'bg-[#C59B27] text-white'
            : 'bg-gray-100 dark:bg-slate-900 text-gray-600 dark:text-gray-300')}>
                    Civil Damages
                  </button>
                </div>
              </div>

              {/* Slider: Direct Financial loss */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-sans">
                  <span className="font-bold text-gray-400 uppercase tracking-wider">Direct Financial Damages</span>
                  <span className="text-base font-serif font-black text-[#C59B27]">${Number(directDamages).toLocaleString()}</span>
                </div>
                <input type="range" min="50000" max="1000000" step="25000" value={directDamages} onChange={function (e) { return setDirectDamages(Number(e.target.value)); }} className="w-full accent-[#C59B27] h-1.5 bg-gray-200 rounded-lg cursor-pointer"/>
                <div className="flex justify-between text-[10px] text-gray-400 font-sans">
                  <span>$50k</span>
                  <span>$500k</span>
                  <span>$1M+</span>
                </div>
              </div>

              {/* Slider: Damages Multiplier */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-sans">
                  <span className="font-bold text-gray-400 uppercase tracking-wider">Harm Multiplier (Damages / Retaliatory Multiplier)</span>
                  <span className="text-base font-serif font-black text-[#C59B27]">{multiplier}x</span>
                </div>
                <input type="range" min="1" max="5" step="1" value={multiplier} onChange={function (e) { return setMultiplier(Number(e.target.value)); }} className="w-full accent-[#C59B27] h-1.5 bg-gray-200 rounded-lg cursor-pointer"/>
                <div className="flex justify-between text-[10px] text-gray-400 font-sans">
                  <span>1x (Base Damages)</span>
                  <span>3x (Standard punitive multiplier)</span>
                  <span>5x (Aggravated damages)</span>
                </div>
              </div>

              {/* Slider: Fee Contingency Percentage */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-sans">
                  <span className="font-bold text-gray-400 uppercase tracking-wider">Contingency Arrangement Fee</span>
                  <span className="text-base font-serif font-black text-[#C59B27]">{feePercentage}%</span>
                </div>
                <input type="range" min="20" max="40" step="1" value={feePercentage} onChange={function (e) { return setFeePercentage(Number(e.target.value)); }} className="w-full accent-[#C59B27] h-1.5 bg-gray-200 rounded-lg cursor-pointer"/>
                <div className="flex justify-between text-[10px] text-gray-400 font-sans">
                  <span>20% (Low risk support)</span>
                  <span>33% (Standard Trial Retainer)</span>
                  <span>40% (Antitrust / High Risk class)</span>
                </div>
              </div>

            </div>

            {/* Structured calculation display panel */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0F141F] to-[#1A2335] border border-[#C59B27]/30 text-slate-100 p-8 shadow-2xl space-y-6">
              
              <div className="text-center pb-4 border-b border-slate-800">
                <p className="text-[10px] font-sans font-black uppercase text-amber-500 tracking-[0.25em]">PRELIMINARY ESTIMATE METRICS</p>
                <h3 className="text-2xl font-serif font-bold text-slate-100 mt-2">Projection Ledger</h3>
              </div>

              <div className="space-y-4">
                
                <div className="flex justify-between items-center text-xs font-sans">
                  <span className="text-slate-400">Projected Gross Settlement:</span>
                  <span className="font-serif font-semibold text-slate-100 text-lg">${calculatedSettlement.gross.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center text-xs font-sans">
                  <span className="text-slate-400">Contingency Fee Allocation ({feePercentage}%):</span>
                  <span className="font-serif font-semibold text-rose-400">-${calculatedSettlement.fees.toLocaleString()}</span>
                </div>

                <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
                  <div>
                    <span className="text-[10px] font-sans font-black text-amber-500 tracking-wider uppercase block">NET CLIENT DISBURSEMENT ESTIMATE</span>
                    <span className="text-2xl font-serif font-black text-emerald-400">${calculatedSettlement.net.toLocaleString()}</span>
                  </div>
                </div>

              </div>

              <div className="bg-slate-900/50 p-4 border-l-2 border-amber-500 text-[10px] text-slate-400 leading-relaxed font-sans">
                ⚠️ Estimates compiled using baseline statutory limits and trial average outcomes. They do not represent a guaranteed legal outcome, binding contract, or official financial guarantee.
              </div>

              <a href="#priority-booking" onClick={function () {
            setBookingForm(function (prev) { return (__assign(__assign({}, prev), { summaryText: "Litigation category selected: ".concat(calcType.toUpperCase(), " with estimated direct value of $").concat(Number(directDamages).toLocaleString(), ". Requesting strategic evaluation.") })); });
            triggerToast('Prefilled target case estimates to your secure booking form.', 'success');
        }} className="w-full text-center block bg-gradient-to-r from-[#8C6D1F] to-[#C59B27] text-white py-3.5 font-sans font-black uppercase tracking-wider text-xs border border-amber-300">
                Secure Priority Evaluation
              </a>

            </div>

          </div>

        </div>
      </section>

      
      {/* Case Viability Assessor Quiz */}
      <section className="py-20 bg-white dark:bg-[#0B0F19] transition-colors border-b border-gray-150 dark:border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="bg-gray-50 dark:bg-[#101625] border border-gray-150 dark:border-slate-850 p-6 sm:p-10 shadow-xl space-y-8">
            
            <div className="text-center space-y-3">
              <span className="text-3xl">⚖️</span>
              <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 dark:text-slate-100">Case Viability Assessor</h2>
              <p className="text-xs text-gray-500 dark:text-slate-400 font-sans max-w-md mx-auto">
                Discover if your legal dispute meets documentation thresholds and timeline frameworks within 60 seconds.
              </p>
            </div>

            {/* Quiz Multi-step Navigation */}
            <div className="relative">
              
              {/* Steps Indicator Tracker */}
              <div className="flex justify-between items-center text-xs font-sans mb-8">
                {['Category', 'Timeline', 'Proof', 'Value', 'Report'].map(function (label, idx) { return (<div key={idx} className="flex flex-col items-center">
                    <span className={"w-8 h-8 rounded-full flex items-center justify-center font-bold border ".concat(quizStep >= idx
                ? 'bg-[#C59B27] text-white border-amber-500 shadow-md'
                : 'bg-white dark:bg-slate-900 text-gray-400 border-gray-300 dark:border-slate-800')}>
                      {idx + 1}
                    </span>
                    <span className="hidden sm:inline text-[9px] font-black uppercase tracking-wider mt-1 text-gray-400">{label}</span>
                  </div>); })}
              </div>

              {/* Step 0: Category Select */}
              {quizStep === 0 && (<div className="space-y-4">
                  <p className="text-center text-sm font-serif font-bold text-slate-800 dark:text-slate-200">Step 1: Choose the litigation or advisory category</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button onClick={function () { return handleQuizAnswer('category', 'corporate'); }} className="p-5 text-left border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-[#C59B27] transition-all flex justify-between items-center font-sans font-bold">
                      <span>Venture/Corporate restructure Dispute</span>
                      <span className="text-amber-500">→</span>
                    </button>
                    <button onClick={function () { return handleQuizAnswer('category', 'patent'); }} className="p-5 text-left border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-[#C59B27] transition-all flex justify-between items-center font-sans font-bold">
                      <span>IP Piracy / Patent Infringement</span>
                      <span className="text-amber-500">→</span>
                    </button>
                    <button onClick={function () { return handleQuizAnswer('category', 'contract'); }} className="p-5 text-left border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-[#C59B27] transition-all flex justify-between items-center font-sans font-bold">
                      <span>Commercial Breach of Contract</span>
                      <span className="text-amber-500">→</span>
                    </button>
                    <button onClick={function () { return handleQuizAnswer('category', 'trust'); }} className="p-5 text-left border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-[#C59B27] transition-all flex justify-between items-center font-sans font-bold">
                      <span>Trust / Generational Asset Allocation</span>
                      <span className="text-amber-500">→</span>
                    </button>
                  </div>
                </div>)}

              {/* Step 1: Timeline Select */}
              {quizStep === 1 && (<div className="space-y-4">
                  <p className="text-center text-sm font-serif font-bold text-slate-800 dark:text-slate-200">Step 2: When did the incident or breach occur?</p>
                  <div className="grid grid-cols-1 gap-3 font-sans font-bold">
                    <button onClick={function () { return handleQuizAnswer('timeframe', 'recent'); }} className="p-5 text-left bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 hover:border-[#C59B27] flex justify-between items-center">
                      <div>
                        <p>Within the last 12 Months</p>
                        <p className="text-[10px] text-emerald-500 font-normal uppercase tracking-wider mt-0.5">Statute window fully active</p>
                      </div>
                      <span className="text-amber-500">→</span>
                    </button>
                    <button onClick={function () { return handleQuizAnswer('timeframe', 'mid'); }} className="p-5 text-left bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 hover:border-[#C59B27] flex justify-between items-center">
                      <div>
                        <p>Between 1 and 3 Years ago</p>
                        <p className="text-[10px] text-amber-500 font-normal uppercase tracking-wider mt-0.5">Needs immediate review of statute deadlines</p>
                      </div>
                      <span className="text-amber-500">→</span>
                    </button>
                    <button onClick={function () { return handleQuizAnswer('timeframe', 'old'); }} className="p-5 text-left bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 hover:border-[#C59B27] flex justify-between items-center">
                      <div>
                        <p>More than 3 Years ago</p>
                        <p className="text-[10px] text-rose-500 font-normal uppercase tracking-wider mt-0.5">May have statutory complications</p>
                      </div>
                      <span className="text-amber-500">→</span>
                    </button>
                  </div>
                </div>)}

              {/* Step 2: Proof Select */}
              {quizStep === 2 && (<div className="space-y-4">
                  <p className="text-center text-sm font-serif font-bold text-slate-800 dark:text-slate-200">Step 3: What evidentiary support is available?</p>
                  <div className="grid grid-cols-1 gap-3 font-sans font-bold">
                    <button onClick={function () { return handleQuizAnswer('evidence', 'strong'); }} className="p-5 text-left bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 hover:border-[#C59B27] flex justify-between">
                      <div>
                        <p>Strong: Fully Executed written agreements & logs</p>
                        <p className="text-[10px] text-gray-400 font-normal mt-0.5">Includes signed contracts, bank records, formal emails</p>
                      </div>
                      <span className="text-amber-500">→</span>
                    </button>
                    <button onClick={function () { return handleQuizAnswer('evidence', 'partial'); }} className="p-5 text-left bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 hover:border-[#C59B27] flex justify-between">
                      <div>
                        <p>Partial: Verbal/text validation and receipts</p>
                        <p className="text-[10px] text-gray-400 font-normal mt-0.5">Written communications exist but formal contracts do not</p>
                      </div>
                      <span className="text-amber-500">→</span>
                    </button>
                    <button onClick={function () { return handleQuizAnswer('evidence', 'none'); }} className="p-5 text-left bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 hover:border-[#C59B27] flex justify-between">
                      <div>
                        <p>None: Verbal commitment and unrecorded claims</p>
                        <p className="text-[10px] text-gray-400 font-normal mt-0.5">Requires extensive discovery process</p>
                      </div>
                      <span className="text-amber-500">→</span>
                    </button>
                  </div>
                </div>)}

              {/* Step 3: Loss Value Select */}
              {quizStep === 3 && (<div className="space-y-4">
                  <p className="text-center text-sm font-serif font-bold text-slate-800 dark:text-slate-200">Step 4: Estimate the financial losses involved</p>
                  <div className="grid grid-cols-3 gap-3 font-sans text-xs">
                    <button onClick={function () { return handleQuizAnswer('lossValue', 'high'); }} className="p-5 border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-[#C59B27] text-center flex flex-col items-center space-y-2 font-bold">
                      <span className="text-2xl">💰</span>
                      <span>Above $250k</span>
                    </button>
                    <button onClick={function () { return handleQuizAnswer('lossValue', 'medium'); }} className="p-5 border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-[#C59B27] text-center flex flex-col items-center space-y-2 font-bold">
                      <span className="text-2xl">💼</span>
                      <span>$50k - $250k</span>
                    </button>
                    <button onClick={function () { return handleQuizAnswer('lossValue', 'low'); }} className="p-5 border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-[#C59B27] text-center flex flex-col items-center space-y-2 font-bold">
                      <span className="text-2xl">📉</span>
                      <span>Below $50k</span>
                    </button>
                  </div>
                </div>)}

              {/* Step 4: Quiz Report Card */}
              {quizStep === 4 && quizResult && (<div className="space-y-6 text-center">
                  <div className={"inline-block border px-6 py-2 uppercase font-sans text-xs tracking-widest font-black ".concat(quizResult.badgeColor)}>
                    {quizResult.title}
                  </div>
                  
                  <p className="text-sm font-sans text-gray-700 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
                    {quizResult.recommendation}
                  </p>

                  <div className="flex justify-center space-x-3 pt-4">
                    <button onClick={handleResetQuiz} className="border border-gray-300 dark:border-slate-700 font-sans text-xs uppercase tracking-wider font-bold py-3 px-6 text-slate-800 dark:text-slate-200">
                      Reset Evaluation
                    </button>
                    <a href="#priority-booking" onClick={function () {
                setBookingForm(function (prev) { return (__assign(__assign({}, prev), { summaryText: "Auto Evaluation completed. Case Viability: ".concat(quizResult.title, ". Evidence: ").concat(quizAnswers.evidence.toUpperCase(), ". Timeframe: ").concat(quizAnswers.timeframe.toUpperCase(), ".") })); });
                triggerToast('Auto Assessment report attached to priorities consultation ticket.', 'success');
            }} className="bg-gradient-to-r from-[#8C6D1F] to-[#C59B27] text-white font-sans text-xs uppercase tracking-wider font-bold py-3 px-6 border border-amber-300">
                      Route Report to Advocate
                    </a>
                  </div>
                </div>)}

            </div>

          </div>

        </div>
      </section>

      
      {/* Secure Client Portal Panel */}
      <section id="client-portal" className="py-20 bg-gray-50 dark:bg-[#0F141F] transition-colors border-b border-gray-150 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="text-[10px] font-sans font-black uppercase text-amber-600 dark:text-[#C59B27] tracking-widest block">Client Transparency Portal</span>
              <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 font-bold">
                Encrypted Strategic Collaboration Portal
              </h2>
              <div className="w-16 h-1 bg-[#C59B27] rounded-none"></div>
              <p className="text-sm text-gray-600 dark:text-slate-300 font-sans leading-relaxed">
                Experience high-caliber legal transparency. Our elite clients gain access to immediate documentation reviews, encrypted communication direct lines with senior partners, action status trackers, and secure balance calculations.
              </p>
              
              <div className="pt-4 space-y-3 font-sans text-xs text-gray-500">
                <p className="flex items-center space-x-2">
                  <span className="text-emerald-500">✓</span>
                  <span>AES-256 Bit Data Shielding Standards</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-emerald-500">✓</span>
                  <span>Direct Active File Trackers & Depositions</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-emerald-500">✓</span>
                  <span>Real-time Secure Retainer Ledgers</span>
                </p>
              </div>

              {!isPortalLoggedIn && (<button onClick={function () {
                setIsPortalLoggedIn(true);
                triggerToast('Initiated secure mock client session.', 'success');
            }} className="bg-slate-900 dark:bg-slate-800 hover:bg-[#C59B27] text-slate-200 text-xs font-sans font-bold uppercase tracking-wider py-3 px-6 border border-gray-700">
                  Simulate Secure Access Demo
                </button>)}
            </div>

            {/* Portal Console Box */}
            <div className="lg:col-span-7 bg-white dark:bg-[#101625] border border-gray-150 dark:border-slate-850 p-6 sm:p-8 shadow-2xl">
              
              {!isPortalLoggedIn ? (<div className="space-y-6">
                  <div className="text-center pb-4 border-b border-gray-150 dark:border-slate-800">
                    <span className="text-2xl">🔒</span>
                    <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-slate-100 mt-2">Access Client Console</h3>
                    <p className="text-[10px] text-gray-400 font-sans uppercase tracking-widest mt-1">E2E Secure Channel Connection</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-sans font-black text-gray-400 uppercase tracking-wider mb-1">Corporate Client Email</label>
                      <input type="text" disabled value={portalEmail} className="w-full bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 text-gray-700 dark:text-slate-300 py-3 px-4 text-xs font-sans font-semibold rounded-none focus:outline-none"/>
                    </div>
                    <div>
                      <label className="block text-[10px] font-sans font-black text-gray-400 uppercase tracking-wider mb-1">Client Password Access</label>
                      <input type="password" disabled value={portalPassword} className="w-full bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 text-gray-700 dark:text-slate-300 py-3 px-4 text-xs font-sans font-semibold rounded-none focus:outline-none"/>
                    </div>
                  </div>

                  <button onClick={function () {
                setIsPortalLoggedIn(true);
                triggerToast('Success: Authorized secure client console.', 'success');
            }} className="w-full text-center bg-[#C59B27] hover:bg-amber-600 text-white py-3.5 font-sans font-extrabold text-xs uppercase tracking-widest border border-amber-300">
                    Authenticate Secure Access Demo
                  </button>
                </div>) : (<div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-150 dark:border-slate-800 text-xs font-sans">
                    <div>
                      <p className="text-[10px] text-emerald-500 font-black uppercase tracking-widest flex items-center">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block mr-1.5 animate-ping"></span>
                        Client Secured
                      </p>
                      <p className="font-bold text-slate-900 dark:text-slate-100 mt-1">SUMMIT ACQUISITION DEALS — SECURED PORTAL</p>
                    </div>
                    <button onClick={function () {
                setIsPortalLoggedIn(false);
                triggerToast('Securely logged out.', 'info');
            }} className="text-red-500 font-bold uppercase tracking-wider text-[10px] hover:underline">
                      Exit Demo
                    </button>
                  </div>

                  {/* Top Stats Banner */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-sans text-center">
                    <div className="bg-gray-50 dark:bg-slate-900 p-3 border-l-2 border-[#C59B27]">
                      <p className="text-[9px] text-gray-400 font-black uppercase tracking-wider">File Status</p>
                      <p className="text-xs font-bold text-[#C59B27] mt-1">Drafting Board</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-slate-900 p-3 border-l-2 border-[#C59B27]">
                      <p className="text-[9px] text-gray-400 font-black uppercase tracking-wider">Assigned Counsel</p>
                      <p className="text-xs font-bold text-[#C59B27] mt-1">Victoria Sterling</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-slate-900 p-3 border-l-2 border-[#C59B27]">
                      <p className="text-[9px] text-gray-400 font-black uppercase tracking-wider">Next Depositions</p>
                      <p className="text-xs font-bold text-[#C59B27] mt-1">August 14, 2026</p>
                    </div>
                  </div>

                  {/* Chat Client */}
                  <div className="space-y-3 bg-gray-50 dark:bg-[#0B0F19] p-4 border border-gray-150 dark:border-slate-850">
                    <p className="text-[9px] font-sans font-black text-gray-400 tracking-wider uppercase">Direct Line Secured Messages</p>
                    
                    <div className="space-y-3 max-h-44 overflow-y-auto pr-2 scrollbar-thin text-xs font-sans">
                      {portalMessages.map(function (msg, idx) { return (<div key={idx} className={"p-3 max-w-sm rounded-none border ".concat(msg.sender === 'You'
                    ? 'bg-amber-500/10 text-slate-800 dark:text-slate-100 ml-auto border-amber-500/20'
                    : 'bg-white dark:bg-slate-900 text-gray-600 dark:text-slate-300 border-gray-200 dark:border-slate-800')}>
                          <p className="text-[9px] font-black uppercase text-amber-600 dark:text-[#C59B27]">{msg.sender}</p>
                          <p className="mt-1 leading-relaxed">{msg.text}</p>
                          <span className="text-[8px] text-gray-400 text-right block mt-1">{msg.time}</span>
                        </div>); })}
                    </div>

                    <form onSubmit={handleSendPortalMsg} className="flex gap-2 pt-2 border-t border-gray-150 dark:border-slate-800">
                      <input type="text" placeholder="Inquire securely on this draft folder..." value={newPortalMsg} onChange={function (e) { return setNewPortalMsg(e.target.value); }} className="flex-1 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 py-2.5 px-4 text-xs font-sans text-gray-800 dark:text-slate-100 rounded-none focus:outline-none"/>
                      <button type="submit" className="bg-[#C59B27] text-white font-sans text-xs uppercase tracking-wider font-bold py-2.5 px-4">
                        Send
                      </button>
                    </form>
                  </div>

                </div>)}

            </div>

          </div>

        </div>
      </section>

      
      {/* Booking Form Section */}
      <section id="priority-booking" className="py-20 bg-white dark:bg-[#0B0F19] transition-colors border-b border-gray-150 dark:border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="bg-[#101625] text-slate-100 rounded-none p-6 sm:p-10 border border-amber-500/30 shadow-2xl space-y-8">
            
            <div className="text-center space-y-3">
              <span className="text-3xl">🏛️</span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#C59B27] font-semibold">Initiate Priority Strategy Call</h2>
              <p className="text-xs text-slate-400 font-sans max-w-md mx-auto">
                File details below to reserve priority legal advisory routing. All details are kept in strict lawyer-client confidence.
              </p>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-6 text-left font-sans text-xs text-slate-300">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-black text-gray-400 uppercase tracking-wider mb-1">Your Full Name *</label>
                  <input type="text" required placeholder="e.g., Andrew Kimani, Managing Director" value={bookingForm.clientName} onChange={function (e) { return setBookingForm(__assign(__assign({}, bookingForm), { clientName: e.target.value })); }} className="w-full bg-[#0F141F] border border-slate-800 rounded-none py-3 px-4 text-slate-100 focus:outline-none focus:border-[#C59B27]"/>
                </div>

                <div>
                  <label className="block font-black text-gray-400 uppercase tracking-wider mb-1">Contact Email Address *</label>
                  <input type="email" required placeholder="e.g., andrew@ventures.com" value={bookingForm.clientEmail} onChange={function (e) { return setBookingForm(__assign(__assign({}, bookingForm), { clientEmail: e.target.value })); }} className="w-full bg-[#0F141F] border border-slate-800 rounded-none py-3 px-4 text-slate-100 focus:outline-none focus:border-[#C59B27]"/>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-black text-gray-400 uppercase tracking-wider mb-1">Secure WhatsApp / Phone Mobile *</label>
                  <input type="tel" required placeholder="e.g., +254 712 345678" value={bookingForm.clientPhone} onChange={function (e) { return setBookingForm(__assign(__assign({}, bookingForm), { clientPhone: e.target.value })); }} className="w-full bg-[#0F141F] border border-slate-800 rounded-none py-3 px-4 text-slate-100 focus:outline-none focus:border-[#C59B27]"/>
                </div>

                <div>
                  <label className="block font-black text-gray-400 uppercase tracking-wider mb-1">Division Interest *</label>
                  <select value={bookingForm.practiceArea} onChange={function (e) { return setBookingForm(__assign(__assign({}, bookingForm), { practiceArea: e.target.value })); }} className="w-full bg-[#0F141F] border border-slate-800 rounded-none py-3 px-4 text-slate-100 focus:outline-none focus:border-[#C59B27]">
                    <option value="corporate">Corporate & Venture restructures</option>
                    <option value="litigation">Antitrust & Courtroom Litigation</option>
                    <option value="estate">Generational Trusts & Wealth Defense</option>
                    <option value="tech">IP Shielding & AI Advisory</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-black text-gray-400 uppercase tracking-wider mb-1">Urgency Matrix</label>
                  <select value={bookingForm.priority} onChange={function (e) { return setBookingForm(__assign(__assign({}, bookingForm), { priority: e.target.value })); }} className="w-full bg-[#0F141F] border border-slate-800 rounded-none py-3 px-4 text-slate-100 focus:outline-none focus:border-[#C59B27]">
                    <option value="low">Corporate Restructuring Planning (Advisory)</option>
                    <option value="medium">Standard Dispute Resolution Defense</option>
                    <option value="high">Urgent Injunction / Active Cease-and-Desist</option>
                  </select>
                </div>

                <div>
                  <label className="block font-black text-gray-400 uppercase tracking-wider mb-1">Preferred Strategic Date Target</label>
                  <input type="date" value={bookingForm.prefDate} onChange={function (e) { return setBookingForm(__assign(__assign({}, bookingForm), { prefDate: e.target.value })); }} className="w-full bg-[#0F141F] border border-slate-800 rounded-none py-3 px-4 text-slate-100 focus:outline-none focus:border-[#C59B27]"/>
                </div>
              </div>

              <div>
                <label className="block font-black text-gray-400 uppercase tracking-wider mb-1">Strategic Case Overview & Facts</label>
                <textarea placeholder="Identify opposing entity or strategic assets, documentation status, and immediate objectives..." value={bookingForm.summaryText} onChange={function (e) { return setBookingForm(__assign(__assign({}, bookingForm), { summaryText: e.target.value })); }} className="w-full bg-[#0F141F] border border-slate-800 rounded-none py-3 px-4 text-slate-100 focus:outline-none focus:border-[#C59B27]" rows="3"/>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full bg-gradient-to-r from-[#8C6D1F] to-[#C59B27] hover:from-[#735817] hover:to-[#B08920] text-slate-100 font-extrabold py-4 px-8 rounded-none transition-all tracking-wider uppercase border border-amber-300">
                  🚀 Dispatch Strategy Call Ticket Securely
                </button>
                <p className="text-[10px] text-slate-400 text-center mt-3 leading-relaxed">
                  🔒 By submitting, you acknowledge that this initial strategy request is an active request for consultation and does not establish a formal attorney-client relationship until conflict checks are fully resolved.
                </p>
              </div>

            </form>

          </div>

        </div>
      </section>

      
      {/* FAQ Division */}
      <section className="py-20 bg-gray-50 dark:bg-[#0F141F] transition-colors border-b border-gray-150 dark:border-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-[10px] font-sans font-black uppercase text-amber-600 dark:text-[#C59B27] tracking-widest block">Legal Guidelines FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100">Dispute & Restructure FAQs</h2>
            <div className="w-16 h-1 bg-[#C59B27] mx-auto rounded-none"></div>
          </div>

          <div className="space-y-4 font-sans text-xs">
            {FAQS.map(function (faq, index) {
            var _a = (0, react_1.useState)(false), isOpen = _a[0], setIsOpen = _a[1];
            return (<div key={index} className="bg-white dark:bg-[#101625] border border-gray-150 dark:border-slate-850 shadow-sm transition-all">
                  <button onClick={function () {
                    setIsOpen(!isOpen);
                    triggerToast("Browsed instruction framework: Q".concat(index + 1), 'info');
                }} className="w-full p-5 text-left font-bold text-slate-900 dark:text-slate-100 flex items-center justify-between text-xs tracking-wide uppercase focus:outline-none border-b border-gray-100 dark:border-slate-800">
                    <span>{faq.question}</span>
                    <span className={"text-lg font-light transform transition-transform duration-200 ".concat(isOpen ? 'rotate-45 text-[#C59B27]' : 'text-gray-400')}>
                      +
                    </span>
                  </button>

                  <div className={"transition-all duration-300 overflow-hidden ".concat(isOpen ? 'max-h-56' : 'max-h-0')}>
                    <p className="p-6 text-gray-500 dark:text-slate-400 leading-relaxed bg-gray-50/50 dark:bg-[#0B0F19]">
                      {faq.answer}
                    </p>
                  </div>
                </div>);
        })}
          </div>

        </div>
      </section>

      
      {/* Contact Section & Real Location Grid */}
      <section className="py-20 bg-white dark:bg-[#0B0F19] transition-colors border-b border-gray-150 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-5 space-y-8 text-left">
              <div>
                <span className="text-[10px] font-sans font-black uppercase text-amber-600 dark:text-[#C59B27] tracking-widest block">Chambers Headquarters</span>
                <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 dark:text-slate-100 mt-1">Visit Our Chambers</h2>
                <p className="text-xs text-gray-500 dark:text-slate-400 mt-2 font-sans leading-relaxed">
                  Aegis Lexington’s prime head office is situated within Nairobi’s premier corporate corridor, designed for client comfort and private conferences.
                </p>
              </div>

              <div className="space-y-5 font-sans text-xs">
                
                <div className="flex items-start space-x-4">
                  <span className="text-2xl mt-1">📍</span>
                  <div>
                    <h4 className="font-extrabold text-slate-900 dark:text-slate-100">Nairobi Headquarters</h4>
                    <p className="text-gray-500 dark:text-slate-400 mt-1 leading-relaxed">
                      Aegis Tower, Suite 10A, Upper Hill Corporate Way, Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <span className="text-2xl mt-1">📞</span>
                  <div>
                    <h4 className="font-extrabold text-slate-900 dark:text-slate-100">Direct Inquiries Hotlines</h4>
                    <p className="text-gray-500 dark:text-slate-400 mt-1 leading-relaxed">
                      Main Chambers: +254 20 700 000 <br />
                      Partner Strategy Line: +254 711 999 888
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <span className="text-2xl mt-1">✉️</span>
                  <div>
                    <h4 className="font-extrabold text-slate-900 dark:text-slate-100">Secured Channels Email</h4>
                    <p className="text-gray-500 dark:text-slate-400 mt-1 leading-relaxed">
                      advisory@aegislexington.chambers <br />
                      litigation@aegislexington.chambers
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <span className="text-2xl mt-1">🕒</span>
                  <div>
                    <h4 className="font-extrabold text-slate-900 dark:text-slate-100">Chamber Hours</h4>
                    <p className="text-gray-500 dark:text-slate-400 mt-1 leading-relaxed">
                      Monday to Friday: 8:00 AM – 6:00 PM (EAT) <br />
                      Saturday Strategic Audits: By Special Executive Referral
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Stylized Google Map Simulation */}
            <div className="lg:col-span-7 h-[350px] lg:h-[450px] relative rounded-none overflow-hidden border border-gray-150 dark:border-slate-800 shadow-lg bg-gray-50 dark:bg-slate-900 flex flex-col items-center justify-center text-center p-6">
              
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C59B27_1.5px,transparent_1.5px)] [background-size:20px_20px]"></div>
              
              <div className="relative z-10 space-y-4 max-w-sm font-sans">
                <span className="text-4xl">🗺️</span>
                <h4 className="text-base font-serif font-bold text-slate-900 dark:text-slate-100">Upper Hill Legal Corridor Location</h4>
                <p className="text-[11px] text-gray-500 dark:text-slate-400 leading-relaxed">
                  Prime corporate district position with dedicated basement parking for private client visits.
                </p>
                <div className="flex justify-center space-x-3 text-xs font-bold">
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 py-2.5 px-4 text-slate-800 dark:text-slate-200 shadow-sm">
                    Open in Google Maps
                  </a>
                  <a href="https://wa.me/254711999888" className="bg-[#0B4F30] text-white py-2.5 px-4">
                    Direct Security Gate Ping
                  </a>
                </div>
              </div>

              {/* Pin pointer indicator */}
              <div className="absolute top-1/2 left-1/3 -translate-y-10 animate-bounce">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-[#C59B27] text-white flex items-center justify-center font-bold text-xs border-2 border-white shadow-xl">
                    ⚖️
                  </div>
                  <div className="w-1.5 h-3 bg-[#C59B27] mx-auto -mt-0.5 shadow-md"></div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      
      {/* Footer Block */}
      <footer className="bg-[#070A11] text-gray-400 pt-16 pb-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 font-sans text-xs">
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="border border-[#C59B27] p-2 rounded-full">
                <span className="text-sm font-serif text-[#C59B27] tracking-widest font-bold">AL</span>
              </div>
              <div>
                <span className="text-sm font-serif font-bold text-white block tracking-widest">AEGIS LEXINGTON</span>
                <span className="text-[8px] tracking-widest font-black uppercase text-amber-500 -mt-1 block">Chambers</span>
              </div>
            </div>
            <p className="text-gray-500 leading-relaxed pt-2">
              Sovereign legal advocates representing regional market leaders, investment portfolios, and legacy trusts in complex courtroom defense and generational structuring.
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
              <li><a href="#practice-areas" onClick={function () { return setActiveTab('corporate'); }} className="hover:text-[#C59B27] transition-colors">Corporate Mergers & Restructure</a></li>
              <li><a href="#practice-areas" onClick={function () { return setActiveTab('litigation'); }} className="hover:text-[#C59B27] transition-colors">Complex Civil Arbitration</a></li>
              <li><a href="#practice-areas" onClick={function () { return setActiveTab('estate'); }} className="hover:text-[#C59B27] transition-colors">Trust Administration & Wills</a></li>
              <li><a href="#practice-areas" onClick={function () { return setActiveTab('tech'); }} className="hover:text-[#C59B27] transition-colors">AI Regulatory Governance & Patents</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-serif font-bold text-white tracking-wider">Strategic Portals</h4>
            <ul className="space-y-2.5 text-xs text-gray-500">
              <li><a href="#client-portal" className="hover:text-[#C59B27] transition-colors">Client Secured Portal</a></li>
              <li><a href="#calculator" className="hover:text-[#C59B27] transition-colors">Dispute Recoveries Estimator</a></li>
              <li><a href="#priority-booking" className="hover:text-[#C59B27] transition-colors">Reserve Consultation</a></li>
              <li><a href="#about" className="hover:text-[#C59B27] transition-colors">Case Viability Auditing</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-serif font-bold text-white tracking-wider">Strategic Referrals</h4>
            <p className="text-gray-500 leading-relaxed">
              Our chambers accept attorney-led legal referrals and institutional general counsel assignments under selective conflict filters.
            </p>
            
            <div className="pt-2">
              <a href="#priority-booking" className="bg-[#101625] border border-slate-800 text-[#C59B27] py-2.5 px-4 block hover:bg-[#C59B27] hover:text-white transition-all text-center font-black uppercase tracking-wider text-[10px]">
                Inquire referral terms
              </a>
            </div>
          </div>

        </div>

        {/* Legal copyrights */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-900 text-center text-xs text-gray-600 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Aegis Lexington Law Chambers Ltd. Upper Hill, Nairobi. All Rights Reserved. Fully Licensed Advocate Chambers.</p>
          <div className="flex space-x-6">
            <span className="hover:text-white cursor-pointer">Confidentiality Terms</span>
            <span className="hover:text-white cursor-pointer">Regulatory Disclaimers</span>
            <span className="hover:text-white cursor-pointer">Conflict Search Audit</span>
          </div>
        </div>
      </footer>

    </div>);
}
