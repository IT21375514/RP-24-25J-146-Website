import React from "react";
import Marquee from "react-fast-marquee";
import nodeJs from "../assets/svg/node-js.svg";
import reactJs from "../assets/svg/react.svg";
import springBoot from "../assets/svg/spring-boot.svg";
import dotNet from "../assets/svg/dot-net.svg";
import kotlin from "../assets/svg/kotlin.svg";
import java from "../assets/svg/java.svg";
import cSharp from "../assets/svg/c-sharp.svg";
import php from "../assets/svg/php.svg";
import sql from "../assets/svg/sql.svg";
import mongoDb from "../assets/svg/mongo-db.svg";
import oop from "../assets/svg/object-oriented-programming.svg";
import html from "../assets/svg/html.svg";
import css from "../assets/svg/css.svg";
import javascript from "../assets/svg/javascript.svg";
import wordpress from "../assets/svg/wordpress.svg";
import photoshop from "../assets/svg/photoshop.svg";

export const ToolsandTechnologies = () => {
  const toolsandTechnologies = [
    { name: "Node Js", image: nodeJs },
    { name: "React Js", image: reactJs },
    { name: "Spring Boot", image: springBoot },
    { name: ".Net", image: dotNet },
    { name: "Kotlin", image: kotlin },
    { name: "Java", image: java },
    { name: "C#", image: cSharp },
    { name: "PHP", image: php },
    { name: "SQL", image: sql },
    { name: "Mongo DB", image: mongoDb },
    { name: "OOP", image: oop },
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "JavaScript", image: javascript },
    { name: "Wordpress", image: wordpress },
    { name: "Photoshop", image: photoshop },
  ];
  

  return (
    <section id="skills" className="skill">
      <div className="container">
        {/* Section Heading */}
        <div className="row justify-content-center mb-4">
          <div className="col-auto">
            <h2 className="text-center">Tools and Technologies</h2>
          </div>
        </div>

        {/* Skills Marquee */}
        <div className="skills-marquee">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            direction="left"
            className="d-flex"
          >
            {toolsandTechnologies.map((skill, index) => (
              <div
                key={index}
                className="skill-item mx-3 d-flex flex-column align-items-center justify-content-center p-3 rounded border border-secondary"
                style={{
                  background: "#15181f",
                  color: "#fff",
                  cursor: "pointer",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  minWidth: "100px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(136, 132, 216, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Image */}
                <img
                  src={skill.image}
                  alt={skill.name}
                  style={{
                    width: "50px",
                    height: "50px",
                    marginBottom: "10px",
                    borderRadius: "8px",
                  }}
                />
                {/* Skill Name */}
                <p
                  style={{
                    margin: 0,
                    fontSize: "14px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {skill.name}
                </p>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};
