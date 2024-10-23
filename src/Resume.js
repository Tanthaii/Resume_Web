import React from "react";
import "./Resume.css";
import phoneIcon from "./images/telephone-symbol-button.png";
import emailIcon from "./images/email.png";
import githubIcon from "./images/github.png";
import locationIcon from "./images/location-sign.png";
import profile from "./images/profile-image.jpg";

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="header">
        <div className="profile-section">
          <img src={profile} alt="Profile" className="profile-image" />
        </div>
        <div className="name-and-contact-section">
          <h1 className="name">TANTHAI HAMALUCK</h1>
        </div>
      </div>

      <div className="main-content">
        <div className="left-column">
          <section className="about">
            <h2>ABOUT ME</h2>
            <p>
              I am a dedicated computer science student with a foundation in web
              development and programming. I am seeking an opportunity to apply
              my technical skills and expand my knowledge in real-world
              situations.
            </p>
          </section>

          <section className="education">
            <h2>EDUCATION</h2>
            <ul>
              <li>
                Triamudomsuksanomklaokunnatee School <br />
                <span>(2016 - 2020)</span>
              </li>
              <li>
                Suan Sunandha Rajabhat University <br />
                <span>(2020 - 2024)</span>
              </li>
            </ul>
          </section>

          <section className="skills">
            <h2>SKILLS</h2>
            <div className="skill-category">
              <h3>PROGRAMMING LANGUAGES</h3>
              <ul>
                <li>Python, Java, JavaScript</li>
                <li>HTML, CSS</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>FRAMEWORKS & LIBRARIES</h3>
              <ul>
                <li>React, Next.js, Tailwind CSS</li>
                <li>TensorFlow, Bootstrap</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>DATABASES</h3>
              <ul>
                <li>Firebase, MySQL</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>TOOLS & TECHNOLOGIES</h3>
              <ul>
                <li>Visual Studio Code, Git</li>
              </ul>
            </div>
          </section>
        </div>

        <div className="right-column">
          <div className="contact-info">
            <ul className="contact-list">
              <li>
                <span>
                  <img src={phoneIcon} alt="Phone" className="icon" />
                  063-529-9802
                </span>
                <span>
                  <img src={emailIcon} alt="Email" className="icon" />
                  tan.tanthai07@gmail.com
                </span>
              </li>
              <li>
                <span>
                  <img src={githubIcon} alt="GitHub" className="icon" />
                  <a
                    href="https://github.com/Tanthaiii"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.github.com/Tanthaii
                  </a>
                </span>
                <span>
                  <img src={locationIcon} alt="Location" className="icon" />
                  90/29 M.5, Lam Luk Ka, Pathum Thani 12150
                </span>
              </li>
            </ul>
          </div>

          <section className="projects">
            <h2>PROJECTS</h2>
            <div className="project">
              <h3>PestDetect</h3>
              <p>
                Image Processing Website for Pest Identification in Rice Fields
              </p>
              <h4>Model Development</h4>
              <ul>
                <li>
                  Developed a CNN using Keras on TensorFlow to classify pest
                  insects.
                </li>
                <li>
                  Applied image resizing and augmentation to improve
                  performance.
                </li>
                <li>
                  Trained and evaluated the model using accuracy, precision, and
                  recall.
                </li>
              </ul>
              <h4>Website Development</h4>
              <ul>
                <li>
                  Built a front-end with React and Next.js for real-time image
                  uploads.
                </li>
                <li>
                  Created an API using Node.js and Express to connect the CNN
                  model. Used Firebase for user data management.
                </li>
              </ul>
            </div>

            <div className="project">
              <h3>Shrimp Yield Forecasting in Thailand</h3>
              <p>
                Developed a forecasting model to predict shrimp production using
                environmental data.
              </p>
              <ul>
                <li>
                  Utilized Python libraries (NumPy, pandas, seaborn, matplotlib)
                  for data analysis and visualization.
                </li>
                <li>
                  Created data visualizations and applied forecasting techniques
                  to predict future production trends.
                </li>
              </ul>
            </div>

            <div className="project">
              <h3>Things to Know in Georgia</h3>
              <p>Website providing information about Georgia.</p>
              <ul>
                <li>
                  Developed the website using HTML5 and Bootstrap for the
                  front-end.
                </li>
              </ul>
            </div>

            <div className="project">
              <h3>Login Page</h3>
              <p>Login Page with React and Tailwind CSS.</p>
              <ul>
                <li>
                  Styled the page with Tailwind CSS for a modern and clean UI
                  design.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
