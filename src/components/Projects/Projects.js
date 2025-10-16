import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Tesla from "../../Assets/Projects/tesla.png";
import restaurant from "../../Assets/Projects/restaurant.png";
import freelancermarketplace from "../../Assets/Projects/freelancermarketplace.png";
import gptcoding from "../../Assets/Projects/gptcoding.png";
import girlscriptapp from "../../Assets/Projects/girlscriptapp.png";
import backtestingplatform from "../../Assets/Projects/backtestingplatform.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tesla}
              isBlog={false}
              title="Tesla UI Clone"
              description="This project is a user interface replica of the Tesla website, developed using Next.js, Framer Motion, and Tailwind CSS. I utilized Next.js' server-side rendering capabilities to efficiently handle and display large volumes of images and videos, ensuring optimal performance. The implementation of Framer Motion facilitated smooth, engaging animations, while Tailwind CSS provided a responsive and modern design, enhancing the overall user experience."
              demoLink="https://tesla-ui-clone-nine.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurant}
              isBlog={false}
              title="React Restaurant Landing Page"
              description="This project is a dynamic landing page for a restaurant, built using React. It features a clean and modern design, showcasing the restaurant's menu, ambiance, and key information. The responsive layout ensures an optimal viewing experience across devices, while interactive elements enhance user engagement."
              demoLink="https://react-restaurant-landing-page.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={freelancermarketplace}
              isBlog={false}
              title="Freelancer job posting web app"
              description="Talx is an innovative web application designed to streamline job searching, posting, and career guidance. It serves as a powerful platform for job posters, applicants, and individuals seeking career insights. With a modern, responsive design and AI-driven functionalities, Talx offers an enhanced user experience tailored for today's job market."
              demoLink="https://talx.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gptcoding}
              isBlog={false}
              title="gpt-5-coding-examples"
              description="This project features a curated collection of demo applications generated entirely from a single GPT-5 prompt, without any manual coding. These demos highlight the model’s capabilities in rapidly scaffolding websites, front-end applications, games, and interactive UIs based on natural language descriptions. They serve as inspiration for you to explore and develop your own ideas."
              demoLink="https://gpt5-coding-examples.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={girlscriptapp}
              isBlog={false}
              title="App Promotional Website"
              description="This is a promotional website designed to showcase the features and benefits of a mobile application developed for the Android platform. The demo website highlights the app's uses and qualities, providing visitors with an engaging overview of its capabilities."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://app-promotional-website.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={backtestingplatform}
              isBlog={false}
              title="Backtesting Platform"
              description="Traders Casa is a comprehensive trading platform designed for both novice and experienced traders. The application offers a user-friendly interface for signing in and accessing various trading tools and resources. Users can manage their trading accounts, analyze market trends, and execute trades efficiently. With a focus on security and performance, Traders Casa aims to enhance the trading experience by providing valuable insights and real-time data."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://beta.traderscasa.com/" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
