"use client";

import React, { useEffect, useState, useContext, useCallback } from "react";
import { data } from "../../data";
import UserContext from "../../../../../context/UserContext";
import { usePathname } from "next/navigation";
import { oneSubHeading, getArticle } from "../../../../../services/articles";
import SendComment from "../../../../../components/commentSection/SendComment";
import CommentBlock from "../../../../../components/commentSection/CommentBlock";
import { getComments } from "../../../../../services/comments";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { FaShare, FaUser } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import Moment from "react-moment";
import {
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
  FacebookShareButton,
  TelegramShareButton,
  TelegramIcon,
} from "react-share";

const MainArticle = ({ article_id }) => {
  const [allArticles, setAllArticles] = useState([]);
  const [commentSection, setCommentSection] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const context = useContext(UserContext);
  const currentUser = context?.user;

  const pathname = usePathname();

  // const fetchData = useCallback(async () => {
  //   try {
  //     const [articleResponse, allArticlesResponse, commentsResponse] =
  //       await Promise.all([
  //         oneSubHeading(article_id),
  //         getArticle(),
  //         getComments(),
  //       ]);

  //     if (articleResponse.data.success)
  //       setArticle(articleResponse.data.result[0]);
  //     if (allArticlesResponse.data.success)
  //       setAllArticles(allArticlesResponse.data.result);
  //     setCommentSection(commentsResponse);

  //     setLoading(false);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     setError(error);
  //     setLoading(false);
  //   }
  // }, [article_id]);

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  const addNewComment = (unique_id, text) => {
    const newComment = {
      id: unique_id,
      user_id: currentUser.id,
      name: currentUser.name,
      content: text,
      replies: [],
    };
    setCommentSection((prevComments) => [...prevComments, newComment]);
  };
  const fetchArticleById = (id) => {
    return data.find((article) => article.id === id);
  };
  const article = fetchArticleById(article_id);
  const filteredArticles = data.filter(
    (a) => a.heading_id === article.heading_id
  );
  // if (loading) return <div className="mt-[150px]">Loading...</div>;
  // if (error) return <div className="mt-[150px]">Error in Fetching Data</div>;
  return (
    <div className="mt-[150px] w-full overflow-x-clip lg:grid grid-cols-4">
      <div className="col-span-3">
        <div className="mx-5">
          <h1 className="text-3xl text-center font-bold mb-4">
            {article?.name}
          </h1>
          <div className="ml-8 lg:ml-0 lg:flex gap-x-4 justify-center">
            <p className="flex text-gray-500">
              <FaClockRotateLeft className="mt-1 text-primary mr-1" />
              Reading Time: {article?.reading_time} min
            </p>
            <p className="flex text-gray-500">
              <SlCalender className="mt-1 text-primary mr-1" />
              Date:{" "}
              <Moment format="YYYY/MM/DD" className="ml-2">
                {article?.date}
              </Moment>
            </p>
            <p className="flex text-gray-500">
              <FaUser className="mt-1 text-primary mr-1" />
              Author: {article?.author}
            </p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: article?.content }}></div>
        </div>
        <div className="border mx-10 mt-5"></div>
        <div className="m-10">
          <h1 className="text-center font-semibold text-lg my-4">
            Share on Social Media
          </h1>
          <div className="flex justify-center mb-5">
            <div className="flex gap-x-4">
              <FacebookShareButton url={`https://localhost:3000${pathname}`}>
                <FacebookIcon round size={50} />
              </FacebookShareButton>
              <WhatsappShareButton url={`https://localhost:3000${pathname}`}>
                <WhatsappIcon round size={50} />
              </WhatsappShareButton>
              <TelegramShareButton url={`https://localhost:3000${pathname}`}>
                <TelegramIcon round size={50} />
              </TelegramShareButton>
            </div>
          </div>
        </div>
        <div className="mx-5">
          {commentSection.map((comment) => (
            <CommentBlock
              key={comment.id}
              currentUser={currentUser}
              comment={comment}
            />
          ))}
          <SendComment buttonText="SEND" submitComment={addNewComment} />
        </div>
      </div>
      <div className="col-span-1 border mr-5">
        <h1 className="text-center font-semibold text-xl my-2 text-primary font-serif">
          Practice Area Insights
        </h1>
        {filteredArticles.map((item) => (
          <div
            key={item.id}
            className="transform transition duration-300 ml-2 mr-2 rounded-lg"
          >
            <Link
              href={`/resources/insights/${item.id}`}
              className="hover:text-primary"
            >
              <div className="wow fadeInUp flex" data-wow-delay=".15s">
                <IoIosArrowForward className="mt-1" />
                <h3 className="text-md items-center font-serif">{item.name}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainArticle;
