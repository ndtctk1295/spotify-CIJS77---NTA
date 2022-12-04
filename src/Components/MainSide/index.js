import React from 'react';
import "./style.css"
import Avatar from "../../Components/Avatar"
import Button from "../../Components/Button"
import {useNavigate} from "react-router-dom"

const MainSide = () => {
    const navigate = useNavigate()
    return(
    
            
                <div>
                    <div className="button" style={{display: "flex", color: "white", marginLeft: "84%", marginTop: "2%"}}>
                        <Button/>
                    </div>
                    <div className="avatar" onClick={() => {
                        navigate(`/artist`)
                    }}>
                        <h1 className="avatar-title">Artists</h1>
                        <Avatar/>
                    </div>
                </div>
            
         
        
        
    )
} 
export default MainSide;