"use client";

import React, { useEffect, useState, useContext } from "react";
import UserContext from "../../../../../context/UserContext";
import { usePathname } from "next/navigation";
import { oneSubHeading, getArticle } from "../../../../../services/articles";
import SendComment from "../../../../../components/commentSection/SendComment";
import CommentBlock from "../../../../../components/commentSection/CommentBlock";
import { getComments } from "../../../../../services/comments";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { FaShare } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
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
  const [article, setArticle] = useState([]);
  const [allArticles, setAllArticles] = useState([]);
  const [commentSection, setCommentSection] = useState([]);

  const context = useContext(UserContext);
  const currentUser = context?.user;

  const usePathName = usePathname();

  const fetchArticles = async () => {
    const response = await getArticle();
    setAllArticles(response.data.result);
  };

  const fetchData = async () => {
    const response = await oneSubHeading(article_id);
    setArticle(response.data.result);
  };
  const getAllComments = async () => {
    const response = await getComments();
    setCommentSection(response);
  };
  function addNewComment(unique_id, text) {
    const newComment = buildCommentObj(unique_id, text);
    setCommentSection((previousComments) => [...previousComments, newComment]);
  }
  function buildCommentObj(unique_id, text) {
    const newComment = {
      id: unique_id,
      user_id: currentUser.id,
      name: currentUser.name,
      content: text,
      replies: "",
    };

    return newComment;
  }
  useEffect(() => {
    fetchData();
    fetchArticles();
    getAllComments();
  }, []);
  return (
    <div className="mt-[150px] w-full overflow-x-clip grid grid-cols-4">
      <div className="col-span-3">
        <div className="mx-5">
          <h1 className="text-3xl text-center font-bold mb-4">
            {article[0]?.name}
          </h1>
          <div className="flex gap-x-4 justify-center">
            <p className="flex text-gray-500">
              <FaClockRotateLeft className="mt-1 text-primary mr-1" />
              Reading Time: {article[0]?.reading_time} min
            </p>
            <p className="flex text-gray-500">
              <SlCalender className="mt-1 text-primary mr-1" />
              Date:{" "}
              <Moment format="YYYY/MM/DD" className="ml-2">
                {article[0]?.date}
              </Moment>
            </p>
            <p className="flex text-gray-500">
              <FaUser className="mt-1 text-primary mr-1" />
              Author: {article[0]?.author}
            </p>
          </div>
          <p dangerouslySetInnerHTML={{ __html: article[0]?.content }}></p>
        </div>
        <div className="border mx-10 mt-5"></div>
        <div className="m-10">
          <h1 className="text-center font-semibold text-lg my-4">
            Share on Social Media
          </h1>
          <div className="flex justify-center mb-5">
            <div className="flex gap-x-4">
              <FacebookShareButton
                url={`https://localhost:3000/${usePathName}`}
              >
                <FacebookIcon round={true} size={50} />
              </FacebookShareButton>
              <WhatsappShareButton
                url={`https://localhost:3000/${usePathName}`}
              >
                <WhatsappIcon round={true} size={50} />
              </WhatsappShareButton>
              <TelegramShareButton
                url={`https://localhost:3000/${usePathName}`}
              >
                <TelegramIcon round={true} size={50} />
              </TelegramShareButton>
            </div>
          </div>
        </div>
        <div className="mx-5">
          {commentSection?.map((comment) => (
            <CommentBlock
              currentUser={currentUser}
              key={comment.id}
              comment={comment}
            />
          ))}
          <SendComment buttonText={"SEND"} submitComment={addNewComment} />
        </div>
      </div>
      <div className="col-span-1 border mr-5">
        <h1 className="text-center font-semibold text-xl my-2 text-primary font-serif">
          Practice Area Insights
        </h1>
        {allArticles?.map((item) => (
          <>
            <div
              key={item.id}
              className="transform transition duration-300 ml-2 mr-2 rounded-lg"
            >
              <Link href={`/resources/insights/${item.id}`}>
                <div className="wow fadeInUp flex" data-wow-delay=".15s">
                  <IoIosArrowForward className="mt-1" />
                  <h3 className="text-md items-center font-serif">
                    {item.name}
                  </h3>
                </div>
              </Link>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default MainArticle;
