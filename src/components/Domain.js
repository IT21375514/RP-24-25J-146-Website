// src/components/Domain.js
import React, { useState } from "react";
import { Container, Nav, Row, Col, Card } from "react-bootstrap";
import {
  FaGlobe,
  FaChartBar,
  FaQuestionCircle,
  FaPaperPlane,
} from "react-icons/fa";

export const Domain = () => {
  const tabs = [
    { key: "background", label: "Background", icon: <FaGlobe /> },
    { key: "research-gap", label: "Research Gap", icon: <FaChartBar /> },
    {
      key: "research-problems",
      label: "Research Problems",
      icon: <FaQuestionCircle />,
    },
    { key: "objectives", label: "Research Objectives", icon: <FaPaperPlane /> },
  ];
  const [activeTab, setActiveTab] = useState("background");

  return (
    <section className="domain-section" id="domain">
      <Container>
        <h2 className="text-center domain-title mb-4">Our Domain</h2>

        <Nav variant="pills" className="justify-content-center domain-nav mb-4">
          {tabs.map((tab) => (
            <Nav.Item key={tab.key} className="domain-nav-item mx-2">
              <Nav.Link
                onClick={() => setActiveTab(tab.key)}
                className={`domain-nav-link d-flex align-items-center ${
                  activeTab === tab.key ? "domain-active" : ""
                }`}
              >
                <span className="domain-icon me-2">{tab.icon}</span>
                <span className="domain-text">{tab.label}</span>
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        <hr className="domain-divider mb-4" />

        <div className="domain-content">
          {activeTab === "background" && (
            <p className="domain-paragraph">
              WriteWizard was conceived to streamline academic writing by
              integrating AI-powered citation management, real-time
              collaboration, and automated formatting into a single platform.
              Developed to meet the specialized needs of research teams,
              WriteWizard eliminates manual tasks and ensures consistency across
              documents.
            </p>
          )}

          {activeTab === "research-gap" && (
            <p className="domain-paragraph">
              Traditional tools require constant switching between word processors, citation managers, 
              and collaboration platforms—resulting in context loss, inefficiencies, and formatting errors. 
              WriteWizard addresses this gap by seamlessly combining intelligent features like citation generation,
              formatting conversion, mind map creation, and contributor recommendations in a single ecosystem.
            </p>
          )}

          {activeTab === "research-problems" && (
            <Row className="domain-cards row-cols-2 row-cols-md-4 g-1 g-md-3">
              {[
                "Manual citation handling disrupts workflow and increases error rates.",
                "Inconsistent formatting requires extensive post-editing and slows teams down.",
                "Lack of semantic visualization makes it hard to grasp complex document structure.",
                "Assigning collaborators often relies on guesswork instead of systematic expertise-based matching.",
              ].map((text, i) => (
                <Col key={i}>
                  <Card className="domain-card h-100">
                    <Card.Body>
                      <Card.Text className="domain-card-text">{text}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}

          {activeTab === "objectives" && (
            <Row className="domain-cards row-cols-2 row-cols-md-4 g-1 g-md-3">
              {[
                "Develop an AI-driven system for automatic, context-aware IEEE citation generation.",
                "Build a transformer-based module that converts informal academic drafts into IEEE-compliant formats.",
                "Create a hierarchical mind map generator that visualizes academic content using semantic relationships.",
                "Implement an NLP-based recommendation system to assign contributors based on domain-specific expertise.",
              ].map((text, i) => (
                <Col key={i}>
                  <Card className="domain-card h-100">
                    <Card.Body>
                      <Card.Text className="domain-card-text">{text}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </div>
      </Container>
    </section>
  );
};
