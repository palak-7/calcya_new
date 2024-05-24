import React from "react";
import Admin from "./Admin";

const page = () => {
  const mail = process.env.ADMIN_EMAIL;
  return (
    <div>
      <Admin mail={mail} />
    </div>
  );
};

export default page;
