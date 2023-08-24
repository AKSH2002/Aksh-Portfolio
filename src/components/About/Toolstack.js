import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiAdobephotoshop,
  SiMicrosoftoffice,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiAnsible,
  SiChef,
  SiApachemaven,
  SiGit,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <h6>Linux</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
        <h6>Git</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <h6>Docker</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
        <h6>Kubernetes</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
        <h6>Jenkins</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnsible />
        <h6>Ansible</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiChef />
        <h6>Chef</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachemaven />
        <h6>Apachemaven</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h6>VS Code</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
        <h6>Photoshop</h6>
      </Col>
    </Row>
  );
}

export default Toolstack;
