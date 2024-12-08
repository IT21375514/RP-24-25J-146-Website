import { Col } from "react-bootstrap";
import { useState } from "react";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  paragraph,
  onImageClick,
}) => {
  const [isParagraphVisible, setIsParagraphVisible] = useState(false);
  const [buttonText, setButtonText] = useState("View Gallery");

  const toggleParagraphVisibility = () => {
    setIsParagraphVisible(!isParagraphVisible);
  };

  return (
    <Col size={12} sm={6} md={6}>
      <div
        className="proj-imgbx"
        onClick={onImageClick}
        style={{ cursor: "pointer" }}
      >
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div>
          <button className="submit-button" type="submit">
            <span>{buttonText}</span>
          </button>
        </div>
        </div>
      </div>
      {/* Arrow and Paragraph */}
      <div className="card">
        <div className="card-body">
          {/* Dropdown Button */}
          <div style={{ textAlign: "right" }}>
            <button
              className="toggle-button"
              onClick={toggleParagraphVisibility}
              style={{
                background: "none",
                border: "none",
                color: "#ffffff",
                cursor: "pointer",
                fontSize: "16px",
                paddingRight: "24px",
                alignItems: "center",
              }}
            >
              {isParagraphVisible ? (
                <>
                  <span>Hide Details</span>
                  <i className="arrow-up" style={{ marginLeft: "8px" }}>
                    ▲
                  </i>
                </>
              ) : (
                <>
                  <span>Show Details</span>
                  <i className="arrow-down" style={{ marginLeft: "8px" }}>
                    ▼
                  </i>
                </>
              )}
            </button>

            {/* Paragraph */}
            {isParagraphVisible && (
              <p className="project-details">{paragraph}</p>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
