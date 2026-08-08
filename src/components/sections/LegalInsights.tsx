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

const successionSections = [
  {
    title: 'A] What’s succession or inheritance?',
    paragraphs: [
      'Succession and inheritance mean passing down money, property, land, and legal duties from a person who has died to their living family members or heirs.',
      'It can be done in two ways: first through a written will and secondly through a decision by the law and beneficiaries on how the estate of the deceased is supposed to be shared.'
    ]
  },
  {
    title: 'B] Evolution of the Law of Succession in Kenya',
    paragraphs: [
      'Before the enactment of the Law of Succession Act in 1981, Kenya had different succession laws applying to different communities. These included African customary law, English law, Hindu law, and Islamic law (Sharia). This system created confusion and unequal treatment because different people were subject to different inheritance rules.',
      'The Law of Succession Act, Cap. 160, came into force on 1st July 1981 to unify succession law across Kenya. Today, it is the principal law governing succession in Kenya, although Muslims continue to be governed by Islamic law in matters of inheritance under section 2(3) of the Act and Article 170(5) of the Constitution.',
      'The Act therefore promotes equality before the law, fair distribution of estates, uniform legal procedures, and efficient administration of estates.',
      'The Law of Succession Act applies to persons who die domiciled in Kenya; movable and immovable property situated in Kenya; testate succession (where the deceased left a will); and intestate succession (where there is no will). However, Muslims are exempted from most provisions concerning inheritance because Islamic law governs succession for Muslims.'
    ]
  },
  {
    title: 'I. Testate Succession',
    paragraphs: [
      'Testacy means a person has died and left behind a legally valid will (dying with a valid will).',
      'A person who makes a will is called the testator (male) or testatrix (female). The person appointed to administer the estate is called the executor.',
      'The executor obtains a Grant of Probate from the High Court before administering the estate.'
    ]
  },
  {
    title: '1. Written Wills and Codicils',
    paragraphs: [
      'A will is a legal declaration made by a competent person expressing how his or her property should be distributed after death.',
      'Purpose of a Will',
      'First, it’s a clear written plan for your belongings after death. Secondly, the will writer decides who gets their property instead of the state. Also, you name people to care for your young children. Additionally, you choose a trusted person to handle your final affairs, and lastly it reduces fights and stress for your family.',
      'Section 3 of the Law of Succession Act defines a will as a legal declaration by a person of his wishes or intentions regarding the disposition of his property after his death, duly made and executed according to the provisions of Part II, and includes a codicil.',
      'A codicil is a testamentary instrument made in relation to a will, explaining, altering or adding to its dispositions or appointments, and duly made and executed as required by the provisions of this Act for the making and execution of a will.',
      'Legal Requirements for Validity',
      'Section 11 of the Law of Succession Act outlines the legal requirements for the validity of a will, which include:'
    ],
    list: [
      'It must be in writing.',
      'It must be signed or have a mark of the owner; the signature of the person signing for him is placed in a way that it appears it was intended to give effect to the writing.',
      'It must be signed in the presence of two or more competent witnesses who saw the owner sign it or the person who signed it on the behalf of the owner.',
      'Each of the witnesses must sign the will in the presence of the testator.',
      'Each witness must sign in the presence of the testator.',
      'Failure to comply with these formalities makes the will invalid.'
    ],
    after: [
      'Witness A and Witness B do not need to be in the room together at the same time when they sign. The testator can sign or acknowledge their signature before one witness today, and before another witness on a different day.',
      'Additionally, for one to write a will they must be of legal age, usually 18 years old. Also, they must understand what they own and who they give it to. Thirdly, the will must be in writing, either typed or handwritten, and must be signed and dated. Lastly, two or more competent witnesses must watch as the will is signed and they have to sign it themselves.'
    ]
  },
  {
    title: 'Testamentary Capacity',
    paragraphs: [
      'Testamentary capacity means the legal ability of a person to make a valid will.',
      'Section 5 of the Law of Succession Act provides that every adult of sound mind may dispose of his property by will.',
      'The testator must:'
    ],
    list: ['Be at least 18 years old.', 'Be of sound mind.', 'Understand the nature of making a will.', 'Know the extent of his property.', 'Know the people who are entitled to benefit.'],
    after: ['In Banks v Goodfellow (1870), Cockburn C.J., delivering the judgment of the Court, formulated what has become the classical statement of testamentary capacity. It is essential that a competent testator “shall understand the nature of the act and its effects; shall understand the extent of the property of which he is disposing; shall be able to comprehend and appreciate the claims to which he ought to give effect; and, with a view to the latter object, that no disorder of the mind shall poison his affections, pervert his sense of right, or prevent the exercise of his natural faculties—that no insane delusion shall influence his will in disposing of his property and bring about a disposal of it which, if the mind had been sound, would not have been made” (at 565).']
  },
  {
    title: 'Fraud, Coercion, Importunity and Mistake',
    paragraphs: ['Section 7 of the Law of Succession Act provides that a will is invalid if it was obtained through:', 'Fraud: This occurs where the testator is deceived into signing a will.', 'Coercion: This involves threats or force.', 'Importunity (Undue Influence): This occurs where excessive pressure destroys the free will of the testator.'],
    list: ['Example: Someone lies about the contents of the will to obtain property.', 'Example: A son threatens his elderly father until he changes his will.'],
    after: ['NB: A valid will must reflect the testator’s free and independent wishes. Although a person is generally free to distribute property as they wish, the law protects dependants.', 'An exception is provided for where a person dies and their will fails to leave enough property to adequately take care of their dependants. The Law of Succession Act, under section 26, allows them to make an application to the court.', 'The court has power to intervene, adjust how the property is to be shared, and make an order that’s fair and reasonable in support of the applicant.', 'This shows how one cannot use a will to maliciously punish their dependants.']
  },
  {
    title: '2. Oral Wills',
    paragraphs: ['An oral will is a will made verbally.', 'Section 9 of the Law of Succession Act provides that an oral will is valid only if:'],
    list: ['It is made before two or more competent witnesses.', 'The testator dies within three months after making it.'],
    after: ['If the testator survives beyond three months, the oral will becomes invalid unless made again.', 'Oral wills are common during emergencies where there is no opportunity to prepare a written will.']
  },
  {
    title: '3. Privileged Wills',
    paragraphs: ['A privileged will is a special type of will made by certain persons in exceptional circumstances.', 'Under sections 3 and 9, members of the armed forces, mariners at sea, and certain persons engaged in active military service may make privileged wills.', 'These wills have fewer legal formalities because of the dangerous circumstances in which they are made.']
  },
  {
    title: '4. Revocation, Alteration and Revival of Wills',
    paragraphs: ['Revocation means cancelling a will.', 'Under sections 17–21, a will may be revoked by:'],
    list: ['Making a new will.', 'Destroying the will intentionally.', 'Marriage (subject to statutory exceptions).'],
    after: ['Alteration: A will may be altered before death. Alterations should be signed by the testator and properly witnessed. Failure to comply makes the alteration invalid.', 'Revival: A revoked will does not automatically become valid again. It can only be revived by re-executing the will or making another valid will showing the intention to revive it.']
  },
  {
    title: '5. Construction of Wills',
    paragraphs: ['Construction means interpreting the words used in a will where there is uncertainty or ambiguity, in which the court seeks to discover the true intention of the testator.', 'Section 22 and the First Schedule of the Law of Succession Act guide the interpretation of wills.', 'Important principles include:'],
    list: ['Give effect to the intention of the testator.', 'Read the will as a whole.', 'Resolve ambiguities using legal rules.'],
    after: ['NB: The court avoids interpretations that defeat the testator’s intentions unless they are contrary to law.']
  },
  {
    title: '6. Grant of Probate and Letters of Administration with the Will Annexed',
    paragraphs: ['A Grant of Probate is issued where the deceased left a valid will and appointed an executor. The executor files an application in court.', 'The grant authorizes the executor to:'],
    list: ['Collect the assets.', 'Pay debts.', 'Distribute property according to the will.'],
    after: ['If there is a valid will but no executor has been appointed, or the appointed executor cannot act, the court issues Letters of Administration with the Will Annexed to another suitable person.', 'The administrator performs the same duties as an executor but must follow the terms of the will.']
  },
];

