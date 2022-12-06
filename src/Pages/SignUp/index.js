import "./style.css";
import React, { useState, useEffect } from "react";
import {
  registerWithEmailAndPassword,
  signInWithGoogle,
  auth,
} from "../../Configs/Authentication-Firebase/authentication";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
function SignUp() {
  // function cũ
  // const [user, setUser] = useState({
  //   name: "",
  //   username: "",
  //   password: "",
  //   passwordConfirm: "",
  // });
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  // function handleInputChange cũ
  // const handleNameChange = (e) => {
  //   e.preventDefault();
  //   setUser({ ...user, name: e.target.value });
  // };

  // const handleUsernameChange = (e) => {
  //   e.preventDefault();
  //   setUser({ ...user, username: e.target.value });
  // };

  // const handlePasswordChange = (e) => {
  //   e.preventDefault();
  //   setUser({ ...user, password: e.target.value });
  // };

  // const handleConfirmPasswordChange = (e) => {
  //   e.preventDefault();
  //   setUser({ ...user, passwordConfirm: e.target.value });
  // };
  //function fetch API cũ
  // const handleSubmitForm = (e) => {
  //   e.preventDefault();
  //   const newUser = { ...user };
  //   fetch("https://638a12bf4eccb986e8a310ad.mockapi.io/users", {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name: user.name,
  //       username: user.username,
  //       password: user.password,
  //     }),
  //   });
  //   navigate("/login");
  // };

  // function authenticate with firebase
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate.replace("/login");
  }, [user, loading]);
  // render
  return (
    <div className="form" style={{ display: "flex" }}>
      <h1>Sign up for free</h1>
      {/* <form onSubmit={handleSubmitForm}> */}
      <div>
        <label>What should we call you?</label>
        <br />
        <input
          type="text"
          // name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="name"
        />
      </div>
      <div>
        <label>Create your username</label>
        <br />
        <input
          type="text"
          // name="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="username"
        />
      </div>
      <div>
        <label>Create your password</label>
        <br />
        <input
          type="password"
          // name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="password"
        />
      </div>
      <div>
        <label>Confirm your password</label>
        <br />
        <input
          type="password"
          // name="passwordConfirm"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          className="passwordConfirm"
        />
        {/* {user.password !== user.passwordConfirm ? (
          <div>{"Different password"}</div>
        ) : (
          <></>
        )} */}
      </div>
      <div>
        <input
          type="submit"
          className="signup-button"
          onClick={register}
          value="Sign Up"
        />
      </div>
      <div>
        {/* <input
          type="submit"
          className="signup-button"
          onClick={signInWithGoogle}
          value="Sign Up with Google"
        /> */}
        <button className="signup-button" onClick={signInWithGoogle}>
          Register with Google
        </button>
      </div>
      <div>
        Already have an account? <Link to="/login">Login</Link> now.
      </div>
      {/* </form> */}
    </div>
  );
}

export default SignUp;
