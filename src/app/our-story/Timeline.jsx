import React from "react";

export default function Timeline() {
  return (
    <ol className="-mt-9 mx-10 border-l border-greenNew md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t">
      {/* <!--First item--> */}
      <li>
        <div className="flex-start flex items-center pt-2 md:block md:pt-0">
          <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-greenNew md:-mt-[5px] md:ml-0 md:mr-0"></div>
        </div>
        <div className="ml-4 mt-2 pb-5 md:ml-0">
          <h4 className="mb-1.5 text-xl font-semibold">The Genesis</h4>
          <p className="mb-3 text-neutral-700 text-justify text-xl">
            Founded by a team of passionate professionals, including Chartered
            Accountants, Advocates, and IT experts, Calcya emerged from a deep
            understanding of the challenges individuals and businesses face in
            meeting their tax obligations. We aimed to provide comprehensive
            solutions at reasonable intervals, simplifying tax complexities for
            our clients.
          </p>
        </div>
      </li>
      {/* <!--Second item--> */}
      <li>
        <div className="flex-start flex items-center pt-2 md:block md:pt-0">
          <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-greenNew md:-mt-[5px] md:ml-0 md:mr-0"></div>
        </div>
        <div className="ml-4 mt-2 pb-5 md:ml-0">
          <h4 className="mb-1.5 text-xl font-semibold">
            The Compliance People
          </h4>
          <p className="mb-3 text-neutral-700 text-justify text-xl">
            As the compliance people, we are committed to upholding the highest
            standards. Our mission is to empower clients to navigate tax
            obligations while optimising financial resources. By staying ahead
            of ever-evolving tax regulations, we equip them with the tools and
            knowledge needed for compliance and informed decision-making.
          </p>
        </div>
      </li>
      {/* <!--fourth item--> */}
      <li>
        <div className="flex-start flex items-center pt-2 md:block md:pt-0">
          <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-greenNew md:-mt-[5px] md:ml-0 md:mr-0"></div>
        </div>
        <div className="ml-4 mt-2 pb-5 md:ml-0">
          <h4 className="mb-1.5 text-xl font-semibold">The Future Ahead</h4>
          <p className="mb-3 text-neutral-700 text-justify text-xl">
            Looking ahead, Calcya remains committed to innovation, education,
            and client satisfaction. We ensure we meet evolving needs by
            leveraging technology, expanding our knowledge base, and adapting to
            evolving tax landscapes.
          </p>
        </div>
      </li>
    </ol>
  );
}
