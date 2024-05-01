"use client";

import React, { useState, useEffect } from "react";
import { getHeading, getAllSubHeadings } from "../../../../services/articles";
import Link from "next/link";
const ArticleInside = ({ id }) => {
  const [headings, setHeadings] = useState([]);
  const [subheadings, setSubheadings] = useState([]);
  const fetchData = async () => {
    const response = await getHeading(id);
    if (response.data.success) {
      setHeadings(response.data.result);
    }
    const result = await getAllSubHeadings();
    if (result.data.success) {
      setSubheadings(result.data.result);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="mt-[200px] text-lg mx-40">
        {headings?.map((item, index) => (
          <>
            <div key={item.id}>
              {index + 1}. {item.name}
            </div>
            <div>
              {subheadings.map(
                (i, idx) =>
                  item.id === i.heading_id && (
                    <div key={i.id} className=" hover:text-primary">
                      &emsp;&emsp;
                      <Link href={`/resources/insights/${id}/${i.id}`}>
                        &#x2022; {i.name}
                      </Link>
                    </div>
                  )
              )}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ArticleInside;
