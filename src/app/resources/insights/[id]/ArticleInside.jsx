"use client";

import React, { useState, useEffect, useCallback } from "react";
import { getHeading, getAllSubHeadings } from "../../../../services/articles";
import { data } from "../data";
import Link from "next/link";

const ArticleInside = ({ id }) => {
  const [headings, setHeadings] = useState([]);
  const [subheadings, setSubHeadings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const replaceHyphensWithSpaces = (str) => {
    return str.replace(/-/g, " ");
  };
  const uniqueArray = (arr) => {
    const seen = new Map();
    return arr?.filter((item) => {
      if (!seen.has(item.heading_id)) {
        seen.set(item.heading_id, true);
        return true;
      }
      return false;
    });
  };

  const replaceSpacesWithHyphens = (str) => {
    return str.replace(/ /g, "-");
  };

  const heading = replaceHyphensWithSpaces(id);
  const filteredArticles = data.filter(
    (article) => article.article_id === heading
  );
  const subheading = uniqueArray(filteredArticles);

  // const fetchData = useCallback(async () => {
  //   try {
  //     const headingResponse = await getHeading(id);
  //     if (headingResponse.data.success) {
  //       setHeadings(headingResponse.data.result);
  //       setSubHeadings(headingResponse.data.subheading);
  //     } else {
  //       console.error(
  //         "Failed to fetch headings:",
  //         headingResponse.data.message
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     setError("Error in Fetching Data");
  //   } finally {
  //     setLoading(false);
  //   }
  // }, [id]);

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  // if (loading) {
  //   return <div className="mt-[200px] text-lg lg:mx-40 mx-4">Loading...</div>;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  return (
    <div className="mt-[200px] text-lg lg:mx-40 mx-4">
      {subheading.map((item, index) => (
        <React.Fragment key={item.id}>
          <div>
            {index + 1}. {item.heading_id}
          </div>
          <div>
            {filteredArticles.map((i) => (
              <div key={i.id} className="hover:text-primary">
                &emsp;&emsp;
                <Link href={`/resources/insights/${id}/${i.id}`}>
                  &#x2022; {i.name}
                </Link>
              </div>
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default React.memo(ArticleInside);
