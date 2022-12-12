import { Routes, Route, Outlet, Navigate, Await } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import PrivateHome from "./Pages/PrivateHome";
import Artist from "./Pages/Artist";
import PrivateArtist from "./Pages/PrivateArtist";
import Reset from "./Pages/Reset";
import UploadMusic from "./Pages/Upload Page";
// import { auth } from "./Configs/Authentication-Firebase/authentication";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { async, getDefaultAppConfig } from "@firebase/util";
import { render } from "@testing-library/react";
import ArtistPrivateUsers from "./Pages/Artists-PrivateUsers";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/reset" element={<Reset />} />

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/homepage" element={<PrivateHome />} />
          <Route path="/realartist" element={<PrivateArtist />} />
          <Route path="/privateartist" element={<ArtistPrivateUsers />} />
        </Route>
      </Routes>
      {/* <Artist/> */}
    </div>
  );
}

const auth = getAuth();
const isLoggedIn = setTimeout(auth.currentUser, 1000);

const PrivateRoute = () => {
  return isLoggedIn != null ? <Outlet /> : <Navigate to="/login" />;
};

export default App;
