import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/svg/writewizard-logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useEffect } from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-end">
          <Col size={12} sm={6} className="text-sm-start footer-logo">
            <img src={logo} alt="Logo" />
            <div className="info">
              <div className="email">
                <i className="bi bi-envelope"></i>
                <a href="mailto:sanjayan201@gmail.com">sanjayan201@gmail.com</a>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <a href="tel:+94761622337">+94 76 162 2337</a>
              </div>

              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=3+Hubert+Place+Modera+Colombo-15+Sri+Lanka"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  3, Hubert Place, Modera, Colombo-15, Sri Lanka
                </a>
              </div>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/sanjayan-c/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="Sanjayan Linedin Profile" />
              </a>
              <a
                href="https://github.com/IT21375514"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="Sanjayan GitHub Profile" />
              </a>
              <a
                href="https://www.instagram.com/l_o_l_l_y_g_a_g_201"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="Sanjayan Instagram Profile" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
