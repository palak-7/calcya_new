import SectionTitle from "../../components/Common/SectionTitle";

export const metadata = {
  title: "About Page | Calcya",
  description: "This is About Page Calcya",
  // other metadata
};

const AboutPage = () => {
  return (
    <div className="mt-[70px] transform scale-75 w-[133.33%] origin-left">
      <section id="features" className="lg:-mt-30 md:pb-20 lg:px-3 lg:flex">
        <div className=" w-1/2">
          <h2 className=" mx-auto text-center font-serif mb-4 text-3xl font-bold !leading-tight text-black sm:text-4xl md:text-[45px]">
            About Calcya
          </h2>
          <h3 className="w-3/4 mx-auto text-center font-serif mb-4 text-xl font-bold !leading-tight text-greenNew sm:text-4xl md:text-[30px]">
            The Compliance People: Simplifying Tax Consultation and Compliance
          </h3>
          <SectionTitle
            title=""
            paragraph="Welcome to Calcya, your trusted destination for expert tax consulting and compliance services. Our dedicated professionals, including Chartered Accountants, Advocates, and IT experts, are committed to simplifying the complexities of taxation, ensuring compliance, and maximising tax benefits."
            center
          />
          <SectionTitle
            title="Our Mission"
            paragraph="At Calcya, our mission is to simplify tax compliance and empower our clients with knowledge and support for informed financial decisions. We strive to be your go-to partner, delivering exceptional service, accuracy, and reliability."
            center
          />
        </div>
        {/* cards */}
        <div className="w-1/2">
          <div className="grid grid-cols-1 gap-x-2 gap-y-4 md:grid-cols-2 lg:grid-cols-2">
            <div className="border-primary border-4 transform transition duration-300 hover:scale-105 hover:shadow-xl shadow-md ml-2 mr-2 rounded-lg p-4">
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <h3 className="font-semibold text-black text-lg mx-auto text-center mb-3">
                  Expertise
                </h3>
                <p>
                  Our team possesses extensive expertise in tax laws and
                  regulations. With up-to-date knowledge of the latest changes,
                  we provide comprehensive and accurate advice tailored to your
                  needs.
                </p>
              </div>
            </div>
            <div className="border-primary border-4 transform transition duration-300 hover:scale-105 hover:shadow-xl shadow-md ml-2 mr-2 rounded-lg p-4">
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <h3 className="font-semibold text-black text-lg mx-auto text-center mb-3">
                  Client-Centric Approach
                </h3>
                <p>
                  We prioritise your interests and goals. By understanding your
                  unique circumstances, we deliver personalised solutions that
                  optimise tax benefits while ensuring compliance.
                </p>
              </div>
            </div>
            <div className="border-primary border-4 transform transition duration-300 hover:scale-105 hover:shadow-xl shadow-md ml-2 mr-2 rounded-lg p-4">
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <h3 className="font-semibold text-black text-lg mx-auto text-center mb-3">
                  Efficiency and Timeliness
                </h3>
                <p>
                  Recognising the value of your time, we provide efficient and
                  prompt service. Our streamlined processes and dedicated
                  professionals ensure accurate, on-time tax filings.
                </p>
              </div>
            </div>
            <div className="border-primary border-4 transform transition duration-300 hover:scale-105 hover:shadow-xl shadow-md ml-2 mr-2 rounded-lg p-4">
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <h3 className="font-semibold text-black text-lg mx-auto text-center mb-3">
                  Commitment to Compliance
                </h3>
                <p>
                  We uphold the highest standards as the compliance people.
                  Guiding you through tax regulations, we help you fulfil
                  obligations while mitigating risks.
                </p>
              </div>
            </div>
          </div>
          <div className="border-primary mt-4 border-4 transform transition duration-300 hover:scale-105 hover:shadow-xl shadow-md ml-2 mr-2 rounded-lg p-4">
            <div className="wow fadeInUp" data-wow-delay=".15s">
              <h3 className="font-semibold text-black text-lg mx-auto text-center mb-3">
                End-to-End Solutions
              </h3>
              <p>
                From consultation to tax filing, our comprehensive services
                cater to individual taxpayers and businesses alike. Whatever
                your requirements, we have the expertise and resources to assist
                you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
