const data = [
  {
    id: 1,
    title: "Advance Ruling",
    content:
      "Advance ruling is like getting a clear answer in advance about how much tax you need to pay for a specific business transaction. It helps you avoid surprises and uncertainty when it comes to taxes.",
    example:
      "Suppose you are importing goods from another country to sell in India. You can ask for an advance ruling to know exactly how much customs duty you must pay before importing the goods, or you are buying shares of an Indian company from any foreign entity and need to ask for any tax compliance before making payments to that foreign entity. This way, you can plan your finances better and avoid unexpected expenses.",
  },
  {
    id: 2,
    title: "Advance tax",
    content:
      "Under this, individuals or businesses in India work out the tax on the estimated income they will earn in a financial year and pay the total tax in instalments as per the timeline prescribed.",
    example:
      " Suppose you are a self-employed professional and expect to earn ₹10 lakh this financial year. As per the advance tax rules, if your estimated tax liability on this income exceeds ₹10,000, you must pay it in instalments instead of waiting until the end of the year. This helps in smoother tax management.",
  },
  {
    id: 3,
    title: "Agriculture Income",
    content:
      "This is the money you make from farming in India. It includes profits from cultivating the land.",
    example:
      "If you grow crops like rice or wheat and sell them, the money you earn from selling those crops is considered agricultural income. If you qualify within the criteria, your income from agricultural activity is exempt.",
  },
  {
    id: 4,
    title: "Alternate Minimum Tax (AMT)",
    content:
      "AMT is an extra tax that some individuals in India might have to pay. It is applied when their regular income tax is less than the AMT they owe on their adjusted total income.",
    example:
      "Suppose you are an individual taxpayer in India and have calculated your regular income tax. However, it is lower than your calculated AMT based on your adjusted total income. In that case, you must pay the higher AMT to meet your tax obligations.",
  },
  {
    id: 5,
    title: "Alternate Minimum Tax (AMT) Credit",
    content:
      "This is the extra tax you have paid because of the alternative minimum tax (AMT), which is more than the regular tax you owe.",
    example:
      "Suppose your regular tax bill is ₹10,000, but due to AMT rules, you end up paying ₹12,000. The ₹2,000 difference is your AMT credit.",
  },
  {
    id: 6,
    title: "Annual Information Statement (AIS)",
    content:
      "The annual information statement, often called AIS, is like a detailed report card for taxpayers in India. It is a document showing everything about your money for a year. This includes how much you earned, what you spent or saved, and even any tax-related matters.",
    example:
      "Imagine AIS as a giant puzzle where each piece is a different part of your financial life. One piece shows your salary, another shows your bank transactions, and another tells if you have paid your taxes correctly. Combining all these pieces gives you your complete financial picture for the year. This helps the Government ensure that everyone is following the tax rules.",
  },
  {
    id: 7,
    title: "Anonymous Donation",
    content:
      "Anonymous donation is when someone gives money or items without the recipient keeping a record of the donor’s personal information, like name and address, as required by regulations; however, the Government made some strict rules to tax such anonymous donations.",
    example:
      "If you donate to a charity anonymously, they will not know who you are and will not keep a record of your details in their records. This is often done to protect the donor’s privacy.",
  },
  {
    id: 8,
    title: "Appeal",
    content:
      "An appeal is a way for someone (like a taxpayer or Government) who disagrees with a decision made by a tax or legal authority to ask a higher legal authority to review and possibly change that decision.",
    example:
      "Imagine you are a taxpayer in India and think the tax authority has miscalculated your taxes or not granted the relief available to you. You can file an appeal to a higher authority to reexamine the calculation and make it fair.",
  },
  {
    id: 9,
    title: "Arm’s Length Price",
    content:
      "An arm’s length price is the fair price you would pay when buying or selling something to someone not closely related to you or your business. It is the price you would use in a regular, independent transaction.",
    example:
      "Imagine you are selling a smartphone to a friend. The price you would charge your friend should be similar to what you would charge anyone else, like a stranger buying the same phone. This price is the arm’s length price.",
  },
  {
    id: 10,
    title: "Assessee",
    content:
      "According to the Income-tax Act in India, An assessee is responsible for paying taxes or any other amount. This term also applies to individuals for whom tax proceedings have been initiated. It includes three categories:</br><strong>(a)Regular Assessee:</strong> The person or entity obligated to pay taxes, such as income tax. </br><strong>(b)Deemed Assessee:</strong> Even if you are not the primary taxpayer, you might be considered a deemed assessee if you are indirectly involved in a financial transaction subject to taxation.</br><strong>(c)Assessee-in-Default:</strong>If a person or entity fails to pay the required taxes, they are referred to as an assessee-in-default.",
    example:
      "Imagine you are selling a smartphone to a friend. The price you would charge your friend should be similar to what you would charge anyone else, like a stranger buying the same phone. This price is the arm’s length price.",
  },
  {
    id: 11,
    title: "Assessee-in-Default",
    content:
      "This term means someone who has not fulfilled their responsibilities per the Income-tax Act. This can include not submitting their income tax return, not paying or depositing taxes when required, and other similar failures.",
    example:
      "If someone does not file their income tax return by the due date, they can be considered an assessee-in-default. This means they have not met their obligation to report their income to the tax authorities as the law requires.",
  },
  {
    id: 12,
    title: "Assessing Officer (AO)",
    content:
      "An assessing officer, often referred to as AO, is a government official responsible for evaluating and determining the tax liabilities of individuals and businesses under the Income-tax Act in India. The AO can be various ranks of tax officials like assistant commissioner, deputy commissioner, assistant director, deputy director, or income-tax officer, depending on their jurisdiction.",
    example:
      "Imagine you run a business in Mumbai, India. The assessing officer assigned to your case would be the tax official responsible for reviewing your financial records, income, and expenses to calculate the income tax you owe to the Government. This officer ensures that you comply with tax laws and regulations.",
  },
  {
    id: 13,
    title: "Assessment",
    content:
      "Assessment is when the Income-tax department reviews your income-tax return. They check to ensure you have reported your income correctly and paid the right amount of tax. It is like a financial checkup for your taxes.",
    example:
      "Imagine you earned money from your job and investments. When you file your tax return, the Income-tax department assesses it to ensure you have not made any mistakes or missed any income. They calculate the amount of tax you owe based on this assessment.",
  },
  {
    id: 14,
    title: "Assessment Year",
    content: "This refers to 12 months starting on April 1st each year.",
    example:
      "If you are calculating taxes for the income earned from April 1st, 2023, to March 31st, 2024, then the assessment year for that income would be 2024-2025. During this year, you would assess and file your income tax returns for the income earned in the previous Financial Year.",
  },
  {
    id: 15,
    title: "Belated Return",
    content:
      "This is when you file your income tax return after the original due date has passed.",
    example:
      "If the due date for filing your tax return is July 31st, but you file it on August 15th, it is considered a belated return.",
  },
  {
    id: 16,
    title: "Best Judgement Assessment",
    content:
      "Best judgement assessment is when the tax authority estimates an individual’s taxable income using the information available, especially when the taxpayer is uncooperative or when the actual profit cannot be determined from the taxpayer’s maintained financial records.",
    example:
      "If a taxpayer fails to provide the necessary financial documents or is not forthcoming during the tax assessment process, the tax authority may use their discretion to estimate that individual’s income and tax liability based on available data and industry standards.",
  },
  {
    id: 17,
    title: "Books of Accounts",
    content:
      "Books of accounts refer to all the records where a business or individual keeps track of their financial transactions. These records can be physical (like paper ledgers) or digital (stored on computers or devices like floppy disks). They include various books, such as ledgers, day books, cash books, and account books. These records help in maintaining financial clarity and compliance.",
    example:
      "Imagine a small grocery store in India. They use a physical ledger to note all their daily sales and expenses. This ledger is one of their books of accounts. Now, many businesses use computer software instead of paper, but both serve the same purpose – keeping track of money matters.",
  },
  {
    id: 18,
    title: "Capital Asset",
    content:
      " A capital asset is something you own, like property or investments, that is not directly related to your business or profession. It can be different types of possessions:</br><strong>(a)</strong>A house or land that you own, even if it is not related to your job.</br><strong>(b)</strong>Stocks or bonds that a Foreign Institutional Investor (FII) holds, following the rules set by the SEBI (Securities and Exchange Board of India).</br><strong>(c)</strong>An insurance policy linked to investments does not qualify for tax exemption under Section 10(10D) due to certain conditions, like high premiums and being equity-oriented.",
    example: "",
  },
  {
    id: 19,
    title: "Carry Forward of Loss",
    content:
      " This is like saving your financial losses for later. When a business or person has losses in one year and has not fully exhausted their income as per rules, they can use them to reduce the taxes they must pay when making a future profit. It is like carrying over a debt or loss from one year to the next. One of the conditions for taking carry forward of any losses is timely filing Income returns.",
    example:
      "Imagine a business loses money in 2023, but in 2024, it starts making a profit. Instead of paying taxes on all its 2024 profits, it can use the 2023 losses to reduce the taxes it owes in 2024. This helps businesses recover from bad years and encourages them to keep going.",
  },
  {
    id: 20,
    title: "Charitable Purpose:",
    content:
      "Charitable purpose refers to activities or objectives that aim to benefit the greater good of society or the public. In India, according to Section 2(15) of the Income-tax Act, charitable purposes include:</br><strong>Relief of Poor:</strong> Assisting individuals or communities in financial need.</br><strong>Education:</strong> Supporting educational initiatives and institutions.</br><strong>Yoga:</strong> Promoting yoga practices for the well-being of individuals.</br><strong>Medical Relief:</strong> Offering healthcare services and aid to those in need.</br><strong>Preservation of the Environment:</strong> Protecting natural resources like watersheds, forests, and wildlife.</br><strong>Preservation of Monuments or Places of Interest:<strong> Safeguarding historical or artistic landmarks.</br><strong>Advancement of General Public Utility:</strong> Activities that benefit the public without profit motive.",
    example:
      "A charitable organisation in India might establish a school to educate underprivileged children, which falls under the “Education” category of charitable purposes.",
  },
  {
    id: 21,
    title: "Contingent Liability",
    content:
      "This is like having a liability on the occurrence of an event. It is a situation where you might have to pay money in the future, but it is not sure. It depends on something happening or not happening.",
    example:
      "Think of it like promising to buy your friend’s car if they cannot sell it to anyone else. You might have to pay only if they cannot find another buyer.",
  },
  {
    id: 22,
    title: "Corpus Donation",
    content:
      "Corpus donation refers to voluntary contributions from a charitable or religious trust or institution. These contributions are specifically meant to be part of the core or permanent funds of the trust or institution.",
    example:
      "Imagine a charitable organisation in India that collects donations to support its long-term projects, such as building schools or providing healthcare services. When someone donates money with the explicit intention that it should be used as a part of the organisation’s permanent funds and not for day-to-day expenses, it is considered a corpus donation. This money is safeguarded and invested to generate income to sustain the organisation’s charitable activities over time.",
  },
  {
    id: 23,
    title: "Cost Inflation Index (CII)",
    content:
      "CII is a number declared by India’s Central Board of Direct Taxes (CBDT) annually. It is an essential tool for calculating long-term capital gains or losses when the cost of acquiring or improving an asset needs to be adjusted for inflation based on the CII of the relevant year.",
    example:
      "Suppose you purchased a piece of property in India in 2010 for ₹10,00,000. Now, in 2023, you plan to sell it for ₹15,00,000. To calculate your capital gains, you will use the CII for the year 2010 and the year 2023. If the CII for 2010 was 200 and for 2023 is 350, you would calculate your indexed cost of acquisition like this:",
  },
  {
    id: 24,
    title: "Cost of Acquisition",
    content:
      "This term refers to the total expenses of buying a capital asset, like a property or an investment. It includes the price you paid for the asset and any additional costs related to acquiring it.",
    example:
      "Let us say you purchase a house. The acquisition cost would include the actual price you paid for the house and any expenses directly tied to the purchase, like legal fees or property transfer taxes. Imagine you buy a piece of land for ₹1,00,000. You also pay ₹5,000 in legal fees and ₹2,000 in property taxes when you buy it. In this case, your total cost of acquisition for the land would be ₹1,07,000 (₹1,00,000 + ₹5,000 + ₹2,000). This is the overall cost you have incurred to acquire the land.",
  },
  {
    id: 25,
    title: "Deductee",
    content:
      "A deductee is someone from whom tax is taken out (deducted) as per the rules of the Income-tax Act.",
    example:
      "If you earn interest on a fixed deposit, the bank will deduct a portion of that interest as tax before giving you the rest. In this case, you are the deductee because tax is being deducted from your interest income.",
  },
  {
    id: 26,
    title: "Deductor",
    content:
      "A deductor is a person or entity responsible for deducting a certain amount of tax from payments they make to others, as mandated by the Income-tax Act in India.",
    example:
      "If a company pays a salary to its employees, it acts as a deductor by withholding a portion of the employee’s salary as income tax and forwarding it to the Government.",
  },
  {
    id: 27,
    title: "Deemed Assessee",
    content:
      "A deemed assessee is a term used in taxation. It refers to a person responsible for assessing another individual or entity’s income, loss, or refund.",
    example:
      "Imagine you are a legal representative for your elderly parent with some income. In this case, you would be the deemed assessee responsible for assessing and managing your parent’s income for tax purposes.",
  },
  {
    id: 28,
    title: "Deemed Dividend",
    content:
      "A deemed dividend is like an imaginary dividend. It is not actual cash given to shareholders but treated as if it is. There are several situations where this can happen:</br><strong>(a)</strong>When a company gives away its assets.</br><strong>(b)</strong>When a company gives out debentures or deposit certificates.</br><strong>(c)</strong>When a company gives bonus shares to preferred shareholders.</br><strong>(d)</strong>When a company is closing down and distributing its assets.</br><strong>(e)</strong>When a company reduces its capital and distributes it.</br><strong>(f)</strong>When a company loans money to its shareholders.",
    example:
      "Imagine you own shares in a company, and the company decides to give you some of its assets instead of cash. Even though you did not receive cash, the tax authorities might treat this as a dividend, and you must pay taxes.",
  },
  {
    id: 30,
    title: "Dividend",
    content:
      "A dividend is like a company’s reward to its shareholders. It is a portion of the profit that the company shares with the people who own its stock.",
    example:
      "Imagine you own shares in a company, and they make a good profit. The company might give you some of that profit as a dividend. So, you will receive some money just because you are a shareholder in that company.",
  },
  {
    id: 31,
    title: "Double Taxation Avoidance Agreement (DTAA)",
    content:
      "DTAA is an agreement between the Indian government and foreign countries or specified territories. It is designed to prevent people or businesses from being taxed twice on the same income.",
    example:
      "If someone earns income in India and another country, the DTAA ensures they do not pay taxes on the same income to India and the other country. Instead, they follow the rules outlined in the DTAA to determine how their income is taxed in each location.",
  },
  {
    id: 32,
    title: "Eligible Startup",
    content:
      "An eligible startup is a type of company or limited liability partnership (LLP) that meets specific requirements outlined in Section 80-IAC.",
    example: "",
  },
  {
    id: 33,
    title: "Fees for Technical Services (FTS)",
    content:
      "FTS refers to payments made for receiving managerial, technical, or consultancy services, including personnel services.",
    example:
      "Suppose an Indian company hires a foreign consultant to provide technical advice on improving their manufacturing process. The payments made to the foreign consultant for this service are considered Fees for Technical Services (FTS).",
  },
  {
    id: 34,
    title: "Foreign Tax Credit (FTC)",
    content:
      "FTC is like getting a discount on your Indian taxes for taxes you have already paid in another country. It helps you avoid paying taxes twice on the same income.",
    example:
      "If you earned money abroad and paid taxes there, you can use the FTC to reduce the taxes you owe in India. It is like a credit or deduction for being taxed twice on the same money.",
  },
  {
    id: 35,
    title: "Form 26AS",
    content:
      "Form 26AS is like a tax summary for individuals. It keeps a record of:</br><strong>TDS (Tax Deducted at Source):</strong> Whenever you earn money, sometimes a portion is taken out as tax before you receive it. Form 26AS shows how much of your income was deducted as tax by others.</br><strong>TCS (Tax Collected at Source):</strong> If you sell certain things, you might need to collect tax from buyers. This form also includes those details.</br><strong>Advance Tax:</strong> If you pay your taxes in advance instead of all at once, form 26AS shows those payments.</br><strong>Self-Assessment Tax:</strong> This is the tax you calculate and pay yourself. The form keeps track of these payments, too.</br><strong>Other Tax Payments:</strong> Any other types of taxes you have paid, it records them.</br><strong>Tax Refunds:</strong> This form lists those refunds if you have overpaid your taxes and received money back.</br>In simple terms, it is like your tax history book, showing what you owe and what you have paid. It is essential for filing your income tax returns.",
    example: "",
  },
  {
    id: 36,
    title: "Impermissible Avoidance Arrangement",
    content:
      "An impermissible avoidance arrangement in finance refers to a situation where the primary purpose is to gain a tax advantage, and the following criteria can identify it:</br><strong>(a)</strong>It involves creating rights or obligations that would not typically exist between unrelated parties.</br><strong>(a)</strong>It leads, either directly or indirectly, to the improper or excessive use of tax laws.</br><strong>(a)</strong>It lacks natural economic substance, either entirely or in part, as determined by Section 97 of the Income-tax Act, 1961.</br><strong>(a)</strong>It is executed or conducted in a way that does not align with regular, genuine business practices.",
    example:
      "Suppose a company sets up a complex network of subsidiaries solely to shift profits to a low-tax jurisdiction, even though these subsidiaries do not engage in any substantial business activities there. This arrangement is an impermissible avoidance arrangement because its primary purpose is to avoid taxes and does not have genuine commercial substance.",
  },
  {
    id: 37,
    title: "Income Computation and Disclosure Standards (ICDS)",
    content:
      "ICDS, or Income Computation and Disclosure Standards, are guidelines set by the Indian Government through Section 145(2) of the Income-tax Act, 1961.",
    example:
      "If you earn money from various sources, ICDS provides clear rules on accounting for and disclosing that income, making tax calculations more transparent and less prone to disputes.",
  },
  {
    id: 38,
    title: "Income Tax",
    content:
      "Income tax is a tax that the Indian Government collects from individuals and businesses based on their earnings or income.",
    example:
      "Imagine you earn money from your job or business. The Government takes a portion of your earnings as income tax. They use this tax to fund public services like schools, hospitals, and infrastructure.",
  },
  {
    id: 39,
    title: "Income Tax Appellate Tribunal (ITAT)",
    content:
      "The Income Tax Appellate Tribunal, often called ITAT, is like a special court for income tax matters in India.",
    example:
      "Let us say you disagree with how much income tax you have been asked to pay by the tax department. You can take your case to the Income Tax Appellate Tribunal.",
  },
  {
    id: 40,
    title: "Income Escaping Assessment or Reassessment",
    content:
      "Income escaping assessment, or reassessment, is like a second look by the tax authorities at your income tax returns.",
    example:
      "Imagine you have a box of chocolates and are supposed to count and declare how many chocolates there are. Suppose you accidentally forget to count a few chocolates or make a mistake. In that case, the tax authorities might return later to double-check and ensure you did not leave any chocolates out.",
  },
  {
    id: 41,
    title: "Interest",
    content:
      "Interest refers to the additional money you have to pay when you borrow or take on debt.",
    example:
      "If you borrow ₹1,000 from a bank, and they charge you an extra ₹100 as interest, you will have to repay ₹1,100.",
  },
  {
    id: 42,
    title: "International Transaction",
    content:
      "An international transaction refers to any business exchange or interaction between two or more connected companies, where at least one is based outside.",
    example:
      "Imagine an Indian company that sells software to a U.S. company. This would be considered an international transaction because it involves a business activity between two associated companies, one in India and the other in the United States, impacting their profits and assets.",
  },
  {
    id: 43,
    title: "Keyman Insurance Policy",
    content:
      "A company buys this type of life insurance policy on the life of its essential employees, like top managers or critical decision-makers.",
    example:
      "Imagine a software company where the CEO is crucial to the company’s success. The company might take out a keyman insurance policy on the CEO’s life.",
  },
  {
    id: 44,
    title: "Legal Representative",
    content:
      "A legal representative, in the context of Indian law, is a person who stands in place of someone else in legal matters.",
    example:
      "If someone passes away and leaves behind a will, their legal representative, often an executor or administrator, is responsible for carrying out the instructions in the will and handling the deceased person’s legal affairs.",
  },
  {
    id: 45,
    title: "Liable to Tax",
    content:
      "Liable to tax means that a person is obligated to pay income tax according to the current laws of a specific country.",
    example:
      "If a person in India earns income, they are liable to tax if the Indian tax laws require them to pay income tax.",
  },
  {
    id: 46,
    title: "Long-term Capital Asset",
    content:
      " A long-term capital asset generally refers to an asset that a person or entity holds for more than 36 months or three years before selling. However, there are some exceptions:</br><strong>(a)</strong>Unlisted Shares (equity or preference shares) and Immovable Property (like land or buildings) are considered long-term if held for more than 24 months or two years before being sold.</br><strong>(b)</strong>Listed Shares (equity or preference shares), Listed Securities (debentures, bonds, derivatives), Units of UTI (whether listed or unlisted), Units of Equity-Oriented Funds (listed or unlisted), and Zero Coupon Bonds (listed or unlisted) are treated as long-term capital assets if held for more than 12 months or one year before selling.",
    example: "",
  },
  {
    id: 47,
    title: "Long-Term Capital Gains",
    content:
      "Long-term capital gains refer to the profit you make when you sell something valuable that you have owned for a while.",
    example:
      "Suppose you bought a piece of land five years ago for ₹1,00,000, and now you are selling it for ₹2,00,000. The ₹1,00,000 extra you have earned is a long-term capital gain.",
  },
  {
    id: 48,
    title: "Maximum Marginal Rate (MMR)",
    content:
      "The Maximum Marginal Rate (MMR) is the highest rate of income tax that applies to the topmost income bracket for individuals, Associations of Persons (AOP), or Bodies of Individuals (BOI).",
    example:
      "Suppose an individual’s taxable income falls into the highest income tax bracket, and the basic income tax rate is 30%. If there is a surcharge of 10% and a health and education cess of 4% applicable, the MMR for that individual would be the total of these rates, which is 44%.",
  },
  {
    id: 49,
    title: "Minimum Alternate Tax (MAT)",
    content:
      "Minimum Alternate Tax (MAT) is a rule in the Indian Income-tax Act that ensures companies pay a minimum level of tax based on their book profits.",
    example:
      "Company XYZ reports a book profit of ₹10,00,000 in its financial statements. After applying exemptions and deductions allowed by the tax laws, its taxable income is only ₹3,00,000. Without MAT, it might pay tax only on ₹3,00,000. However, MAT mandates paying tax on a percentage of the book profit, ensuring a minimum tax liability, such as 18.5% of ₹10,00,000 (₹1,85,000).",
  },
  {
    id: 50,
    title: "Minimum Alternate Tax (MAT) Credit",
    content:
      "MAT Credit is a tax credit you can use when your company pays more Minimum Alternate Tax (MAT) than it would under regular tax rules.",
    example:
      "Let us say your company’s regular tax, calculated using general provisions, is ₹100, but you end up paying ₹120 in MAT. The extra ₹20 you paid, above the regular tax amount, becomes your MAT Credit.",
  },
  {
    id: 51,
    title: "Misreporting of Income",
    content:
      "Misreporting of income means giving incorrect or untrue information to the tax authorities.",
    example:
      "If a person earned ₹1,00,000 but only reported ₹70,000 to evade taxes, that would be a case of misreporting income under section 270A.",
  },
  {
    id: 52,
    title: "Non-Resident",
    content:
      "According to the Income-tax Act, a non-resident is not considered a resident in India.",
    example:
      "Imagine a person named Rahul who works in the United States for most of the year but visits his family in India for a short time annually. Rahul is considered a non-resident for tax purposes in India because he does not live in India for a significant part of the year.",
  },
  {
    id: 53,
    title: "Penalty",
    content:
      "A penalty is like a fine imposed by the tax authorities when someone does not follow the rules in the Income-tax Act.",
    example:
      "If you do not file your income tax return by the due date, the tax authorities might impose a penalty, which means you will have to pay extra money as a punishment for being late.",
  },
  {
    id: 54,
    title: "Permanent Account Number (PAN)",
    content:
      "Permanent Account Number (PAN) is a unique ten-character combination of letters and numbers.",
    example:
      "PAN is essential for all interactions with the Income Tax Department and specific financial transactions surpassing certain limits.",
  },
  {
    id: 55,
    title: "Perquisite",
    content:
      "An employee gets something extra besides their regular salary or wages.",
    example:
      "If you work for a company and they provide you with a free car for work and personal purposes, that car is a perquisite because it is something extra on top of your salary.",
  },
  {
    id: 56,
    title: "Person",
    content:
      "In legal terms, a person can be anyone or anything with legal recognition. This includes:</br><strong>Individual:</strong> You, as an individual, are a person.</br><strong>Company:</strong> Businesses like Tata Motors or Infosys are considered persons under the law.</br><strong>Hindu Undivided Family (HUF):</strong> A family that follows Hindu law and shares income collectively.</br><strong>Local Authority:</strong> Municipalities or city councils are examples of local authorities.</br><strong>Associations or Groups:</strong> Clubs, societies, or groups formed for a common purpose.</br><strong>Artificial Juridical Person:</strong> Entities like temples, charities, or trusts that have legal status but are not individuals or companies.",
    example: "",
  },
  {
    id: 57,
    title: "Previous Year",
    content:
      "Previous year refers to the financial year just before the assessment year.",
    example:
      "If your business was set up on June 1st, 2023, and the financial year ends on March 31st, 2024, the previous year for tax assessment purposes would be from June 1st, 2023, to March 31st, 2024.",
  },
  {
    id: 58,
    title: "Profits in lieu of Salary",
    content:
      "Profits in lieu of salary refers to any extra money you receive apart from your regular salary or wages from your employer.",
    example:
      "Suppose you work for a company, and they decide to terminate your employment. In addition to your final month’s salary, they also give you a lump sum as compensation for ending your job. This extra payment is considered a profit in lieu of salary.",
  },
  {
    id: 59,
    title: "Prosecution",
    content:
      "Prosecution means taking legal action against a person or taxpayer who has broken the rules set by the Income-tax Act.",
    example:
      "Imagine someone does not file their income tax returns even though they should. This action goes against the rules of the Income-tax Act. In such a case, the Government can start a legal process against that person, which is called prosecution. This can lead to penalties or other legal consequences.",
  },
  {
    id: 60,
    title: "Public Charitable Trusts",
    content:
      "A public charitable trust is a legal entity set up for the benefit of the general public.",
    example:
      "A public charitable trust in India might fund a school to provide free education to underprivileged children.",
  },
  {
    id: 61,
    title: "Receipts",
    content:
      "Receipts are money or funds that come into your possession or business. They are divided into two main types:</br><strong>Revenue Receipts:</strong> These funds regularly flow into your business as a part of its normal operations. Examples include money from selling goods or services, interest income from loans, and rent from properties.</br><strong>Capital Receipts:</strong> These funds do not come from your regular business activities but typically result from selling long-term assets or investing. Examples include money from selling land, buildings, machinery, or investments like stocks.",
    example: "",
  },
  {
    id: 62,
    title: "Rectification",
    content:
      "Rectification is like a correction tool used by the Income-tax authorities in India. It allows them to fix errors or mistakes made in their previous decisions. The tax authorities can initiate these corrections when the taxpayer points out a mistake",
    example:
      "Let us say you filed your income tax return, but there was a typographical error in the tax amount. You can request rectification to correct this error, and the tax authority will review and amend it accordingly.",
  },
  {
    id: 63,
    title: "Resident",
    content:
      "This term refers to a person’s legal status regarding their stay and tax obligations in India. It depends on several factors:</br><strong>(a)Period of Stay in India in the Current Year:</strong> If a person has spent a certain amount of time in India during the current year, they may be considered a resident.</br><strong>(b)Period of Stay in India in Previous Years:</strong> Previous stays in India can also influence one’s residential status. </br><strong>(c)Whether the assessee is liable for tax in any other country:</strong> If a person is also subject to tax obligations in another country, this can affect their residential status in India.</br><strong>(d)Other conditions, as specified in Section 6:</strong> The specific conditions mentioned in Section 6 of the relevant tax laws, can also impact a person’s residential status.",
    example: "",
  },
  {
    id: 64,
    title: "Return of Income",
    content:
      "This is like a report card you send to the Government about how much money you earned and how much tax you need to pay. It is a way to declare your income officially.",
    example:
      "Let us say you work and earn money. At the end of the year, you fill out a form (the Return of Income) where you write down how much money you made from your job, any other sources of income like rent or investments, and how much tax you owe based on that. Then, you send this form to the Government so they know you follow the tax rules.",
  },
  {
    id: 65,
    title: "Revised Return",
    content:
      "A revised return is like a do-over for your taxes. You file a new tax return to fix any mistakes or missing information from your original return.",
    example:
      "You filed your income tax return but later realised you forgot to include some crucial deductions. To correct this, you can file a revised return to include those deductions and make your tax filing accurate.",
  },
  {
    id: 66,
    title: "Scrutiny Assessment",
    content:
      "Scrutiny assessment is like a detailed checkup of your income tax return. The Government wants to ensure you have not hidden any income or paid too little tax. During this process, you can show proof that what you declared on your tax return is accurate.",
    example:
      "Imagine you submit your income tax return, and the tax department decides to do a scrutiny assessment. They might ask you for documents like salary slips, bank statements, and investment proofs to ensure your declared income and tax payments are correct. If everything matches, great! If not, they will make the necessary adjustments.",
  },
  {
    id: 67,
    title: "Self-Assessment Tax",
    content:
      "This means figuring out how much income tax you owe on your own. You do this after March 31st but before you file your income tax return.",
    example:
      "Let us say you earn money from your job and have some savings. After March 31st, you realise you did not pay enough tax during the year, maybe because you forgot to declare some income. So, you calculate the extra tax you owe and pay it to the Government. This is called self-assessment tax.",
  },
  {
    id: 68,
    title: "Senior Citizen",
    content:
      "A senior citizen in India is a person who is 60 years or older during the past year but is less than 80 years old on the last day of that year.",
    example:
      "If someone turned 60 on any day in 2022 but were not yet 80 by December 31st, 2022, they would be considered a senior citizen for that year.",
  },
  {
    id: 69,
    title: "Set off of Losses",
    content:
      "Set off of losses means using losses from one source of income to reduce the taxable profit from another source of income.",
    example:
      "Let us say someone has a business that suffered a loss of ₹50,000 in a financial year, but they also have a job where they earned ₹2,00,000. By setting off the business loss against the job income, they would only be taxed on ₹1,50,000 (₹2,00,000 - ₹50,000) instead of the full job income. This reduces their tax burden.",
  },
  {
    id: 70,
    title: "Short-term Asset Capital",
    content:
      "A short-term capital asset in India is typically an asset that is held for no more than 36 months before it is sold or transferred. However, there are some exceptions to this general rule:</br><strong>Unlisted Shares and Immovable Property:</strong> Unlisted shares of a company (equity or preference shares) and immovable property (land or buildings) are considered short-term capital assets if held for no more than 24 months or two years before being transferred.</br><strong>Listed Financial Instruments:</strong> Listed shares (equity or preference), listed securities (debentures, bonds, derivatives, etc.), units of UTI (Unit Trust of India), units of equity-oriented funds (whether listed or unlisted), and zero-coupon bonds (whether listed or unlisted) are regarded as short-term capital assets if they are held for no more than 12 months or one year before being transferred.",
    example: "",
  },
  {
    id: 71,
    title: "Short-term Capital Gains",
    content:
      "Short-term capital gains refer to the profit made when selling a short-term asset.",
    example:
      "Imagine you buy a piece of land and sell it within two years at a higher price. The extra money you get from the sale is your short-term capital gain, and you must pay taxes on this gain.",
  },
  {
    id: 72,
    title: "Significant Economic Presence",
    content:
      "Significant economic presence refers to two main criteria:</br><strong>Monetary Transactions:</strong> If a non-resident engages in transactions involving goods, services, property, or software with individuals or entities in India, and the total value of these transactions in a year exceeds ₹2 crores, it qualifies as a significant economic presence. For instance, if a foreign company sells software to Indian customers and the total sales in a year amount to more than ₹2 crores, it falls under this category.</br><strong>Online Presence:</strong> It also includes situations where a non-resident systematically and continuously conducts business activities or interacts with at least 3 lakh users in India. For example, suppose a foreign e-commerce platform consistently targets Indian consumers and maintains an ongoing relationship with over 3 lakh users. In that case, it meets the significant economic presence criteria.",
    example: "",
  },
  {
    id: 73,
    title: "Speculative Transaction",
    content:
      "A speculative transaction is when people make agreements to buy or sell things like goods, stocks, or shares, but they do not exchange physical items or papers. Instead, they settle the deal without physically handing over the goods or documents.",
    example:
      "Imagine you agree to buy shares of a company at a specific price with the hope that their value will increase. That is a speculative transaction if you sell those shares for a profit without receiving a physical certificate.",
  },
  {
    id: 74,
    title: "Stamp Duty Value",
    content:
      "Stamp duty value is the amount determined by the Central or State Government for calculating the stamp duty on a property. This value assesses the tax you must pay when you buy or transfer property ownership.",
    example:
      "Let us say you are buying a house in India, and the Government has determined the stamp duty value of that house to be ₹1 crore. When you finalise the property purchase, you must pay stamp duty based on this ₹1 crore value, even if you bought the property for a different price. This ensures that the Government collects the appropriate tax on property transactions.",
  },
  {
    id: 75,
    title: "Statement of Financial Transaction (SFT)",
    content:
      "SFT is a way for specific organisations to share details about significant financial dealings with the Indian Income Tax Department. These reports help the tax authorities keep track of financial activities to ensure tax compliance.",
    example:
      "If you make a large deposit in your bank account or conduct a substantial property transaction, the concerned entity, like your bank or the property registrar, will report this to the Income Tax Department through an SFT. This helps the Government monitor financial activities and identify potential tax evasion.",
  },
  {
    id: 76,
    title: "Summary Assessment",
    content:
      "Summary assessment is when the Centralised Processing Centre (CPC) handles the processing of tax returns. During this process, the CPC automatically checks the accuracy of calculations, deductions claimed, and other related details on the tax return.",
    example:
      "Suppose Mr. Sharma files his income tax return online in India. His return is then sent to the Centralised Processing Centre. The CPC’s summary assessment system reviews Mr. Sharma’s calculations to ensure that he has not made any errors in his income and deductions. If everything is correct, the return is processed smoothly. If there are discrepancies, the CPC may flag them for further review or clarification.",
  },
  {
    id: 77,
    title: "Super-Senior Citizen",
    content:
      "A super-senior citizen is a person who is 80 years old or older at any point during the previous year.",
    example:
      "If someone turned 80 at any time in 2022, they would be considered a super-senior citizen for the tax year 2022-2023 in India. Super-senior citizens often receive unique benefits and considerations, such as tax exemptions, to support their well-being in their later years.",
  },
  {
    id: 78,
    title: "Tax Collected at Source (TCS)",
    content:
      "Tax Collected at Source, often abbreviated as TCS, is a type of tax that specific individuals or businesses must collect from the person buying their goods or services. It is like a small amount of tax collected by the seller on behalf of the Government.",
    example:
      "Suppose you run a shop in India and sell high-value items like jewellery. If a customer buys jewellery worth ₹1,00,000 from your shop, you might have to collect a small percentage of that amount as TCS, say ₹1,000. This ₹1,000 is then submitted to the Government as the tax on behalf of the customer. So, the customer pays ₹1,00,000 for the jewellery, and you collect ₹1,000 in TCS, making the total payment ₹1,01,000.",
  },
  {
    id: 79,
    title: "Tax Deducted at Source (TDS)",
    content:
      "TDS is a small tax payment made in advance. When you receive certain types of income, like your salary or interest on your bank savings, the payer deducts a small portion of that money as tax before giving it to you. This deducted tax is then sent to the Government on your behalf.",
    example:
      "Let us say you earn ₹10,000 as interest from your bank savings. However, the bank deducts ₹1,000 as TDS before giving you the remaining ₹9,000. The bank then sends that ₹1,000 to the Government. So, you only get ₹9,000, and the Government has already received its share of the tax.",
  },
  {
    id: 80,
    title: "TDS Certificates",
    content:
      "A TDS Certificate is a document given by a person or entity that deducts tax from your income before paying it to you. This certificate shows the amount of tax deducted, the tax rate, and other essential details about your taxes.",
    example:
      "Let us say you earn income by providing a service. The person or company hiring you must deduct a portion of your earnings as tax before paying you. They will provide you with a TDS Certificate to state how much tax was deducted and at what rate. You need this certificate to file your income tax return and ensure you get credit for the already paid tax. It is an essential document to keep track of your tax payments.",
  },
  {
    id: 81,
    title: "TDS Return",
    content:
      "A TDS Return is like a tax report that someone, usually a business or an employer, has to submit to the Government. This report lists all the times they deducted a portion of your income as tax during three months. It is a way for the Government to track how much tax is being collected.",
    example:
      "If you work for a company, they deduct some monthly tax money from your salary. They record all these deductions in a TDS Return and send it to the Government. This helps the Government ensure everyone is paying the right amount of tax.",
  },
  {
    id: 82,
    title: "TAN (Tax Deduction and Collection Number)",
    content:
      "TAN is a 10-digit alphanumeric identification number that individuals or entities in India must obtain if they are responsible for deducting or collecting taxes on payments made. It is a unique identifier provided by the Income Tax Department.",
    example:
      "Imagine you run a business and must deduct taxes from your employees’ salaries before making payments. To do this, you must apply for a TAN. Once you receive your TAN, you will use it while deducting and depositing taxes with the Government. This helps ensure proper tax collection and reporting.",
  },
  {
    id: 83,
    title: "Total Income",
    content:
      "The total income of an individual includes all the money they earn or are considered to have earned in India during a specific year. This includes income they receive directly, income that is considered to have been received, and income that is generated or considered to have been generated in India.",
    example:
      "Mr. Sharma lives in India and works as a consultant. His consultancy business earns income both in India and from international clients. In his total income, he must include the money he earns within India and the income he receives from his international clients, as long as it relates to his consulting business in India.",
  },
  {
    id: 84,
    title: "Transfer Pricing",
    content:
      "Transfer pricing refers to determining the prices at which goods, services, or assets are exchanged between companies or entities that are related or have a close business connection. The main goal is to ensure these transactions occur at a fair and market-based price, similar to what would be agreed upon between two unrelated businesses.",
    example:
      "Imagine two companies, Company A and Company B, are part of the same multinational corporation. Company A in India manufactures a product, and Company B in the United States sells it. To avoid unfair tax practices, transfer pricing regulations ensure that the price at which Company A sells the product to Company B is reasonable and comparable to what an unrelated Indian manufacturer would charge for a similar product.",
  },
  {
    id: 85,
    title: "Underreporting of Income",
    content:
      "Underreporting of income refers to when someone intentionally or unintentionally declares less income or fails to declare any income on their income tax return. This can result in legal consequences and penalties. It is regulated by Section 270A of the Income-tax Act.",
    example:
      "Imagine a freelancer who earned ₹1,00,000 during the financial year but only reported ₹70,000 in their income tax return, thinking they can avoid paying taxes on the remaining ₹30,000. This is a case of underreporting income.",
  },
  {
    id: 86,
    title: "Unit Linked Insurance Plan (ULIP)",
    content:
      "A ULIP is like a two-in-one plan that helps you save money and provides insurance coverage at the same time. Here is how it works:</br><strong>Money Mix:</strong> When you pay for a ULIP, part of your money goes to insurance to protect you, and the rest goes into investments.</br><strong>Investment Choices:</strong> You get to decide where the investment part goes: stocks, bonds, or a mix of both. It depends on your financial goals and how much risk you are comfortable with.",
    example:
      "Imagine you buy a ULIP. Some of your money ensures you are covered if something happens to you. At the same time, the rest is invested in things like stocks or bonds, potentially helping your money grow over time.",
  },
  {
    id: 87,
    title: "Updated Return",
    content:
      "This is a type of income tax return you can file even after the deadline for filing your original, belated, or revised tax return.",
    example:
      " Suppose you missed the deadline to file your income tax return in India. You might have to wait until the next financial year to correct mistakes or report additional income. However, with an updated return, you can make these corrections and additions even after the usual deadlines have passed. This helps ensure your tax information is accurate and up-to-date.",
  },
  {
    id: 88,
    title: "Virtual Digital Assets",
    content:
      "Virtual digital assets refer to various digital entities, often generated through cryptographic techniques, that represent value and can be exchanged electronically. These assets can serve as a store of value or a unit of account in digital transactions. However, they are distinct from Indian or foreign currencies. They include:</br><strong>(a)</strong>Information, code, numbers, or tokens created through cryptographic methods hold or represent value and can be used in financial transactions or investments.</br><strong>(b)</strong>Non-fungible tokens (NFTs) and similar tokens have unique properties and are not interchangeable one-to-one.</br><strong>(c)</strong>Any other digital assets specified by the Central Government through a notification in the Official Gazette. It is important to note that the Central Government can exclude certain digital assets from this definition through official notifications, subject to specific conditions.",
    example:
      " Bitcoin, Ethereum, and NFTs are all examples of virtual digital assets that people use for various purposes, including buying goods, investing, or collecting unique digital items.",
  },
  {
    id: 89,
    title: "Written Down Value (WDV):",
    content:
      "Written Down Value (WDV) is the reduced value of an asset used to calculate depreciation. To find the WDV of an asset, subtract the actual cost of assets acquired in the previous year and the proceeds from any asset sales in that year from the initial value of the asset.",
    example:
      "Imagine you bought a machine for ₹1,00,000. In the first year, you acquired another machine for ₹20,000 and sold an old machine for ₹10,000. To calculate the WDV at the end of the first year:</br>Initial Value of Machine: ₹1,00,000</br>Cost of New Machine: - ₹20,000</br>Proceeds from Sale: + ₹10,000</br>WDV at the end of the first year: ₹90,000 (100,000 - 20,000 + 10,000)</br>This WDV calculates depreciation for the next year, and the process continues.",
  },
];

export default data;
