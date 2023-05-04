import React from "react";
import NotFoundIcon from "../static/NotFound.png";

const NotFound = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
          marginTop: "20rem",
          fontSize: "40px",
          fontWeight: 700,
        }}
      >
        Not found ❌
      </div>
    </>
  );
};
export default NotFound;
