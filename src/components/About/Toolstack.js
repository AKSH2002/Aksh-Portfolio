import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiAnsible,
  SiTerraform,
  SiAmazonaws,
  SiGitlab,
  SiGit,
  SiNginx,
  SiHelm,
  SiPrometheus,
  SiGrafana,
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
        <SiHelm />
        <h6>Helm</h6>
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
        <SiTerraform />
        <h6>Terraform</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <h6>AWS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab />
        <h6>GitLab</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNginx />
        <h6>Nginx</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrometheus />
        <h6>Prometheus</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGrafana />
        <h6>Grafana</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h6>VS Code</h6>
      </Col>
    </Row>
  );
}

export default Toolstack;
