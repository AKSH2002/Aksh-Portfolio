import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiJava,
  DiPhp,
  DiCss3,
  DiHtml5,
  DiNodejs,
  DiMongodb,
  DiMysql,
  DiPython,
  DiBootstrap,
  DiAngularSimple,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiExpress,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <h6>Java</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h6>JavaScript</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h6>Python</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
        <h6>Php</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h6>Git</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h6>React js</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
        <h6>Bootstrap</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
        <h6>Angular js</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <h6>Css3</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5/>
        <h6>HTML5</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h6>Node js</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <h6>Express js</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <h6>Mogodb</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <h6>MySql</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h6>Firebase</h6>
      </Col>
    </Row>
  );
}

export default Techstack;
