const guideSections = [
  {
    title: '1. Instructions from the Client',
    body: 'The conveyancing process begins when the buyer or seller appoints an advocate to act on their behalf. The advocate receives instructions and collects important documents such as the client’s national identity card or passport, KRA PIN certificate, passport photographs, contact details and, where applicable, the original title deed and spousal consent. The advocate also learns the purchase price, property details and parties involved.'
  },
  {
    title: '2. Due Diligence',
    body: 'Due diligence is the careful investigation carried out before buying or selling property. It includes an official Land Registry search, verification of the registered proprietor and title, checks for charges, cautions, restrictions, leases and other interests, confirmation of rates and rent payments, verification of the seller’s identity and capacity, inspection of the property, confirmation of boundaries and occupation, and confirmation that required approvals and consents have been obtained.'
  },
  {
    title: '3. Letter of Offer',
    body: 'Sometimes the parties first sign a Letter of Offer. This optional document records the proposed purchase price, payment terms, completion period and special conditions before the parties enter a binding sale agreement.'
  },
  {
    title: '4. Sale Agreement',
    body: 'After satisfactory due diligence, the advocates prepare the Sale Agreement—the legally binding contract between buyer and seller. It sets out the purchase price, deposit, completion period, each party’s obligations, the documents to be supplied and the consequences of breach. A deposit, often 10% of the purchase price, is commonly paid on signing.'
  },
  {
    title: '5. Obtaining Completion Documents',
    body: 'The seller’s advocate gathers the documents required for completion. These may include the original title deed, transfer forms, rates and land-rent clearance certificates where applicable, consent to transfer, KRA PIN certificates, identification documents, passport photographs, spousal consent and a valuation report where necessary.'
  },
  {
    title: '6. Payment of the Balance',
    body: 'Once all completion documents are ready, the buyer pays the remaining purchase price. Payment may be made through the advocates’ client accounts for security and accountability, with release subject to the agreed completion conditions.'
  },
  {
    title: '7. Transfer from Vendor to Purchaser',
    body: 'The buyer and seller execute the transfer document. By signing it, the seller formally agrees to transfer ownership of the identified property to the buyer at the agreed price.'
  },
  {
    title: '8. Valuation for Stamp Duty',
    body: 'Before registration, the government valuation process determines the property’s value for stamp-duty assessment, helping establish the tax payable by the purchaser.'
  },
  {
    title: '9. Payment of Stamp Duty',
    body: 'The purchaser pays the assessed stamp duty before registration can proceed. The applicable rate and valuation should be confirmed for the particular property and transaction.'
  },
  {
    title: '10. Registration of the Transfer',
    body: 'After stamp duty is paid, the documents are lodged at the Land Registry. The Registrar examines them for legal compliance and, once satisfied, registers the transfer and changes the registered ownership.'
  },
  {
    title: '11. Collection of the New Title',
    body: 'Following registration, the purchaser receives title documentation showing them as the registered owner. The conveyancing transaction is then complete.'
  }
];

export function LegalInsightsIndex() {
  return (
    <main id="legal-insights" className="min-h-[70vh] bg-gray-50 dark:bg-[#0F141F] py-16 sm:py-24 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-4">
          <span className="text-[10px] font-sans font-black uppercase text-amber-600 dark:text-[#C59B27] tracking-widest">Legal Insights</span>
          <h1 className="text-4xl sm:text-5xl font-serif text-slate-900 dark:text-slate-100">Practical legal guidance</h1>
          <p className="font-sans text-sm sm:text-base leading-relaxed text-gray-600 dark:text-slate-300">
            Plain-language articles to help you understand legal processes in Kenya. Select an insight to read the full guide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <a href="#insights/conveyancing" className="group block bg-white dark:bg-[#101625] border border-gray-200 dark:border-slate-800 p-7 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] font-sans font-black uppercase tracking-widest text-[#C59B27]">Property Law</span>
              <span className="text-[#C59B27] text-lg" aria-hidden="true">→</span>
            </div>
            <h2 className="text-2xl font-serif font-bold leading-snug text-slate-900 dark:text-slate-100 group-hover:text-[#C59B27] transition-colors">
              A Simple Guide to Conveyancing Transactions in Kenya
            </h2>
            <p className="mt-4 font-sans text-sm leading-relaxed text-gray-600 dark:text-slate-300">
              Understand the journey from appointing an advocate and conducting due diligence to paying stamp duty and registering your new title.
            </p>
            <div className="mt-7 pt-5 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between font-sans text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400">
              <span>By Bethuel Limo</span>
              <span>11 steps</span>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}

export function ConveyancingInsight() {
  return (
    <main className="bg-gray-50 dark:bg-[#0F141F] py-12 sm:py-20 transition-colors">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <a href="#insights" className="inline-flex items-center gap-2 font-sans text-[10px] font-black uppercase tracking-widest text-amber-700 dark:text-[#C59B27] hover:underline">
          <span aria-hidden="true">←</span> All legal insights
        </a>
        <header className="mt-8 pb-10 border-b border-gray-200 dark:border-slate-800">
          <span className="text-[10px] font-sans font-black uppercase text-amber-600 dark:text-[#C59B27] tracking-widest">Property Law</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-serif leading-tight text-slate-900 dark:text-slate-100">A Simple Explanation of Conveyancing Transactions in Kenya</h1>
          <p className="mt-6 font-sans text-sm text-gray-600 dark:text-slate-300">By Bethuel Limo, Legal Assistant · LLB Graduate (awaiting graduation)</p>
        </header>

        <div className="mt-10 space-y-7 font-sans text-[15px] leading-8 text-gray-700 dark:text-slate-300">
          <p className="text-lg leading-8">Conveyancing is the legal process of transferring ownership of land or property from one person (the seller or vendor) to another (the buyer or purchaser).</p>
          {guideSections.slice(0, 2).map((section) => (
            <section key={section.title}>
              <h2 className="mb-3 text-2xl font-serif font-bold text-slate-900 dark:text-slate-100">{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
          <section className="border-l-4 border-[#C59B27] bg-amber-50/60 dark:bg-[#17130b] p-6">
            <h2 className="mb-3 text-xl font-serif font-bold text-slate-900 dark:text-slate-100">Why proper due diligence matters</h2>
            <p>The Supreme Court of Kenya in <em>Dina Management Limited v County Government of Mombasa &amp; 5 Others [2023] KESC 30 (KLR)</em> explained that a buyer must investigate properly before purchasing land. A title deed alone may not be enough where the root of the title is challenged. Buyers should investigate the property’s history before paying the purchase price.</p>
          </section>
          {guideSections.slice(2).map((section) => (
            <section key={section.title}>
              <h2 className="mb-3 text-2xl font-serif font-bold text-slate-900 dark:text-slate-100">{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
          <aside className="mt-12 border border-gray-200 dark:border-slate-800 bg-white dark:bg-[#101625] p-6 font-sans text-sm leading-7 text-gray-600 dark:text-slate-300">
            <p className="font-bold uppercase tracking-widest text-[10px] text-[#C59B27] mb-2">Important notice</p>
            <p>This article provides general information only and is not legal advice. Requirements, fees, taxes and timeframes vary by property and transaction. Seek advice from an advocate before taking action.</p>
          </aside>
        </div>
      </article>
    </main>
  );
}
