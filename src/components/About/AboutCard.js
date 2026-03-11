import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Aksh Darji</span> from <span className="purple">Gujarat, India.</span>
            <br />
            <br />
            🚀 I'm a <strong>DevOps Engineer</strong>, building and maintaining cloud infrastructure and deployment automation on AWS. I work with IaC (Terraform/OpenTofu), Ansible, Kubernetes-based tenant deployments, monitoring, and security. I care about automation that reduces toil and systems that scale.
            <br />
            <br />
            💻 I graduated with a BE in Information Technology from Gujarat Technological University. My path went from development (Spring Boot, APIs, CI/CD) to full-time DevOps and platform engineering. I stay up to date with industry trends and love tackling infrastructure and automation challenges.
            <br />
            <br />
            🎉 If you're looking for a DevOps engineer who bridges infra, automation, and security—let's connect and build something reliable together.
            <br />
            <br />
            Apart from coding and infra, things I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Turning chaos into order, one pipeline at a time."{" "}
          </p>
          <footer className="blockquote-footer">Aksh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
