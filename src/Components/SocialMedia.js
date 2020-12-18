import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function SocialMedia() {
  return (
    <a href="https://www.instagram.com/appetitediary" target="_blank">
        <FontAwesomeIcon icon={faInstagram} size="2x" style={{color:"black"}} />
    </a>
  );
}