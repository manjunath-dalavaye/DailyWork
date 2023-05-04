import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import "./CreateTopic.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateTopic = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handlePostClick = async () => {
    try {
      if (title.length === 0 || text.length === 0) {
        toast.warning("Ttile or Post can't be blank");
        return;
      }
      let x = text.split("\n")
      console.log(x)
      x = x.join("<br />")
      console.log(x)
      
      console.log(text)
      const response = await axios.post(
        "https://dailywork-f5b4a-default-rtdb.firebaseio.com/Topics.json",
        {
          createdBy: sessionStorage.getItem("currentUser"),
          title: title,
          postText: x,
        }
      );
      if (response.status === 200) {
        toast.success("Posted successfully");
        setText("");
        setTitle("");
      }
    } catch (error) {
      toast.error("Something wnet wrong !!, Try again");
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className="welcome-msg-ct">
        <span className="sp2-ct">Daily Work</span>
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
            sessionStorage.clear()
            navigate("/");
          }}
        >
          logout
        </span>
      </div>
      <div style={{ marginLeft: "4rem" }}>
        <div className="create-post">Create Post</div>

        <div>
          <TextField
            style={{ marginBottom: "20px", width: "40rem" }}
            id="standard-basic"
            label="Title"
            variant="standard"
            value={title}
            onChange={handleTitleChange}
          />{" "}
          <br />
          <TextField
            style={{ width: "40rem", marginBottom: "20px" }}
            multiline
            rows={8}
            label="Type here..."
            value={text}
            onChange={handleInputChange}
          />{" "}
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={handlePostClick}
            style={{ float: "" }}
          >
            Post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateTopic;
