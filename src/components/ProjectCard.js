import { Col } from "react-bootstrap";
import { useState } from "react";

export const ProjectCard = ({
  title,
  imgUrl,
  onImageClick,
}) => {
  const [buttonText, setButtonText] = useState("View Gallery");

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
          <div>
          <button className="submit-button" type="submit">
            <span>{buttonText}</span>
          </button>
        </div>
        </div>
      </div>
    </Col>
  );
};
