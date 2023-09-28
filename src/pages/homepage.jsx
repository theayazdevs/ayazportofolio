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
        description: "HTML5 is the standard language for creating web pages.",
      },
      {
        name: "CSS",
        icon: <FaCss3 />,
        description:
          "CSS3 is used for styling web pages and making them visually appealing.",
      },
      {
        name: "JavaScript",
        icon: <FaJs />,
        description:
          "JavaScript is a versatile programming language for web development.",
      },
      {
        name: "PHP",
        icon: <SiPhp />,
        description: "PHP",
      },
      {
        name: "React",
        icon: <FaReact />,
        description:
          "React is a popular JavaScript library for building user interfaces.",
      },
      {
        name: "Flutter",
        icon: <SiFlutter />,
        description: "gfg",
      },
      {
        name: "Kotlin",
        icon: <SiKotlin />,
        description: "fdfd",
      },
      {
        name: "Swift",
        icon: <SiSwift />,
        description: "jfgf",
      },
      {
        name: "Java",
        icon: <FaJava />,
        description: "htj",
      },
      {
        name: "Database",
        icon: <FaDatabase />,
        description:
          "Database skills are essential for managing data in web applications.",
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
