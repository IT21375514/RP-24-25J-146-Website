import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Experience = () => {
  const experiences = [
    {
      title: "Web Developer",
      companyName: "Bella Home Co, Australia (Remote Work from Sri Lanka)",
      iconBg: "#15181f",
      date: "Jan 2024 - Aug 2024",
      points: [
        "Full stack web site development",
        "PHP, WordPress and Shopify Development",
        "Website content management, SEO marketing, branding, socialmedia management and project management.",
      ],
    },
    {
      title: "Associate",
      companyName: "WNS Global Services (Pvt) Ltd, Colombo, Sri Lanka",
      iconBg: "#E6DEDD",
      date: "Dec 2021 - May 2023",
      points: [
        "Managed and reviewed entity information for administration.",
        "Team collaboration and target achievement.",
      ],
    },
    {
      title: "Customer Support Executive",
      companyName: "Alpho Lanka Pvt Ltd, Colombo, Sri Lanka",
      iconBg: "#15181f",
      date: "Apr 2021 - Jul 2021",
      points: [
        "Sales calls to secure client investments.",
        "Capital market knowledge to support clients.",
      ],
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="experience" id="experience">
      <div className="container position-relative">
        <div className="text-center">
          <h2>Experience</h2>
        </div>
        <div className="row mt-5">
          {/* Timeline */}
          <div className="timeline-columns col-12 position-relative">
            <div className="timeline-line"></div>
            {experiences.map((experience, index) => (
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
                  {experience.date}
                </div>

                <div>
                  <div
                    className="timeline-dot"
                    style={{ backgroundColor: experience.iconBg }}
                  >
                  </div>

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
                          <h5 className="card-title">{experience.title}</h5>
                          <p className="card-subtitle text-muted">
                            {experience.companyName}
                          </p>
                          <p className="card-text">{experience.date}</p>
                          <ul className="list-unstyled mt-3">
                            {experience.points.map((point, idx) => (
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

// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export const Experience = () => {
//   const experiences = [
//     {
//       title: "React.js Developer",
//       companyName: "Starbucks",
//       icon: "https://static.wikia.nocookie.net/jhmovie/images/f/f9/Chhota_Bheem.jpg/revision/latest?cb=20221014134346",
//       iconBg: "#383E56",
//       date: "March 2020 - April 2021",
//       points: [
//         "Developing and maintaining web applications using React.js and other related technologies.",
//         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//         "Implementing responsive design and ensuring cross-browser compatibility.",
//         "Participating in code reviews and providing constructive feedback to other developers.",
//       ],
//     },
//     {
//       title: "React Native Developer",
//       companyName: "Tesla",
//       icon: "https://static.wikia.nocookie.net/jhmovie/images/f/f9/Chhota_Bheem.jpg/revision/latest?cb=20221014134346",
//       iconBg: "#E6DEDD",
//       date: "Jan 2021 - Feb 2022",
//       points: [
//         "Developing and maintaining web applications using React.js and other related technologies.",
//         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//         "Implementing responsive design and ensuring cross-browser compatibility.",
//         "Participating in code reviews and providing constructive feedback to other developers.",
//       ],
//     },
//     {
//       title: "Web Developer",
//       companyName: "Shopify",
//       icon: "https://static.wikia.nocookie.net/jhmovie/images/f/f9/Chhota_Bheem.jpg/revision/latest?cb=20221014134346",
//       iconBg: "#383E56",
//       date: "Jan 2022 - Jan 2023",
//       points: [
//         "Developing and maintaining web applications using React.js and other related technologies.",
//         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//         "Implementing responsive design and ensuring cross-browser compatibility.",
//         "Participating in code reviews and providing constructive feedback to other developers.",
//       ],
//     },
//   ];

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });
//   }, []);

//   return (
//     <section className="experience" id="experience">
//       <div className="container position-relative">
//         <div className="text-center">
//           <h2>Experience</h2>
//           <p>
//             Explore my professional journey through the roles I’ve taken on in
//             the tech industry.
//             <br />
//             From developing robust web applications to collaborating on
//             innovative projects.
//           </p>
//         </div>
//         <div className="row mt-5">
//           {/* Timeline */}
//           <div className="col-12 position-relative">
//             <div className="timeline-line"></div>
//             {experiences.map((experience, index) => (
//               <div
//                 key={index}
//                 className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
//               >
//                 {/* Timeline Date */}
//                 <div
//                   className={`timeline-date ${
//                     index % 2 === 0 ? "date-left" : "date-right"
//                   }`}
//                   data-aos="fade-up"
//                 >
//                   {experience.date}
//                 </div>

//                 {/* Timeline Dot */}
//                 <div
//                   className="timeline-dot"
//                   style={{ backgroundColor: experience.iconBg }}
//                   data-aos="zoom-in"
//                 >
//                   <img
//                     src={experience.icon}
//                     alt={experience.companyName}
//                     className="timeline-icon"
//                   />
//                 </div>

//                 {/* Timeline Card */}
//                 <div
//                   className="timeline-content"
//                   data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
//                 >
//                   <div className="card">
//                     <div className="card-body">
//                       <h5 className="card-title">{experience.title}</h5>
//                       <p className="card-subtitle text-muted">
//                         {experience.companyName}
//                       </p>
//                       <ul className="list-unstyled mt-3">
//                         {experience.points.map((point, idx) => (
//                           <li key={idx} className="text-muted">
//                             {point}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
