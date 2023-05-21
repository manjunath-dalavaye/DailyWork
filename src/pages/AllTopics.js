import React, { useEffect, useState } from "react";
import "./CreateTopic.css";
import { useNavigate } from "react-router-dom";
import CardComponent from "./cardComponent";
import axios, { all } from "axios";
import { CircularProgress } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllTopics = () => {
  const navigate = useNavigate();
  const [isloading, setLoading] = useState(true);
  const [allPosts, setPosts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const resp = await axios.get(
        "FIREBASE_URL_FOR_POSTS"
      );
      let tempPosts = [];
      for (const parentObj in resp.data) {
        const obj = resp.data[parentObj];
        if (obj["createdBy"] === sessionStorage.getItem("currentUser")) {
          tempPosts.push(obj);
        }
      }
      setPosts(tempPosts);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error)
      toast.error("Something went wrong..");
    }
  };

  if (isloading) {
    return <CircularProgress />;
  } 

  if (error !== null) {
    return <ToastContainer />
  }

  return (
    <div>
      <ToastContainer />
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
          className="logout"
          onClick={() => {
            sessionStorage.clear()
            navigate("/");
          }}
        >
          logout
        </span>
      </div>
      <div className="your-place-at">Your Place</div>
      <div className="card-div">
        {allPosts.map((rec) => {
          return (
            <CardComponent
              key={rec.title}
              title={rec.title}
              postDetail={rec.postText}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllTopics;
