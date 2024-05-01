import React from "react";

export default function Timeline() {
  return (
    <ol className="mt-9 mx-10 border-l border-greenNew md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t">
      {/* <!--Third item--> */}
      <li>
        <div className="flex-start flex items-center pt-2 md:block md:pt-0">
          <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-greenNew md:-mt-[5px] md:ml-0 md:mr-0"></div>
        </div>
        <div className="ml-4 mt-4 pb-5 md:ml-0">
          <h4 className="mb-1.5 text-xl font-semibold">Our Core Values</h4>
          <div className="flex">
            <div className="mr-10">
              <h1 className="text-greenNew text-xl">Expertise:</h1>
              <p className="mb-3 text-neutral-700 text-xl">
                With a strong foundation of expertise and experience, our team
                continuously enhances their knowledge to deliver cutting-edge
                solutions tailored to client’s needs.
              </p>
              <h1 className="text-greenNew text-xl">Integrity:</h1>
              <p className="mb-3 text-neutral-700 text-xl">
                We provide honest, transparent, and unbiased advice, building
                trust and instilling confidence in our clients.
              </p>
            </div>
            <div className="ml-2">
              <h1 className="text-greenNew text-xl">
                Client-Centric Approach:
              </h1>
              <p className="mb-3 text-neutral-700 text-xl">
                Client needs are our priority. We listen, understand unique
                circumstances, and deliver personalised solutions to address
                challenges and goals.
              </p>
              <h1 className="text-greenNew text-xl">Excellence:</h1>
              <p className="mb-3 text-neutral-700 text-xl">
                We strive for excellence in all aspects, from accurate tax
                filings to responsive client service, aiming to surpass
                expectations and achieve exceptional results.
              </p>
            </div>
          </div>
        </div>
      </li>
    </ol>
  );
}
