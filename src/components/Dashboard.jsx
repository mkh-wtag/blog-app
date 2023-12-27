import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "context/UserContext";
import { useRef } from "react";
import PostList from "components/PostList";

const Dashboard = () => {
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
      postList.push(newPost);
      localStorage.setItem("posts", JSON.stringify(postList));
    }

    setPostTitle("");
    textareaRef.current.focus();
  };

  const onSubmitComment = (comment, postid) => {
    const newComment = {
      id: new Date().getTime().toString(),
      author: name,
      title: comment,
    };
    const filteredPost = postList.filter((post) => post.id !== postid);
    const commentedPost = postList.find((post) => post.id === postid);
    commentedPost.comments = [...commentedPost.comments, newComment];

    setPostList([...filteredPost, commentedPost]);
    openCommentBox(postid);
  };

  const onDeleteComment = (postId, commentId) => {
    const filteredPost = postList.filter((post) => post.id !== postId);
    const commentedPost = postList.find((post) => post.id === postId);
    const newCommentList = commentedPost.comments.filter(
      (comment) => comment.id !== commentId
    );

    commentedPost.comments = newCommentList;
    setPostList([...filteredPost, commentedPost]);
  };

  const handleDelete = (id) => {
    const deletedItem = postList.filter((item) => item.id !== id);
    setPostList(deletedItem);
    localStorage.setItem("posts", JSON.stringify(deletedItem));
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

      <PostList
        handleDelete={handleDelete}
        handleLikeCount={handleLikeCount}
        openCommentBox={openCommentBox}
        postList={postList}
        onSubmitComment={onSubmitComment}
        onDeleteComment={onDeleteComment}
      />
    </div>
  );
};

export default Dashboard;
