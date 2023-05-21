import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import checkForUserPresent from "../utils.js/loginAndRegistrations";
import "./RegistrationPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
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
      const check = await checkForUserPresent(username);
      if (check) {
        toast.warning("User Already exists");
      } else {
        const response = await axios.post(
          "FIREBASE_URL_USERs",
          {
            username: username,
            password: password,
          }
        );
        navigate("/login");
      }
    } catch (error) {
      toast.error("User registration Failed");
      // handle error here, e.g. display error message to user
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="welcome-msg">
        <span className="sp1">Welcome to</span>
        <span className="sp2">Daily Work</span>
      </div>
      {/* <div>Registration Page</div> */}
      <div className="middle-div">
        <form onSubmit={handleSubmit}>
          <TextField
            style={{ width: "85%", paddingRight: "20px", maxWidth: "400px" }}
            label="Username"
            value={username}
            onChange={handleUsernameChange}
            margin="normal"
            fullWidth
          />
          <TextField
            style={{ width: "85%", paddingRight: "20px", maxWidth:"400px" }}
            label="Password"
            value={password}
            onChange={handlePasswordChange}
            margin="normal"
            type="password"
            fullWidth
          />
          <Button
            style={{ width: "30%", marginTop: "17px", height: "50px", }}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
