import React from "react";
import BtnIcon from "./BtnIcon";
export default function Button(props) {
    return(
        <button className="btn">
            {props.class == "btn-1" && <BtnIcon class = "fa-solid fa-envelope"/> }
            {props.class == "btn-2" && <BtnIcon class = {props.linkedin}/> }
            {props.text}
        </button>
    )
}