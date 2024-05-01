"use client";
import React, { useState } from "react";
import SipResult from "./SipResult";
import Pie from "./Pie";
export const metadata = {
  title: "SIP Calculator | Calcya",
  description: "This is a SIP Calculator Page",
  // other metadata
};

const SipCalc = () => {
  const [amountSliderValue, setAmountSliderValue] = useState(25000);
  const [errorAmount, setErrorAmount] = useState(false);

  const [rateSliderValue, setRateSliderValue] = useState(12);
  const [errorRate, setErrorRate] = useState(false);

  const [timeSliderValue, setTimeSliderValue] = useState(10);
  const [errorTime, setErrorTime] = useState(false);

  const handleAmountChange = (event) => {
    if (event.target.value == "") {
      setErrorAmount(true);
      setAmountSliderValue(0);
      return;
    }
    const a = parseInt(event.target.value, 10);
    setAmountSliderValue(a);
    if (a < 500 || a > 1000000) {
      setErrorAmount(true);
    } else {
      setErrorAmount(false);
      setAmountSliderValue(parseInt(event.target.value, 10));
    }
  };
  const handleAmountSlideChange = (event) => {
    setAmountSliderValue(parseInt(event.target.value, 10));
  };

  const handleRateChange = (event) => {
    if (event.target.value == "") {
      setErrorRate(true);
      setRateSliderValue(0);
      return;
    }
    const a = parseInt(event.target.value, 10);
    setRateSliderValue(a);
    if (a < 1 || a > 30) {
      setErrorRate(true);
    } else {
      setErrorRate(false);
      setRateSliderValue(parseInt(event.target.value, 10));
    }
  };
  const handleRateSlideChange = (event) => {
    setRateSliderValue(parseInt(event.target.value, 10));
  };

  const handleTimeChange = (event) => {
    if (event.target.value == "") {
      setErrorTime(true);
      setTimeSliderValue(0);
      return;
    }
    const a = parseInt(event.target.value, 10);
    setTimeSliderValue(a);
    if (a < 1 || a > 40) {
      setErrorTime(true);
    } else {
      setErrorTime(false);
      setTimeSliderValue(parseInt(event.target.value, 10));
    }
  };
  const handleTimeSlideChange = (event) => {
    setTimeSliderValue(parseInt(event.target.value, 10));
  };

  return (
    <div>
      <div className="lg:flex lg:justify-center">
        <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto rounded-lg border-2 px-6 py-10 shadow-three sm:p-[60px]">
                  <h3 className="mb-3 text-center text-2xl font-bold text-black sm:text-3xl">
                    SIP Calculator
                  </h3>
                  <p className="mb-11 text-center text-base font-medium text-body-color">
                    Do Hassle Free SIP calculations
                  </p>
                  <div className="lg:flex md:flex">
                    <div>
                      {/* amount */}
                      <div className="mb-8">
                        <div className="flex justify-between">
                          <p className="mb-3 block text-lg text-dark">
                            Monthly Investment
                          </p>
                          <div className="flex bg-primary bg-opacity-15 pl-2 w-40">
                            <div className="text-primary text-xl font-semibold mr-2 lg:mt-1 mt-5">
                              ₹
                            </div>
                            <input
                              type="text"
                              id="rangeInput"
                              value={amountSliderValue}
                              onChange={handleAmountChange}
                              className="w-1/2 bg-transparent text-primary text-xl font-semibold outline-none"
                            />
                          </div>
                        </div>
                        {errorAmount && (
                          <>
                            <p className="text-red-600">
                              Range should be between 500 and 1000000
                            </p>
                          </>
                        )}

                        <input
                          type="range"
                          name=""
                          id="rangeInput"
                          min={500}
                          max={1000000}
                          step={500}
                          value={amountSliderValue}
                          onChange={handleAmountSlideChange}
                          className="w-full mt-2 bg-transparent"
                        />
                      </div>

                      {/* rate */}
                      <div className="mb-8">
                        <div className="flex justify-between">
                          <p className="mb-3 block text-lg text-dark">
                            Expected Return Rate (p.a.)
                          </p>
                          <div className="flex justify-end items-center bg-primary bg-opacity-15 pl-2 w-40">
                            <input
                              type="text"
                              id="rangeInput"
                              value={rateSliderValue}
                              onChange={handleRateChange}
                              className="w-6 bg-transparent text-primary text-xl font-semibold outline-none mr-1"
                            />
                            <p className="text-primary text-xl font-semibold pr-2">
                              %
                            </p>
                          </div>
                        </div>
                        {errorRate && (
                          <>
                            <p className="text-red-600">
                              Rate should be between 1 and 30
                            </p>
                          </>
                        )}

                        <input
                          type="range"
                          name=""
                          id="rangeInput"
                          min={1}
                          max={30}
                          step={1}
                          value={rateSliderValue}
                          onChange={handleRateSlideChange}
                          className="w-full mt-2 bg-transparent"
                        />
                      </div>
                      {/* time */}
                      <div className="mb-8">
                        <div className="flex justify-between">
                          <p className="mb-3 block text-lg text-dark">
                            Time Period
                          </p>
                          <div className="flex justify-end items-center bg-primary bg-opacity-15 pl-2 w-40">
                            <input
                              type="text"
                              id="rangeInput"
                              value={timeSliderValue}
                              onChange={handleTimeChange}
                              className="w-8 bg-transparent text-primary text-xl font-semibold outline-none mr-1"
                            />
                            <p className="text-primary text-xl font-semibold pr-2">
                              Yr
                            </p>
                          </div>
                        </div>
                        {errorTime && (
                          <>
                            <p className="text-red-600">
                              Time should be between 1 and 40 Years
                            </p>
                          </>
                        )}

                        <input
                          type="range"
                          name=""
                          id="rangeInput"
                          min={1}
                          max={40}
                          step={1}
                          value={timeSliderValue}
                          onChange={handleTimeSlideChange}
                          className="w-full mt-2 bg-transparent"
                        />
                      </div>
                    </div>
                    <Pie
                      amount={
                        amountSliderValue <= 1000000
                          ? amountSliderValue
                          : 1000000
                      }
                      returnRate={rateSliderValue <= 30 ? rateSliderValue : 30}
                      time={timeSliderValue <= 40 ? timeSliderValue : 40}
                    />
                  </div>
                  <div className="flex justify-center">
                    <SipResult
                      amount={
                        amountSliderValue <= 1000000
                          ? amountSliderValue
                          : 1000000
                      }
                      returnRate={rateSliderValue <= 30 ? rateSliderValue : 30}
                      time={timeSliderValue <= 40 ? timeSliderValue : 40}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-0 top-0 z-[-1]">
            <svg
              width="1440"
              height="969"
              viewBox="0 0 1440 969"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_95:1005"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="1440"
                height="969"
              >
                <rect width="1440" height="969" fill="#090E34" />
              </mask>
              <g mask="url(#mask0_95:1005)">
                <path
                  opacity="0.1"
                  d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
                  fill="url(#paint0_linear_95:1005)"
                />
                <path
                  opacity="0.1"
                  d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
                  fill="url(#paint1_linear_95:1005)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_95:1005"
                  x1="1178.4"
                  y1="151.853"
                  x2="780.959"
                  y2="453.581"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#f89b18" />
                  <stop offset="1" stopColor="#f89b18" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_95:1005"
                  x1="160.5"
                  y1="220"
                  x2="1099.45"
                  y2="1192.04"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#f89b18" />
                  <stop offset="1" stopColor="#f89b18" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </section>
      </div>
      <div className="mx-9 text-center transform -mt-[400px] scale-75">
        <h1 className="text-4xl font-semibold text-gray-800 font-serif">
          What is SIP?
        </h1>
        <p className="text-gray-600 text-lg text-justify mt-2">
          Systematic Investment Plan (SIP) is a disciplined and convenient way
          to invest in mutual funds. It offers individuals the opportunity to
          achieve their financial goals systematically. By investing a fixed
          amount at regular intervals, such as monthly or quarterly, SIPs enable
          investors to accumulate wealth over time while minimising the impact
          of market volatility. This approach harnesses the power of compounding
          to accelerate wealth creation.
        </p>

        {/* key features */}
        <h1 className="text-4xl font-semibold text-gray-800 mt-20 font-serif">
          Key Features of SIP
        </h1>
        <div className="lg:flex md:flex">
          <div className="p-3 lg:w-1/2 md:w-1/2">
            <p className="text-gray-600 text-lg text-justify mt-2">
              <span className="font-bold">
                Disciplined and Regular Investing:
              </span>{" "}
              SIP encourages a consistent savings habit, ensuring individuals
              regularly set aside a predetermined amount from their income. This
              eliminates the need for timing the market and helps develop
              financial discipline.
            </p>
            <p className="text-gray-600 text-lg text-justify mt-1">
              <span className="font-bold text-black">
                Rupee Cost Averaging:
              </span>{" "}
              SIPs mitigate the impact of market volatility by averaging the
              purchase price of mutual fund units over time. When markets are
              down, more units are bought, and when up, fewer units are
              purchased, thus smoothing out short-term fluctuations.
            </p>
            <p className="text-gray-600 text-lg text-justify mt-1">
              <span className="font-bold text-black">
                Flexibility and Convenience:
              </span>{" "}
              SIPs offer flexibility regarding investment amounts and time
              periods, making them accessible to various individuals. Investors
              can adjust their SIPs as per their financial situations.
            </p>
            <p className="text-gray-600 text-lg text-justify mt-1">
              <span className="font-bold text-black">
                Power of Compounding:
              </span>{" "}
              SIPs harness the power of compounding, allowing investment returns
              to generate additional earnings over time, significantly enhancing
              overall returns.
            </p>
          </div>
          <div className="p-3 lg:w-1/2 md:w-1/2">
            <p className="text-gray-600 text-lg text-justify mt-2">
              <span className="font-bold text-black">
                Diversification and Professional Management:
              </span>{" "}
              SIP investors gain access to diversified portfolios managed by
              experienced professionals, reducing the risk associated with
              individual stocks.
            </p>
            <p className="text-gray-600 text-lg text-justify mt-1">
              <span className="font-bold text-black">
                Goal-Based Investing:
              </span>{" "}
              SIPs can align with specific financial goals such as buying a
              house, funding education, providing a structured approach to
              investing, and ensuring investors stay focused on their
              objectives.
            </p>
            <p className="text-gray-600 text-lg text-justify mt-1">
              <span className="font-bold text-black">
                Liquidity and Withdrawal Flexibility
              </span>{" "}
              While SIPs are long-term investments, they offer liquidity.
              Investors can redeem their investments partially or fully as per
              their requirements.
            </p>
          </div>
        </div>
        {/* formula */}
        <div className="grid lg:grid-cols-4 md:grid-cols-4 mt-20">
          <div className="border-primary border-4 shadow-xl col-start-2 col-span-2 p-3">
            <h1 className="text-4xl font-semibold text-gray-800 mt-9 font-serif">
              SIP Formula
            </h1>
            <p className="text-gray-600 text-lg text-justify mt-2">
              SIP calculators use the following formula to estimate the future
              value of investments:
            </p>
            <p className="text-lg text-justify mt-2 font-semibold text-black">{`FV = P x {[(1 + r)^n – 1] / r} x (1 + r)`}</p>
            <p className="text-gray-600 text-lg text-justify mt-2 font-semibold">
              Where:
            </p>
            <p className="text-gray-600 text-lg text-justify mt-2 font-semibold">
              <span className="font-bold text-black">FV: </span> Future value of
              investment
            </p>
            <p className="text-gray-600 text-lg text-justify mt-2 font-semibold">
              <span className="font-bold text-black">P: </span> Principal
              contributions each month
            </p>

            <p className="text-gray-600 text-lg text-justify mt-2 font-semibold">
              <span className="font-bold text-black">r: </span> Expected rate of
              return (per month)
            </p>
            <p className="text-gray-600 text-lg text-justify mt-2 font-semibold">
              <span className="font-bold text-black">n: </span> Number of
              contributions towards the principal
            </p>
          </div>
        </div>
        {/* example */}
        <div className="mt-20">
          <h1 className="text-4xl font-semibold text-gray-800 font-serif">
            Example
          </h1>
          <p className="text-gray-600 text-lg text-justify mt-2">
            Suppose you invest ₹1,000 per month for 12 months at a periodic
            interest rate of 12%. The rate of return per month would be 12%/12 =
            1/100 = 0.01. Hence, in one year, you will receive approximately
            ₹12,809.
          </p>
          <p className="text-gray-600 text-lg text-justify mt-2">
            <span className="font-bold text-black">Note:</span> The interest
            rate on mutual funds can change based on market conditions,
            impacting the estimated returns.
          </p>
        </div>
        {/* types of sip */}
        <h1 className="text-4xl font-semibold text-gray-800 mt-20 font-serif">
          Types of SIPs
        </h1>
        <p className="text-gray-600 text-lg text-justify mt-2">
          Understanding these SIP types helps investors align their investments
          with their financial goals, risk appetite, and investment horizon.
        </p>
        <div className="lg:flex md:flex">
          <div className="p-3 lg:w-1/2 md:w-1/2">
            <p className="text-gray-600 text-lg text-justify mt-2">
              <span className="font-bold text-black">Equity SIP:</span> Invests
              primarily in equity or stocks, offering the potential for higher
              returns but subject to market volatility.
            </p>
            <p className="text-gray-600 text-lg text-justify mt-1">
              <span className="font-bold text-black">Debt SIP:</span> Invests in
              fixed-income instruments like government securities and corporate
              bonds, aiming for stable income and lower volatility.
            </p>
            <p className="text-gray-600 text-lg text-justify mt-1">
              <span className="font-bold text-black">Hybrid SIP</span> Invests
              in a combination of equity and debt instruments, providing
              moderate risk exposure.
            </p>
            <p className="text-gray-600 text-lg text-justify mt-1">
              <span className="font-bold text-black">
                ELSS (Equity-Linked Saving Scheme):
              </span>{" "}
              Tax-saving SIPs that invest primarily in equities, offering tax
              benefits under Section 80C of the Income-tax Act.
            </p>
          </div>
          <div className="p-3 lg:w-1/2 md:w-1/2">
            <p className="text-gray-600 text-lg text-justify mt-2">
              <span className="font-bold text-black">Sectoral SIP:</span>
              Focuses on specific sectors such as banking, technology,
              healthcare, and more, allowing investors to capitalise on
              sector-specific growth.
            </p>
            <p className="text-gray-600 text-lg text-justify mt-1">
              <span className="font-bold text-black">Index SIP:</span>
              Replicates a specific market index like Nifty 50 or the Sensex,
              aiming to deliver returns like the tracked index.
            </p>
            <p className="text-gray-600 text-lg text-justify mt-1">
              <span className="font-bold text-black">Gold SIP:</span> Invests in
              gold ETFs or mutual funds, providing a cost-effective way to
              invest in gold.
            </p>
            <p className="text-gray-600 text-lg text-justify mt-1">
              <span className="font-bold text-black">International SIP:</span>{" "}
              Invests in foreign securities, offering global markets and
              currencies exposure.
            </p>
          </div>
        </div>
        <p className="text-gray-600 text-lg text-justify mt-2">
          Understanding these SIP types helps investors align their investments
          with their financial goals, risk appetite, and investment horizon.
        </p>
        {/* Benefits of SIP */}
        <h1 className="text-4xl font-semibold text-gray-800 mt-20 font-serif">
          Benefits of SIP
        </h1>
        <p className="text-gray-600 text-lg text-justify mt-2">
          SIPs offer several benefits, making them a preferred investment avenue
          for countless investors:
        </p>
        <div className="lg:flex md:flex">
          <div className="p-3 lg:w-1/2 md:w-1/2">
            <p className="text-gray-600 text-lg text-justify mt-2">
              <span className="font-bold text-black">
                Disciplined and Regular Investing:
              </span>{" "}
              SIP encourages disciplined investing, helping individuals develop
              a savings habit and consistently set aside a predetermined amount
              from their income. This eliminates the need for timing the market.
            </p>
            <p className="text-gray-600 text-lg text-justify mt-1">
              <span className="font-bold text-black">
                Rupee Cost Averaging:
              </span>{" "}
              SIPs mitigate the impact of market volatility by averaging the
              purchase price of mutual fund units over time. When markets are
              down, more units are bought, and when they are up, fewer units are
              purchased.
            </p>
            <p className="text-gray-600 text-lg text-justify mt-1">
              <span className="font-bold text-black">
                Flexibility and Convenience
              </span>{" "}
              SIPs offer flexibility in investment amounts and time periods,
              making them accessible to various individuals. Investors can
              adjust their SIPs as per their financial situations.
            </p>
            <p className="text-gray-600 text-lg text-justify mt-1">
              <span className="font-bold text-black">
                Power of Compounding:
              </span>{" "}
              SIPs harness the power of compounding, allowing investment returns
              to generate additional earnings over time, significantly enhancing
              overall returns.
            </p>
          </div>
          <div className="p-3 lg:w-1/2 md:w-1/2">
            <p className="text-gray-600 text-lg text-justify mt-2">
              <span className="font-bold text-black">
                Diversification and Professional Management:{" "}
              </span>
              SIP investors gain access to diversified portfolios managed by
              experienced professionals, reducing the risk associated with
              individual stocks.
            </p>
            <p className="text-gray-600 text-lg text-justify mt-1">
              <span className="font-bold text-black">
                Goal-Based Investing:
              </span>
              SIPs can align with specific financial goals such as buying a
              house, funding education, providing a structured approach to
              investing, and ensuring investors stay focused on their
              objectives.
            </p>
            <p className="text-gray-600 text-lg text-justify mt-1">
              <span className="font-bold text-black">
                Liquidity and Withdrawal Flexibility:{" "}
              </span>{" "}
              While SIPs are long-term investments, they offer liquidity.
              Investors can redeem their investments partially or fully as per
              their requirements.
            </p>
          </div>
        </div>
        {/* Tax Implications for SIP */}
        <h1 className="text-4xl font-semibold text-gray-800 font-serif mt-20">
          Tax Implications for SIP
        </h1>
        <p className="text-gray-600 text-lg text-justify mt-2">
          The tax treatment of SIP investments depends on the type of mutual
          fund in which they are invested. Tax implications include Long-Term
          Capital Gains (LTCG) and Short-Term Capital Gains (STCG). ELSS SIPs
          qualify for deductions under Section 80C of the Income-tax Act. At Lex
          Fori, our tax experts make SIP taxation hassle-free. We help you
          navigate the complex world of taxes related to your SIP investments,
          ensuring you get all available tax benefits while entirely compliant
          with the latest tax regulations. With Calcya, you can focus on growing
          your wealth through SIPs, knowing your tax affairs are expertly
          managed.
        </p>
      </div>
    </div>
  );
};

export default SipCalc;
