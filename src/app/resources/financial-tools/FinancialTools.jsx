"use client";
import Link from "next/link";
// import Lottie from "react-lottie";
import LottieAnimation from "../../../components/Common/LottieAnimation";
import emi from "../../asset/emi.json";
import sip from "../../asset/sip.json";
import SectionTitle from "../../../components/Common/SectionTitle";

const FinancialTools = () => {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: sip,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  // const defaultOptions2 = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: emi,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  return (
    <section id="about" className="mt-[200px]">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <SectionTitle title={"Financial Tools"} paragraph={""} center />
            <div className="grid grid-cols-1 gap-x-2 gap-y-4 md:grid-cols-2 lg:grid-cols-2">
              <Link
                href="/sipcalculator"
                className="hover: cursor-pointer hover:border-primary hover:border-4 transform transition duration-300 hover:scale-105 shadow-xl border-gray-300 border-2 ml-2 mr-2 rounded-lg p-9"
              >
                <div className="wow fadeInUp" data-wow-delay=".15s">
                  <h3 className="font-semibold text-black text-lg">
                    SIP Calculator
                  </h3>
                  <p>
                    Calculate how much you need to save or how much you will
                    accumulate with your SIP
                  </p>
                  <div className="float-end w-[100px] h-[100px]">
                    {/* <Lottie
                      options={defaultOptions}
                      height={`100px`}
                      width={`100px`}
                      isClickToPauseDisabled={true}
                    /> */}
                    <LottieAnimation animationData={sip} />
                  </div>
                </div>
              </Link>
              <Link
                href="/emicalculator"
                className="hover: cursor-pointer hover:border-primary hover:border-4 transform transition duration-300 hover:scale-105 shadow-xl border-gray-300 border-2 ml-2 mr-2 rounded-lg p-9"
              >
                <div className="wow fadeInUp" data-wow-delay=".15s">
                  <h3 className="font-semibold text-black text-lg">
                    EMI Calculator
                  </h3>
                  <p>
                    Calculate EMI on your loans - home loan, car loan or
                    personal loans.
                  </p>
                  <div className="float-end w-[100px] h-[100px]">
                    {/* <Lottie
                      options={defaultOptions2}
                      height={`100px`}
                      width={`100px`}
                      isClickToPauseDisabled={true}
                    /> */}
                    <LottieAnimation animationData={emi} />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialTools;
