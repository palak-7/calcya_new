"use client";

import React, { useState } from "react";
import data from "./data";
const Alternative = () => {
  const [inputSearch, setInputSearch] = useState("");
  const handleSearch = (e) => {
    setInputSearch(e.target.value);
  };
  let filteredData = data;

  if (inputSearch.trim() !== "") {
    filteredData = data.filter((d) =>
      d.title.toLowerCase().includes(inputSearch.toLowerCase())
    );
  }
  return (
    <div className="mt-[200px]">
      {/* search */}
      <div className="w-full">
        <div className="w-[80%] mx-auto text-black">
          <div className="w-full">
            <div className="flex justify-center items-center">
              <input
                type="text"
                placeholder="search alternative dispute resolution glossary by title..."
                onChange={handleSearch}
                className="w-full text-md font-semibold px-4 py-3 text-black my-4 border-gray-700 bg-gray-100 shadow-lg outline-none"
              />
            </div>
          </div>
        </div>
      </div>
      {/* data */}
      {filteredData.map((item) => (
        <div className="mx-20" key={item.id}>
          <h1 className="text-xl font-bold mt-9">{item.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
          {item.example != "" && (
            <h1 className="text-lg font-semibold">Example:</h1>
          )}
          <span>{item.example}</span>
        </div>
      ))}
    </div>
  );
};

export default Alternative;
