import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import AnimationLottie from "../components/animation-lottie.js";
import lottieFile from "../assets/lottie/document.json";
import lottie from "lottie-web";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 50);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Smarter Academic Writing for Research Teams",
  ];
  const period = 500;

  useEffect(() => {
    const lottieInstance = lottie.loadAnimation({
      container: document.getElementById("lottie-background"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../assets/animations/Animation - 1733590393290.json"),
    });

    return () => {
      lottieInstance.destroy();
    };
  }, []);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <div id="lottie-background" className="lottie-background"></div>
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to the Future</span>
                  <article
                    id="hello-friend"
                    data-aos="fade-up"
                    data-aos-delay="0"
                  >
                    <span className="name-inline">
                      <h1 className="jello">W</h1>
                      <h1 className="jello">r</h1>
                      <h1 className="jello">i</h1>
                      <h1 className="jello">t</h1>
                      <h1 className="jello">e</h1>
                      <h1 className="jello">W</h1>
                      <h1 className="jello">i</h1>
                      <h1 className="jello">z</h1>
                      <h1 className="jello">a</h1>
                      <h1 className="jello">r</h1>
                      <h1 className="jello">d</h1>
                    </span>
                  </article>

                  <h3>
                    <h3 className="txt-rotate">
                      <h3 className="wrap">{text}</h3>
                    </h3>
                  </h3>
                  <button
                    onClick={() => {
                      const element = document.getElementById("connect");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <AnimationLottie animationPath={lottieFile} speed={0.5} />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
