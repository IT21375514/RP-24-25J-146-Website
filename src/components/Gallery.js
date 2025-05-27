import React, { useState } from "react";
import { Container, Row, Col, Modal, Carousel } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import "animate.css";
import TrackVisibility from "react-on-screen";

import astrodiscover0 from "../assets/img/reference/0.jpeg";
import astrodiscover1 from "../assets/img/reference/1.jpeg";
import astrodiscover2 from "../assets/img/reference/2.jpeg";
import astrodiscover3 from "../assets/img/reference/3.jpeg";
import astrodiscover4 from "../assets/img/reference/4.jpeg";
import astrodiscover5 from "../assets/img/reference/5.jpeg";

import edumatrix0 from "../assets/img/ieee-formater/homepad.PNG";
import edumatrix1 from "../assets/img/ieee-formater/sidepanel.PNG";
import edumatrix2 from "../assets/img/ieee-formater/output_paper.jpg";
import edumatrix3 from "../assets/img/ieee-formater/0.jpeg";
// import edumatrix3 from "../assets/img/edu-matrix/3.png";
// import edumatrix4 from "../assets/img/edu-matrix/4.png";
// import edumatrix5 from "../assets/img/edu-matrix/5.png";
// import edumatrix6 from "../assets/img/edu-matrix/6.png";
// import edumatrix7 from "../assets/img/edu-matrix/7.png";

import mindmap0 from "../assets/img/mindmap-generator/mindmap-generator.png";
import mindmap1 from "../assets/img/mindmap-generator/capture1.png";
import mindmap2 from "../assets/img/mindmap-generator/capture2.png";
import mindmap3 from "../assets/img/mindmap-generator/capture3.png";
import mindmap4 from "../assets/img/mindmap-generator/capture4.png";

import contribute0 from "../assets/img/contributor-selection/contributor-selection.png";
import contribute1 from "../assets/img/contributor-selection/0.png";
import contribute2 from "../assets/img/contributor-selection/1.png";
import contribute3 from "../assets/img/contributor-selection/2.png";
import contribute4 from "../assets/img/contributor-selection/3.png";
import contribute5 from "../assets/img/contributor-selection/4.png";
import contribute6 from "../assets/img/contributor-selection/5.png"; 
import contribute7 from "../assets/img/contributor-selection/6.png";
import contribute8 from "../assets/img/contributor-selection/9.jpg";

export const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const gallery = [
    {
      title: "Reference Suggestion & Citation Generator",
      imgUrl: astrodiscover5,
      gallery: [
       
        { src: astrodiscover0, alt: "Manual Citation" },
        { src: astrodiscover1, alt: "Manual Citation" },
        { src: astrodiscover2, alt: "Pad page" },
         { src: astrodiscover4, alt: "Add reference" },
        { src: astrodiscover3, alt: "IEEE Citation" },
       
      ],
    },
    {
      title: "IEEE Document Formatting",
      imgUrl: edumatrix3,
      gallery: [
        
        { src: edumatrix0, alt: "Home" },
        { src: edumatrix1, alt: "Option" },
        { src: edumatrix2, alt: "paper" },
       // { src: edumatrix3, alt: "Home" },
        // { src: edumatrix3, alt: "Student Enrolled Course" },
        // { src: edumatrix4, alt: "Course Management by Faculty" },
        // { src: edumatrix5, alt: "Admin Panel" },
        // { src: edumatrix6, alt: "Admin Approval" },
        // { src: edumatrix7, alt: "Financial Transactions" },
      ],
    },
    {
      title: "Mind Map Generation",
      imgUrl: mindmap0,
      gallery: [
        { src: mindmap1, alt: "Mind Map Dashboard" },
        { src: mindmap2, alt: "Generated Mind Map" },
        { src: mindmap3, alt: "Saved Mind Map" },
        { src: mindmap4, alt: "Generated Mind Mapfrom Document" },
      ],
    },
    {
      title: "Contributor Suggestion System",
      imgUrl: contribute0,
      gallery: [
        { src: contribute1, alt: "ClickCart" },
        { src: contribute2, alt: "Log In" },
        { src: contribute3, alt: "Home Page" },
        { src: contribute4, alt: "Single Product Page" },
        { src: contribute5, alt: "Product Comments and Reviews" },
        { src: contribute6, alt: "Navigation Drawer" },
        { src: contribute7, alt: "Product Dynamic Filters" },

      ],
    },
  ];

  const handleImageClick = (gallery) => {
    setCurrentImages(gallery);
    setActiveIndex(0);
    setShowModal(true);
  };

  const handleSlideChange = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Gallery</h2>
                  <p>
                    Welcome to our gallery. Here you’ll find snapshots that
                    showcase the teamwork, creativity, and dedication behind
                    WriteWizard. Each image tells a part of our story, from
                    early sketches to the final product.
                  </p>

                  {/* Displaying all project cards directly */}
                  <Row className="mt-5">
                    {gallery.map((gallery, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...gallery}
                          onImageClick={() => handleImageClick(gallery.gallery)}
                        />
                      );
                    })}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      {/* Gallery Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
        className="custom-modal"
      >
        <Modal.Body className="custom-modal-body">
          {/* Close Button */}
          <button
            type="button"
            className="custom-close-button"
            onClick={() => setShowModal(false)}
          >
            &times;
          </button>

          {/* Image Caption (Alt Text) */}
          {currentImages.length > 0 && (
            <div className="custom-image-caption">
              {currentImages[activeIndex]?.alt || "Image Description"}
            </div>
          )}

          {/* Carousel */}
          <Carousel
            activeIndex={activeIndex}
            onSelect={handleSlideChange}
            nextIcon={
              <span aria-hidden="true" className="custom-carousel-arrow">
                &#x276F;
              </span>
            }
            prevIcon={
              <span aria-hidden="true" className="custom-carousel-arrow">
                &#x276E;
              </span>
            }
          >
            {currentImages.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image.src}
                  alt={image.alt}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </section>
  );
};
