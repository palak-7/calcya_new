"use client";

import React, { useState, useEffect, useCallback } from "react";
import { getHeading, getAllSubHeadings } from "../../../../services/articles";
import Link from "next/link";

const ArticleInside = ({ id }) => {
  const [headings, setHeadings] = useState([]);
  const [subheadings, setSubHeadings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const fetchData = useCallback(async () => {
  //   try {
  //     const headingResponse = await getHeading(id);
  //     if (headingResponse.data.success) {
  //       setHeadings(headingResponse.data.result);
  //     } else {
  //       console.error(
  //         "Failed to fetch headings:",
  //         headingResponse.data.message
  //       );
  //     }

  //     const subheadingResponse = await getAllSubHeadings();
  //     if (subheadingResponse.data.success) {
  //       setSubHeadings(subheadingResponse.data.result);
  //     } else {
  //       console.error(
  //         "Failed to fetch subheadings:",
  //         subheadingResponse.data.message
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     setError(error);
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
      {/* {headings.map((item, index) => (
        <React.Fragment key={item.id}>
          <div>
            {index + 1}. {item.name}
          </div>
          <div>
            {subheadings
              .filter((i) => i.heading_id === item.id)
              .map((i) => (
                <div key={i.id} className="hover:text-primary">
                  &emsp;&emsp;
                  <Link href={`/resources/insights/${id}/${i.id}`}>
                    &#x2022; {i.name}
                  </Link>
                </div>
              ))}
          </div>
        </React.Fragment>
      ))} */}
      hello 1
    </div>
  );
};

export default React.memo(ArticleInside);
