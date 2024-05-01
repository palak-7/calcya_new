import React from "react";
import Topic from "./Topic";

const page = ({ params }) => {
  const id = params.id;
  return (
    <div>
      <Topic article_id={id} />
    </div>
  );
};

export default page;
