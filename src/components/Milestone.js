import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Milestone = () => {
  const milestones = [
    {
      title: "Project Topic Assessment",
      marks: "No marks allocated",
      iconBg: "#1e0030",
      date: "January 2023",
      points: [
        "Initial topic assessment document of the proposed research was submitted for evaluation. The submitted document included a brief overview on key aspects of the proposed research along with the research problem, research objectives, overall solution as well as member task breakdown.",
      ],
    },
    {
      title: "Project Charter Submission",
      marks: "No marks allocated",
      iconBg: "#E6DEDD",
      date: "January 2023",
      points: [
        "Once the topic was finalized, the project charter document was submitted for evaluation. This document also included a brief overview on key aspects of the proposed research along with the research problem, research objectives, overall solution as well as member task breakdown of the proposed research.",
      ],
    },
    {
      title: "Project Proposal Presentation",
      marks: "Marks Allocation - 6%",
      iconBg: "#1e0030",
      date: "March 2023",
      points: [
        "Presented the proposed research to a panel, covering key concepts, methodology, and expected outcomes.",
      ],
    },
    {
      title: "Project Proposal Report",
      marks: "Marks Allocation - 6%",
      iconBg: "#E6DEDD",
      date: "March 2023",
      points: [
        "The submission of a report which provides an in-depth analysis pertaining to key aspects of the proposed research along with the research problem, objectives, as well as the overall proposed solution.",
      ],
    },
    {
      title: "Status Document 1",
      marks: "Marks Allocation - 1%",
      iconBg: "#1e0030",
      date: "May 2023",
      points: [
        "The submission of a document that provides an overview of key tasks conducted by members during the implementation phase of the research.",
      ],
    },
    {
      title: "Progress Presentation 1",
      marks: "Marks Allocation - 15%",
      iconBg: "#E6DEDD",
      date: "May 2023",
      points: [
        "Evaluation of 50% completion of the proposed solution by a panel of judges.",
      ],
    },
    {
      title: "Research Paper draft submission",
      marks: "Marks Allocation - 10%",
      iconBg: "#1e0030",
      date: "June 2023",
      points: [
        "Submitted a draft version of the research paper to the supervisor for feedback and preliminary evaluation.",
      ],
    },
    {
      title: "Final Thesis Submission",
      marks: "Marks Allocation - 19%",
      iconBg: "#E6DEDD",
      date: "September 2023",
      points: [
        "Submission of the group and individual thesis documents for evaluation.",
      ],
    },
    {
      title: "Progress Presentation 2",
      marks: "Marks Allocation - 18%",
      iconBg: "#1e0030",
      date: "September 2023",
      points: [
        "Demonstrated 90% project completion and presented progress to an evaluation panel.",
      ],
    },
    {
      title: "Log Book and Status Document 2",
      marks: "Marks Allocation - 3%",
      iconBg: "#E6DEDD",
      date: "October 2023",
      points: [
        "Submission of the group and individual thesis documents for evaluation.Submission of the research logbook and status document 2 which provides an overview of all key tasks conducted by members during the implementation phase of the research.",
      ],
    },
    {
      title: "Website Assessment",
      marks: "Marks Allocation - 2%",
      iconBg: "#1e0030",
      date: "November 2023",
      points: ["Submission of research website for evaluation."],
    },
    {
      title: "Final Presentation and Viva",
      marks: "Marks Allocation - 20%",
      iconBg: "#E6DEDD",
      date: "November 2023",
      points: ["Final evaluation of the completed product(100%)."],
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="milestones" id="milestones">
      <div className="container position-relative">
        <div className="text-center">
          <h2>Milestones</h2>
        </div>
        <div className="row mt-5">
          {/* Timeline */}
          <div className="timeline-columns col-12 position-relative">
            <div className="timeline-line"></div>
            {milestones.map((milestones, index) => (
              <div
                key={index}
                className={`timeline-item ${
                  index % 2 === 0 ? "left" : "right"
                }`}
              >
                {/* Timeline Date */}
                <div
                  className={`timeline-date ${
                    index % 2 === 0 ? "date-left" : "date-right"
                  }`}
                  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                >
                  {milestones.date}
                </div>

                <div>
                  <div
                    className="timeline-dot"
                    style={{ backgroundColor: milestones.iconBg }}
                  ></div>

                  <div className="timeline-content">
                    <div
                      key={index}
                      className={`timeline-item ${
                        index % 2 === 0 ? "left" : "right"
                      }`}
                      data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                    >
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">{milestones.title}</h5>
                          <p className="card-subtitle text-muted">{milestones.marks}</p>
                          <p className="card-text">{milestones.date}</p>
                          <ul className="list-unstyled mt-3">
                            {milestones.points.map((point, idx) => (
                              <li key={idx} className="text-muted">
                                {point}
                              </li>
                            ))}
                          </ul>
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
    </section>
  );
};
