import React from 'react';
import "./style.css"
import MenuSide from "../../Components/MenuSide"
import MainSide from "../../Components/MainSide"
import styled from 'styled-components'

const PrivateHome = () => {
    const ButtonDisplay = styled.div`   
        button{
            display:none;
        };
    `;
    return(
        <container>
            <div className="home">
                <div className="menu_side">
                    <MenuSide/>
                </div>
                <div className="main_side">
                <ButtonDisplay>
                    <MainSide/>
                </ButtonDisplay>
                </div>
            </div>
            
        </container>
        
    )
} 
export default PrivateHome;