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
              Most editing tools force you to switch between word processors,
              citation managers, and collaboration suites—leading to errors,
              context-loss, and wasted time. WriteWizard bridges this gap by
              unifying intelligent features (citation suggestions, formatting
              converters, mind maps, and contributor recommendations) under one
              roof.
            </p>
          )}

          {activeTab === "research-problems" && (
            <Row className="domain-cards row-cols-2 row-cols-md-4 g-1 g-md-3">
              {[
                "Manual citation handling disrupts workflow and increases error rates.",
                "Inconsistent formatting requires extensive post-editing and slows teams down.",
                "Lack of semantic visualization makes it hard to grasp complex document structure.",
                "Collaborator selection relies on ad-hoc methods rather than expertise matching.",
              ].map((text, i) => (
                <Col key={i}>
                  <Card className="domain-card h-100">
                    <Card.Body>
                      <span className="domain-card-text">{text}</span>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}

          {activeTab === "objectives" && (
            <Row className="domain-cards row-cols-2 row-cols-md-4 g-1 g-md-3">
              {[
                "Implement automatic, context-aware IEEE citation generation.",
                "Develop a transformer-based module for IEEE-compliant formatting.",
                "Create a semantic mind map generator for hierarchical visualization.",
                "Build an NLP-driven contributor recommendation engine based on expertise.",
              ].map((text, i) => (
                <Col key={i}>
                  <Card className="domain-card h-100">
                    <Card.Body>
                      <span className="domain-card-text">{text}</span>
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
