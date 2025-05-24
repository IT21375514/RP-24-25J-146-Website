// src/components/Team.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/email.svg";
import member1 from "../assets/img/members/member1.png";
import member2 from "../assets/img/members/member2.png";
import member3 from "../assets/img/members/member3.png";
import member4 from "../assets/img/members/member4.png";
import member5 from "../assets/img/members/supervisor.png";
import member6 from "../assets/img/members/sub-supervisor.png";

const teamMembers = [
  {
    img: member1,
    name: "Krithiga Balakrishnan",
    role: "Member",
    links: [
      { icon: navIcon1, url: "https://linkedin.com/..." },
      { icon: navIcon2, url: "https://facebook.com/..." },
      { icon: navIcon3, url: "mailto:supervisor@example.com" },
    ],
  },
  {
    img: member2,
    name: "Sanjayan. C",
    role: "Member",
    links: [
      { icon: navIcon1, url: "https://linkedin.com/..." },
      { icon: navIcon2, url: "https://facebook.com/..." },
      { icon: navIcon3, url: "mailto:abilash@example.com" },
    ],
  },
  {
    img: member3,
    name: "Shandeep. J",
    role: "Member",
    links: [
      { icon: navIcon1, url: "https://linkedin.com/..." },
      { icon: navIcon2, url: "https://facebook.com/..." },
      { icon: navIcon3, url: "mailto:danushan@example.com" },
    ],
  },
  {
    img: member4,
    name: "Saara M.K.F",
    role: "Member",
    links: [
      { icon: navIcon1, url: "https://linkedin.com/..." },
      { icon: navIcon2, url: "https://facebook.com/..." },
      { icon: navIcon3, url: "mailto:agash@example.com" },
    ],
  },
  {
    img: member5,
    name: "Dr. Lakmini Abeywardhana",
    role: "Supervisor",
    links: [
      { icon: navIcon1, url: "https://www.linkedin.com/in/lakmini-abeywardhana-65283aa9" },
      { icon: navIcon2, url: "https://facebook.com/..." },
      { icon: navIcon3, url: "mailto:lakmini.d@sliit.lk" },
    ],
  },
  {
    img: member6,
    name: "Ms. Karthiga Rajendran",
    role: "Co-Supervisor",
    links: [
      { icon: navIcon1, url: "https://lk.linkedin.com/in/karthiga-rajendran-6492b3171" },
      { icon: navIcon2, url: "https://facebook.com/..." },
      { icon: navIcon3, url: "mailto:karthiga.r@sliit.lk" },
    ],
  },
];

export const Team = () => (
  <section className="team-section" id="team">
    <Container>
      <h2 className="text-center mb-4" style={{ color: "#fff" }}>
        Team
      </h2>
      <Row className="g-4">
        {teamMembers.map((m, i) => (
          <Col key={i} xs={12} md={4}>
            <Card className="team-card h-100">
              <Card.Body className="d-flex align-items-center p-3">
                <img
                  src={m.img}
                  alt={m.name}
                  className="team-photo rounded"
                  style={{
                    width: 80,
                    height: 80,
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                />
                <div className="ms-3">
                  <h6 className="card-title mb-1">{m.name}</h6>
                  <p className="card-subtitle mb-2">{m.role}</p>
                  <div className="social-icon">
                    {m.links.map((link, li) => (
                      <a
                        key={li}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={link.icon} alt="" />
                      </a>
                    ))}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);