const legalEmphasis = /\b(Law of Succession Act|Grant of Probate|Letters of Administration with the Will Annexed|testate succession|testator|testatrix|executor|codicil|testamentary capacity|oral will|privileged will|section \d+(?:\(\d+\))?|sections \d+[–-]\d+|Article 170\(5\)|High Court|two or more competent witnesses|three months|18 years old|sound mind|fraud|coercion|undue influence|dependants)\b/i;

function renderLegalText(text: string) {
  return text.split(legalEmphasis).map((part, index) =>
    legalEmphasis.test(part)
      ? <strong key={`${part}-${index}`} className="font-bold text-slate-900 dark:text-white">{part}</strong>
      : part
  );
}

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
          <a href="#insights/succession" className="group block bg-white dark:bg-[#101625] border border-gray-200 dark:border-slate-800 p-7 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] font-sans font-black uppercase tracking-widest text-[#C59B27]">Succession Law</span>
              <span className="text-[#C59B27] text-lg" aria-hidden="true">→</span>
            </div>
            <h2 className="text-2xl font-serif font-bold leading-snug text-slate-900 dark:text-slate-100 group-hover:text-[#C59B27] transition-colors">
              Law of Succession and Inheritance Profile
            </h2>
            <p className="mt-4 font-sans text-sm leading-relaxed text-gray-600 dark:text-slate-300">
              The complete profile on testate succession, wills, probate and estate administration in Kenya.
            </p>
            <div className="mt-7 pt-5 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between font-sans text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400">
              <span>By Bethuel Limo</span>
              <span>Full profile</span>
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

