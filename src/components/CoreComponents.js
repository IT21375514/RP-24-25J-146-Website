import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaBookReader,
  FaFileAlt,
  FaProjectDiagram,
  FaUsers,
} from "react-icons/fa";

export const CoreComponents = () => {
  const cards = [
    {
      title: "Reference Suggestion & Citation Generator",
      icon: <FaBookReader size={48} />,
      text:
        "Automatically find relevant papers and insert IEEE-formatted citations directly in your document.",
    },
    {
      title: "IEEE Document Formatting",
      icon: <FaFileAlt size={48} />,
      text:
        "Transform drafts into polished, IEEE-compliant PDFs with one click—no manual tweaks needed.",
    },
    {
      title: "Mind Map Generation",
      icon: <FaProjectDiagram size={48} />,
      text:
        "Convert sections of text into interactive, hierarchical mind maps for better structure and insight.",
    },
    {
      title: "Contributor Suggestion System",
      icon: <FaUsers size={48} />,
      text:
        "Match collaborators to sections based on their domain expertise using NLP-driven recommendations.",
    },
  ];

  return (
    <section className="components-section" id="components">
      <Container>
        <h2 className="text-center components-title mb-4">
          Our Core Components
        </h2>

        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
          {cards.map((c, idx) => (
            <Col key={idx}>
              <Card className="components-card h-100 text-center">
                <Card.Body>
                  <div className="components-icon mb-3">{c.icon}</div>
                  <Card.Title className="components-card-title">
                    {c.title}
                  </Card.Title>
                  <Card.Text className="components-card-text">
                    {c.text}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
