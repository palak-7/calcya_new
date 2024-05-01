import React from "react";
import ArticleInside from "./ArticleInside";

const page = ({ params }) => {
  const id = params.id;

  return <ArticleInside id={id} />;
};

export default page;
