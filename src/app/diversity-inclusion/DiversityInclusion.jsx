"use client";
import SectionTitle from "../../components/Common/SectionTitle";
// import Lottie from "react-lottie";
import LottieAnimation from "../../components/Common/LottieAnimation";
import ourStory from "../asset/our-story.json";
import Card from "../../components/Common/Card";

const DiversityInclusion = () => {
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
      className="pt-16 md:pt-20 lg:pt-28 -mt-[130px] transform scale-75 w-[133.33%] origin-left"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:flex lg:justify-evenly">
            <div className="mt-9">
              <h2 className=" mx-auto text-center font-serif mb-4 text-3xl font-bold !leading-tight text-black sm:text-4xl md:text-[45px]">
                Diversity Inclusion
              </h2>
              <h3 className=" mx-auto text-center font-serif mb-4 text-xl font-bold !leading-tight text-greenNew sm:text-4xl md:text-[30px]">
                Empowering Success Through
              </h3>
              <h3 className=" mx-auto text-center font-serif mb-4 text-xl font-bold !leading-tight text-greenNew sm:text-4xl md:text-[30px]">
                Celebrating Differences
              </h3>
              <SectionTitle
                title=""
                paragraph="At Calcya, we take pride in our people and principles. As an equal opportunity employer, we maintain a zero-tolerance policy for gender biases and religious discrimination. Our commitment to diversity and inclusivity extends across all departments, fostering an environment where individuals can thrive regardless of age, gender, race, special-ability, religious belief, sexual orientation, gender identity, or expression."
                center
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
          {/* cards */}
          <div className="lg:flex lg:justify-center">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
              {/* <!-- Row 1 --> */}
              <Card
                title={"Embracing Diversity and Inclusivity"}
                paragraph="We embrace diversity beyond traditional measures, valuing each individual's unique characteristics, experiences, and perspectives. Our inclusive culture encourages authenticity, enabling everyone at Calcya to contribute their talents and ideas freely. By nurturing a collaborative work environment, we harness the power of diverse perspectives to drive innovation and success."
              />
              <Card
                title="Equal Opportunities for Growth"
                paragraph="We believe in providing equal growth opportunities for all team members. Our merit-based policies ensure that individuals are assessed based on their skills, expertise, and potential, fostering personal and professional development. At Calcya, we foster an environment where talent thrives, and everyone has an equal chance to advance."
              />
              <Card
                title="Zero-Tolerance Policy"
                paragraph="Our zero-tolerance policy ensures a discrimination-free workplace. We prioritise an inclusive culture that respects and values everyone, fostering a safe and supportive environment. Open dialogue and reporting mechanisms are in place to address any concerns, reinforcing our commitment to an environment free from bias or discrimination."
              />
              {/* <!-- Row 2 --> */}
              <Card
                title="Join Our Inclusive Community"
                paragraph="Join our diverse and inclusive community at Calcya. As a client, employee, or partner, you will experience a culture that values individuals from all backgrounds. We celebrate differences and empower success through diversity and inclusion. Together, let us create a more inclusive future."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiversityInclusion;
