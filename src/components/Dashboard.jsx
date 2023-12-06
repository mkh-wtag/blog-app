import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useRef } from "react";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  // const [likedIds, setLikedIds] = useState([]);
  const textareaRef = useRef();
  const [post, setPost] = useState("");
  const { name } = useContext(UserContext);

  useEffect(() => {
    let retrievedPosts;
    if (localStorage.getItem("posts") !== null) {
      retrievedPosts = JSON.parse(localStorage.getItem("posts"));
      setPosts(retrievedPosts);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: new Date().getTime(),
      title: post,
      date: new Date(),
      author: name,
      isPostOpen: false,
      likeCount: 0,
      liked: false,
    };

    if (post) {
      posts.push(newPost);
      localStorage.setItem("posts", JSON.stringify(posts));
    }

    setPost("");
    textareaRef.current.focus();
  };

  const handleDelete = (id) => {
    const deletedItem = posts.filter((item) => item.id !== id);
    setPosts(deletedItem);
    localStorage.setItem("posts", JSON.stringify(deletedItem));
  };

  return (
    <div className="container">
      <h1 className="title title-1">Dashboard</h1>

      {name && (
        <div className="write-message">
          <form onSubmit={handleSubmit}>
            <div className="form-holder">
              <textarea
                ref={textareaRef}
                className="input-field area"
                placeholder="Write a post"
                value={post}
                onChange={(e) => setPost(e.target.value)}
              />
            </div>

            <div className="form-holder">
              <button className="button">Post</button>
            </div>
          </form>
        </div>
      )}

      <div className="post-collection">
        {posts?.map((post) => {
          const { id, title, date, author, isPostOpen, likeCount } = post;
          const dateObject = new Date(date);
          const year = dateObject.getFullYear();
          const month = dateObject.getMonth();
          const day = dateObject.getDate().toString();

          const openCommentBox = () => {
            const newPosts = [...posts];
            const curPost = posts.find((post) => post.id === id);
            curPost.isPostOpen = !curPost.isPostOpen;
            setPosts(newPosts);
          };

          const handleLikeCount = (id) => {
            const newPosts = [...posts];
            const curPost = posts.find((post) => post.id === id);
            // let { likeCount, liked } = curPost;

            if (curPost.liked) {
              curPost.liked = false;
              curPost.likeCount = curPost.likeCount - 1;
            } else {
              curPost.liked = true;
              curPost.likeCount = likeCount + 1;
            }
            // curPost.likeCount = curPost.likeCount === 0 ? 1 : 0;
            // likedIds.forEach((likedId) => {
            //   console.log("id", likedId);
            //   if (likedId === id) {
            //     console.log("liked: ", likedId);
            //     setLikedIds([...likedIds, id]);
            //     curPost.likeCount = curPost.likeCount + 1;
            //   }
            // });

            setPosts(newPosts);
            localStorage.setItem("posts", JSON.stringify(newPosts));
          };

          return (
            <div key={id} className="post">
              {author === name && (
                <button
                  className="delete-post"
                  onClick={() => handleDelete(id)}
                >
                  +
                </button>
              )}

              <h4 className="title title-4">{title}</h4>

              <div className="post-author">
                <span>
                  Author: <strong>{author}</strong>
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
                    onClick={openCommentBox}
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
                      <textarea className="input-field area" />
                    </div>

                    <button className="button button-sm">Post comment</button>
                  </div>
                </div>
              )}

              <div className="show-comment-wrapper">
                <div className="show-comments">
                  <div className="comment-author">Popy:</div>
                  <div className="comment">This is the first comment</div>

                  <div className="write-comment">
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
                  </div>
                </div>

                <div className="show-comments">
                  <div className="comment-author">Arif:</div>
                  <div className="comment">This is the first comment</div>

                  <div className="show-comments">
                    <div className="comment-author">Mitu:</div>
                    <div className="comment">This is the second comment</div>
                  </div>

                  <div className="show-comments">
                    <div className="comment-author">Sumi:</div>
                    <div className="comment">This is the third comment</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
