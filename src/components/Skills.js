// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
// import colorSharp from "../assets/img/color-sharp.png"

// export const Skills = () => {
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     }
//   };

//   return (
//     <section className="skill" id="skills">
//         <div className="container">
//             <div className="row">
//                 <div className="col-12">
//                     <div className="skill-bx wow zoomIn">
//                         <h2>Skills</h2>
//                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
//                         <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
//                             <div className="item">
//                                 <img src={meter1} alt="Image" />
//                                 <h5>Web Development</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={meter2} alt="Image" />
//                                 <h5>Brand Identity</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={meter3} alt="Image" />
//                                 <h5>Logo Design</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={meter1} alt="Image" />
//                                 <h5>Web Development</h5>
//                             </div>
//                         </Carousel>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <img className="background-image-left" src={colorSharp} alt="Image" />
//     </section>
//   )
// }


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

export const Skills = () => {
  const skills = [
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
    <section id="skills" className="skill py-5">
      <div className="container">
        {/* Section Heading */}
        <div className="row justify-content-center mb-4">
          <div className="col-auto">
            <h2 className="text-center">Skills</h2>
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
            {skills.map((skill, index) => (
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
