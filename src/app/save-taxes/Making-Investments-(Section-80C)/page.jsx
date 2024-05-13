import React from "react";
import Footer from "../../../components/Footer";

const page = () => {
  return (
    <div>
      <div className=" bg-white pt-10 mt-[160px] transform w-[133.33%] scale-75 origin-top-left">
        <h1 className="uppercase text-center font-bold text-3xl mb-3">
          Tax Benefits on Investments: Guide on Section 80C of the Income-tax
          Act, 1961
        </h1>
        <div className="mx-7 lg:mx-32 mt-10 leading-relaxed">
          <h1 className="font-semibold text-3xl mb-4">
            Introduction to Section 80C
          </h1>
          <p className="text-xl text-justify leading-loose">
            The Income-tax Act, 1961 provides numerous avenues for taxpayers in
            India to save on their tax liability, and one of the most popular
            and substantial of these is Section 80C. This section allows
            individuals and Hindu Undivided Families (HUFs) to claim deductions
            on specific investments and expenditures, thereby reducing their
            taxable income. It serves a dual purpose: reducing tax liability and
            encouraging long-term savings.
          </p>
          <h1 className="font-semibold text-3xl mb-4 mt-6">
            Key Highlights of Section 80C
          </h1>
          <ul className=" list-disc">
            <li>
              <h1 className="text-2xl mt-4 font-semibold text-primary">
                Deduction Limit
              </h1>
              <p className="text-xl leading-loose">
                The maximum deduction limit under Section 80C is ₹1,50,000.
              </p>
            </li>
            <li>
              <h1 className="text-2xl mt-4 font-semibold text-primary">
                ITR Filing
              </h1>
              <p className="text-xl leading-loose">
                To claim tax benefits under Section 80C, filing an Income Tax
                Return (ITR) is mandatory.
              </p>
            </li>
            <li>
              <h1 className="text-2xl mt-4 font-semibold text-primary">
                Union Budget 2023 Update
              </h1>
              <p className="text-xl leading-loose">
                During the Union Budget 2023, Finance Minister Nirmala
                Sitharaman maintained the existing rules regarding Section 80C
                and did not introduce any changes. Consequently, if you follow
                the old tax regime, you can continue to avail deductions of up
                to ₹1.5 lakh under Section 80C of the Income Tax Act.
              </p>
            </li>
          </ul>
          <div>
            <h1 className="font-semibold text-2xl mb-4">
              What is Section 80C of the Income-tax Act?
            </h1>
            <div className="text-lg leading-loose">
              <p>
                Section 80C is an income tax deduction that allows taxpayers to
                reduce their taxable income, ultimately leading to lower tax
                outgo. This section encompasses specified investment and payment
                options that reduce your taxable income by up to ₹1.5 lakhs. It
                is important to note that while the deduction is claimed when
                filing your income tax return, the investment must be made
                during the relevant financial year.
              </p>
              <p className="text-xl">
                <strong>Example:</strong> For FY 2022-23 (Assessment Year
                2023-24), you must invest in the specified options under Section
                80C between 1 April 2022 and 31 March 2023. The benefit will be
                claimed when filing your annual income tax return.
              </p>
            </div>
          </div>
          <div>
            <h1 className="font-semibold text-2xl mb-4">
              Eligibility of Section 80C of the Income-tax Act
            </h1>
            <div className="text-lg leading-loose">
              <p>
                Section 80C benefits are available to individuals and HUFs
                (Hindu Undivided Families). Salaried and self-employed
                individuals can use various investment options to reduce their
                taxable income.
              </p>
            </div>
          </div>

          <div>
            <h1 className="font-semibold text-2xl mb-4 mt-2">
              Eligible Investments for Deduction under Section 80C of the
              Income-tax Act
            </h1>
            <div className="text-xl">
              <ul className=" list-decimal leading-loose">
                <li>
                  <strong>Public Provident Fund (PPF)</strong>
                  <p>
                    <strong>You can make investments in the name of:</strong>
                    <ul className=" list-disc">
                      <li>
                        In the case of a Resident Individual: Self, Spouse, or
                        Any child of such an individual.
                      </li>
                      <li>In the case of HUF: Any member of HUF.</li>
                    </ul>
                  </p>
                  <p>
                    <strong>Amount of Investment: </strong>The minimum deposit
                    limit is ₹500, and the maximum is ₹1,50,000 during a year.
                  </p>
                  <p>
                    <strong>Lock-in-Period: </strong>The PPF account matures
                    after 15 years, but part of the money can be withdrawn after
                    7 years.
                  </p>
                  <p>
                    <strong>Taxability: </strong>PPF is EEE-rated, which means
                    it is tax-exempt at the time of investment, returns, and
                    withdrawals.
                  </p>
                  <p>
                    <strong>Document Required: </strong>PPF Passbook or
                    statement showing contributions made.
                  </p>
                </li>
                <li className="mt-4">
                  <strong>Sukanya Samriddhi Yojana (SSY) Account</strong>
                  <p>
                    <strong>Eligibility: </strong>Resident Individual parents
                    with a girl child can invest in this scheme until age 10.
                  </p>
                  <p>
                    <strong>Amount of Investment: </strong>The minimum deposit
                    limit under this account is ₹250 annually, and the maximum
                    is ₹1,50,000.
                  </p>
                  <p>
                    <strong>Lock-in-Period: </strong>The amount is required to
                    be deposited for 15 years. After 21 years, this account will
                    mature.
                  </p>
                  <p>
                    <strong>Taxability: </strong>SSY is EEE-rated, which means
                    it is tax-exempt at the time of investment, returns, and
                    withdrawals.
                  </p>
                  <p>
                    <strong>Document Required: </strong>SSY account passbook or
                    statement indicating contributions.
                  </p>
                </li>
                <li className="mt-4">
                  <strong>
                    Mutual Funds (Equity Linked Saving Scheme or ELSS)
                  </strong>
                  <p>
                    <strong>Amount of Investment: </strong>You can start
                    investing from ₹500 without an upper limit.
                  </p>
                  <p>
                    <strong>Lock-in-Period: </strong>3 years.
                  </p>
                  <p>
                    <strong>Taxability: </strong>The investment is exempt under
                    Section 80C up to ₹1.5 lakhs, and the long-term gains on
                    withdrawals are exempt up to ₹1 lakh. The dividends received
                    (if any) will be taxable under “Income from other sources.”
                  </p>
                  <p>
                    <strong>Document Required: </strong>Statement from the
                    mutual fund company or the statement provided by your Demat
                    account showing the investment in ELSS funds.
                  </p>
                </li>
                <li className="mt-4">
                  <strong>5-Year Tax Saving Fixed Deposit (FD)</strong>
                  <p>
                    <strong>Amount you can invest: </strong>The minimum deposit
                    limit is ₹1,000.
                  </p>
                  <p>
                    <strong>Lock-in-Period: </strong>5 Years. If you break the
                    FD before the completion of the lock-in period, then the
                    deduction taken will be added back to your income.
                  </p>
                  <p>
                    <strong>Taxability: </strong>The amount invested is eligible
                    for deduction under Section 80C, but the withdrawals and
                    interest are taxable. Senior citizens can claim tax benefits
                    of up to ₹50,000 on the interest amount earned under section
                    80TTB.
                    <br />
                    <strong>Note:</strong> If you have a good amount of idle
                    cash accumulated, making a Fixed Deposit will benefit you.
                  </p>
                  <p>
                    <strong>Document Required: </strong>Fixed deposit receipt or
                    certificate from the bank or post office.
                  </p>
                </li>
                <li className="mt-4">
                  <strong>National Savings Certificate (NSC)</strong>
                  <p>
                    <strong>Eligibility: </strong>Only individuals can buy an
                    NSC; HUFs are not allowed to do so.
                  </p>
                  <p>
                    <strong>Amount you can invest: </strong>The minimum
                    investment amount is ₹100, and there is no cap on the
                    highest ceiling.
                  </p>
                  <p>
                    <strong>Lock-in-Period: </strong>5 Years
                  </p>
                  <p>
                    <strong>Tax Benefit: </strong>The investment is tax
                    deductible under Section 80C, and the interest earned is
                    taxable under the head “Income from other sources.” One
                    exciting thing about NSC is that when interest is accrued,
                    it is deemed reinvested in NSC. This gives you an extra tax
                    benefit on the reinvested interest amount.
                  </p>
                  <p>
                    <strong>Document Required: </strong>NSC certificate(s)
                    indicating the investment.
                  </p>
                </li>
                <li className="mt-4">
                  <strong>Senior Citizen Saving Scheme</strong>
                  <p>
                    <strong>Amount you can invest: </strong>There is no minimum
                    investment limit, but on the higher side, the investment
                    amount shall not exceed ₹15 lakhs or the amount received on
                    retirement (whichever is higher).
                  </p>
                  <p>
                    <strong>Lock-in-Period: </strong>5 Years
                  </p>
                  <p>
                    <strong>Tax Benefit: </strong>Investment is tax-deductible
                    under Section 80C. Interest income tax benefits up to
                    ₹50,000 can be taken under section 80TTB. One of the best
                    things about this scheme is that it can be foreclosed after
                    1 year.
                  </p>
                  <p>
                    <strong>Document Required: </strong>SCSS account passbook or
                    certificate from the bank or post office.
                  </p>
                </li>
                <li className="mt-4">
                  <strong>Unit Linked Insurance Plan (ULIP)</strong>
                  <p>
                    <strong>You can make investments in the name of:</strong>
                    <ul className=" list-disc">
                      <li>
                        In case of an Individual: Individual, Spouse, or Any
                        child of such an individual.
                      </li>
                      <li>In the case of HUF: Any member of HUF.</li>
                    </ul>
                  </p>
                  <p>
                    <strong>Amount you can invest: </strong>There is no limit
                    for making investments in the ULIP, but the premium should
                    not be more than 10% of the sum assured for taking the
                    benefit of tax under Section 80C.
                  </p>
                  <p>
                    <strong>Lock-in-Period: </strong>Minimum 5 years
                  </p>
                  <p>
                    <strong>Tax Benefit:</strong>
                    <ul className=" list-disc">
                      <li>On investment: Up to ₹1.5 lakh</li>
                      <li>
                        On Maturity (As per The Finance Act, 2021): Certain ULIP
                        plans will no longer have exemptions in case:
                        <ul className=" list-decimal">
                          <li>
                            The policies are issued on or after 1 February 2021,
                            and
                          </li>
                          <li>
                            n case you have paid an insurance premium of ₹2.5
                            lakh or more for any of the previous years, then the
                            amount received (including the bonus) at the time of
                            maturity will be taxable or
                          </li>
                          <li>
                            If an individual has purchased multiple ULIP plans,
                            the aggregate amount paid is more than ₹2.5 lakh. It
                            comes under the ambit of taxation.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </p>
                  <p>
                    <strong>Document Required: </strong>ULIP policy document and
                    premium payment receipts.
                  </p>
                </li>
                <li className="mt-4">
                  <strong>Life Insurance Premium</strong>
                  <p>
                    <strong>
                      Under Section 80C, the deduction is allowed regarding life
                      insurance premiums. The premium must be for the Life
                      insurance policy taken in the name of:
                    </strong>
                    <ul className=" list-disc">
                      <li>
                        In case of an Individual: Individual, Spouse, or Any
                        child of such an individual.
                      </li>
                      <li>In the case of HUF: Any member of HUF.</li>
                    </ul>
                    <p>
                      <strong>Note:</strong>The deduction percentages on the
                      premium vary depending on when you took the insurance.
                      Refer to the table below for more clarity.
                    </p>
                  </p>
                  <div class="mx-2 relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="mt-2 w-full text-sm text-left rtl:text-right dark:text-gray-400">
                      <thead class="text-2xl uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" class="px-6 py-3">
                            Policy Issue Date
                          </th>
                          <th scope="col" class="px-6 py-3">
                            Deduction Percentage
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-xl">
                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                          <th
                            scope="row"
                            class="px-6 py-4 font-semibold whitespace-nowrap dark:text-white"
                          >
                            On or before 31 March, 2012
                          </th>
                          <td class="px-6 py-4">20% of the sum assured</td>
                        </tr>
                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                          <th
                            scope="row"
                            class="px-6 py-4 font-semibold whitespace-nowrap dark:text-white"
                          >
                            On or before 1 April 2012 but before 1 April, 2021
                          </th>
                          <td class="px-6 py-4">10% of the sum assured</td>
                        </tr>
                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                          <th
                            scope="row"
                            class="px-6 py-4 font-semibold whitespace-nowrap dark:text-white"
                          >
                            On or after 1 April, 2021
                          </th>
                          <td class="px-6 py-4">
                            10% of the sum assured (15% if the insured is a
                            senior citizen)
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </li>
                <li className="mt-4">
                  <strong>Children’s Tuition Fees</strong>
                  <p>
                    <strong>
                      You can claim a deduction for the payment of tuition fees
                      for your children’s education. However, certain conditions
                      need to be met:
                    </strong>
                    <ul className=" list-disc">
                      <li>The deduction is available for 2 children only.</li>
                      <li>It needs to be paid for full-time education only.</li>
                      <li>
                        It should be paid to any university, college, school, or
                        other educational institution in India.
                      </li>
                    </ul>
                  </p>
                  <p>
                    <strong>Document Required: </strong>Receipts from the
                    educational institution specifying the tuition fees paid.
                  </p>
                </li>
                <li className="mt-4">
                  <strong>Principal Repayment of Housing Loan</strong>
                  <p>
                    You can claim a deduction of principal repayment of your
                    housing loan taken for the purchase or construction of a
                    residential house property. This deduction is available for
                    both individuals and HUFs. However, remember that if you
                    sell/transfer such house property before the expiry of 5
                    years from the end of the financial year in which possession
                    was taken, the deduction availed in the earlier years will
                    become taxable.
                  </p>
                  <p>
                    <strong>Document Required: </strong>Loan account statement
                    from the bank or financial institution showing the principal
                    repayment.
                  </p>
                </li>
                <li className="mt-4">
                  <strong>Deferred Annuity Plan</strong>
                  <p>
                    You can claim a deduction for your payment under a Deferred
                    Annuity Plan. This annuity may be in your name, your
                    spouse’s name, or the name of any of your children. To claim
                    a deduction under this annuity plan, there should be no
                    provision for receiving cash in place of an annuity.
                    Moreover, suppose you are a government employee and any sum
                    is deducted from your salary under a deferred annuity plan.
                    In that case, the deduction is restricted to only 1/5th of
                    your salary.
                  </p>
                  <p>
                    <strong>Document Required: </strong>Annuity plan policy
                    document and receipts for premium payments.
                  </p>
                </li>
                <li className="mt-4">
                  <strong>Stamp Duty and Registration Charges Deduction</strong>
                  <p>
                    While purchasing or constructing a new house, you must have
                    paid stamp duty and registration charges. These charges may
                    look small compared to the price of the house, but they do
                    make a dent in one’s pocket. Section 80C allows you to take
                    the deduction regarding these charges as well.
                  </p>
                  <p>
                    <strong>Document Required: </strong>Receipts or documents
                    proving the payment of stamp duty and registration charges
                    for the purchase or construction of the house property.
                  </p>
                </li>
                <li className="mt-4">
                  <strong>Other 80C Options</strong>
                  <p>
                    Section 80C also encompasses various other options for
                    tax-saving investments and deductions:
                  </p>
                  <ul className=" list-disc">
                    <li>Contribution towards approved Superannuation Fund.</li>
                    <li>
                      Subscription to National Bank for Agriculture and Rural
                      Development (NABARD) bonds.
                    </li>
                    <li>
                      Deposit in an account under the Senior Citizen Savings
                      Scheme.
                    </li>
                    <li>
                      Subscription to a notified Public Sector Housing Finance
                      Company deposit scheme or Housing Development Authority of
                      cities, towns, and villages.
                    </li>
                    <li>
                      Subscription to equity shares or debentures of a Public
                      Company or any Public financial institution forming part
                      of an eligible issue of capital approved by the Board
                      where proceeds are utilized for an infrastructure
                      company..
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          {/* table */}
          <h1 className="font-semibold text-2xl mb-2 mt-4">In Summary</h1>
          <div class="mx-2 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="mt-2 w-full text-sm text-left rtl:text-right dark:text-gray-400">
              <thead class="text-2xl uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Investment Option
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Lock-in Period
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Section 80C
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Estimated Interest Rate
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Taxability
                  </th>
                </tr>
              </thead>
              <tbody className="text-xl">
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-semibold whitespace-nowrap dark:text-white"
                  >
                    Public Provident Fund (PPF)
                  </th>
                  <td class="px-6 py-4">15 Years</td>
                  <td class="px-6 py-4">Low</td>
                  <td class="px-6 py-4">7.1%*</td>
                  <td class="px-6 py-4">
                    <strong>Interest:</strong> Exempt <br />
                    <strong>Withdrawl:</strong> Exempt
                  </td>
                </tr>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-semibold whitespace-nowrap dark:text-white"
                  >
                    Sukanya Samriddhi Yojana (SSY)
                  </th>
                  <td class="px-6 py-4">21 Years</td>
                  <td class="px-6 py-4">Low</td>
                  <td class="px-6 py-4">8.4%*</td>
                  <td class="px-6 py-4">
                    <strong>Interest:</strong> Exempt <br />
                    <strong>Withdrawl:</strong> Exempt
                  </td>
                </tr>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-semibold whitespace-nowrap dark:text-white"
                  >
                    Equity Linked Saving Scheme (ELSS)
                  </th>
                  <td class="px-6 py-4">3 Years</td>
                  <td class="px-6 py-4">High</td>
                  <td class="px-6 py-4">12-15%</td>
                  <td class="px-6 py-4">Dividend is exempt</td>
                </tr>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-semibold whitespace-nowrap dark:text-white"
                  >
                    5-Year Tax Saving Fixed Deposit
                  </th>
                  <td class="px-6 py-4">5 Years</td>
                  <td class="px-6 py-4">Low</td>
                  <td class="px-6 py-4">7-8%</td>
                  <td class="px-6 py-4">Interest is taxable</td>
                </tr>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-semibold whitespace-nowrap dark:text-white"
                  >
                    National Saving Certificate (NSC)
                  </th>
                  <td class="px-6 py-4">5 Years</td>
                  <td class="px-6 py-4">Low</td>
                  <td class="px-6 py-4">7.7% *</td>
                  <td class="px-6 py-4">Interest is taxable</td>
                </tr>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-semibold whitespace-nowrap dark:text-white"
                  >
                    Senior Citizen Saving Scheme
                  </th>
                  <td class="px-6 py-4">5 Years</td>
                  <td class="px-6 py-4">Low</td>
                  <td class="px-6 py-4">8.6%*</td>
                  <td class="px-6 py-4">Interest is taxable</td>
                </tr>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-semibold whitespace-nowrap dark:text-white"
                  >
                    Unit Linked Insurance Plan
                  </th>
                  <td class="px-6 py-4">5 Years</td>
                  <td class="px-6 py-4">High</td>
                  <td class="px-6 py-4">8-10%</td>
                  <td class="px-6 py-4">
                    Returns are tax-free, subject to conditions
                  </td>
                </tr>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-semibold whitespace-nowrap dark:text-white"
                  >
                    Children’s Tuition Fees
                  </th>
                  <td class="px-6 py-4">N/A</td>
                  <td class="px-6 py-4">N/A</td>
                  <td class="px-6 py-4">N/A</td>
                  <td class="px-6 py-4">
                    Deductions for 2 children, full-time education, paid to
                    eligible institutions
                  </td>
                </tr>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-semibold whitespace-nowrap dark:text-white"
                  >
                    Principal Repayment of Housing Loan
                  </th>
                  <td class="px-6 py-4">N/A</td>
                  <td class="px-6 py-4">N/A</td>
                  <td class="px-6 py-4">N/A</td>
                  <td class="px-6 py-4">
                    Deduction is available for individuals and HUF
                  </td>
                </tr>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-semibold whitespace-nowrap dark:text-white"
                  >
                    Stamp Duty and Registration Charges Deduction
                  </th>
                  <td class="px-6 py-4">N/A</td>
                  <td class="px-6 py-4">N/A</td>
                  <td class="px-6 py-4">N/A</td>
                  <td class="px-6 py-4">
                    Deduction available for house purchase/construction
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* subject to change */}
          <div className="mt-4">
            <h1 className="font-semibold text-2xl mb-2 mt-4">
              <span className="text-red-500">*</span>Subject to change.
            </h1>
            <p className="text-xl">
              <strong>Note:</strong>The deduction amount under Section 80C
              cannot exceed ₹1,50,000.
            </p>
            <div className="text-xl leading-loose">
              Section 80C provides taxpayers with many options to reduce tax
              liability while promoting long-term savings and financial
              stability. It is essential to carefully assess your financial
              goals, risk tolerance, and investment horizon before choosing the
              most suitable investment options under this section. In
              conclusion, Section 80C of the Income-tax Act is a valuable tool
              for tax planning and wealth creation. By leveraging the various
              investment avenues and deductions it offers, individuals and HUFs
              can significantly reduce their tax burden while securing their
              financial future. However, staying updated with the latest tax
              regulations and consulting a financial advisor for personalized
              guidance on optimizing your tax-saving strategy under Section 80C
              is crucial. For more insights and assistance on tax-related
              matters, consider consulting Calcya, your trusted legal and
              financial partner. Calcya specializes in providing expert advice
              on tax planning, including maximizing deductions under Section 80C
              and other relevant tax provisions. Let Calcya help you navigate
              the complex landscape of taxation, ensuring you achieve your
              financial goals while fully compliant with tax laws.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="lg:-mt-[1620px] -mt-[3320px]">
        <Footer />
      </div> */}
    </div>
  );
};

export default page;