export function SuccessionInsight() {
  return (
    <main className="bg-gray-50 dark:bg-[#0F141F] py-12 sm:py-20 transition-colors">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <a href="#insights" className="inline-flex items-center gap-2 font-sans text-[10px] font-black uppercase tracking-widest text-amber-700 dark:text-[#C59B27] hover:underline">
          <span aria-hidden="true">←</span> All legal insights
        </a>
        <header className="mt-8 border-b border-gray-200 pb-10 dark:border-slate-800">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-sans text-[10px] font-black uppercase tracking-widest text-[#A97E10] dark:text-[#C59B27]">
            <span>Succession Law</span>
            <span className="h-1 w-1 rounded-full bg-current" aria-hidden="true" />
            <span>Full Legal Profile</span>
          </div>
          <h1 className="mt-5 max-w-3xl text-4xl font-serif leading-[1.08] text-slate-900 sm:text-5xl dark:text-slate-100">Law of Succession and Inheritance</h1>
          <p className="mt-5 max-w-2xl font-serif text-xl leading-8 text-slate-600 dark:text-slate-300">A detailed profile of testate succession, wills, probate and estate administration in Kenya.</p>
          <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 font-sans text-xs text-gray-600 dark:text-slate-400">
            <span className="font-bold text-slate-800 dark:text-slate-200">Bethuel Kipchumba Limo</span>
            <span aria-hidden="true">•</span>
            <span>Legal Assistant</span>
            <span aria-hidden="true">•</span>
            <span>LLB Graduate (awaiting graduation)</span>
          </div>
        </header>

        <nav aria-label="Table of contents" className="mt-10 border border-amber-200 bg-amber-50/70 p-6 dark:border-amber-900/60 dark:bg-[#17130b] sm:p-7">
          <p className="font-sans text-[10px] font-black uppercase tracking-widest text-[#A97E10] dark:text-[#C59B27]">In this profile</p>
          <ol className="mt-4 grid gap-x-8 gap-y-2 font-sans text-sm leading-6 text-slate-700 sm:grid-cols-2 dark:text-slate-300">
            {successionSections.map((section, index) => (
              <li key={section.title}><a className="transition-colors hover:text-[#A97E10] dark:hover:text-[#C59B27]" href={`#succession-section-${index}`}>{section.title}</a></li>
            ))}
          </ol>
        </nav>

        <div className="mx-auto mt-12 max-w-3xl space-y-10 font-sans text-[15px] leading-8 text-gray-700 dark:text-slate-300">
          <p className="border-l-4 border-[#C59B27] pl-5 font-serif text-xl leading-8 text-slate-800 dark:text-slate-100">The Law of Succession: The Scope of the Law of Succession—testate succession.</p>
          {successionSections.map((section, index) => (
            <section id={`succession-section-${index}`} key={section.title} className="scroll-mt-28 border-b border-gray-200 pb-10 last:border-0 dark:border-slate-800">
              <h2 className="mb-5 text-2xl font-serif font-bold leading-tight text-slate-900 sm:text-3xl dark:text-slate-100">{section.title}</h2>
              <div className="space-y-5">
                {section.paragraphs.map((paragraph) => paragraph === 'Purpose of a Will' || paragraph === 'Legal Requirements for Validity' || paragraph === 'The testator must:' || paragraph === 'Important principles include:' || paragraph === 'The grant authorizes the executor to:' || paragraph === 'These forms are available from:' || paragraph === 'The applicant normally provides:' ? (
                  <h3 key={paragraph} className="pt-1 font-sans text-sm font-black uppercase tracking-wider text-slate-900 dark:text-slate-100">{paragraph}</h3>
                ) : paragraph.startsWith('NB:') ? (
                  <p key={paragraph} className="border-l-4 border-[#C59B27] bg-amber-50/70 px-5 py-4 dark:bg-[#17130b]">{renderLegalText(paragraph)}</p>
                ) : <p key={paragraph}>{renderLegalText(paragraph)}</p>)}
                {section.list && (
                  <ul className="space-y-3 border-l-2 border-amber-200 pl-5 dark:border-amber-900/70">
                    {section.list.map((item) => <li key={item} className="pl-1 before:mr-3 before:text-[#C59B27] before:content-['✓']">{renderLegalText(item)}</li>)}
                  </ul>
                )}
                {section.after?.map((paragraph) => paragraph.startsWith('In Banks v Goodfellow') ? (
                  <blockquote key={paragraph} className="border-l-4 border-[#C59B27] bg-white px-6 py-5 font-serif text-lg italic leading-8 text-slate-700 shadow-sm dark:bg-[#101625] dark:text-slate-200">{renderLegalText(paragraph)}</blockquote>
                ) : paragraph.startsWith('NB:') ? (
                  <p key={paragraph} className="border-l-4 border-[#C59B27] bg-amber-50/70 px-5 py-4 dark:bg-[#17130b]">{renderLegalText(paragraph)}</p>
                ) : <p key={paragraph}>{renderLegalText(paragraph)}</p>)}
              </div>
            </section>
          ))}
          <aside className="border border-gray-200 bg-white p-6 font-sans text-sm leading-7 text-gray-600 shadow-sm dark:border-slate-800 dark:bg-[#101625] dark:text-slate-300">
            <p className="mb-3 text-[10px] font-black uppercase tracking-widest text-[#A97E10] dark:text-[#C59B27]">Important notice</p>
            <p><strong className="text-slate-900 dark:text-white">This article provides general information only and is not legal advice.</strong> The validity of a will and the administration of an estate depend on the particular facts. Seek advice from an advocate before preparing a will or taking action in an estate.</p>
          </aside>
        </div>
      </article>
    </main>
  );
}
