import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Education = () => {
  const education = [
    {
      title: "BSc Hons in Software Engineering (Ongoing)",
      institution: "Sri Lanka Institute of Information Technology",
      iconBg: "#15181f",
      date: "2025 (Expected)",
    },
    {
      title: "G.C.E Advanced Level (Physical Science)",
      institution: "Colombo Hindu College, Colombo-4, Sri Lanka",
      iconBg: "#E6DEDD",
      date: "2020",
    },
  ];

  const qualifications = [
    {
      title: "Higher National Diploma in Information Technology",
      institution: "Sri Lanka Institute of Information Technology",
      iconBg: "#15181f",
    },
    {
      title: "Web Development Virtual Internship",
      institution: "CodSoft",
      iconBg: "#E6DEDD",
    },
    {
      title: "Introduction to Cyber Security",
      institution: "CISCO",
      iconBg: "#15181f",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="experience" id="education">
      <div className="container position-relative mb-5">
        <div className="row">
          {/* Section Heading on the Top Left */}
          <div className="col-12">
            <div
              className="education-heading-div"
            >
              <h2>Education</h2>
            </div>
          </div>
  
          <div className="timeline-columns col-12 position-relative">
            <div className="timeline-line"></div>
            {education.map((item, index) => (
              <div key={index} className="row timeline-item left">
                <div>
                  <div
                    className="edu-timeline-dot timeline-icon"
                    style={{ backgroundColor: item.iconBg }}
                  >
                  </div>
  
                  <div className="timeline-content">
                    <div key={index} data-aos="fade-right">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">{item.title}</h5>
                          <p className="card-subtitle text-muted">
                            {item.institution}
                          </p>
                          <p className="card-text">{item.date}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
      <div className="container position-relative">
        <div className="row">
          {/* Section Heading on the Top Left */}
          <div className="col-12">
            <div
              className="education-heading-div"
            >
              <h2>Professional Qualifications</h2>
            </div>
          </div>
  
          <div className="timeline-columns col-12 position-relative">
            <div className="timeline-line"></div>
            {qualifications.map((item, index) => (
              <div key={index} className="row timeline-item left">
                <div>
                  <div
                    className="edu-timeline-dot timeline-icon"
                    style={{ backgroundColor: item.iconBg }}
                  >
                  </div>
  
                  <div className="timeline-content">
                    <div key={index} data-aos="fade-right">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">{item.title}</h5>
                          <p className="card-text text-muted">
                            {item.institution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
  
};
