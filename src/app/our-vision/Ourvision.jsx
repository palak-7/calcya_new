"use client";
import SectionTitle from "../../components/Common/SectionTitle";
// import Lottie from "react-lottie";
import LottieAnimation from "../../components/Common/LottieAnimation";
import ourStory from "../asset/our-story.json";
import Card from "../../components/Common/Card";

const Ourvision = () => {
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
      className="transform scale-75 w-[133.33%] origin-left pt-16 md:pt-20 lg:pt-28 -mt-[150px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:flex lg:justify-evenly">
            <div className="mt-9">
              <h2 className=" mx-auto text-center font-serif mb-4 text-3xl font-bold !leading-tight text-black sm:text-4xl md:text-[45px]">
                Our Vision
              </h2>
              <h3 className=" mx-auto text-center font-serif mb-4 text-xl font-bold !leading-tight text-greenNew sm:text-4xl md:text-[30px]">
                Empowering for Financial Success
              </h3>
              <SectionTitle
                title=""
                paragraph="Calcya aspires to be the leading Professional Tax Services Business Consultation driven by unwavering ethical standards. Our vision is to deliver exceptional value to our customers, employees, communities, and partners through innovative and high-quality services across all areas of expertise. We are committed to continuous growth, strategic advancements, and exceeding client expectations."
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
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* <!-- Row 1 --> */}
              <Card
                title={"Highly Professional and Personalised Services"}
                paragraph="We focus on providing highly professional and personalised services catering to each client’s unique needs. We continuously enhance our team’s capabilities to stay at the forefront of emerging trends and deliver outstanding service. By prioritising individual attention and customised solutions, we aim to establish enduring partnerships built on trust."
              />
              <Card
                title="Expanding and Diversifying Services"
                paragraph="We remain agile in response to industry developments and expand our service offerings accordingly. Our vision includes diversifying our services to meet the evolving needs of our clients across different segments. By staying proactive and adaptive, we ensure our clients receive comprehensive, up-to-date solutions that drive their success."
              />
              <Card
                title="Value for Money and Trustworthiness"
                paragraph="We recognise the importance of providing value for money in our services. Our vision is rooted in trustworthiness and a commitment to excellence. As a dependable partner, we handle tax and business matters with the utmost professionalism and integrity. Clients rely on our knowledge and expertise, and we strive to deliver beyond their expectations."
              />
              {/* <!-- Row 2 --> */}
              <Card
                title="Strategic Growth, Exceptional Service, and Community Engagement"
                paragraph="Our vision encompasses strategic growth, exceptional service, and active community engagement. We aim to be recognised as a trustworthy tax and business consulting firm in India. We positively impact our client’s success and foster lasting relationships through ongoing innovations and community involvement."
              />
              <Card
                title="Join Us in Realising Our Vision"
                paragraph="Join Calcya on the journey towards seamless tax compliance and business success. Experience our highly professional and personalised services, benefiting from our expertise, integrity, and dedication to excellence. Together, we can achieve your financial goals, thrive in a dynamic business landscape, and establish a lasting legacy."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourvision;
