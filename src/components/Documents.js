import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaFilePdf, FaFilePowerpoint, FaDownload } from "react-icons/fa";
import colorSharp2 from "../assets/img/image (2).png";

// Example data — replace with your actual document URLs & names
const documentsData = [
  {
    category: "Project Proposals",
    items: [
      { title: "Proposal-report-IT20132682", type: "pdf", url: "#" },
      { title: "Proposal-report-IT2050874", type: "pdf", url: "#" },
      { title: "Proposal-report-IT20072742", type: "pdf", url: "#" },
      { title: "Proposal-report-IT20051648", type: "pdf", url: "#" },
    ],
  },
  {
    category: "Proposal Presentations",
    items: [{ title: "Proposal Presentation", type: "ppt", url: "#" }],
  },
  {
    category: "Status Documents",
    items: [
      { title: "IT20132682-Status Document-1", type: "pdf", url: "#" },
      { title: "IT20051648-Status Document-1", type: "pdf", url: "#" },
      { title: "IT20072742-Status Document-1", type: "pdf", url: "#" },
      { title: "IT2050874-Status Document-1", type: "pdf", url: "#" },
    ],
  },
  {
    category: "Progress Presentations",
    items: [{ title: "Progress Presentation 1", type: "ppt", url: "#" }],
  },
];

export const Documents = () => (
  <section className="documents-section" id="documents">
    <Container className="position-relative mb-5">
      <h2 className="text-center mb-4 documents-title">Documents</h2>

      {documentsData.map((group, gi) => (
        <div key={gi} className="mb-5">
          <h4 className="documents-category-bar text-center mb-3">
            {group.category}
          </h4>

          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
            {group.items.map((doc, di) => (
              <Col key={di}>
                <Card className="documents-card h-100 text-center">
                  <Card.Body className="d-flex flex-column">
                    <div className="documents-icon mb-3">
                      {doc.type === "pdf" ? (
                        <FaFilePdf size={48} />
                      ) : (
                        <FaFilePowerpoint size={48} />
                      )}
                    </div>
                    <p className="documents-card-title">
                      {doc.title}
                    </p>
                    <div className="mt-auto">
                      <Button
                        variant="outline-primary"
                        href={doc.url}
                        className="documents-download-btn"
                      >
                        <span>
                          <FaDownload />
                        </span>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
    <img
      className="background-image-right"
      src={colorSharp2}
      alt="Background"
    />
  </section>
);
