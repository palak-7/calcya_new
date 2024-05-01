"use client";
import Link from "next/link";
// import Lottie from "react-lottie";
import LottieAnimation from "../../../components/Common/LottieAnimation";
import emi from "../../../app/asset/emi.json";
import dispute from "../../../app/asset/dispute.json";
import SectionTitle from "../../../components/Common/SectionTitle";

const Glossary = () => {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: dispute,
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
          <SectionTitle title={"Glossary"} paragraph={""} center />
          <div className="grid grid-cols-1 gap-x-2 gap-y-4 md:grid-cols-2 lg:grid-cols-2">
            <Link
              href="/resources/glossary/finance"
              className="hover: cursor-pointer hover:border-primary hover:border-4 transform transition duration-300 hover:scale-105 shadow-xl border-gray-300 border-2 ml-2 mr-2 rounded-lg p-9"
            >
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <h3 className="font-semibold text-black text-lg">
                  Finance Glossary
                </h3>

                <div className="float-end">
                  {/* <Lottie
                    options={defaultOptions2}
                    height={`200px`}
                    width={`200px`}
                    isClickToPauseDisabled={true}
                  /> */}
                  <LottieAnimation animationData={emi} />
                </div>
              </div>
            </Link>
            <Link
              href="/resources/glossary/alternative-dispute-resolution"
              className="hover: cursor-pointer hover:border-primary hover:border-4 transform transition duration-300 hover:scale-105 shadow-xl border-gray-300 border-2 ml-2 mr-2 rounded-lg p-9"
            >
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <h3 className="font-semibold text-black text-lg">
                  Alternative Dispute Resolution Glossary
                </h3>

                <div className="float-end">
                  {/* <Lottie
                    options={defaultOptions}
                    height={`200px`}
                    width={`200px`}
                    isClickToPauseDisabled={true}
                  /> */}
                  <LottieAnimation animationData={dispute} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Glossary;
