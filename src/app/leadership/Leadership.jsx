"use client";
import SectionTitle from "../../components/Common/SectionTitle";
import Lottie from "react-lottie";
import ourStory from "../asset/our-story.json";
import Card from "../../components/Common/Card";
import Timeline from "./Timeline";
const Leadership = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ourStory,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section
      id="about"
      className="transform scale-75 w-[133.33%] origin-left pt-16 md:pt-20 lg:pt-28 -mt-[130px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:flex lg:justify-evenly">
            <div className="mt-9">
              <h2 className=" mx-auto text-center font-serif mb-4 text-3xl font-bold !leading-tight text-black sm:text-4xl md:text-[45px]">
                Leadership
              </h2>
              <h3 className=" mx-auto text-center font-serif mb-4 text-xl font-bold !leading-tight text-greenNew sm:text-4xl md:text-[30px]">
                Guiding Your Path to Financial Success
              </h3>
              <SectionTitle
                title=""
                paragraph="At Calcya, our leadership team comprises experienced professionals with extensive tax consulting, legal advisory, and business strategy expertise. With a client-centric approach, they provide exceptional guidance, strategic direction, and industry insights to ensure our clients receive top-quality service and support."
                center
              />
            </div>

            <div className="">
              <Lottie
                options={defaultOptions}
                height={`100%`}
                width={`100%`}
                isClickToPauseDisabled={true}
              />
            </div>
          </div>
          <ol className="-mt-9 mx-4 border-l border-greenNew md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t">
            <Timeline
              title="Experienced Professionals Driving Success"
              content="Our leadership team comprises accomplished experts at the forefront of regulatory changes and industry trends. Their deep knowledge allows them to deliver tailored solutions that meet our client’s unique needs. Their expertise enables clients to stay ahead in an ever-evolving business landscape."
            />
            <Timeline
              title="Client-Centric Approach"
              content="We prioritise our clients’ success in every decision we make. Our leaders adopt a client-centric approach, building trust and open communication. By developing strong relationships, they provide personalised solutions that drive financial growth and address specific challenges."
            />
            <Timeline
              title="Strategic Direction, Innovation, and Operational Flexibility"
              content="Our leaders provide strategic direction and innovative solutions to navigate complex tax and business environments. They analyse market trends, anticipate challenges, and leverage operational flexibility. We deliver exceptional results that surpass expectations by fostering cultural norms that promote cohesion."
            />
          </ol>
          <ol className="mt-4 mx-4 border-l border-greenNew md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t">
            <Timeline
              title="Exceptional Service, Professionalism, and Employee Engagement"
              content="We maintain the highest standards of professionalism and service excellence. Our leadership team sets the tone, ensuring integrity, reliability, and responsiveness in client interactions. They foster a dynamic work environment, empowering employees to deliver outstanding performance."
            />
            <Timeline
              title="Collaborative and Supportive Environment"
              content="Our leaders promote a collaborative and supportive culture within our organisation. They encourage teamwork, knowledge sharing, and continuous learning. By harnessing collective expertise, we provide comprehensive solutions that drive client success."
            />
            <Timeline
              title="Join Us for Financial Success"
              content="Choose Calcya for a leadership team dedicated to your success. Our experienced professionals guide you through tax complexities, compliance, and business strategy. Join us on the path to financial success and experience the transformative power of our leadership."
            />
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
