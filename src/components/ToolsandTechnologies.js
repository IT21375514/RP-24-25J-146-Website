import React from "react";
import Marquee from "react-fast-marquee";
import nodeJs from "../assets/svg/node-js.svg";
import reactJs from "../assets/svg/react.svg";
import mongoDb from "../assets/svg/mongo-db.svg";
import html from "../assets/svg/html.svg";
import css from "../assets/svg/css.svg";
import javascript from "../assets/svg/javascript.svg";
import wordpress from "../assets/svg/wordpress.svg";
import photoshop from "../assets/svg/photoshop.svg";
import python from "../assets/svg/python.webp";
import drawio from "../assets/svg/drawio.png"
import figma from "../assets/svg/figma.png";
import googleColab from "../assets/svg/google-colab.png";
import huggingFace from "../assets/svg/huggingFace.png";
import latex from "../assets/svg/latex.png"; 
import msPlanner from "../assets/svg/msPlanner.jpg";
import pandas from "../assets/svg/pandas.png";
import postman from "../assets/svg/postman.png";
import pytorch from "../assets/svg/pytorch.png";
import tensorflow from "../assets/svg/tensorflow.png";
import typescript from "../assets/svg/typescript.png";
import unsloth from "../assets/svg/unsloth.jpg";
import lora from "../assets/svg/lora.png";
import postgresql from "../assets/svg/postgresql.png";
import llama from "../assets/svg/llama.png";
import numpy from "../assets/svg/numpy.png";
import jupyterNotebook from "../assets/svg/jupyter-notebook.png";

export const ToolsandTechnologies = () => {
  const toolsandTechnologies = [
    // 🧠 Languages & Core Technologies
    { name: "Python", image: python },
    { name: "JavaScript", image: javascript },
    { name: "TypeScript", image: typescript },
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "LaTeX", image: latex },

    // ⚙️ Frameworks & Libraries
    { name: "Node Js", image: nodeJs },
    { name: "React Js", image: reactJs },
    { name: "PyTorch", image: pytorch },
    { name: "TensorFlow", image: tensorflow },
    { name: "Pandas", image: pandas },
    { name: "NumPy", image: numpy },
    { name: "LoRA", image: lora },
    { name: "Unsloth", image: unsloth },

    // 🤖 AI / ML Platforms & Models
    { name: "Hugging Face", image: huggingFace },
    { name: "LLaMA", image: llama },

    // 🗃️ Databases
    { name: "Mongo DB", image: mongoDb },
    { name: "PostgreSQL", image: postgresql },

    // 🧪 Tools & Platforms
    { name: "Jupyter Notebook", image: jupyterNotebook },
    { name: "Google Colab", image: googleColab },
    { name: "Postman", image: postman },
    { name: "MS Planner", image: msPlanner },

    // 🎨 Design & Visualization
    { name: "Figma", image: figma },
    { name: "draw.io", image: drawio },
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
