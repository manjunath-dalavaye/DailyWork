import React from "react";
import "./CreateTopic.css";
import { useNavigate } from "react-router-dom";

const CardComponent = (props) => {
  const navigate = useNavigate();

  const trimString = (str) => {
    return str.substr(0, 80);
  };

  const redirectToDetail = () => {
    sessionStorage.setItem("title", props.title);
    sessionStorage.setItem("postDetails", props.postDetail);
    navigate("/postDetails");
  };

  return (
    <div
      className="card-container"
      onClick={() => {
        redirectToDetail();
      }}
    >
      <h3>{props.title}</h3>

      <p dangerouslySetInnerHTML={{ __html: trimString(props.postDetail) }}></p>
    </div>
  );
};

export default CardComponent;
