import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ServiceProvider from "../../Assets/Projects/service.png";
import DoNation from "../../Assets/Projects/blood.png";
import SafetyApp from "../../Assets/Projects/app.png";

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
              imgPath={DoNation}
              isBlog={false}
              title="Image Upload"
              description="Developed an automated CI/CD pipeline for an ImageUpload project using Node.js. Containerized the application with Docker for consistent deployment. Orchestrated Jenkins for building, testing, and auto-deploying Docker images"
              ghLink="https://github.com/AKSH2002/DoNation-DE-Project"
              demoLink="https://aksh2002.github.io/DoNation-DE-Project/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DoNation}
              isBlog={false}
              title="Online Blood Donation System (DoNation)"
              description="Website proposes a Web 3.0 site (React Js) which will connect all blood banks with people as well as with hospitals. This proposed system Notify the user for emergency requirement of blood and blood camps using Firebase type cloud database, distributed ledger (blockchain) to securely manage the data, provide a good system interface to easily track locations needed & immediate request/response feature to meet medical requirements in emergency."
              ghLink="https://github.com/AKSH2002/DoNation-DE-Project"
              demoLink="https://aksh2002.github.io/DoNation-DE-Project/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SafetyApp}
              isBlog={false}
              title="RAKSHA-Women-Safety-App"
              description="Reverse Engineering on RAKSHA-Women-Safety-App build with React Native which is available in playstore. It is all about women's safety involves strategies, practices and policies which aim to reduce gender-based violence.

              This App is designed specifically for woman and child. These apps can provide peace of mind, immediate communication, and access to help in an emergency"
              ghLink="https://github.com/AKSH2002/RAKSHA-Women-Safety-App"
              demoLink="https://github.com/AKSH2002/RAKSHA-Women-Safety-App/blob/master/Home%20Screen.png?raw=true"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ServiceProvider}
              isBlog={false}
              title="Professional Services Provider"
              description="Professional Service Provider build with html,css and javascript, it is a website which provide service of Software Engineers, Accountants, Researcher, Advertising, Financial advisers, Technicians, Bloggers, Photographers, Project managers, labors, etc. Customers can book the service provider. Here service provider can be provided his service at reasonable price at any time and selected location. A customer also has feature to rating the service provider's service so that another customer's benefit."
              ghLink="https://github.com/AKSH2002/Professional-Service-Provider"
              demoLink="https://aksh2002.github.io/Professional-Service-Provider/"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
