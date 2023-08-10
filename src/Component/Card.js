import React from "react";
import Head from "./Head";
import Button  from "./Button";
import Description from "./Description";
import Social from "./Social";
export default function Card(props) {
    return(
        <div className={props.class}>
            <Head />
            <div className="btn-wrapper">
            <a href="mailto:ningsanglimbu5203@gmail.com" target="_blank"><Button text="Email" class="btn-1"/></a>
            {props.class == "card-container card2" && <a href="https://www.linkedin.com/in/ningsang-jabegu-45b545216/" target="_blank"><Button text="Linkedin" class="btn-2" linkedin="fa-brands fa-linkedin"/></a> }
            </div>
            <Description />
            <Social checkTheBox={props.class}/>
        </div>
    )
}