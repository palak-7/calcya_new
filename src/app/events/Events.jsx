"use client";

import SectionTitle from "../../components/Common/SectionTitle";
// import Lottie from "react-lottie";
import LottieAnimation from "../../components/Common/LottieAnimation";
import event from "../../app/asset/event.json";
export const metadata = {
  title: "Events Page | Calcya",
  description: "This is Events Page Calcya",
  // other metadata
};

const Events = () => {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: event,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  return (
    <div className="mt-[40px] transform scale-75 w-[133.33%] origin-left">
      <section id="features" className="lg:-mt-30 md:pb-20 lg:px-3 lg:flex">
        <div className="mx-3 lg:w-1/2">
          <h2 className=" mx-auto text-center font-serif mb-4 text-3xl font-bold !leading-tight text-black sm:text-4xl md:text-[45px]">
            Upcoming Events
          </h2>
          <h3 className=" mx-auto text-center font-serif mb-4 text-xl font-bold !leading-tight text-greenNew sm:text-4xl md:text-[30px]">
            Fostering Skills and Empowering Future Leaders
          </h3>
          <SectionTitle
            title=""
            paragraph="Welcome to Calcya, where we invite college and school students to join our exciting competitions promoting alternative dispute resolution and providing insights into various legal domains. Enhance your negotiation, mediation, client counselling, and arbitration skills while gaining exposure to diverse areas of law.
            "
            center
          />
          {/* <Lottie
            options={defaultOptions}
            height={`300px`}
            width={`300px`}
            isClickToPauseDisabled={true}
          /> */}
          <div className="w-[300px] h-[300px]">
            <LottieAnimation animationData={event} />
          </div>
        </div>
        {/* cards */}
        <div className="mx-3 lg:w-1/2">
          <div className="grid grid-cols-1 gap-x-2 gap-y-4 md:grid-cols-2 lg:grid-cols-2">
            <div className="border-primary border-4 transform transition duration-300 hover:scale-105 hover:shadow-xl shadow-md ml-2 mr-2 rounded-lg p-4">
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <h3 className="font-semibold text-black text-lg mx-auto text-center mb-3">
                  College-Level Competitions
                </h3>
                <p className="text-lg">
                  Participate in our college-level competitions encompassing
                  negotiation, mediation, client counselling, and arbitration.
                  These dynamic events go beyond tax law, offering opportunities
                  to develop problem-solving abilities across multiple legal
                  areas. Gain practical experience in ADR techniques while
                  exploring contract law, employment law, intellectual property,
                  commercial law, and more.
                </p>
              </div>
            </div>
            <div className="border-primary border-4 transform transition duration-300 hover:scale-105 hover:shadow-xl shadow-md ml-2 mr-2 rounded-lg p-4">
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <h3 className="font-semibold text-black text-lg mx-auto text-center mb-3">
                  School-Level Negotiation Competition
                </h3>
                <p className="text-lg">
                  Our dedicated competition for school students introduces the
                  fundamentals of dispute resolution and diverse areas of law.
                  Engage in simulated negotiation exercises, honing your
                  negotiation techniques and problem-solving abilities. Expand
                  your legal understanding through interactive and engaging
                  scenarios
                </p>
              </div>
            </div>
            <div className="border-primary border-4 transform transition duration-300 hover:scale-105 hover:shadow-xl shadow-md ml-2 mr-2 rounded-lg p-4">
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <h3 className="font-semibold text-black text-lg mx-auto text-center mb-3">
                  Knowledge-Sharing and Networking
                </h3>
                <p className="text-lg">
                  Attend our interactive workshops and seminars conducted by ADR
                  and legal professionals. Gain valuable insights into
                  alternative dispute resolution practices and the legal
                  landscape. Connect with experts, exchange ideas, and broaden
                  your understanding of legal concepts.
                </p>
              </div>
            </div>
            <div className="border-primary border-4 transform transition duration-300 hover:scale-105 hover:shadow-xl shadow-md ml-2 mr-2 rounded-lg p-4">
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <h3 className="font-semibold text-black text-lg mx-auto text-center mb-3">
                  Empowering the Next Generation
                </h3>
                <p className="text-lg">
                  At Calcya, we empower the next generation of legal
                  professionals with comprehensive skills for effective dispute
                  resolution. Through our ADR-focused events encompassing
                  diverse legal domains, we foster collaborative and efficient
                  methods of conflict resolution. Appreciate the legal
                  challenges that arise while developing a well-rounded skill
                  set.
                </p>
              </div>
            </div>
            <div className="border-primary mt-4 border-4 transform transition duration-300 hover:scale-105 hover:shadow-xl shadow-md ml-2 mr-2 rounded-lg p-4">
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <h3 className="font-semibold text-black text-lg mx-auto text-center mb-3">
                  Stay Informed and Participate
                </h3>
                <p className="text-lg">
                  Stay updated on upcoming competitions by visiting this page
                  regularly. Find registration details, competition guidelines,
                  and relevant resources. Do not miss the opportunity to enhance
                  your negotiation skills, explore different areas of law, and
                  network with ADR professionals.
                </p>
              </div>
            </div>
            <div className="border-primary mt-4 border-4 transform transition duration-300 hover:scale-105 hover:shadow-xl shadow-md ml-2 mr-2 rounded-lg p-4">
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <h3 className="font-semibold text-black text-lg mx-auto text-center mb-3">
                  Join Our Next Competition
                </h3>
                <p className="text-lg">
                  We invite college and school students to participate in our
                  upcoming negotiation, mediation, client counselling, and
                  arbitration competitions emphasising alternative dispute
                  resolution across various legal domains. Develop your skills,
                  broaden your legal knowledge, and engage in practical
                  exercises for effective conflict resolution. Join our
                  community of aspiring legal professionals and embark on a
                  journey of learning and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
