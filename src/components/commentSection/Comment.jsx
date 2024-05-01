import React, { useState, useContext } from "react";
import UserContext from "../../context/UserContext";
import SendComment from "./SendComment";
import DeleteWarning from "./DeleteWarning";
import Image from "next/image";
import { deleteComment, editComment } from "../../services/comments";
import { toast } from "react-toastify";

export default function Comment(props) {
  console.log(props);
  const context = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [showDeleteWarning, setShowDeleteWarning] = useState(false);

  function handleShowWarning() {
    setShowDeleteWarning(true);
  }

  function handleHasReplied(unique_id_reply, replying_to, comment) {
    setIsReplying(false);
    props.handleReply(unique_id_reply, comment, replying_to);
  }

  async function confirmDelete() {
    const result = await deleteComment(props.comment.id);
    if (result.success) {
      setIsVisible(false);
      setShowDeleteWarning(false);
      toast.success(result.message, {
        position: "bottom-left",
      });
    } else {
      toast.error(result.message, {
        position: "bottom-left",
      });
    }
  }

  function cancelDelete() {
    setShowDeleteWarning(false);
  }

  function editComment() {
    setIsEditing(true);
  }

  function Username() {
    return (
      <>
        {(context?.user?.id === props.comment.user_id && (
          <div>
            <span className="text-Dark-blue font-bold">
              {props.comment.name}
            </span>
            <span className="bg-primary px-1.5 text-white rounded-sm mx-3">
              you
            </span>
          </div>
        )) || (
          <span className="text-Dark-blue font-bold">{props.comment.name}</span>
        )}
      </>
    );
  }

  function CommentButtons() {
    const handleIsReplying = () => {
      setIsReplying(true);
    };

    if (context?.user?.id === props.comment.user_id) {
      return (
        <>
          <button
            onClick={handleShowWarning}
            className="flex space-x-2 items-center py-1 hover:opacity-50 text-Moderate-blue "
          >
            <Image
              className="mr-2"
              src="/icon-delete.svg"
              alt="deleteImg"
              width={10}
              height={10}
            />
            Delete
          </button>
          <button
            onClick={editComment}
            className="flex space-x-2 items-center py-1 hover:opacity-50 text-Moderate-blue "
          >
            <Image
              className="mr-2"
              src="/icon-edit.svg"
              alt="editImg"
              width={10}
              height={10}
            />
            Edit
          </button>
        </>
      );
    }
    // return (
    //   <>
    //     <button
    //       onClick={handleIsReplying}
    //       className="flex space-x-2 items-center py-1 hover:opacity-50 text-Moderate-blue"
    //     >
    //       <Image
    //         className="mr-2"
    //         src="/icon-reply.svg"
    //         alt="replyImg"
    //         width={10}
    //         height={10}
    //       />
    //       Reply
    //     </button>
    //   </>
    // );
  }

  return (
    <>
      {/* delete warning */}
      {showDeleteWarning && (
        <>
          <div className="fixed inset-0 flex items-center justify-center z-10 bg-Dark-blue bg-opacity-50">
            <DeleteWarning onCancel={cancelDelete} onDelete={confirmDelete} />
          </div>
        </>
      )}

      {isVisible && (
        <div>
          <div className="flex bg-white mt-3 py-3 pl-4 rounded-lg max-w-3xl min-h-[10rem] space-y-3 relative">
            <div className="md:order-2 mt-3">
              <div className="flex justify-start items-center">
                <Username />
              </div>
              <Content
                id={props.comment.id}
                setIsEditing={setIsEditing}
                replyingTo={props.replyingTo}
                content={props.comment.content}
                isEditing={isEditing}
              />
            </div>
            <div className="flex space-x-4 absolute right-0 bottom-0 p-5 md:top-0 md:bottom-full ">
              <CommentButtons />
            </div>
          </div>
          {isReplying && (
            <SendComment
              buttonText={"REPLY"}
              hasReplied={handleHasReplied}
              submitComment={props.handleReply}
              replyingTo={props.comment.id}
              replies={props.replies}
              buildReply={props.buildReply}
            />
          )}
        </div>
      )}
    </>
  );
}

function Content(props) {
  const [content, setContent] = useState(props.content);
  return (
    <>
      {(!props.isEditing && (
        <p className="text-gray-700 text-left my-3 break-words">{content}</p>
      )) || (
        <ContentEdit
          id={props.id}
          contentToEdit={content}
          setContent={setContent}
          setIsEditing={props.setIsEditing}
        />
      )}
    </>
  );
}

function ContentEdit(props) {
  const [tempContent, setTempContent] = useState("");

  const handleContentChange = (event) => {
    props.setContent(event.target.value);
    setTempContent(event.target.value);
  };

  const handleEditSubmit = async () => {
    const id = props.id;
    const result = await editComment({ id, tempContent });
    if (result.success) {
      toast.success(result.message, { position: "bottom-left" });
      props.setIsEditing(false);
    } else {
      toast.error(result.message, { position: "bottom-left" });
    }
  };

  return (
    <div className="m-3 flex flex-col">
      <textarea
        onChange={handleContentChange}
        value={props.contentToEdit}
        rows="5"
        className="bg-white border resize-none border-Light-gray py-2 px-5 rounded-md placeholder:text-start text-Grayish-Blue "
        placeholder="Add a comment..."
      />
      <div className="flex justify-end my-4">
        <button
          onClick={handleEditSubmit}
          className="bg-Moderate-blue px-3 py-1 rounded-md hover:opacity-50"
        >
          UPDATE
        </button>
      </div>
    </div>
  );
}
