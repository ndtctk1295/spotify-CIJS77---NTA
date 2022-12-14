import React from "react";
import "./style.css";
import Avatar from "../../Components/Avatar";
import SignInSignUpButton from "../Button/Sign in - Sign up Button";
import { useNavigate } from "react-router-dom";
import Logout from "../Button/Logout Button";

const MainSide = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="button"
        style={{
          display: "flex",
          color: "white",
          marginLeft: "84%",
          marginTop: "2%",
        }}
      >
        <SignInSignUpButton />
      </div>
      <div
        className="avatar"
        onClick={() => {
          navigate(`/artist`);
        }}
      >
        <h1 className="avatar-title">Artists</h1>
        <Avatar />
      </div>
    </div>
  );
};
export default MainSide;
