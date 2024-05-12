import React from "react";

const page = () => {
  return (
    <div className="mt-[160px]">
      <h1 className="uppercase text-center font-bold text-3xl mb-3">
        Interest-paid-on-Home-Loan-(Section-24B)
      </h1>
      <div className="bg-white mx-9 mt-10 leading-relaxed">
        <h1 className="font-semibold text-2xl mb-4">Introduction</h1>
        <p className="text-lg text-justify">
          Owning a home is a cherished dream for many in India, and with the
          skyrocketing property prices, securing a home loan has become an
          everyday necessity. Home loans often come with substantial Equated
          Monthly Instalments (EMIs), predominantly consisting of interest in
          the initial years. To alleviate the financial strain on homeowners,
          the Indian government provides tax relief through Section 24B of the
          Income-tax Act. This section offers deductions on home loan
          repayments’ interest and principal components, helping taxpayers
          reduce their tax liability while realizing their homeownership goals.
        </p>
        <h1 className="font-semibold text-2xl mb-4 mt-6">
          In-Depth Look at Section 24B Deductions
        </h1>
        <ul className=" list-decimal">
          <li>
            <h1 className="text-xl mt-4 font-semibold text-primary">
              Standard Deduction
            </h1>
            <p>
              Section 24B grants a standard deduction of 30% on a property’s Net
              Annual Value (NAV). However, this deduction does not apply to
              self-occupied properties, where the NAV inherently amounts to
              zero.
            </p>
            <p>
              <strong>Example:</strong> If you own a property rented out for
              ₹20,000 per month, your Gross Annual Value (GAV) would be
              ₹2,40,000 (₹20,000 * 12 months). If you have paid ₹10,000 as
              municipal taxes, your NAV would be ₹2,30,000 (GAV - Municipal
              Taxes), and the standard deduction applicable to this amount would
              be ₹69,000 (30% of NAV).
            </p>
          </li>
          <li>
            <h1 className="text-xl mt-4 font-semibold text-primary">
              Interest on Home Loan
            </h1>
            <p>
              One of the primary benefits of Section 24B is the deduction of the
              interest paid on home loans. Taxpayers can claim this deduction
              for interest payments up to ₹2,00,000 within a financial year
              while calculating their total taxable income under the ‘income
              from house property’ head. It is essential to note that this
              deduction does not encompass any brokerage or commission paid to
              intermediaries or agents.
            </p>
            <p>
              <strong>Example:</strong> Suppose you have taken a home loan for
              your self-occupied property. During a financial year, you paid
              ₹2,50,000 as interest on the loan. In this case, you can claim a
              deduction of ₹2,00,000 (the maximum limit) under Section 24B. The
              remaining ₹50,000 cannot be claimed as a deduction
            </p>
            <h1 className="font-semibold text-lg mb-4 mt-6">
              Conditions for Claiming Interest on Home Loan under Section 24B of
              the Income-tax Act:
            </h1>
            <div className="grid lg:grid-cols-3 grid-cols-1">
              <div className="hover:scale-105 p-3 border-2 border-primary text-center rounded-xl mr-4 mb-4 shadow-xl">
                <div className="text-lg font-semibold">Loan Usage</div>
                <div className="font-normal mx-6">
                  The loan must be used for purchasing, constructing, repairing,
                  renewing, or reconstructing a property.
                </div>
              </div>
              <div className="hover:scale-105 p-3 border-2 border-primary text-center rounded-xl mr-4 mb-4 shadow-xl">
                <div className="text-lg font-semibold">Loan Date</div>
                <div className="font-normal mx-6">
                  The loan should have been obtained on or after April 1, 1999.
                </div>
              </div>
              <div className="hover:scale-105 p-3 border-2 border-primary text-center rounded-xl mr-4 mb-4 shadow-xl">
                <div className="text-lg font-semibold">Completion Period </div>
                <div className="font-normal mx-6">
                  The acquisition or construction must be completed within five
                  years from the end of the financial year in which the capital
                  was borrowed.
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="hover:scale-105 p-3 border-2 border-primary text-center rounded-xl mr-4 mb-4 shadow-xl">
                <div className="text-lg font-semibold">
                  Interest Certificate{" "}
                </div>
                <div className="font-normal mx-6">
                  Taxpayers must furnish a certificate from the lending
                  institution or banking company specifying the interest amount
                  payable for property acquisition or construction. Financial
                  institutions typically provide this certificate annually and
                  at the commencement of the loan period.
                </div>
              </div>
              <div className="hover:scale-105 p-3 border-2 border-primary text-center rounded-xl mr-4 mb-4 shadow-xl">
                <div className="text-lg font-semibold">Property Usage</div>
                <div className="font-normal mx-6">
                  The property must either be self-occupied or vacant. For
                  rented properties, the entire interest amount is deductible
                  without any limit.
                </div>
              </div>
            </div>
            <p className="text-lg">
              <strong>Example:</strong> Let us say you took a home loan on April
              1, 2005, and the construction of your house was completed on March
              31, 2010. During the financial year 2010-2011, you paid ₹2,40,000
              as interest on the loan. Since the construction was completed
              within the five-year limit, you can claim the entire interest
              amount of ₹2,40,000 as a deduction for that financial year.
            </p>
            <h1 className="font-semibold text-lg mb-4 mt-6">
              Conditions for Claiming Interest on Home Loan under Section 24B of
              the Income-tax Act:
            </h1>
            <p className="text-lg">
              If taxpayers do not meet the conditions mentioned above, they can
              claim only ₹30,000 as a deduction under Section 24B. This
              provision applies in cases where:
            </p>
            <div className="grid grid-cols-2">
              <div className="hover:scale-105 p-3 border-2 border-primary text-center rounded-xl mr-4 mb-4 shadow-xl">
                <div className="text-lg font-semibold">
                  The loan was borrowed before April 1, 1999
                </div>
                <div className="font-normal mx-6">
                  for any purpose related to the house property.
                </div>
              </div>
              <div className="hover:scale-105 p-3 border-2 border-primary text-center rounded-xl mr-4 mb-4 shadow-xl">
                <div className="text-lg font-semibold">
                  The loan was borrowed on or after April 1, 1999
                </div>
                <div className="font-normal mx-6">
                  but the construction or acquisition is not completed within
                  five years from the end of the financial year in which the
                  loan was taken.
                </div>
              </div>
            </div>
            <p className="text-lg">
              <strong>Example:</strong> Suppose you borrowed a home loan for
              repairs on January 1, 1998, and paid ₹40,000 as interest during a
              financial year. In this scenario, you can claim a maximum
              deduction of ₹30,000 under Section 24B for that financial year.
            </p>
          </li>
          <li>
            <h1 className="text-xl mt-4 font-semibold text-primary">
              Pre-Construction Interest
            </h1>
            <p>
              Section 24B also permits deductions for pre-construction interest.
              This becomes relevant when a home loan is taken for purchasing or
              constructing a house. Key points regarding pre-construction
              interest include:
            </p>
            <div className="mt-4 grid lg:grid-cols-3 grid-cols-1">
              <div className="hover:scale-105 p-3 border-2 border-primary text-center rounded-xl mr-4 mb-4 shadow-xl">
                <div className="font-normal mx-6">
                  It cannot be claimed for a loan taken for repairs or
                  reconstruction.
                </div>
              </div>
              <div className="hover:scale-105 p-3 border-2 border-primary text-center rounded-xl mr-4 mb-4 shadow-xl">
                <div className="font-normal mx-6">
                  The total deduction for pre-construction interest is limited
                  to ₹2,00,000, mirroring the cap for post-construction
                  interest.
                </div>
              </div>
              <div className="hover:scale-105 p-3 border-2 border-primary text-center rounded-xl mr-4 mb-4 shadow-xl">
                <div className="font-normal mx-6">
                  Pre-construction interest is eligible for deduction in five
                  equal instalments from the year of house purchase or
                  construction completion
                </div>
              </div>
            </div>
            <p className="text-lg">
              <strong>Example:</strong> Let us say you took a home loan to
              construct a new house, and during the pre-construction period, you
              paid a total interest of ₹6,00,000. The construction was completed
              on May 5, 2019, for the financial year 2019-2020. In this case,
              you can claim a deduction of ₹1,20,000 (1/5th of ₹6,00,000) for
              the financial year 2019-2020 and similarly for the next four
              financial years.
            </p>
          </li>
          <li>
            <h1 className="text-xl mt-4 mb-4 font-semibold text-primary">
              Exceptions Under Section 24B
            </h1>
            <div className="grid lg:grid-cols-3 grid-cols-1">
              <div className="hover:scale-105 p-3 border-2 border-primary text-center rounded-xl mr-4 mb-4 shadow-xl">
                <div className="text-lg font-semibold">
                  Exclusion of Commission or Brokerage
                </div>

                <div className="font-normal mx-6">
                  No deductions are permitted for commission or brokerage.
                  However, taxpayers can deduct municipal taxes from the gross
                  property value to ascertain the Net Annual Value (NAV).
                </div>
              </div>
              <div className="hover:scale-105 p-3 border-2 border-primary text-center rounded-xl mr-4 mb-4 shadow-xl">
                <div className="text-lg font-semibold">
                  Interest Certificate
                </div>

                <div className="font-normal mx-6">
                  Taxpayers are required to possess a certificate confirming the
                  interest on the home loan.
                </div>
              </div>
              <div className="hover:scale-105 p-3 border-2 border-primary text-center rounded-xl mr-4 mb-4 shadow-xl">
                <div className="text-lg font-semibold">Property Occupation</div>

                <div className="font-normal mx-6">
                  If the owner does not occupy the property, there is no upper
                  limit on the amount of tax deduction.
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div>
          <h1 className="font-semibold text-2xl mb-4">
            Combined Benefits of Section 24B and Section 80EE of the Income-tax
            Act
          </h1>
          <div className="text-lg">
            <p>
              While calculating total income, taxpayers can simultaneously claim
              a tax deduction for the interest payable on the loan under both
              Section 24B and Section 80EE. However, specific conditions apply
              to claim deductions under both sections, including:
            </p>
            <ul className=" list-decimal">
              <li>
                The home loan should be taken for purchasing a residential
                property.
              </li>

              <li>The loan must be obtained from a financial institution.</li>
              <li>
                The loan must be sanctioned between April 1, 2016, and March 31,
                2017.
              </li>
              <li>
                The taxpayer should not own any other house property on the loan
                sanction date.
              </li>
              <li>
                The loan sanction amount should be less than ₹35 lakhs for
                acquiring a residential house property.
              </li>
              <li>
                The total value of the house property should be less than ₹50
                lakhs.
              </li>
            </ul>
            <p className="text-lg">
              <strong>Example:</strong> You can claim a tax deduction of up to
              ₹2,00,000 under Section 24B of the Income-tax Act for the interest
              on your home loan. Additionally, you can claim an extra ₹50,000
              under Section 80EE if you satisfy the conditions mentioned above.
            </p>
          </div>
        </div>

        <div>
          <h1 className="mt-3 font-semibold text-2xl mb-4">
            Income from House Property
          </h1>
          <p className="text-lg">
            Income from house property can occur under three scenarios:
          </p>
          <div className="grid lg:grid-cols-3 grid-cols-1">
            <div className="hover:scale-105 p-3 border-2 border-primary text-center rounded-xl mr-4 mb-4 shadow-xl">
              <div className="text-lg font-semibold">Rental Income</div>
              <div className="font-normal mx-6">
                When a taxpayer receives rental income from a property that is
                let out. The annual value is typically the monthly rental
                amount, excluding maintenance charges.
              </div>
            </div>
            <div className="hover:scale-105 p-3 border-2 border-primary text-center rounded-xl mr-4 mb-4 shadow-xl">
              <div className="text-lg font-semibold">Deemed to be Let Out</div>
              <div className="font-normal mx-6">
                When a taxpayer owns more than two house properties, the Gross
                Annual Value (deemed income) is considered.
              </div>
            </div>
            <div className="hover:scale-105 p-3 border-2 border-primary text-center rounded-xl mr-4 mb-4 shadow-xl">
              <div className="text-lg font-semibold">Self-Occupied</div>
              <div className="font-normal mx-6">
                The Gross Annual Value (GAV) is nil when a taxpayer resides in
                the house.
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-semibold text-2xl mb-4">
            Calculating income from house property involves these key steps:
          </h1>
          <div className="text-lg">
            <ul className=" list-decimal">
              <li>
                <strong>Gross Annual Value (GAV):</strong> Determined based on
                the rental income received, municipal taxes paid, or reasonable
                rent for a similar property in the locality.
              </li>
              <li>
                <strong>Net Annual Value (NAV):</strong> Calculated as GAV minus
                municipal taxes or taxes paid to local authorities.
              </li>
              <li>
                <strong>Standard Deduction:</strong> 30% of NAV, with the caveat
                that the standard deduction is also nil for self-occupied houses
                (with a nil NAV).
              </li>
              <li>
                <strong>Interest on Housing Loan: </strong> Deducted from NAV as
                per Section 24B.
              </li>
              <li>
                <strong>Pre-Construction Interest: </strong> Deducted in five
                equal instalments from the year of house purchase or
                construction completion.
              </li>
              <li>
                <strong>Income from House Property: </strong> The final figure
                that is considered taxable income.
              </li>
            </ul>
            <p className="text-lg">
              <strong>Example:</strong> Consider Mr. Arun, who has taken a home
              loan with an EMI of ₹36,000 per month. If his property is
              self-occupied, his total EMI for the year amounts to ₹4,32,000. He
              paid ₹2,64,000 as interest and ₹1,68,000 towards the principal
              amount. Additionally, he paid ₹2,00,000 in interest during the
              pre-construction period. In this case, his income from the house
              property under self-occupied status would be (-₹2,60,000). A loss
              of ₹2,00,000 would be carried forward for future set-offs (up to 8
              years) exclusively against income from house property.
            </p>
          </div>
        </div>

        <div>
          <h1 className="mt-4 font-semibold text-2xl mb-2">
            Maximum Limit of Deduction under Section 24B
          </h1>
          <p className="text-lg">
            The maximum limits for Section 24B deductions are applicable on an
            assessee basis, not a property basis. Therefore, if an assessee owns
            two or more house properties, the total deduction for that assessee
            remains the same.
          </p>
          <ul>
            <li>
              <strong>Let Out Property or Deemed to be Let Out:</strong>No
              maximum limit on deductions
            </li>
            <li>
              <strong>Self-Occupied House (SOP):</strong>
              <ul className=" list-decimal">
                <li>
                  Loan borrowed before 01-04-1999 for any purpose related to
                  house property.
                </li>
                <li>
                  Loan borrowed after 01-04-1999 for any purpose other than
                  construction or acquisition.
                </li>
                <li>
                  Construction/acquisition is not completed within three years
                  from the end of the financial year in which capital was
                  borrowed.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="font-semibold text-2xl mb-4 mt-4">
            Interest in the Pre-Construction/Acquisition Period
          </h1>
          <p>
            Interest for the pre-construction or pre-acquisition period is
            allowed as a deduction in 5 equal instalments, starting from the
            year of house completion. However, this deduction is unavailable if
            the loan is used for repairs, renewal, or reconstruction. The
            pre-construction/acquisition period begins from the date of
            borrowing. It ends on the last day of the preceding financial year
            in which the construction is completed.
          </p>
        </div>

        <div>
          <h1 className="font-semibold text-2xl mb-2 mt-4">
            Deduction in Case of Co-Borrower
          </h1>
          <p>
            If a home loan is taken jointly, each co-borrower can claim a
            deduction in proportion to their share in the loan. To qualify for
            this deduction, co-borrowers must also be co-owners of the property.
            Suppose an assessee is a co-owner and repaying the entire loan
            individually. In that case, they can claim a deduction for the
            entire interest amount paid by them. The deduction limit for
            self-occupied property applies individually to each co-borrower,
            allowing each to claim up to ₹2,00,000 or ₹30,000 as applicable. For
            let-out properties, there is no limit on deductions.
          </p>
        </div>

        {/* table */}
        <h1 className="font-semibold text-2xl mb-2 mt-4">
          Difference between Section 24B and Section 80C
        </h1>
        <table class="w-full text-sm text-left rtl:text-right dark:text-gray-400">
          <thead class="text-xs uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Aspect
              </th>
              <th scope="col" class="px-6 py-3">
                Section 24B
              </th>
              <th scope="col" class="px-6 py-3">
                Section 80C
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-semibold whitespace-nowrap dark:text-white"
              >
                Tax Deduction Allowed
              </th>
              <td class="px-6 py-4">The interest component of a home loan</td>
              <td class="px-6 py-4">The principal component of a home loan</td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-semibold whitespace-nowrap dark:text-white"
              >
                Basis of Tax Deduction
              </th>
              <td class="px-6 py-4">Accrual basis</td>
              <td class="px-6 py-4">Payment basis</td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-semibold whitespace-nowrap dark:text-white"
              >
                Maximum Tax Deduction
              </th>
              <td class="px-6 py-4">
                No limit for let-out properties and ₹2,00,000 (reduced to
                ₹30,000 under specific conditions) for self-occupied properties
              </td>
              <td class="px-6 py-4">₹1.5 Lakhs</td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-semibold whitespace-nowrap dark:text-white"
              >
                Purpose of Loan
              </th>
              <td class="px-6 py-4">Related to residential house property</td>
              <td class="px-6 py-4">Applicable to any house property</td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-semibold whitespace-nowrap dark:text-white"
              >
                Completion Period
              </th>
              <td class="px-6 py-4">
                Property should be completed within 5 years (reduced to 3 years
                under specific conditions)
              </td>
              <td class="px-6 py-4">No restriction</td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-semibold whitespace-nowrap dark:text-white"
              >
                Deduction for Pre-Construction Interest
              </th>
              <td class="px-6 py-4">Allowed in 5 equal installments</td>
              <td class="px-6 py-4">No restriction</td>
            </tr>
          </tbody>
        </table>

        {/* conclusion */}
        <div>
          <h1 className="font-semibold text-2xl mb-2 mt-4">Conclusion</h1>
          <div className="text-lg">
            Owning a home is a significant financial milestone. Section 24B of
            the Income-tax Act provides valuable tax benefits to make this dream
            more attainable. By understanding the intricacies of Section 24B,
            taxpayers can optimize their tax planning, minimize tax liabilities,
            and efficiently manage their finances. It is advisable to consult
            with a tax professional or refer to the relevant tax legislation for
            accurate reporting and deduction claims, as the rules and
            regulations may evolve. For more insights and assistance on
            tax-related matters, consider consulting Calcya, your trusted legal
            and financial partner. Calcya specializes in providing expert advice
            on tax planning, including maximizing deductions under Section 24B
            and other relevant tax provisions. Let Calcya help you navigate the
            complex landscape of taxation, ensuring you achieve your financial
            goals while fully compliant with tax laws.
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
