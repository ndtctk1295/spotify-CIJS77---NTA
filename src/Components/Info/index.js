import React from 'react';
import "./style.css"
import {AiFillPlayCircle} from  "react-icons/ai"
import ArtistList from "../List"


const Info = () => {
    return(
        <div className="info">
            <div>
                {ArtistList.map((artist) => (
                        <div className="header">
                            <img src={artist.picture} alt={artist.name} style={{marginLeft: "5%", height:"200px", width:"200px"}}/>
                            <h1 style={{color: "white", marginLeft: "3%", marginTop: "5%", fontSize:"80px"}}>{artist.name}</h1>
                        </div>     
                ))}
            </div>

            <div className="taskbar" style={{height: 70}}>
                <AiFillPlayCircle className="raise" style={{color: "white", marginLeft:"5%"}}/>
                <button className="follow" style={{margin:0, padding: 0, height: 62, width:120, marginLeft: 10}}>Follow</button>
            </div>
                    
            <div>
                {ArtistList.map((song) => (
                    song.songList.map((realSong) => (
                        <div className="song-list"> 
                            <li className="song" style={{display: "flex", flexDirection:"row", width: 1050}}>
                                <h4 style={{marginLeft: 5, width: 10, height: 10}}>{realSong.id}</h4>
                                <img src={realSong.image} alt={realSong.name} style={{marginLeft: 20, marginTop:5, height: 50, width: 50}}/>
                                <h4 style={{marginLeft: 40, width: 900 }}>{realSong.name}</h4>
                                <h4>...</h4>
                        </li>
                    </div>
                    ))
                        
                ))}
            </div>
           
        </div>
    )
} 
export default Info;