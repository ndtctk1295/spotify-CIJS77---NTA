import React from 'react';
import "./style.css"

import {useNavigate} from "react-router-dom"

const Button = () => {
    const navigate = useNavigate();
    return(
    
            
                
                    <div className="button">
                        <button className="signup" onClick={() => {
					        navigate("/signup")}}>
                        Sign up</button>
                        <button className="login" onClick={() => {
					        navigate("/login")}}>
                        Log in</button>
                    </div>
                
)}

export default Button;