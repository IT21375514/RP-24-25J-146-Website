import React from "react";
import { Container } from "react-bootstrap";
import conferenceBg from "../assets/img/conference-bg.jpg";

export const Conference = () => (
  <section
    className="conference-section text-center"
    id="conference"
    style={{
      backgroundImage: `url(${conferenceBg})`,
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
  >
    <Container>
      <h2 className="conference-title mb-4">Research Conference Details</h2>
      <div className="conference-card mx-auto p-4">
        <h3 className="conference-name">16th ICCCNT 2025</h3>
        <div className="conference-icon mb-3">🏅</div>
        <p className="conference-paper mb-4">
          For the paper titled “WRITEWIZARD: COLLABORATIVE DOCUMENT EDITING TOOL”
        </p>
        {/* <p className="conference-meta">
          Presented in Session 26: Machine Learning<br />
          IEEE UEMCON 2023, October 12–14, 2023<br />
          Columbia University, New York, USA
        </p> */}
      </div>
    </Container>
  </section>
);
