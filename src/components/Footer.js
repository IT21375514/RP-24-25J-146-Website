import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/svg/sanjayan.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import "bootstrap-icons/font/bootstrap-icons.css";

// export const Footer = () => {
//   return (
//     <footer className="footer">
//       <Container>
//         <Row className="align-items-center">
//           <MailchimpForm />
//           <Col size={12} sm={6}>
//             <img src={logo} alt="Logo" />
//           </Col>
//           <Col size={12} sm={6} className="text-center text-sm-end">
//             <div className="social-icon">
//               <a href="#"><img src={navIcon1} alt="Icon" /></a>
//               <a href="#"><img src={navIcon2} alt="Icon" /></a>
//               <a href="#"><img src={navIcon3} alt="Icon" /></a>
//             </div>
//             <p>Copyright 2022. All Rights Reserved</p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   )
// }
import React, { useEffect } from "react";

export const Footer = () => {
  // useEffect(() => {
  //   let Pupils = document.getElementsByClassName("footer-pupil");
  //   let pupilsArr = Array.from(Pupils);

  //   let pupilStartPoint = -10;
  //   let pupilRangeX = 20;
  //   let pupilRangeY = 15;

  //   // mouse X
  //   let mouseXStartPoint = 0;
  //   let mouseXEndPoint = window.innerWidth;
  //   let currentXPosition = 0;
  //   let fracXValue = 0;

  //   // mouse Y position
  //   let mouseYEndPoint = window.innerHeight;
  //   let currentYPosition = 0;
  //   let fracYValue = 0;

  //   let mouseXRange = mouseXEndPoint - mouseXStartPoint;

  //   const mouseMove = (event) => {
  //     currentXPosition = event.clientX - mouseXStartPoint;
  //     fracXValue = currentXPosition / mouseXRange;

  //     currentYPosition = event.clientY;
  //     fracYValue = currentYPosition / mouseYEndPoint;

  //     // footer
  //     let pupilXCurrrentPosition = pupilStartPoint + fracXValue * pupilRangeX;
  //     let pupilYCurrrentPosition = pupilStartPoint + fracYValue * pupilRangeY;

  //     // footer
  //     pupilsArr.forEach((curPupil) => {
  //       curPupil.style.transform = `translate(${pupilXCurrrentPosition}px, ${pupilYCurrrentPosition}px)`;
  //     });
  //   };

  //   document.addEventListener("mousemove", mouseMove);

  //   // Cleanup event listener on unmount
  //   return () => {
  //     document.removeEventListener("mousemove", mouseMove);
  //   };
  // }, []);

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-end">
          <Col
            size={12}
            sm={6}
            className="text-sm-start footer-logo"
          >
            <img src={logo} alt="Logo" />
            <div class="info">

              <div class="email">
                <i class="bi bi-envelope"></i>
                <p>sanjayan201@gamil.com</p>
              </div>

              <div class="phone">
                <i class="bi bi-phone"></i>
                <p>+94 76 162 2337</p>
              </div>

              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <p>3, Hubert Place, Modera, Colombo-15, Sri Lanka</p>
              </div>

            </div>
          </Col>
          <Col size={12} sm={6} className="text-sm-end">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
        {/* <Row className="align-items-center">
          <div class="footer-foreground">
            <div class="footercontainer">
              <div class="footer-avatar-container">
                <img
                  src={footerImg}
                  alt="animation-head"
                  class="footer-avatar-img"
                  id="footer-wala-avatar"
                />
                <div class="footer-avatar-face">
                  <div class="footer-avatar-eye footer-left-eye">
                    <div class="footer-pupil"></div>
                  </div>
                  <div class="footer-avatar-eye footer-right-eye">
                    <div class="footer-pupil"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row> */}
      </Container>
    </footer>
  );
};
