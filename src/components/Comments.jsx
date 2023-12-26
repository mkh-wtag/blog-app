import { UserContext } from "context/UserContext";
import React, { useContext } from "react";

const Comments = ({ post, deleteComment }) => {
  const { name } = useContext(UserContext);

  const handleDeleteComment = (comment, id) => {
    deleteComment(comment, id);
  };

  return (
    <>
      {post.comment?.length > 0 && (
        <div className="show-comments">
          <div className="comment-author">
            <strong>{name}:</strong>
          </div>
          {post.comment?.map((singleComment, index) => (
            <div key={`${post.id}-${index}`} className="comment">
              {singleComment}

              <button
                onClick={() => handleDeleteComment(singleComment, post.id)}
                className="delete"
                type="button"
              >
                <img src="../assets/close-icon.png" alt="close" />
              </button>
            </div>
          ))}

          {/* <div className="write-comment">
          <div className="form-holder">
            <textarea className="input-field area" />
          </div>

          <button className="button button-sm">Post comment</button>
        </div>

        <div className="show-comments">
          <div className="comment-author">Mamun:</div>
          <div className="comment">This is the second comment</div>
        </div>

        <div className="show-comments">
          <div className="comment-author">Popy:</div>
          <div className="comment">This is the third comment</div>
        </div> */}
        </div>
      )}
    </>
  );
};

export default Comments;
