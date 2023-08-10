import React from "react";
export default function social(props) {
    return(
        <div className="social-wrapper">
                <a href="https://twitter.com/JabeguNingsang" target="_blank"><i class="fa-brands fa-square-twitter"></i></a>
                <a href="https://www.facebook.com/ningsang.jabegu/" target="_blank"><i class="fa-brands fa-square-facebook"></i></a>
                {props.checkTheBox === "card-container card2" && <a href="https://www.instagram.com/nh_jabegu/" target="_blank"><i class="fa-brands fa-square-instagram"></i></a>}
                <a href="https://www.linkedin.com/in/ningsang-jabegu-45b545216/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/Ningsang-Jabegu" target="_blank"><i class="fa-brands fa-square-github"></i></a>
        </div>
    )
}