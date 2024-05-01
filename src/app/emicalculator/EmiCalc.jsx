"use client";
import React, { useState } from "react";
import EmiResult from "./EmiResult";
import Pie from "./Pie";
export const metadata = {
  title: "SIP Calculator | Calcya",
  description: "This is a EMI Calculator Page",
  // other metadata
};

const EmiCalc = () => {
  const [amountSliderValue, setAmountSliderValue] = useState(1000000);
  const [errorAmount, setErrorAmount] = useState(false);

  const [rateSliderValue, setRateSliderValue] = useState(6.5);
  const [errorRate, setErrorRate] = useState(false);

  const [timeSliderValue, setTimeSliderValue] = useState(5);
  const [errorTime, setErrorTime] = useState(false);

  const handleAmountChange = (event) => {
    if (event.target.value == "") {
      setErrorAmount(true);
      setAmountSliderValue(0);
      return;
    }
    const a = parseInt(event.target.value, 10);
    setAmountSliderValue(a);
    if (a < 100000 || a > 10000000) {
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
    if (a < 1 || a > 30) {
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
                    EMI Calculator
                  </h3>
                  <p className="mb-11 text-center text-base font-medium text-body-color">
                    Do Hassle Free EMI calculations
                  </p>
                  <div className="lg:flex md:flex">
                    <div>
                      {/* amount */}
                      <div className="mb-8">
                        <div className="flex justify-between">
                          <p className="mb-3 block text-lg text-dark">
                            Loan Amount
                          </p>
                          <div className="flex bg-primary bg-opacity-15 pl-2 w-40">
                            <p className="text-primary text-xl font-semibold mr-2 mt-1">
                              ₹
                            </p>
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
                          min={100000}
                          max={10000000}
                          step={50000}
                          value={amountSliderValue}
                          onChange={handleAmountSlideChange}
                          className="w-full mt-2 bg-transparent"
                        />
                      </div>

                      {/* rate */}
                      <div className="mb-8">
                        <div className="flex justify-between">
                          <p className="mb-3 block text-lg text-dark">
                            Rate of Interest (p.a.)
                          </p>
                          <div className="flex justify-end items-center bg-primary bg-opacity-15 pl-2 w-40">
                            <input
                              type="text"
                              id="rangeInput"
                              value={rateSliderValue}
                              onChange={handleRateChange}
                              className=" w-8 bg-transparent text-primary text-xl font-semibold outline-none mr-1"
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
                            Loan Tenure
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
                          max={30}
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
                    <EmiResult
                      amount={
                        amountSliderValue <= 10000000
                          ? amountSliderValue
                          : 10000000
                      }
                      returnRate={rateSliderValue <= 30 ? rateSliderValue : 30}
                      time={timeSliderValue <= 30 ? timeSliderValue : 30}
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
      <div className="mx-9 transform -mt-[250px] scale-75 text-center">
        <h1 className="text-4xl font-semibold text-gray-800 font-serif">
          What is EMI?
        </h1>
        <p className="text-gray-600 text-lg text-justify mt-2">
          EMI, or Equated Monthly Instalment, is a fixed monthly payment to a
          financial institution when borrowing money. It comprises two
          components: one for interest repayment and one for principal
          repayment. In the initial years of a loan, a significant portion of
          the EMI goes toward interest. This proportion gradually decreases with
          each payment. The interest amount depends on the interest rate, while
          the principal repayment reduces the outstanding loan amount. EMI
          remains constant throughout the loan tenure.
        </p>
        <h1 className="text-4xl font-semibold text-gray-800 font-serif mt-20">
          What is EMI Calculator?
        </h1>
        <p className="text-gray-600 text-lg text-justify mt-2">
          An EMI calculator is a convenient online financial tool for estimating
          the monthly EMI for a loan. It simplifies determining the monthly
          commitment required to repay a loan over its duration.
          <br /> To calculate EMI, input the loan amount, interest rate, and
          loan term into the EMI calculator. It computes your monthly
          instalment, total repayment amount, and interest paid during the loan
          tenure.
          <br /> This tool is helpful for various loan types, including consumer
          durable loans, home loans, auto loans, personal loans, and student
          loans.
        </p>

        {/* formula */}
        <div className="grid lg:grid-cols-4 md:grid-cols-4 mt-20">
          <div className="border-primary border-4 shadow-xl col-start-2 col-span-2 p-3">
            <h1 className="text-4xl font-semibold text-gray-800 mt-9 font-serif">
              EMI Formula
            </h1>
            <p className="text-gray-600 text-lg text-justify mt-2">
              The EMI formula is as follows:
            </p>
            <p className="text-lg text-justify mt-2 font-semibold text-black">{`EMI = P x R x (1+R)^N / [(1+R) ^ (N-1)]`}</p>
            <p className="text-gray-600 text-lg text-justify mt-2 font-semibold">
              Where:
            </p>
            <p className="text-gray-600 text-lg text-justify mt-2 font-semibold">
              <span className="font-bold text-black">P: </span> Principal amount
              borrowed
            </p>
            <p className="text-gray-600 text-lg text-justify mt-2 font-semibold">
              <span className="font-bold text-black">R: </span> Monthly interest
              rate (e.g., if the annual interest rate is 10%, the monthly
              interest is 10% / 12 or 0.8333%).
            </p>

            <p className="text-gray-600 text-lg text-justify mt-2 font-semibold">
              <span className="font-bold text-black">N: </span> Loan period in
              months.
            </p>
          </div>
        </div>
        {/* example */}
        <div className="mt-20">
          <h1 className="text-4xl font-semibold text-gray-800 font-serif">
            Example
          </h1>
          <p className="text-gray-600 text-lg text-justify mt-2">
            Borrowing ₹1,00,000 at a 10% annual interest rate for 12 months:
          </p>
          <p className="text-gray-600 text-lg text-justify mt-2">
            <span className="text-black font-bold">P:</span> ₹1,00,000
          </p>
          <p className="text-gray-600 text-lg text-justify mt-2">
            <span className="text-black font-bold">R:</span> 0.8333% (10% / 12)
          </p>
          <p className="text-gray-600 text-lg text-justify mt-2">
            <span className="text-black font-bold">N:</span> 12
          </p>
          <p className="text-gray-600 text-lg text-justify mt-2">
            <span className="text-black font-bold">EMI Calculation:</span>{" "}
            {`[1,00,000 x 0.008333 x (1+0.008333)^12] / [(1+0.008333) ^ (12-1)]`}
          </p>
          <p className="text-gray-600 text-lg text-justify mt-2">
            <span className="font-bold text-black"> Result: </span>Monthly EMI
            of approximately ₹8,792.49, with a total payment of around
            ₹1,05,509.88 over 12 months and interest of about ₹5,509.88.
          </p>
        </div>
        {/* How an EMI Calculator Can Help You */}
        <h1 className="text-4xl font-semibold text-gray-800 mt-20 font-serif">
          How an EMI Calculator Can Help You
        </h1>
        <p className="text-gray-600 text-lg text-justify mt-2">
          <p className="text-gray-600 text-lg text-justify mt-2">
            An EMI calculator has several applications:
          </p>
        </p>
        <div className="lg:flex md:flex">
          <div className="p-3 lg:w-1/2 md:w-1/2">
            <p className="text-gray-600 text-lg text-justify mt-2">
              <span className="font-bold text-black">Budgeting: </span> Plan
              your budget by knowing the exact monthly payment for a loan,
              enabling effective expense management.
            </p>
            <p className="text-gray-600 text-lg text-justify mt-1">
              <span className="font-bold text-black">Comparing Loans: </span>{" "}
              Compare EMI amounts for loans with different interest rates to
              choose the right loan for your financial situation.
            </p>
          </div>
          <div className="p-3 lg:w-1/2 md:w-1/2">
            <p className="text-gray-600 text-lg text-justify mt-2">
              <span className="font-bold text-black">
                Interest Rate Impact:
              </span>
              See how interest rates affect monthly payments to decide on loan
              size and term.
            </p>
            <p className="text-gray-600 text-lg text-justify mt-1">
              <span className="font-bold text-black">Tenure Options:</span>
              Experiment with various loan tenures to select a repayment
              strategy aligned with your financial goals.
            </p>
          </div>
        </div>
        <p className="text-gray-600 text-lg text-justify mt-2">
          Calcya EMI Calculator assists in financial management,
          decision-making, and budget planning, enabling informed choices
          regarding loans and their financial impact.
        </p>
      </div>
    </div>
  );
};

export default EmiCalc;
