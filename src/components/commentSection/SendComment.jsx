"use client";

import React, { useState, useContext } from "react";
import UserContext from "../../context/UserContext";
import { addReply, sendComment } from "../../services/comments";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";

export default function SendComment(props) {
  console.log(props);
  const unique_id = uuid();

  const [comment, setComment] = useState("");
  const [buttonText, setButtonText] = useState(props.buttonText);
  const context = useContext(UserContext);
  const router = useRouter();

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = async () => {
    if (!context?.user) {
      router.push("/signin");
    }
    if (props.replyingTo) {
      const name = context?.user?.name;
      const replying_to = props.replyingTo;
      const user_id = context?.user?.id;
      const unique_id_reply = uuid();
      const replies = props.replies;
      const result = await addReply({
        unique_id_reply,
        replying_to,
        replies,
        user_id,
        name,
        comment,
      });
      if (result.status) {
        props.hasReplied(unique_id_reply, replying_to, comment);

        toast.success(result.message, {
          position: "bottom-left",
        });
      } else {
        toast.error(result.message, {
          position: "bottom-left",
        });
      }
    } else {
      const user = context?.user;
      const result = await sendComment({ unique_id, user, comment });
      if (result.success) {
        props.submitComment(unique_id, comment);

        toast.success(result.message, {
          position: "bottom-left",
        });
      } else {
        toast.error(result.message, {
          position: "bottom-left",
        });
      }
    }
    setComment("");
  };
  return (
    <div className=" bg-White m-3 p-5 rounded-lg flex flex-col max-w-5xl space-y-3">
      <textarea
        onChange={handleCommentChange}
        value={comment}
        rows="5"
        className="bg-White border resize-none border-Light-gray py-2 px-5 rounded-md placeholder:text-start text-Grayish-Blue"
        placeholder="Add a comment..."
      />

      <div className="flex justify-between py-2">
        <button
          onClick={handleCommentSubmit}
          className="bg-primary px-5 py-1 rounded-md hover:opacity-50"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
