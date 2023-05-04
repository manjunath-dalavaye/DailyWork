import React from "react";
import "./CreateTopic.css";
import { useNavigate } from "react-router-dom";
const PostDetail = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="welcome-msg-ct">
        <span className="sp2-ct">Daily Work</span>
        <span
          className="posts"
          onClick={() => {
            navigate("/newPost");
          }}
        >
          create
        </span>
        <span
          className="posts"
          onClick={() => {
            navigate("/posts");
          }}
        >
          posts
        </span>
        <span
          className="logout"
          onClick={() => {
            sessionStorage.clear();
            navigate("/");
          }}
        >
          logout
        </span>
      </div>
      <div className="post-container">
        <h2>{sessionStorage.getItem("title")}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: sessionStorage.getItem("postDetails"),
          }}
        ></p>
      </div>
    </>
  );
};

export default PostDetail;
