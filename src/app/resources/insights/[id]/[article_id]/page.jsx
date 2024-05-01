import React from "react";
import MainArticle from "./MainArticle";

const page = ({ params }) => {
  const article_id = params.article_id;
  return (
    <div>
      <MainArticle article_id={article_id} />
    </div>
  );
};

export default page;
