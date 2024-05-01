"use client";
import React, { useRef, useEffect } from "react";
import SectionTitle from "../../../components/Common/SectionTitle";
import LottieAnimation from "../../../components/Common/LottieAnimation";
// import lottie from "lottie-web";
// import Lottie from "react-lottie";
import school from "../../asset/school.json";
export const metadata = {
  title: "School Chapters Page | Calcya",
  description: "This is School Chapters Page Calcya",
  // other metadata
};

const SchoolChapters = () => {
  // const container = useRef(null);

  // useEffect(() => {
  //   const anim = lottie.loadAnimation({
  //     container: container.current,
  //     renderer: "svg",
  //     loop: true,
  //     autoplay: true,
  //     animationData: school,
  //   });

  //   return () => anim.destroy(); // Cleanup animation on component unmount
  // }, []);
  return (
    <div className="transform scale-75 w-[133.33%] origin-left -mt-[50px]">
      <section id="features" className="lg:-mt-30 md:pb-20 lg:px-3">
        <h2 className=" mx-auto text-center font-serif mb-4 text-3xl font-bold !leading-tight text-black sm:text-4xl md:text-[45px]">
          Calcya School Chapters
        </h2>
        <div className="mx-3 lg:flex lg:justify-center">
          <div className="">
            <h3 className=" mx-auto text-center font-serif mb-4 text-2xl font-bold !leading-tight text-greenNew sm:text-4xl md:text-[30px]">
              Engaging School Students in Legal Exploration
            </h3>
            <SectionTitle
              title=""
              paragraph="Welcome to Calcya School Chapters, where we offer exciting events and activities for students to explore the world of law. Join our community and participate in interactive programs that foster critical thinking, teamwork, and legal knowledge. Discover the fascinating realm of law while connecting with like-minded students and legal professionals."
              center
            />
            <h3 className=" mx-auto text-center font-serif mb-4 text-2xl font-bold !leading-tight text-greenNew sm:text-4xl md:text-[30px]">
              About School Chapters
            </h3>
            <SectionTitle
              title=""
              paragraph="Calcya School Chapters program aims to inspire young minds by providing unique opportunities for school students to delve into the field of law. Through engaging events and competitions, we empower students to develop essential skills and gain insights into the legal profession. Join us on this educational journey that combines learning with enjoyment!"
              center
            />
          </div>
          {/* <Lottie
            options={defaultOptions}
            height={`500px`}
            width={`500px`}
            isClickToPauseDisabled={true}
          /> */}
          {/* <div ref={container} className="h-[500px] w-[500px]" /> */}
          <div className="h-[500px] w-[500px]">
            <LottieAnimation animationData={school} />
          </div>
        </div>
        {/* cards */}
        <div className="mx-3">
          <h3 className=" mx-auto text-center font-serif mb-4 text-2xl font-bold !leading-tight text-greenNew sm:text-4xl md:text-[30px]">
            Competitions and Activities
          </h3>
          <div className="grid grid-cols-1 gap-x-2 gap-y-4 md:grid-cols-3 lg:grid-cols-3">
            <div className="border-primary border-4 transform transition duration-300 hover:scale-105 hover:shadow-xl shadow-md ml-2 mr-2 rounded-lg p-4">
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <h3 className="font-semibold text-black text-2xl mx-auto text-center mb-3">
                  Negotiation Challenge
                </h3>
                <p className="text-xl">
                  Participate in our thrilling negotiation competition
                  exclusively designed for school students. Explore the art of
                  negotiation, enhance persuasive communication skills, and
                  tackle real-life scenarios. Develop problem-solving abilities
                  while honing valuable negotiation techniques.
                </p>
              </div>
            </div>
            <div className="border-primary border-4 transform transition duration-300 hover:scale-105 hover:shadow-xl shadow-md ml-2 mr-2 rounded-lg p-4">
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <h3 className="font-semibold text-black text-2xl mx-auto text-center mb-3">
                  Legal Writing Challenge
                </h3>
                <p className="text-xl">
                  Sharpen writing skills and express thoughts on legal topics
                  through our legal essay competition. Explore current legal
                  issues, present well-researched arguments, and demonstrate
                  analytical prowess. Develop critical thinking and effective
                  communication skills.
                </p>
              </div>
            </div>
            <div className="border-primary border-4 transform transition duration-300 hover:scale-105 hover:shadow-xl shadow-md ml-2 mr-2 rounded-lg p-4">
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <h3 className="font-semibold text-black text-2xl mx-auto text-center mb-3">
                  Workshops and Legal Awareness Sessions
                </h3>
                <p className="text-xl">
                  Workshops and Legal Awareness SessionsExpand your legal
                  knowledge through our interactive workshops and legal
                  awareness sessions. Learn about fundamental legal principles,
                  constitutional rights, and the significance of law in society.
                  Engage in stimulating discussions and gain valuable insights
                  from legal experts.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="mt-6 mx-auto text-center font-serif mb-4 text-2xl font-bold !leading-tight text-greenNew sm:text-4xl md:text-[30px]">
            Community and Collaboration
          </h3>
          <p className="text-center text-xl">
            At Calcya, we foster a sense of community and collaboration among
            school students. Engage in teamwork, develop leadership skills, and
            build lasting connections with peers passionate about law and
            justice.
          </p>
          <h3 className="mt-6 mx-auto text-center font-serif mb-4 text-2xl font-bold !leading-tight text-greenNew sm:text-4xl md:text-[30px]">
            Join Our School Chapters
          </h3>
          <p className="text-center text-xl">
            Be part of the Calcya School Chapters program and embark on an
            exciting journey of legal exploration and personal growth. Stay
            informed about upcoming events and competitions by subscribing to
            our mailing list. Expand horizons, unleash potential, and ignite a
            passion for the law.
          </p>
          <div className="border-2 border-primary p-3 shadow-xl m-9">
            <h3 className="mt-6 mx-auto text-center font-serif mb-4 text-2xl font-bold !leading-tight text-greenNew sm:text-4xl md:text-[30px]">
              Get Involved
            </h3>
            <p className="text-center text-xl">
              If you are a school student interested in organising events,
              contributing ideas, or participating in our School Chapters
              program, we welcome your active involvement. Contact us to explore
              how you can positively impact, inspire peers, and contribute to
              the legal community.
            </p>
          </div>
          <h3 className="mt-6 mx-auto text-center font-serif mb-4 text-2xl font-bold !leading-tight text-greenNew sm:text-4xl md:text-[30px]">
            Be Inspired by Calcya School Chapters
          </h3>
          <p className="text-center text-xl">
            Join the Calcya School Chapters program and unlock a world of legal
            knowledge, skill development, and personal growth. Discover
            possibilities, connect with fellow students, and embark on a
            rewarding journey into the realm of law.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SchoolChapters;
