import React from "react";
import "../assets/styles/animationOne.css"; // Import the CSS for styling

import { FaHtml5, FaCss3, FaJs, FaReact, FaDatabase } from "react-icons/fa";
import { SiFlutter, SiKotlin, SiSwift, SiPhp } from "react-icons/si";

const allIcons = [
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaDatabase,
  SiFlutter,
  SiKotlin,
  SiSwift,
  SiPhp,
];

function getRandomIcon() {
  const randomIndex = Math.floor(Math.random() * allIcons.length);
  const RandomIcon = allIcons[randomIndex];
  return <RandomIcon />;
}

function BackgroundAnimation() {
  const numIcons = 8; // Adjust the number of icons as needed

  return (
    <div className="background-animation">
      {Array.from({ length: numIcons }).map((_, index) => (
        <div key={index} className="random-icon">
          {getRandomIcon()}
        </div>
      ))}
    </div>
  );
}

export default BackgroundAnimation;
