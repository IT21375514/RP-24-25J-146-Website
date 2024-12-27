// Bio.js
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import profile from "../assets/img/image-placeholder.png";
import TrackVisibility from "react-on-screen";

export const Bio = () => {
  return (
    <section className="bio" id="bio">
      <div className="container">
        <div className="row">
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__fadeIn" : ""}
              >
                <div className="col-12">
                  <div className="row align-items-center bio-bx wow zoomIn">

                      {/* Left Column */}
                      <div className="col-md-4 mt-3 mb-3 bio-image-container">
                        <div className="bio-image-shadow">
                          <img
                            src={profile}
                            alt="Sanjayan Chanthirasegaran - Full-Stack Developer"
                            className="bio-image"
                          />
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="col-md-8 mt-3 mb-3 bio-text">
                        <h2>Bio Title</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer nec odio. Praesent libero. Sed cursus
                          ante dapibus diam.
                        </p>
                      </div>
                  </div>
                </div>
              </div>
            )}
          </TrackVisibility>
        </div>
      </div>
      <img className="background-image-left-bio" src={colorSharp} alt="Image" />
    </section>
  );
};
