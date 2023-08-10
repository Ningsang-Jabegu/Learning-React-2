import React from "react";
import userImg from "../Images/Ningsang_Jabegu.jpg"
import Intro from "./Intro"
export default function Head() {
    return(
        <header className="head-section">
            <img src={userImg} className="head--userImg"/>
            <Intro />
        </header>
    )
}