"use client";

import SectionTitle from "../../../components/Common/SectionTitle";
// import Lottie from "react-lottie";
import LottieAnimation from "../../../components/Common/LottieAnimation";
import university from "../../../app/asset/university.json";
export const metadata = {
  title: "UniversityChapters Page | Calcya",
  description: "This is UniversityChapters Page Calcya",
  // other metadata
};

const UniversityChapters = () => {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: university,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  return (
    <div className="transform scale-75 w-[133.33%] origin-left -mt-[120px]">
      <section id="features" className="lg:-mt-30 md:pb-20 lg:px-3">
        <h2 className=" mx-auto text-center font-serif mb-4 text-3xl font-bold !leading-tight text-black sm:text-4xl md:text-[45px]">
          Calcya University Chapters
        </h2>
        <div className="mx-3 lg:flex">
          <div className="">
            <h3 className=" mx-auto text-center font-serif mb-4 text-xl font-bold !leading-tight text-greenNew sm:text-4xl md:text-[30px]">
              College Events
            </h3>
            <SectionTitle
              title=""
              paragraph="Welcome to the Calcya University Chapters, where we offer a range of enriching events exclusively designed for college students. Join our vibrant community and engage in activities that foster skill development, networking, and knowledge sharing. Explore the world of law and alternative dispute resolution while connecting with like-minded peers and legal professionals."
              center
            />
            <h3 className=" mx-auto text-center font-serif mb-4 text-xl font-bold !leading-tight text-greenNew sm:text-4xl md:text-[30px]">
              About Calcya University Chapters
            </h3>
            <SectionTitle
              title=""
              paragraph="Calcya University Chapters program aims to provide a platform for college students to enhance their understanding of the law and develop essential skills for future careers. Through a series of events, workshops, and competitions, we empower students to excel in law and alternative dispute resolution."
              center
            />
          </div>
          {/* <Lottie
            options={defaultOptions}
            height={`500px`}
            width={`500px`}
            isClickToPauseDisabled={true}
          /> */}
          <LottieAnimation animationData={university} />
        </div>
        {/* cards */}
        <div className="mx-3">
          <h3 className=" mx-auto text-center font-serif mb-4 text-xl font-bold !leading-tight text-greenNew sm:text-4xl md:text-[30px]">
            Competitions and Activities
          </h3>
          <div className="grid grid-cols-1 gap-x-2 gap-y-4 md:grid-cols-2 lg:grid-cols-2">
            <div className="border-primary border-4 transform transition duration-300 hover:scale-105 hover:shadow-xl shadow-md ml-2 mr-2 rounded-lg p-4">
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <h3 className="font-semibold text-black text-lg mx-auto text-center mb-3">
                  Negotiation Challenge
                </h3>
                <p>
                  Test your negotiation skills in our annual competition,
                  simulating negotiation scenarios across various legal domains.
                  Showcase your ability to find mutually beneficial solutions.
                </p>
              </div>
            </div>
            <div className="border-primary border-4 transform transition duration-300 hover:scale-105 hover:shadow-xl shadow-md ml-2 mr-2 rounded-lg p-4">
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <h3 className="font-semibold text-black text-lg mx-auto text-center mb-3">
                  Mediation Marathon
                </h3>
                <p>
                  Participate in our team-based competition, immersing yourself
                  in real-life mediation simulations. Develop mediation
                  techniques, effective communication strategies, and
                  conflict-resolution skills.
                </p>
              </div>
            </div>
            <div className="border-primary border-4 transform transition duration-300 hover:scale-105 hover:shadow-xl shadow-md ml-2 mr-2 rounded-lg p-4">
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <h3 className="font-semibold text-black text-lg mx-auto text-center mb-3">
                  Client Counselling Showcase
                </h3>
                <p>
                  Demonstrate your client counselling abilities in our showcase
                  event. Work with fictional clients, analyse legal issues and
                  provide practical advice and guidance. Showcase your empathy,
                  communication, and legal problem-solving skills.
                </p>
              </div>
            </div>
            <div className="border-primary border-4 transform transition duration-300 hover:scale-105 hover:shadow-xl shadow-md ml-2 mr-2 rounded-lg p-4">
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <h3 className="font-semibold text-black text-lg mx-auto text-center mb-3">
                  Arbitration Moot Court
                </h3>
                <p>
                  Experience the world of arbitration in our moot court. Engage
                  in complex arbitration cases, prepare persuasive arguments,
                  and advocate for your client&apos;s interests before
                  experienced arbitrators.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="mt-6 mx-auto text-center font-serif mb-4 text-xl font-bold !leading-tight text-greenNew sm:text-4xl md:text-[30px]">
            Workshops and Seminars
          </h3>
          <p className="text-center">
            Calcya University Chapters program includes interactive workshops
            and seminars by experienced legal professionals. Explore topics such
            as legal research, effective advocacy, negotiation strategies, and
            the role of alternative dispute resolution in modern legal practice.
            Gain valuable insights from industry experts and expand your
            understanding of the legal profession.
          </p>
          <h3 className="mt-6 mx-auto text-center font-serif mb-4 text-xl font-bold !leading-tight text-greenNew sm:text-4xl md:text-[30px]">
            Networking and Career Opportunities
          </h3>
          <p className="text-center">
            Through Calcya University Chapters, you will have the chance to
            connect with legal professionals, industry leaders, and fellow
            students who share your passion for law. Expand your professional
            network, discover career pathways, and explore internship and
            employment opportunities with our partner organisations.
          </p>
          <div className="border-2 border-primary p-3 shadow-xl m-9">
            <h3 className="mt-6 mx-auto text-center font-serif mb-4 text-xl font-bold !leading-tight text-greenNew sm:text-4xl md:text-[30px]">
              Join Our University Chapters
            </h3>
            <p className="text-center">
              Become a part of our University Chapters program and unlock
              opportunities for personal and professional growth. Stay updated
              on upcoming events, competitions, and workshops by subscribing to
              our mailing list. Engage in meaningful discussions, enhance your
              legal skills, and pave your way to a successful legal career.
            </p>
          </div>
          <h3 className="mt-6 mx-auto text-center font-serif mb-4 text-xl font-bold !leading-tight text-greenNew sm:text-4xl md:text-[30px]">
            Get Involved
          </h3>
          <p className="text-center">
            If you are a college student interested in organising events,
            leading workshops, or starting a University Chapter at your
            institution, we encourage your active participation. Contact us to
            explore how you can contribute to the legal community, inspire your
            peers, and positively impact the law field.
          </p>
          <div className="border-2 border-primary p-3 shadow-xl m-9">
            <h3 className="mt-6 mx-auto text-center font-serif mb-4 text-xl font-bold !leading-tight text-greenNew sm:text-4xl md:text-[30px]">
              Be a Part of the Calcya University Chapters Experience
            </h3>
            <p className="text-center">
              Join the Calcya University Chapters program and embark on an
              exciting journey of academic excellence, skill development, and
              personal growth. Explore the possibilities, connect with fellow
              students, and unlock your potential in the world of law.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UniversityChapters;
