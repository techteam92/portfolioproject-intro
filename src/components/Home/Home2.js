import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              {" "} I fell in love with programming and strive to give my best in all my projects.
              <br />
              <br /> {" "} So far, I have successfully satisfied all my clients, and I take great happiness in that achievement.
              <br />
              <br />
              {" "}
              I specialize in &nbsp;
              <i>
                <b className="purple">Web Development, Mobile Development and Trading Automation. </b> And
                While I have completed many projects to date, I am committed to fully realizing my potential and completing even more ambitious endeavors.     
              </i>
              
              <i>
                {"\n "}
                  My fields of interest include building new &nbsp;
                <b className="purple">
                   new web technologies and products
                </b>
                , as well as exploring areas related to Trading.
              </i>
              <br />
              <br />
              {" "}
              Whenever possible, I enhance my skills in product development by utilizing <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Node.js, modern JavaScript frameworks like React.js and Next.js, along with Express.js for backend development,
                </b>
              </i>
              &nbsp;,
              <i>
                <b className="purple"> various databases for data management, Agile methodologies for project execution, and DevOps practices  </b>
              </i>
               to ensure robust, scalable applications that effectively meet user needs and drive business success.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Contact me</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/0x0Zeus"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/haruki-mizuno-6310a6365/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
