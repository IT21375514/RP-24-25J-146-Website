import meter1 from "../assets/img/my-image.jpg"; // Replace with your preferred image
import colorSharp from "../assets/img/image (1).png";

export const AboutMe = () => {
  const openURL = () => {
    const url = require("../assets/cv/Sanjayan - CV.pdf"); // Ensure the file is in the correct path
    window.open(url, "_blank");
  };

  return (
    <section className="about-me" id="aboutme">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="about-me-bx wow zoomIn">
              <div className="row align-items-center">
                {/* Right: Text */}
                <div className="col-md-12">
                  <div className="text-container">
                    <h2>What is WriteWizard?</h2>
                    <p>
                      WriteWizard is an AI-powered, real-time collaborative
                      document editing tool tailored for academic and research
                      writing. It brings together intelligent citation
                      generation, automated document formatting, semantic mind
                      mapping, and expertise-driven contributor
                      recommendations—all within a unified writing environment.
                    </p>

                    <p>
                      The platform streamlines the academic writing process by
                      addressing common pain points such as manual citation
                      handling, inconsistent formatting, and scattered
                      collaboration. With features like a contextual reference
                      suggester, IEEE-compliant formatting converter, AI-based
                      mind map visualizer, and contributor matching based on
                      technical expertise, WriteWizard empowers student groups,
                      educators, and researchers to focus on content creation
                      instead of administrative overhead.
                    </p>

                    <p>
                      Designed for the modern academic ecosystem, WriteWizard
                      enhances productivity, ensures consistency, and fosters a
                      more efficient, collaborative approach to scholarly
                      documentation.
                    </p>
                  </div>
                  <div className="about-me-button-container d-flex">
                    <button
                      className="website-btn"
                      id="website-btn"
                      onClick={openURL}
                    >
                      <div className="sign">
                        <svg viewBox="0 0 640 512">
                          <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" />
                        </svg>
                      </div>

                      <div className="text-website">Open WriteWizard</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left-about-me"
        src={colorSharp}
        alt="Background"
      />
    </section>
  );
};
