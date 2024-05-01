"use client";

import React from "react";
import Lottie from "react-lottie";
import emi from "../../app/asset/emi.json";
import glossary from "../../app/asset/glosary.json";
import insights from "../../app/asset/insights.json";
import Link from "next/link";
export const metadata = {
  title: "Resources Page | Calcya",
  description: "This is Resources Page Calcya",
  // other metadata
};
const Resources = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: emi,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: glossary,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: insights,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="mt-[40px] transform scale-75 w-[133.33%] origin-left">
      <section id="features" className="lg:-mt-30 md:pb-20 lg:px-3">
        <h2 className=" mx-auto text-center font-serif mb-4 text-3xl font-bold !leading-tight text-black sm:text-4xl md:text-[45px]">
          Resources
        </h2>
        <p className="text-xl my-9 mx-16 text-justify font-serif">
          Welcome to Calcya, your one-stop source for valuable tools and
          insights to enhance your understanding of taxation, dispute
          resolution, and related topics. Our mission is to empower you with
          knowledge and resources that enable informed decisions in the
          ever-evolving domains of law and finance.
        </p>
        {/* cards */}
        <div className="mx-16">
          <div className="grid gap-x-2 gap-y-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-1">
            {/* financial tools */}
            <Link href="/resources/financial-tools">
              <div className="border-primary border-4 transform transition duration-300 hover:scale-105 hover:shadow-xl shadow-md ml-2 mr-2 rounded-lg p-4">
                <div className="wow fadeInUp" data-wow-delay=".15s">
                  <h3 className="font-semibold text-black text-2xl mx-auto text-center mb-3">
                    Financial Tools
                  </h3>
                  <Lottie
                    options={defaultOptions}
                    height={`140px`}
                    width={`140px`}
                    isClickToPauseDisabled={true}
                  />
                </div>
              </div>
            </Link>
            {/* glossary */}
            <Link href="/resources/glossary">
              <div className="border-primary border-4 transform transition duration-300 hover:scale-105 hover:shadow-xl shadow-md ml-2 mr-2 rounded-lg p-4">
                <div className="wow fadeInUp" data-wow-delay=".15s">
                  <h3 className="font-semibold text-black text-2xl mx-auto text-center mb-3">
                    Glossary
                  </h3>
                  <Lottie
                    options={defaultOptions2}
                    height={`140px`}
                    width={`140px`}
                    isClickToPauseDisabled={true}
                  />
                </div>
              </div>
            </Link>
            {/* insights */}
            <Link href="/resources/insights">
              <div className="border-primary border-4 transform transition duration-300 hover:scale-105 hover:shadow-xl shadow-md ml-2 mr-2 rounded-lg p-4">
                <div className="wow fadeInUp" data-wow-delay=".15s">
                  <h3 className="font-semibold text-black text-2xl mx-auto text-center mb-3">
                    Insights
                  </h3>
                  <Lottie
                    options={defaultOptions3}
                    height={`140px`}
                    width={`140px`}
                    isClickToPauseDisabled={true}
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <p className="text-xl my-9 mx-16 text-justify font-serif">
          We are committed to simplifying complex legal matters, offering
          practical guidance, and assisting you in making well-informed choices.
          Explore our toolkit, stay informed, and deepen your understanding of
          the financial and legal landscape. Keep revisiting this space as we
          continuously update our resources with fresh content and tools,
          ensuring you stay at the forefront of these dynamic fields. Calcya is
          your trusted partner on the journey towards financial clarity and
          effective conflict resolution.
        </p>
        <div className="border-2 border-primary shadow-three p-4 rounded-lg mx-16">
          <h2 className=" mx-auto text-center font-serif mb-4 text-3xl font-bold !leading-tight text-black sm:text-4xl md:text-[45px]">
            Have Suggestions?
          </h2>
          <p className="text-xl my-9 lg:mx-16 text-justify font-serif">
            Your input is invaluable to us. If you have suggestions for
            additional resources or tools you would like to see here, please do
            not hesitate to get in touch. We value your feedback and aim to
            provide the resources that matter most to you.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Resources;
