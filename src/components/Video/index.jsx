"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import Calender from "../Calender/Calender";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative lg:-mt-[5px] mt-9 z-10">
      <div className="lg:transform lg:scale-75 lg:origin-top-left lg:w-[133.33%]">
        <SectionTitle
          title="Calcya Compliance Calender"
          paragraph=""
          center
          mb="0px"
        />
      </div>
      <Calender />
    </section>
  );
};

export default Video;
