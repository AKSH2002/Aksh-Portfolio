import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import laptopImg from "../../Assets/about.png";
import { SiTerraform, SiJenkins, SiKubernetes, SiPrometheus, SiShieldsdotio } from "react-icons/si";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <div className="what-i-do-strip">
          <h2 className="project-heading" style={{ fontSize: "1.5em", paddingBottom: "15px" }}>
            What I <strong className="purple">do</strong>
          </h2>
          <Row style={{ justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            <Col xs="auto" className="what-i-do-item">
              <SiTerraform size={28} />
              <span>IaC</span>
            </Col>
            <Col xs="auto" className="what-i-do-item">
              <SiJenkins size={28} />
              <span>CI/CD</span>
            </Col>
            <Col xs="auto" className="what-i-do-item">
              <SiKubernetes size={28} />
              <span>Kubernetes</span>
            </Col>
            <Col xs="auto" className="what-i-do-item">
              <SiPrometheus size={28} />
              <span>Observability</span>
            </Col>
            <Col xs="auto" className="what-i-do-item">
              <SiShieldsdotio size={28} />
              <span>Security</span>
            </Col>
          </Row>
        </div>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
