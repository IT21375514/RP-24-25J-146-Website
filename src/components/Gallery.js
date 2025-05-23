import React, { useState } from "react";
import { Container, Row, Col, Modal, Carousel } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import "animate.css";
import TrackVisibility from "react-on-screen";

import astrodiscover0 from "../assets/img/astro-discover/0.png";
import astrodiscover1 from "../assets/img/astro-discover/1.png";
import astrodiscover2 from "../assets/img/astro-discover/2.png";
import astrodiscover3 from "../assets/img/astro-discover/3.png";

import jarvis0 from "../assets/img/jarvis-entertainment/0.png";
import jarvis1 from "../assets/img/jarvis-entertainment/1.png";
import jarvis2 from "../assets/img/jarvis-entertainment/2.png";
import jarvis3 from "../assets/img/jarvis-entertainment/3.png";
import jarvis4 from "../assets/img/jarvis-entertainment/4.png";
import jarvis5 from "../assets/img/jarvis-entertainment/5.png";
import jarvis6 from "../assets/img/jarvis-entertainment/6.png";
import jarvis7 from "../assets/img/jarvis-entertainment/7.png";

import touraround0 from "../assets/img/tour-around/0.png";
import touraround1 from "../assets/img/tour-around/1.png";
import touraround2 from "../assets/img/tour-around/2.png";
import touraround3 from "../assets/img/tour-around/3.png";

import ticketease0 from "../assets/img/ticket-ease/0.png";
import ticketease1 from "../assets/img/ticket-ease/1.png";
import ticketease2 from "../assets/img/ticket-ease/2.png";
import ticketease3 from "../assets/img/ticket-ease/3.png";
import ticketease4 from "../assets/img/ticket-ease/4.png";
import ticketease5 from "../assets/img/ticket-ease/5.png";
import ticketease6 from "../assets/img/ticket-ease/6.png";

import globecarry0 from "../assets/img/globe-carry/0.png";
import globecarry1 from "../assets/img/globe-carry/1.png";
import globecarry2 from "../assets/img/globe-carry/2.png";
import globecarry3 from "../assets/img/globe-carry/3.png";
import globecarry4 from "../assets/img/globe-carry/4.png";
import globecarry5 from "../assets/img/globe-carry/5.png";
import globecarry6 from "../assets/img/globe-carry/6.png";
import globecarry7 from "../assets/img/globe-carry/7.png";

import edumatrix0 from "../assets/img/edu-matrix/0.png";
import edumatrix1 from "../assets/img/edu-matrix/1.png";
import edumatrix2 from "../assets/img/edu-matrix/2.png";
import edumatrix3 from "../assets/img/edu-matrix/3.png";
import edumatrix4 from "../assets/img/edu-matrix/4.png";
import edumatrix5 from "../assets/img/edu-matrix/5.png";
import edumatrix6 from "../assets/img/edu-matrix/6.png";
import edumatrix7 from "../assets/img/edu-matrix/7.png";

import clickcart0 from "../assets/img/click-cart/0.png";
import clickcart1 from "../assets/img/click-cart/1.jpg";
import clickcart2 from "../assets/img/click-cart/2.png";
import clickcart3 from "../assets/img/click-cart/3.png";
import clickcart4 from "../assets/img/click-cart/4.png";
import clickcart5 from "../assets/img/click-cart/5.png";
import clickcart6 from "../assets/img/click-cart/6.png";
import clickcart7 from "../assets/img/click-cart/7.png";
import clickcart8 from "../assets/img/click-cart/8.png";
import clickcart9 from "../assets/img/click-cart/9.png";
import clickcart10 from "../assets/img/click-cart/10.png";

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
      imgUrl: astrodiscover0,
      gallery: [
        { src: astrodiscover0, alt: "Astro Discover" },
        { src: astrodiscover1, alt: "Banner Section" },
        { src: astrodiscover2, alt: "APOD Details" },
        { src: astrodiscover3, alt: "Earth Imagery" },
      ],
    },
    {
      title: "IEEE Document Formatting",
      imgUrl: edumatrix0,
      gallery: [
        { src: edumatrix0, alt: "EduMatrix" },
        { src: edumatrix1, alt: "Login" },
        { src: edumatrix2, alt: "Home Page" },
        { src: edumatrix3, alt: "Student Enrolled Course" },
        { src: edumatrix4, alt: "Course Management by Faculty" },
        { src: edumatrix5, alt: "Admin Panel" },
        { src: edumatrix6, alt: "Admin Approval" },
        { src: edumatrix7, alt: "Financial Transactions" },
      ],
    },
    {
      title: "Mind Map Generation",
      imgUrl: touraround0,
      gallery: [
        { src: touraround0, alt: "TourARound" },
        { src: touraround1, alt: "Splash Screen" },
        { src: touraround2, alt: "AR Nearest Location Detection" },
        { src: touraround3, alt: "AR Navigation" },
      ],
    },
    {
      title: "Contributor Suggestion System",
      imgUrl: contribute8,
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
