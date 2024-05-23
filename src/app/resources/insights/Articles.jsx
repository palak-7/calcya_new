"use client";

import React, { useState, useEffect, useCallback } from "react";
import { data } from "./data";
import Link from "next/link";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const uniqueArray = (arr) => {
    const seen = new Map();
    return arr?.filter((item) => {
      if (!seen.has(item.article_id)) {
        seen.set(item.article_id, true);
        return true;
      }
      return false;
    });
  };

  const replaceSpacesWithHyphens = (str) => {
    return str.replace(/ /g, "-");
  };

  // const fetchArticles = useCallback(async () => {
  //   try {
  //     // const response = await getAllSubHeadings();
  //     // const response = await getArticle();
  //     if (response.data && response.data.result) {
  //       setArticles(uniqueArray(response.data.result));
  //     }
  //   } catch (err) {
  //     setError("Failed to load articles");
  //   } finally {
  //     setLoading(false);
  //   }
  //   setArticles(getData);
  // }, []);
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }
  const updatedData = uniqueArray(data);
  return (
    <div>
      <section id="articles" className="lg:-mt-30 md:pb-20 lg:px-3">
        <h2 className="mx-auto text-center font-serif mb-4 text-3xl font-bold !leading-tight text-black sm:text-4xl md:text-[45px]">
          Articles
        </h2>
        {updatedData.map((item) => (
          <div
            key={item.id}
            className="border-primary mt-3 border-4 transform transition duration-300 hover:shadow-xl shadow-md ml-2 mr-2 rounded-lg p-4"
          >
            <Link
              href={`/resources/insights/${replaceSpacesWithHyphens(
                item.article_id
              )}`}
            >
              <div className="wow fadeInUp" data-wow-delay=".15s">
                <h3 className="font-semibold text-black text-2xl mx-auto text-center items-center">
                  {item.article_id}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default React.memo(Articles);
