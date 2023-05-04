import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./RegistrationPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // fetch all users from Firebase
      let checkForLogin = false;
      const response = await axios.get(
        "https://dailywork-f5b4a-default-rtdb.firebaseio.com/Users.json"
      );
      for (const parentObj in response.data) {
        const obj = response.data[parentObj];
        if (obj["username"] === username && obj["password"] === password) {
          sessionStorage.setItem("currentUser", username);
          navigate("/posts");
          checkForLogin = true;
          break;
        }
      }
      if (!checkForLogin) {
        toast.error("user not found");
      }

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="welcome-msg">
        <span className="sp1">Welcome to</span>
        <span className="sp2">Daily Work</span>
      </div>
      <div
        style={{ display: "flex", marginLeft: "10rem", marginBottom: "40px" }}
      >
        <p>
          If you are new here, do{" "}
          <span
            style={{ color: "#379ADC", fontWeight: 700, cursor: "pointer" }}
            onClick={() => {
              navigate("/registration");
            }}
          >
            register{" "}
          </span>
        </p>
      </div>
      <div className="middle-div">
        <form onSubmit={handleSubmit}>
          <TextField
            style={{ width: "400px", paddingRight: "20px" }}
            label="Username"
            value={username}
            onChange={handleUsernameChange}
            margin="normal"
            fullWidth
          />
          <TextField
            style={{ width: "400px", paddingRight: "20px" }}
            label="Password"
            value={password}
            onChange={handlePasswordChange}
            margin="normal"
            type="password"
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ width: "200px", marginTop: "17px", height: "50px" }}
            fullWidth
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
