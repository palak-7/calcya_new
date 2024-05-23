import React from "react";

export default function Timeline({ title, content }) {
  return (
    <>
      {/* <!--First item--> */}
      <li>
        <div className="flex-start flex items-center pt-2 md:block md:pt-0">
          <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-green md:-mt-[5px] md:ml-0 md:mr-0"></div>
        </div>
        <div className="ml-4 mt-2 pb-5 md:ml-0">
          <h4 className="mb-1.5 text-xl font-semibold">{title}</h4>
          <p className="mb-3 text-neutral-700 text-lg mr-5">{content}</p>
        </div>
      </li>
    </>
  );
}
