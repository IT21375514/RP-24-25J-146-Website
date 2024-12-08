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

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);

  const projects = [
    {
      title: "Astro Discover",
      description: "React, Bootstrap and Firebase",
      imgUrl: astrodiscover0,
      paragraph: "Astro Discover is a Node.js project using React, Bootstrap, and Firebase for secure authentication and data storage. It integrates React Leaflet for interactive maps and React Slick for seamless carousels. The app offers an intuitive interface to explore NASA APIs, including the Astronomy Picture of the Day (APOD) and Earth Imagery. Users can view APOD details like date, explanation, and media type, and access satellite images by entering latitude, longitude, and date parameters.",
      gallery: [astrodiscover0, astrodiscover1, astrodiscover2, astrodiscover3],
    },
    {
      title: "Jarvis Entertainment",
      description: ".NET, Bootstrap and SQL",
      imgUrl: jarvis0,
      paragraph: "I led the development of Jarvis Entertainment, a .NET-based theater management system built with Bootstrap in Visual Studio. The platform streamlines ticket booking, show scheduling, canteen, parking, and employee management. My role included optimizing inventory management, resolving issues, and implementing dynamic reports, enhancing processes and ensuring a seamless customer experience with improved efficiency and service delivery.",
      gallery: [jarvis0, jarvis1, jarvis2, jarvis3, jarvis4, jarvis5, jarvis6, jarvis7],
    },
    {
      title: "TourARound",
      description: "Kotlin (Android)",
      imgUrl: touraround0,
      paragraph: "TourARound is an Android Kotlin project enhancing location-based experiences with augmented reality (AR). My contributions include location retrieval, navigation, emergency contact integration, AR views, translation, and object detection, enabling users to explore nearby locales effortlessly. Focused on efficiency and user engagement, TourARound sets new standards in location-based mobile applications with its advanced and user-friendly design.",
      gallery: [touraround0, touraround1, touraround2, touraround3],
    },
    {
      title: "TicketEase",
      description: "Kotlin (Android)",
      imgUrl: ticketease0,
      paragraph: "TicketEase is an Android Kotlin project for dynamic transport management, addressing travelers', ticket inspectors', and project managers' needs. My contributions enhance the customer experience by refining user registration, integrating QR codes, managing virtual wallets, providing schedule access, and simplifying booking. TicketEase offers a robust, user-friendly platform, streamlining travel management and ensuring an efficient, user-centric solution for seamless transport.",
      gallery: [ticketease0, ticketease1, ticketease2, ticketease3, ticketease4, ticketease5, ticketease6],
    },
    {
      title: "GlobeCarry",
      description: "Kotlin (Android)",
      imgUrl: globecarry0,
      paragraph: "GlobeCarry is an Android Kotlin project revolutionizing cross-border logistics through peer-to-peer parcel delivery. My role focuses on enhancing user experience by spearheading a two-way communication system and managing secure, efficient connections between senders and travelers. I ensure safe, timely global parcel deliveries while advancing the project's mission to redefine international shipping with an intuitive, user-friendly platform. ",
      gallery: [globecarry0, globecarry1, globecarry2, globecarry3, globecarry4, globecarry5, globecarry6, globecarry7],
    },
    {
      title: "Exhibition",
      description: "Art & Design",
      imgUrl: astrodiscover0,
      paragraph: "A collaborative exhibition highlighting emerging designers' works.",
      gallery: [astrodiscover0, astrodiscover1, astrodiscover2, astrodiscover3],
    },
  ];

  const handleImageClick = (gallery) => {
    setCurrentImages(gallery);
    setShowModal(true);
  };

  return (
    <section className="project py-5" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                  Explore a curated collection showcasing my dedication to creativity and technical proficiency. From dynamic web designs to innovative mobile applications, each project serves as a testament to my passion for both front-end and back-end development.
                  </p>

                  {/* Displaying all project cards directly */}
                  <Row className="mt-5">
                    {projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                          onImageClick={() => handleImageClick(project.gallery)}
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
      className="custom-modal" // Add a class to the modal for external styling
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

  {/* Carousel */}
  <Carousel
    nextIcon={
      <span aria-hidden="true" className="custom-carousel-arrow">
        &#x276F; {/* Unicode for ">" */}
      </span>
    }
    prevIcon={
      <span aria-hidden="true" className="custom-carousel-arrow">
        &#x276E; {/* Unicode for "<" */}
      </span>
    }
  >
    {currentImages.map((image, index) => (
      <Carousel.Item key={index}>
        <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} />
      </Carousel.Item>
    ))}
  </Carousel>
</Modal.Body>

    </Modal>
    </section>
  );
};
