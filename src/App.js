import {Routes, Route, Outlet, Navigate} from "react-router-dom"
import './App.css';
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import PrivateHome from "./Pages/PrivateHome"
import Artist from "./Pages/Artist"
import PrivateArtist from "./Pages/PrivateArtist"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/artist" element={<Artist/>}/>
        <Route element={<PrivateRoute/>}>
          <Route path="/homepage" element={<PrivateHome/>}/>
          <Route path="/realartist" element={<PrivateArtist/>}/>
        </Route>
      </Routes>
      {/* <Artist/> */}
    </div>
  );
}

const PrivateRoute = () => {
  let userId = localStorage.getItem("userId");
  return userId != null && userId !== "" ? <Outlet/> : <Navigate to= "/homepage"/>
}

export default App;
