import Comment from "./Comment";
import React, { useState } from "react";
import Reply from "./Reply";
export default function CommentBlock(props) {
  console.log(props);
  const [replies, setReplies] = useState(
    props.comment.replies ? JSON.parse(props.comment.replies) : []
  );

  function buildComment(comment) {
    return (
      <Comment
        currentUser={props.currentUser}
        key={comment.id}
        handleReply={addReply}
        comment={comment}
        replies={replies}
        buildReply={buildReply}
        setReplies={setReplies}
        // replyingTo={comment.replyingTo || null}
      />
    );
  }

  function buildReplies(reply) {
    return (
      <Reply
        commentId={props.comment.id}
        currentUser={props.currentUser}
        key={reply.id}
        handleReply={addReply}
        comment={reply}
        replies={replies}
        setReplies={setReplies}
        replyingTo={reply.replyingTo || null}
      />
    );
  }
  function mapReplies(replies) {
    if (!replies.length) return;
    return replies.map((reply) => buildReplies(reply));
  }

  function addReply(replyId, reply, replyingTo) {
    const myReply = buildReply(replyId, reply, replyingTo);
    console.log(myReply);
    setReplies((previousReplies) => [...previousReplies, myReply]);
  }

  function buildReply(replyId, text, replyingTo) {
    const newComment = {
      id: replyId,
      user_id: props.currentUser.id,
      name: props.currentUser.name,
      content: text,
      replyingTo: replyingTo,
    };

    return newComment;
  }
  return (
    <>
      <div>
        <div>{buildComment(props.comment)}</div>
        <div className=" before:absolute before:inset-0 before:-z-10  before:translate-x-4 md:before:translate-x-14 before:border-l-2 before:border-l-Light-gray relative">
          <div className="max-w-[95%] md:max-w-[90%] ml-auto">
            {mapReplies(replies)}
          </div>
        </div>
      </div>
    </>
  );
}
