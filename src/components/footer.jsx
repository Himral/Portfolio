import React from "react";
import profile from '../assets/profile-pic.jpeg'
export default function Footer() {
  return (
    <div className="footer">
        
         <hr></hr>
         <div className="footer-socials">
            <p>Wanna talk about work, life or nonsense?</p>
            <div className="footer-socials-right">
                <div className="handles">
                    <a href = "https://twitter.com/NaHeedo777" target = "_blank">Twitter</a>
                <a href = "https://www.linkedin.com/in/himral-garg-a2b30621a/" target = "_blank">Linkedin</a>
                <a href = "https://github.com/Himral" target = "_blank">Github</a>
                </div>
                <a href = "" target = "_blank">himralgarg@gmail.com</a>
            </div>
         </div>
    </div>
  );
}
