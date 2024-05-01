import React from "react";
import SubHeading from "./SubHeading";
const page = ({ params }) => {
  const article_id = params.id;
  const heading_id = params.heading_id;
  return (
    <div>
      <SubHeading article_id={article_id} heading_id={heading_id} />
    </div>
  );
};

export default page;
