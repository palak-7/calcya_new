import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import data from "./data";
import Link from "next/link";
const Features = () => {
  return (
    <>
      <section
        id="features"
        className=" z-20 mx-7 px-4 lg:transform lg:scale-75 origin-top lg:-mt-30 md:pb-20 lg:px-3 pl-2 lg:w-1/2 overflow-x-hidden"
      >
        <SectionTitle
          title="How to Save Taxes"
          paragraph="Are you looking to keep more of your hard-earned money? Discover practical tips and strategies for reducing your tax burden with our tax-saving guide. Whether you are an individual or a business owner, we have got you covered. Explore smart investments, deductions, credits, and more. Let us start saving!"
          mb="44px"
        />

        <div className="grid grid-cols-2 gap-x-2 gap-y-4 md:grid-cols-3 lg:grid-cols-3">
          {data.map((item) => (
            <div
              key={item.id}
              className="hover: cursor-pointer hover:border-primary hover:border-4 transform transition duration-300 hover:scale-105 shadow-xl border-gray-300 border-2 ml-2 mr-2 rounded-lg p-2"
            >
              <Link href={`/save-taxes/${item.title.replace(/\s+/g, "-")}`}>
                <div className="wow fadeInUp " data-wow-delay=".15s">
                  <div className="bottom-0 text-end">
                    <Image src={item.image} width={70} height={70} alt="img" />
                  </div>
                  <h3 className="font-semibold text-black text-lg">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Features;
