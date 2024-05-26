import React from "react";
import Calender from "./Calender";
import CalenderNew from "./CalenderNew";
const page = () => {
  const id = process.env.ADMIN_EMAIL;
  return (
    <div>
      <CalenderNew id={id} />
    </div>
  );
};

export default page;
