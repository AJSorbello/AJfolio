import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">About Me</span>
          <span className="heading-sec__sub">
            I am AJ Sorbello, a dedicated Full Stack Developer who thrives in
            collaborative environments and enjoys being a team player. With a
            passion for creating high-performance websites and applications, I
            bring expertise in both front-end and back-end development to ensure
            seamless and efficient solutions tailored to meet clients' needs. My
            focus on delivering exceptional user experiences and robust
            functionalities drives success through innovation and meticulous
            attention to detail. Let's work together to bring your vision to
            life and achieve outstanding results.
          </span>
        </h2>

        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__section-title">
              Background &amp; Experience
            </h3>
            <div className="about__content-details">
              <ul className="about__content-details-list">
                <li className="about__content-details-item">
                  Strong background in both front-end and back-end technologies.
                </li>
                <li className="about__content-details-item">
                  Developed a wide range of digital products for business and
                  consumer use.
                </li>
                <li className="about__content-details-item">
                  Specialize in creating intuitive and engaging user interfaces.
                </li>
                <li className="about__content-details-item">
                  Ensuring high-quality results that meet the needs of clients
                  and users alike.
                </li>
                <li className="about__content-details-item">
                  Experience includes working on remote projects.
                </li>
                <li className="about__content-details-item">
                  Collaborating with talented developers.
                </li>
                <li className="about__content-details-item">
                  Continuously expanding my skillset to stay updated with the
                  latest technologies and trends in web development.
                </li>
              </ul>
            </div>
          </div>

          <div className="about__content-skills">
            <h3 className="about__section-title">
              My Skills
            </h3>
            <div className="skills-scrollable-container">
              <div className="skills">
                <div className="skills__category">
                  <h2>Languages</h2>
                  <div className="skills__category-content">
                    <div className="skills__skill">JavaScript</div>
                    <div className="skills__skill">TypeScript</div>
                    <div className="skills__skill">Python</div>
                    <div className="skills__skill">HTML</div>
                    <div className="skills__skill">CSS</div>
                    <div className="skills__skill">SASS</div>
                    <div className="skills__skill">SCSS</div>
                  </div>
                </div>
                <div className="skills__category">
                  <h2>Frameworks &amp; Libraries</h2>
                  <div className="skills__category-content">
                    <div className="skills__skill">React</div>
                    <div className="skills__skill">Node.js</div>
                    <div className="skills__skill">Bootstrap</div>
                    <div className="skills__skill">Firebase (Firestore, Auth)</div>
                    <div className="skills__skill">Angular (RxJS, Angular Material)</div>
                    <div className="skills__skill">MERN Stack (Express, MongoDB)</div>
                    <div className="skills__skill">React-Redux</div>
                    <div className="skills__skill">React Native</div>
                    <div className="skills__skill">jQuery</div>
                    <div className="skills__skill">Popper.js</div>
                    <div className="skills__skill">Django</div>
                  </div>
                </div>
                <div className="skills__category">
                  <h2>Tools &amp; Platforms</h2>
                  <div className="skills__category-content">
                    <div className="skills__skill">GIT</div>
                    <div className="skills__skill">RESTful API</div>
                    <div className="skills__skill">Google Calendar API</div>
                    <div className="skills__skill">AWS Lambda</div>
                    <div className="skills__skill">Charting libraries</div>
                    <div className="skills__skill">Expo CLI</div>
                    <div className="skills__skill">Postman</div>
                    <div className="skills__skill">Android/iOS</div>
                  </div>
                </div>
                <div className="skills__category">
                  <h2>Testing</h2>
                  <div className="skills__category-content">
                    <div className="skills__skill">TDD (Test-Driven Development)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
