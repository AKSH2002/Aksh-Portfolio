import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aksh Darji </span>
            from <span className="purple"> Gujrat, India.</span>
            <br />
            <br />🚀I am currently pursuing Degree Engineering form Gujarat Technological University. Highly motivated and detail-oriented computer science professional with a passion for developing innovative solutions.
            <br />
            <br />
            💻 Committed to staying up-to-date with industry trends and advancements in technology. Seeking a challenging and dynamic role in a collaborative work environment.
            <br />
            <br />
            🎉 Let's build something amazing (and have a blast while we're at it).
            If you are looking for a driven and motivated software engineer with a passion for DevOps, cybersecurity, computer networks, and more, I would love to connect and explore potential opportunities. Let's build something amazing together!
            <br />
            <br />
            Apart from coding skills, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "IT engineers don't just solve problems, they create possibilities."{" "}
          </p>
          <footer className="blockquote-footer">Aksh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
