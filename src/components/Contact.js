import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import footerImg from "../assets/img/footer-avatar-sanjayan.png";
import DOMPurify from "dompurify";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const [errors, setErrors] = useState({});
  const [recaptchaToken, setRecaptchaToken] = useState(""); 

  const onFormUpdate = (category, value) => {
    // Sanitize input to prevent XSS
    const sanitizedValue = DOMPurify.sanitize(value);
    setFormDetails({
      ...formDetails,
      [category]: sanitizedValue,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formDetails.firstName) {
      newErrors.firstName = "First name is required.";
    }
    if (!formDetails.email || !emailPattern.test(formDetails.email)) {
      newErrors.email = "Valid email address is required.";
    }
    if (!formDetails.message) {
      newErrors.message = "Message is required.";
    }
    if (!recaptchaToken) {
      newErrors.recaptcha = "Please complete the reCAPTCHA.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setButtonText("Sending...");
    try {
      const response = await fetch("https://sanjayan-portfolio-email-service.vercel.app/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ ...formDetails, recaptchaToken }),
      });
      const result = await response.json();
      setButtonText("Send");
      setFormDetails(formInitialDetails);

      if (result.code === 200) {
        setStatus({ success: true, message: "Message sent successfully" });
      } else {
        setStatus({ success: false, message: "Something went wrong, please try again later." });
      }
    } catch (error) {
      setStatus({ success: false, message: "An error occurred. Please try again later." });
    }
  };

  useEffect(() => {
    const loadRecaptcha = () => {
      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    };

    window.onRecaptchaLoad = () => {
      window.grecaptcha.render("recaptcha-container", {
        sitekey: "6LeLUZcqAAAAAN6W1duz9EXbw3nvSxKp7-TIc1gM",
        callback: (token) => setRecaptchaToken(token),
        "expired-callback": () => setRecaptchaToken(""),
      });
    };

    loadRecaptcha();
  }, []);


  useEffect(() => {
    let Pupils = document.getElementsByClassName("footer-pupil");
    let pupilsArr = Array.from(Pupils);
  
    let pupilStartPoint = -10;
    let pupilRangeY = 15; // Pupil Y range remains constant
  
    // mouse X
    let mouseXStartPoint = 0;
    let mouseXEndPoint = window.innerWidth;
    let currentXPosition = 0;
    let fracXValue = 0;
  
    // mouse Y position
    let mouseYEndPoint = window.innerHeight;
    let currentYPosition = 0;
    let fracYValue = 0;
  
    let mouseXRange = mouseXEndPoint - mouseXStartPoint;
  
    const getPupilRangeX = () => {
      if (window.innerWidth <= 720) {
        return 20;
      } else if (window.innerWidth <= 960) {
        return 25;
      } else {
        return 30;
      }
    };
  
    const mouseMove = (event) => {
      let pupilRangeX = getPupilRangeX();
  
      currentXPosition = event.clientX - mouseXStartPoint;
      fracXValue = currentXPosition / mouseXRange;
  
      currentYPosition = event.clientY;
      fracYValue = currentYPosition / mouseYEndPoint;
  
      let pupilXCurrrentPosition = pupilStartPoint + fracXValue * pupilRangeX;
      let pupilYCurrrentPosition = pupilStartPoint + fracYValue * pupilRangeY;
  
      pupilsArr.forEach((curPupil) => {
        curPupil.style.transform = `translate(${pupilXCurrrentPosition}px, ${pupilYCurrrentPosition}px)`;
      });
    };
  
    const handleResize = () => {
      mouseXEndPoint = window.innerWidth;
      mouseYEndPoint = window.innerHeight;
      mouseXRange = mouseXEndPoint - mouseXStartPoint;
    };
  
    document.addEventListener("mousemove", mouseMove);
    window.addEventListener("resize", handleResize);
  
    // Cleanup event listeners on unmount
    return () => {
      document.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className="footer-foreground">
                  <div className="footercontainer">
                    <div className="footer-avatar-container">
                      <img
                        src={footerImg}
                        alt="animation-head"
                        className={`${
                          isVisible ? "animate__animated animate__zoomIn" : ""
                        } footer-avatar-img`}
                        id="footer-wala-avatar"
                      />

                      <div
                        className={`${
                          isVisible ? "animate__animated animate__zoomIn" : ""
                        } footer-avatar-face`}
                      >
                        <div className="footer-avatar-eye footer-left-eye">
                          <div className="footer-pupil"></div>
                        </div>
                        <div className="footer-avatar-eye footer-right-eye">
                          <div className="footer-pupil"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) =>
                            onFormUpdate("firstName", e.target.value)
                          }
                        />
                        {errors.firstName && (
                          <p className="error-text">{errors.firstName}</p>
                        )}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) =>
                            onFormUpdate("lastName", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                        {errors.email && (
                          <p className="error-text">{errors.email}</p>
                        )}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) =>
                            onFormUpdate("phone", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        ></textarea>
                        {errors.message && (
                          <p className="error-text">{errors.message}</p>
                        )}
                      </Col>
                      {status.message && (
                        <Col size={12} sm={12} className="px-1">
                          <p
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                      <Col size={12} sm={12} className="px-1">
                        <div id="recaptcha-container"></div>
                        {errors.recaptcha && <p className="error-text">{errors.recaptcha}</p>}
                      </Col>
                      <Col size={12} sm={12} className="px-1">
                        <div className="submit-button-container">
                          <button className="submit-button" type="submit">
                            <span>{buttonText}</span>
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};