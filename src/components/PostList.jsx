import React, { useContext, useState } from "react";
import { UserContext } from "context/UserContext";
import { Link } from "react-router-dom";

const PostList = ({ postList, setPostList }) => {
  const { name } = useContext(UserContext);
  const [comment, setComment] = useState("");

  const handleDelete = (id) => {
    const deletedItem = postList.filter((item) => item.id !== id);
    setPostList(deletedItem);
    localStorage.setItem("posts", JSON.stringify(deletedItem));
  };

  const onDeleteComment = (postId, commentId) => {
    const _posts = [...postList];

    const post = _posts.find(({ id }) => id === postId);

    if (post === undefined) {
      return;
    }

    post.comments = post.comments.filter(({ id }) => id !== commentId);

    setPostList(_posts);
    localStorage.setItem("posts", JSON.stringify(_posts));
  };

  const onSubmitComment = (comment, postId) => {
    const newComment = {
      id: new Date().getTime().toString(),
      author: name,
      title: comment,
    };

    const newPostList = postList.map((post) => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, newComment],
          isPostOpen: false,
        };
      }

      return post;
    });

    setPostList(newPostList);
    localStorage.setItem("posts", JSON.stringify(newPostList));
  };

  const submitComment = (id) => {
    if (comment.trim() === "") {
      return;
    }

    onSubmitComment(comment, id);
    setComment("");
  };

  const handleDeleteComment = (postId, commentId) => {
    onDeleteComment(postId, commentId);
  };

  const openCommentBox = (id) => {
    setPostList((prev) =>
      prev.map((post) => {
        return post.id === id
          ? { ...post, isPostOpen: !post.isPostOpen }
          : post;
      })
    );
  };

  const handleLikeCount = (id) => {
    setPostList((prev) =>
      prev.map((post) => {
        return post.id === id
          ? {
              ...post,
              isLiked: post.isLiked ? false : true,
              likeCount: post.isLiked ? post.likeCount - 1 : post.likeCount + 1,
            }
          : post;
      })
    );

    localStorage.setItem("posts", JSON.stringify(postList));
  };

  return (
    <div className="post-collection">
      {postList.map((post) => {
        const { id, title, date, author, isPostOpen, likeCount, comments } =
          post;
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

            {isPostOpen && name && (
              <div className="reply-comment">
                <div className="write-comment">
                  <div className="form-holder">
                    <textarea
                      className="input-field area"
                      value={comment}
                      placeholder="Enter your valuable comment"
                      onChange={(e) => setComment(e.target.value)}
                    />
                  </div>

                  <button
                    className="button button-sm"
                    onClick={() => submitComment(id)}
                  >
                    Post comment
                  </button>
                </div>
              </div>
            )}

            <div className="show-comment-wrapper">
              {comments.map((comment) => {
                return (
                  <div key={comment.id} className="show-comments">
                    <div className="comment-author">
                      <strong>{comment.author}:</strong>
                    </div>
                    <div className="comment">{comment.title}</div>
                    {comment.author === name && (
                      <button
                        className="delete-icon"
                        onClick={() => handleDeleteComment(id, comment.id)}
                      >
                        <img src="assets/close-icon.png" alt="close" />
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
