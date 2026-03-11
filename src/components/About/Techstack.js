import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiJava,
  DiCss3,
  DiHtml5,
  DiNodejs,
  DiMongodb,
  DiMysql,
  DiPython,
  DiBootstrap,
  DiGit,
} from "react-icons/di";
import {
  SiExpress,
  SiTerraform,
  SiAmazonaws,
  SiPostgresql,
  SiRedis,
  SiGitlab,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiAnsible,
  SiNginx,
  SiPrometheus,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform />
        <h6>Terraform</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <h6>AWS</h6>
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
        <DiPython />
        <h6>Python</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <h6>Java</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h6>JavaScript</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h6>Git</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab />
        <h6>GitLab</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h6>React</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h6>Node.js</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <h6>Express</h6>
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
        <DiMongodb />
        <h6>MongoDB</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <h6>MySQL</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <h6>PostgreSQL</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
        <h6>Redis</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <h6>CSS3</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <h6>HTML5</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
        <h6>Bootstrap</h6>
      </Col>
    </Row>
  );
}

export default Techstack;
