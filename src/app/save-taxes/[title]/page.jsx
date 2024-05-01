import React from "react";
import data from "../../../components/Features/data";
const page = ({ params }) => {
  const obj = data.find(
    (item) => item.title === params.title.replace(/-/g, " ")
  );
  return (
    <div className="mt-[200px] border-primary border-2 p-9 bg-white rounded-lg mx-9">
      <h1 className="text-2xl mb-5 fonr-bold text-center">{obj.title}</h1>
      <p className="text-justify">{obj.content}</p>
    </div>
  );
};

export default page;
