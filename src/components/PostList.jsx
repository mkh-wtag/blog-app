import React, { useContext, useState } from "react";
import { UserContext } from "context/UserContext";
import { Link } from "react-router-dom";
import Comments from "./Comments";

const PostList = ({
  handleDelete,
  handleLikeCount,
  openCommentBox,
  postList,
}) => {
  const { name } = useContext(UserContext);
  const [writeComment, setWriteComment] = useState("");

  return (
    <div className="post-collection">
      {postList?.map((post) => {
        const { id, title, date, author, isPostOpen, likeCount } = post;
        const dateObject = new Date(date);
        const year = dateObject.getFullYear();
        const month = dateObject.getMonth();
        const day = dateObject.getDate().toString();

        return (
          <div key={id} className="post">
            {author === name && (
              <button className="delete-post" onClick={() => handleDelete(id)}>
                +
              </button>
            )}

            <h4 className="title title-4">{title}</h4>

            <div className="post-author">
              <span>
                Author:{" "}
                {name ? (
                  <Link to={`/${author}`}>
                    <strong>{author}</strong>
                  </Link>
                ) : (
                  <Link to="/login">
                    <strong>{author}</strong>
                  </Link>
                )}
              </span>

              <span>
                Written at: {`${day.padStart(2, 0)}-${month + 1}-${year}`}
              </span>

              <span>{likeCount} Likes</span>
            </div>

            {name && (
              <div className="like-comment">
                <button
                  type="button"
                  disabled={author === name}
                  className="button-like"
                  onClick={() => handleLikeCount(id)}
                >
                  Like
                </button>

                <button
                  onClick={() => openCommentBox(id)}
                  type="button"
                  className="button-comment"
                >
                  Comment
                </button>
              </div>
            )}

            {isPostOpen && (
              <div className="reply-comment">
                <div className="write-comment">
                  <div className="form-holder">
                    <textarea
                      className="input-field area"
                      name="comment"
                      value={writeComment}
                      onChange={(e) => setWriteComment(e.target.value)}
                    />
                  </div>

                  <button className="button button-sm">Post comment</button>
                </div>
              </div>
            )}

            <Comments />
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
