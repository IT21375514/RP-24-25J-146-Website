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

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: "Astro Discover",
      description: "React, Bootstrap and Firebase",
      imgUrl: astrodiscover0,
      paragraph:
        "Astro Discover is a Node.js project using React, Bootstrap, and Firebase for secure authentication and data storage. It integrates React Leaflet for interactive maps and React Slick for seamless carousels. The app offers an intuitive interface to explore NASA APIs, including the Astronomy Picture of the Day (APOD) and Earth Imagery. Users can view APOD details like date, explanation, and media type, and access satellite images by entering latitude, longitude, and date parameters.",
      gallery: [
        { src: astrodiscover0, alt: "Astro Discover" },
        { src: astrodiscover1,alt: "Banner Section",},
        { src: astrodiscover2, alt: "APOD Details" },
        { src: astrodiscover3, alt: "Earth Imagery" },
      ],
    },
    {
      title: "EduMatrix",
      description: "React, Spring Boot and MongoDB (Microservice)",
      imgUrl: edumatrix0,
      paragraph:
        "EduMatrix is an online learning platform with a microservice architecture. Featuring roles for students, instructors, and admins, it offers a React-based web interface with a Spring Boot and MongoDB backend powered by RESTful APIs. Learners browse, enroll, and access courses, while instructors manage content and enrollments. Admins handle course approvals, payment gateway integration, and financial transactions, ensuring a robust and efficient learning ecosystem.",
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
      title: "TourARound",
      description: "Kotlin (Android) and SQL",
      imgUrl: touraround0,
      paragraph:
        "TourARound is an Android Kotlin project enhancing location-based experiences with augmented reality (AR). My contributions include location retrieval, navigation, emergency contact integration, AR views, translation, and object detection, enabling users to explore nearby locales effortlessly. Focused on efficiency and user engagement, TourARound sets new standards in location-based mobile applications with its advanced and user-friendly design.",
      gallery: [
        { src: touraround0, alt: "TourARound" },
        { src: touraround1, alt: "Splash Screen" },
        { src: touraround2, alt: "AR Nearest Location Detection" },
        { src: touraround3, alt: "AR Navigation" },
      ],
    },
    {
      title: "ClickCart",
      description: "Java (Android), .Net and MongoDB",
      imgUrl: clickcart0,
      paragraph:
        "ClickCart is an end-to-end e-commerce system with client-server architecture, featuring a mobile app for customers and a web app for back-office operations. Built using Java (Android), .NET for central web services, and MongoDB, it supports user, product, order, inventory, and vendor management. Customers can browse products, purchase, track orders, and provide vendor feedback, while the web app streamlines tasks, ensuring a seamless e-commerce experience.",
      gallery: [
        { src: clickcart0, alt: "ClickCart" },
        { src: clickcart1, alt: "Log In" },
        { src: clickcart2, alt: "Home Page" },
        { src: clickcart3, alt: "Single Product Page" },
        { src: clickcart4, alt: "Product Comments and Reviews" },
        { src: clickcart5, alt: "Navigation Drawer" },
        { src: clickcart6, alt: "Product Dynamic Filters" },
        { src: clickcart7, alt: "Check Out" },
        { src: clickcart8, alt: "My Orders List" },
        { src: clickcart9, alt: "Single My Order" },
        { src: clickcart10, alt: "My Comments List" },
      ],
    },
    {
      title: "GlobeCarry",
      description: "Kotlin (Android) and SQL",
      imgUrl: globecarry0,
      paragraph:
        "GlobeCarry is an Android Kotlin project revolutionizing cross-border logistics through peer-to-peer parcel delivery. My role focuses on enhancing user experience by spearheading a two-way communication system and managing secure, efficient connections between senders and travelers. I ensure safe, timely global parcel deliveries while advancing the project's mission to redefine international shipping with an intuitive, user-friendly platform.",
      gallery: [
        { src: globecarry0, alt: "GlobeCarry" },
        { src: globecarry1, alt: "Log In" },
        { src: globecarry2, alt: "Pending User Deliveries as Traveller" },
        { src: globecarry3, alt: "Parcel Tracking" },
        { src: globecarry4, alt: "Delivered User Deliveries as Traveller" },
        { src: globecarry5, alt: "User Chats" },
        { src: globecarry6, alt: "Two-Way Chat Communication" },
        { src: globecarry7, alt: "Interactive Loading Screen" },
      ],
    },
    {
      title: "TicketEase",
      description: "Kotlin (Android) and SQL",
      imgUrl: ticketease0,
      paragraph:
        "TicketEase is an Android Kotlin project for dynamic transport management, addressing travelers', ticket inspectors', and project managers' needs. My contributions enhance the customer experience by refining user registration, integrating QR codes, managing virtual wallets, providing schedule access, and simplifying booking. TicketEase offers a robust, user-friendly platform, streamlining travel management and ensuring an efficient, user-centric solution for seamless transport.",
      gallery: [
        { src: ticketease0, alt: "TicketEase" },
        { src: ticketease1, alt: "Sign Up" },
        { src: ticketease2, alt: "My Bookings" },
        { src: ticketease3, alt: "Virtual Wallet" },
        { src: ticketease4, alt: "My Profile" },
        { src: ticketease5, alt: "User QR Code" },
        { src: ticketease6, alt: "Search and Bookings" },
      ],
    },
    {
      title: "Jarvis Entertainment",
      description: ".NET, Bootstrap and SQL",
      imgUrl: jarvis0,
      paragraph:
        "I led the development of Jarvis Entertainment, a .NET-based theater management system built with Bootstrap in Visual Studio. The platform streamlines ticket booking, show scheduling, canteen, parking, and employee management. My role included optimizing inventory management, resolving issues, and implementing dynamic reports, enhancing processes and ensuring a seamless customer experience with improved efficiency and service delivery.",
      gallery: [
        { src: jarvis0, alt: "Jarvis Entertainment" },
        { src: jarvis1, alt: "Maintenance Home" },
        { src: jarvis2, alt: "Inventory Item" },
        { src: jarvis3, alt: "Monthly Financial Report" },
        { src: jarvis4, alt: "Issue Reporting" },
        { src: jarvis5, alt: "Issue Report Update" },
        { src: jarvis6, alt: "Closed Maintenance Report" },
        { src: jarvis7, alt: "New Maintenance Report" },
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
    <section className="project py-5" id="projects">
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
                  <h2>Projects</h2>
                  <p>
                    Explore a curated collection showcasing my dedication to
                    creativity and technical proficiency. From dynamic web
                    designs to innovative mobile applications, each project
                    serves as a testament to my passion for both front-end and
                    back-end development.
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
