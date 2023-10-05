//import React from 'react';
import React, { useState, useEffect, useMemo } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaDatabase,
  FaJava,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { SiFlutter, SiKotlin, SiSwift, SiPhp } from "react-icons/si";
import "../assets/styles/homepage.css";
import BackgroundAnimation from "../components/animationOne";

function HomePage() {
  // Sample data for skills
  //const skills = [
  const skills = useMemo(
    () => [
      {
        name: "HTML",
        icon: <FaHtml5 />,
        description: "I have used it in web development.",
      },
      {
        name: "CSS",
        icon: <FaCss3 />,
        description: "I have used it in web development.",
      },
      {
        name: "JavaScript",
        icon: <FaJs />,
        description: "I have used it in web development.",
      },
      {
        name: "PHP",
        icon: <SiPhp />,
        description: "I have used it in web development.",
      },
      {
        name: "React",
        icon: <FaReact />,
        description: "I have used it in web development.",
      },
      {
        name: "Flutter",
        icon: <SiFlutter />,
        description:
          "I have used it in cross-platform native mobile development.",
      },
      {
        name: "Kotlin",
        icon: <SiKotlin />,
        description: "I have used it in Android app development.",
      },
      {
        name: "Swift",
        icon: <SiSwift />,
        description: "I have used it in iOS app development.",
      },
      {
        name: "Java",
        icon: <FaJava />,
        description:
          "I have used it in desktop (JavaFX) and android app development.",
      },
      {
        name: "Database",
        icon: <FaDatabase />,
        description:
          "I have used MySQL for web development and Firebase Realtime for mobile app development.",
      },

      //];
    ],
    []
  );

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    // Function to automatically shift focus to the next skill
    const shiftSkillFocus = () => {
      setCurrentSkillIndex((prevIndex) =>
        prevIndex === skills.length - 1 ? 0 : prevIndex + 1
      );
    };

    // Set up an interval to shift skill focus every 5 seconds (you can adjust the interval duration as needed)
    const intervalId = setInterval(shiftSkillFocus, 5000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [skills]);

  // Function to handle the "Next" button click
  const handleNext = () => {
    setCurrentSkillIndex((prevIndex) =>
      prevIndex === skills.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to handle the "Previous" button click
  const handlePrevious = () => {
    setCurrentSkillIndex((prevIndex) =>
      prevIndex === 0 ? skills.length - 1 : prevIndex - 1
    );
  };

  // Get the currently active skill
  const currentSkill = skills[currentSkillIndex];

  return (
    <div className="home">
      <header className="hero">
        <h1>WELCOME TO MY WEBSITE PORTOFOLIO</h1>
        <p>
          “I have a strong passion for finding solutions to problems and take
          pleasure in coming up with creative solutions to difficult problems. I
          have consistently shown a dedication to quality, attention to detail,
          and a focus on completing projects throughout my education and career.
          I like to explore new technologies in my free time and keep up with
          current business trends. In my spare time, I like to experiment with
          game development as I am an avid gamer. I work well in teams and enjoy
          working with others to accomplish common objectives. I am a motivated
          and committed software engineer who is devoted to producing results of
          the highest standard and constantly refining my skills.”
        </p>
      </header>

      <section className="skills-section">
        <h2>My Skills</h2>
        <div className="skills-container">
          <BackgroundAnimation />
          <div className="skill">
            <div className="skill-icon">{currentSkill.icon}</div>
            <div className="skill-name">{currentSkill.name}</div>
            <div className="skill-tooltip">{currentSkill.description}</div>
          </div>
        </div>

        <div className="controls">
          <button className="control-button" onClick={handlePrevious}>
            <FaChevronLeft />
          </button>
          <button className="control-button" onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
