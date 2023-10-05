// Contact.js
import React from "react";
import "../assets/styles/projects.css";

const webProjects = [
  {
    name: "AJ BELL | Hackcamp2022 at university of Salford",
    description:
      "Completed company's requirements by developing a web application. PHP, MySQL and JavaScript were mainly used. The website allows the users to compelete experiments and admins to create them. You can login as admin (admin@admin.com, admin) or a you can create a normal user account to view the website.",
    liveLink: "https://unicamp2022uos.000webhostapp.com/",
  },
  {
    name: "FRIENDS SYSTEM | Website",
    description:
      "In this project I made a web application with PHP, MySQL, Ajax and JavaScript for my client-server module at the university. Ajax was mainly used for Live Search and live map features. You can register on the website to view its features by loggin in with registered details.",
    liveLink: "https://friendssystemone.000webhostapp.com/",
  },
  {
    name: "ELEMENTAL-CRUSH | A game developed in Kotlin",
    description:
      "In this project I made an Android mobile game application. The game allowed the user to move the car using the accelerometer sensor in the device. The idea was to educate children about chemistry's Periodic Table elements.",
    liveLink: "https://github.com/theayazdevs/elementalcrush",
  },
  {
    name: "MICRO-BASH | A game developed in Swift",
    description:
      "In this project I made an iOS mobile game application. The game allowed the player to move the human character with his finger to avoid viruses and bad bacteria to survive while eating healthy fruit to gain score. The idea was to teach students about human health related to micro-organisms and the importance of healthy food.",
    liveLink: "https://github.com/theayazdevs/microbash",
  },
  {
    name: "THE FOOD ORDERING APP | An app developed with FLUTTER",
    description:
      "In this project I made a Flutter cross platform mobile application. The application allowed the food buiness owners to create and update their food menu while allowing customers to place orders via these menus. The app also offered voice control over the application with the Speech-To-Text technologies to detect any action commands.",
    liveLink: "https://github.com/theayazdevs/finalyearprojectuni",
  },
  // Add more projects as needed
];
function Projects() {
  useEffect(() => {
    document.title = "Ayaz Ahmad Projects";
  }, []);
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {webProjects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit {">"}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
