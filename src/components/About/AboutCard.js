import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Haruki Mizuno </span>
            from <span className="purple"> Sendai, Japan.</span>
            <br />
            I'm a freelancer specializing in Web, Mobile and Trading automation.
            <br />
            I received my Bachelor of Science (IMSc) degree in Software Development from the University of Cumberland.
            <br />
            <br />
            Things I like to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Programming
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Walking
            </li>
            <li className="about-activity">
              <ImPointRight /> Thinking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Make lots of friends and change your life!"{" "}
          </p>
          <footer className="blockquote-footer">Haruki Mizuno</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
