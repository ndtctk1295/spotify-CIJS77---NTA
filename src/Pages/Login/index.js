import "./style.css";
import React, { useState, useEffect } from "react";
import {
  logInWithEmailAndPassword,
  signInWithGoogle,
  auth,
} from "../../Configs/Authentication-Firebase/authentication";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  //function cũ
  // const [user, setUser] = useState({username:"",password:"", errorMessage: ""});
  // let state = false;
  //function mới
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);
  // function handleInputChange cũ
  // const handleUsernameChange = (e) => {
  //   e.preventDefault();
  //   setUser({ ...user, username: e.target.value });
  // };

  // const handlePasswordChange = (e) => {
  //   e.preventDefault();
  //   setUser({ ...user, password: e.target.value });
  // };

  // function LOGIN cũ với fetch api
  // function handleSubmitForm(e){
  //     e.preventDefault();
  //     fetch(`https://638a12bf4eccb986e8a310ad.mockapi.io/users?username=${user.username}`,
  //     {method: 'GET'}).then((response) => response.json()).then((users) => {
  //       let userFound = users.find((newUser) =>
  //       newUser.username === user.username
  //       )
  //       console.log(userFound);
  //       let message = ''
  //       if (userFound != null) {
  //         if (user.username === userFound.username && user.password === userFound.password){
  //           localStorage.setItem("userId", JSON.stringify(userFound.id));
  //           state = true;
  //           navigate("/homepage")
  //         } else {
  //           message = "Sai username hoac password"
  //         }
  //       } else {
  //         message = "Sai username hoac password"
  //       }
  //       setUser({
  //         ...user,
  //         password: "",
  //         errorMessage: message,
  //       })
  //     });
  // }

  return (
    <div className="form">
      <h1>Login to listen</h1>
      <form>
        <div>
          <label>Enter your username</label>
          <br />
          <input
            type="text"
            name="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="username"
            placeholder="E-mail Address"
          />
        </div>
        <div>
          <label>Enter your password</label>
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="password"
            placeholder="Password"
          />
        </div>
        <div>
          <button
            className="login-button"
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            Log In
          </button>

          <button
            className="login-button"
            onClick={() => signInWithGoogle(email, password)}
          >
            Log In With Your Google Account
          </button>
        </div>
      </form>
      {/* <div>{state === true ? <></> : user.errorMessage}</div> */}
    </div>
  );
}

export default Login;
