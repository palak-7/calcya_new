"use client";

import Link from "next/link";
// import Lottie from "react-lottie";
import LottieAnimation from "../../components/Common/LottieAnimation";
import HeroBanner from "../../app/asset/HeroBanner.json";
import HeroBanner2 from "../../app/asset/HeroBanner2.json";
const Hero = () => {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: HeroBanner,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  // const defaultOptions2 = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: HeroBanner2,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  return (
    <>
      <section
        id="home"
        className="origin-left relative z-10 overflow-hidden bg-white pt-[70px] md:pt-[70px]"
      >
        <div className="container lg:flex justify-center transfrom scale-75 w-[133.33%] mt-[100px]">
          <div className="w-full lg:-mt-[180px] relative sm:w-auto">
            {/* <Lottie
              options={defaultOptions}
              height={`100%`}
              width={`100%`}
              isClickToPauseDisabled={true}
            /> */}
            <LottieAnimation animationData={HeroBanner} />
          </div>

          <div className="relative -mt-[200px] lg:-mt-[70px]">
            <div className="absolute inset-0 z-0 w-[440px] h-[440px]">
              {/* <Lottie
                options={defaultOptions2}
                height={400}
                width={400}
                isClickToPauseDisabled={true}
              /> */}
              <LottieAnimation animationData={HeroBanner2} />
            </div>
            <div className="w-full px-4 py-9 relative bg-opacity-80 bg-white">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="font-serif mb-5 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Innovate Solution For Business Success
                </h1>
                <p className="mb-12 text-md font-semibold !leading-relaxed text-justify text-black sm:text-lg md:text-xl">
                  Monotonectally implement integrated commerce and distributed
                  is conveniently unleash B2B customer service via long
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="tel:011 41325151"
                    className="bg-primary px-6 py-3 shadow-three font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 rounded-3xl text-xl"
                  >
                    Call Us
                  </Link>
                  <Link
                    href="#"
                    className="inline-block bg-primary px-6 py-3 text-xl rounded-3xl font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
