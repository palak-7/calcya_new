import React from "react";
import Calender from "./Calender";
const page = () => {
  const id = process.env.ADMIN_EMAIL;
  return (
    <div>
      <Calender id={id} />
    </div>
  );
};

export default page;
