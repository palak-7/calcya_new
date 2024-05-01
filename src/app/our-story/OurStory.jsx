"use client";
import SectionTitle from "../../components/Common/SectionTitle";
// import Lottie from "react-lottie";
import LottieAnimation from "../../components/Common/LottieAnimation";
import ourStory from "../asset/our-story.json";
import Timeline from "./Timeline";
import SecondTimeline from "./SecondTimeline";
const OurStory = () => {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: ourStory,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  return (
    <section
      id="about"
      className="transform scale-75 w-[133.33%] origin-left pt-16 md:pt-20 lg:pt-28 -mt-[100px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:flex lg:justify-around">
            <div className="mt-9">
              <SectionTitle
                title="Transforming Tax Consultation and Compliance at Calcya"
                paragraph="Calcya embarked on a transformative journey to revolutionise tax consultation and compliance services. With decades of experience serving clients at the highest level, we recognized the need to offer affordable, cutting-edge professional services to a broader audience."
                mb="80px"
              />
            </div>

            <div className="">
              {/* <Lottie
                options={defaultOptions}
                height={`100%`}
                width={`100%`}
                isClickToPauseDisabled={true}
              /> */}
              <LottieAnimation animationData={ourStory} />
            </div>
          </div>
        </div>
      </div>
      <Timeline />
      <SecondTimeline />
    </section>
  );
};

export default OurStory;
