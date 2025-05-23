import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaFilePdf, FaFilePowerpoint, FaDownload } from "react-icons/fa";
import colorSharp2 from "../assets/img/image (2).png";

// Example data — replace with your actual document URLs & names
const documentsData = [
  {
    category: "Project Proposals",
    items: [
      { title: "Proposal-report-IT21194894", type: "pdf", url: "/documents/proposal/IT21194894_Research_Proposal_Report.pdf" },
      { title: "Proposal-report-IT21375514", type: "pdf", url: "/documents/proposal/IT21375514_Research_Proposal_Report.pdf" },
      { title: "Proposal-report-IT21375682", type: "pdf", url: "/documents/proposal/IT21375682_Research_Proposal Report.pdf" },
      { title: "Proposal-report-IT21361036", type: "pdf", url: "/documents/proposal/IT21194894_Research_Proposal_Report" },
    ],
  },
  {
    category: "Proposal Presentations",
    items: [{ title: "Proposal Presentation", type: "ppt", url: "/documents/proposal/Proposal_Presentation_24-25J-146.pptx" }],
  },
  {
    category: "Progress Presentations 1",
    items: [{ title: "Progress Presentation 1", type: "ppt", url: "/documents/pp1/Project_Presentation_1_24-25J-146.pptx" }],
  },
  {
    category: "Progress Presentations 2",
    items: [{ title: "Progress Presentation 2", type: "ppt", url: "/documents/pp2/Project_Presentation_2_24-25J-146.pptx" }],
  },
  {
    category: "Final Reports",
    items: [
      { title: "Group-Final Reports", type: "pdf", url: "/documents/final-reports/24_25J_146_Final Report.pdf" },
      { title: "IT21194894-Final Reports", type: "pdf", url: "/documents/final-reports/IT21194894_Final Report.pdf" },
      { title: "IT21375514-Final Reports", type: "pdf", url: "/documents/final-reports/IT21375514_Final Report.pdf" },
      { title: "IT21375682-Final Reports", type: "pdf", url: "/documents/final-reports/IT21375682_Final Report.pdf" },
      { title: "IT21361036-Final Reports", type: "pdf", url: "/documents/final-reports/IT21361036_Final Report.pdf" },
    ],
  },
    {
    category: "Research paper",
    items: [{ title: "Research paper", type: "ppt", url: "/documents/Research paper/Writewizard Collaborative Document Editing Tool.pdf" }],
  },
  {
    category: "Final Presentations 1",
    items: [{ title: "Final Presentation", type: "ppt", url: "/documents/pp2/Project_Presentation_2_24-25J-146.pptx" }],
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
                        download
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
