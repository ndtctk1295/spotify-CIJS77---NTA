import React from "react";
import "./style.css";
import { logout } from "../../Configs/Authentication-Firebase/authentication";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout Button";
const Button = () => {
  const navigate = useNavigate();
  return (
    <div className="button">
      <button
        className="signup"
        onClick={() => {
          navigate("/signup");
        }}
      >
        Sign up
      </button>
      <button
        className="login"
        onClick={() => {
          navigate("/login");
        }}
      >
        Log in
      </button>
      <Logout />
    </div>
  );
};

export default Button;
