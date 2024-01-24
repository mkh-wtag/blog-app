import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "context/UserContext";
import { useRef } from "react";
import PostList from "components/PostList";
import { useDispatch, useSelector } from "react-redux";
import { createPost, loadPosts } from "features/register/postsSlice";

const Dashboard = () => {
  const allPosts = useSelector((state) => state.allPosts.posts);
  console.log(allPosts);
  const dispatch = useDispatch();
  const [postList, setPostList] = useState([]);
  const textareaRef = useRef();
  const [postTitle, setPostTitle] = useState("");
  const { name } = useContext(UserContext);

  useEffect(() => {
    let retrievedPosts = [];
    if (localStorage.getItem("posts")) {
      retrievedPosts = JSON.parse(localStorage.getItem("posts"));
      setPostList(retrievedPosts);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: new Date().getTime(),
      title: postTitle,
      date: new Date(),
      author: name,
      isPostOpen: false,
      likeCount: 0,
      isLiked: false,
      comments: [],
    };

    if (postTitle) {
      dispatch(loadPosts());
      dispatch(createPost(newPost));
      const newPostList = [...postList, newPost];
      setPostList(newPostList);
      localStorage.setItem("posts", JSON.stringify(newPostList));
    }

    setPostTitle("");
    textareaRef.current.focus();
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
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
              />
            </div>

            <div className="form-holder">
              <button className="button">Post</button>
            </div>
          </form>
        </div>
      )}

      <PostList postList={postList} setPostList={setPostList} />
    </div>
  );
};

export default Dashboard;
