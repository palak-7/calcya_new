"use client";

import React, { useState, useEffect } from "react";
import { getArticle } from "../../../services/articles";
import Link from "next/link";
const Articles = () => {
  const [articles, setArticles] = useState([]);
  const fetchArticles = async () => {
    const response = await getArticle();
    setArticles(response.data.result);
  };
  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <div className="">
      <section id="articles" className="lg:-mt-30 md:pb-20 lg:px-3">
        <h2 className=" mx-auto text-center font-serif mb-4 text-3xl font-bold !leading-tight text-black sm:text-4xl md:text-[45px]">
          Articles
        </h2>
        {articles?.map((item) => (
          <>
            <div
              key={item.id}
              className="border-primary mt-3 border-4 transform transition duration-300 hover:shadow-xl shadow-md ml-2 mr-2 rounded-lg p-4"
            >
              <Link href={`/resources/insights/${item.id}`}>
                <div className="wow fadeInUp" data-wow-delay=".15s">
                  <h3 className="font-semibold text-black text-2xl mx-auto text-center items-center">
                    {item.name}
                  </h3>
                </div>
              </Link>
            </div>
          </>
        ))}
      </section>
    </div>
  );
};

export default Articles;
