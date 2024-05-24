import React from "react";
import Articles from "./Articles";

const page = () => {
  const mail = process.env.ADMIN_EMAIL;
  return (
    <div>
      <Articles mail={mail} />
    </div>
  );
};

export default page;
