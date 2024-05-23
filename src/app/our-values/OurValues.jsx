"use client";
import Image from "next/image";
import SectionTitle from "../../components/Common/SectionTitle";
import Card from "../../components/Common/Card";
import LottieAnimation from "../../components/Common/LottieAnimation";
// import Lottie from "react-lottie";
import about from "../asset/about-us.json";
const OurValues = () => {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: about,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  return (
    <section
      id="about"
      className="transform scale-90 w-[111.11%] origin-left pt-16 md:pt-20 -mt-[100px]"
    >
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:flex lg:justify-evenly">
              <div className="mt-[100px]">
                <h2 className=" mx-auto text-center font-serif mb-4 text-3xl font-bold !leading-tight text-black sm:text-4xl md:text-[45px]">
                  Our Values
                </h2>
                <h3 className=" mx-auto text-center font-serif mb-4 text-xl font-bold !leading-tight text-greenNew sm:text-4xl md:text-[30px]">
                  Guiding Principles at Calcya
                </h3>
                <SectionTitle
                  title=""
                  paragraph="Calcya embraces a set of core values that shape our business and define our commitment to excellence, integrity, client-centricity, collaboration, continuous improvement, and community engagement. These values guide our actions and ensure we deliver exceptional client services."
                  center
                />
              </div>

              <div className="mt-9">
                {/* <Lottie
                  options={defaultOptions}
                  height={`80%`}
                  width={`80%`}
                  isClickToPauseDisabled={true}
                /> */}
                <LottieAnimation animationData={about} />
              </div>
            </div>
            {/* cards */}
            <div className="lg:flex lg:justify-center">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* <!-- Row 1 --> */}
                <Card
                  title={"Expertise and Business-Focused Approach"}
                  paragraph="At Calcya, we take pride in our reputation as subject and industry experts. Our team of Partners combines extensive experience with a business-focused approach to deliver high-quality services tailored to our client’s needs. Our expertise lies in developing innovative solutions that address complex challenges across industries and borders."
                />
                <Card
                  title="Integrity and Tailored Compliance Solutions"
                  paragraph="Integrity is the foundation of our work. We combine global best practices and adapt them to meet local compliance needs. Our transparent and efficient execution, combined with a deep understanding of the Indian regulatory landscape, enables us to propose dynamic and business-friendly solutions to our clients."
                />
                <Card
                  title="Client-Centricity and Collaboration"
                  paragraph="Our clients are at the heart of our business. We prioritise their needs and goals by adopting a client-centric approach. Through open communication and collaboration, we develop a comprehensive understanding of their businesses and deliver tailored solutions that exceed expectations. Our work culture fosters collaboration, enabling us to leverage diverse perspectives and expertise for optimal outcomes."
                />
                {/* <!-- Row 2 --> */}
                <Card
                  title="Continuous Improvement and Industry Insights"
                  paragraph="We believe in continuous improvement to stay ahead of industry trends. Our team is dedicated to ongoing professional development, ensuring we offer our clients the latest insights, innovative strategies, and best practices. We break down the complexities of the Indian regulatory landscape, providing clear guidance and prioritising requirements to deliver dynamic and business-friendly solutions."
                />
                <Card
                  title="Community Engagement and Positive Impact"
                  paragraph="Calcya is committed to making a positive impact in the community. We actively engage in initiatives that promote education, youth empowerment, and financial literacy."
                />
                <Card
                  title="Join Us in Embracing Our Values"
                  paragraph="Join Calcya and experience our commitment to excellence, integrity, client-centricity, and continuous improvement. Benefit from our expertise in navigating tax complexities and our tailored compliance solutions. Together, we can achieve your goals and ensure compliance in an ever-changing regulatory landscape."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
