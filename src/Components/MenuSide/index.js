import React from 'react';
import "./style.css"
import {FaSpotify} from  "react-icons/fa"
import {AiFillHome} from  "react-icons/ai"
import {RiPlayListFill} from  "react-icons/ri"
import {useNavigate} from "react-router-dom"
const MenuSide = () => {
    const navigate = useNavigate()
    return(

           
        <div className="menu" style={{overflow: "hidden"}}>
            <h1 className="app-name" style={{marginTop: 20, marginBottom: 10}}><FaSpotify className="music-icon"/> Music</h1>
            <div className="side_content_1">
                    <h4 className="side_content-home" onClick={() => (
                        navigate("/")
                    )}> <AiFillHome className="content-icon"/> Home</h4>
                    <h4 className="side_content-playlist"> <RiPlayListFill className="content-icon"/> My Playlist</h4>
            </div>
            <div className="side_content_2">
                    <h1 style={{width: 300, height: 30, marginBottom:0}}>Following Artists</h1>
                    <li>Justin Bieber</li>
                    <li>Justin Bieber</li>
                    <li>Justin Bieber</li>
            </div>
        </div>
    )        
}    
        
export default MenuSide;