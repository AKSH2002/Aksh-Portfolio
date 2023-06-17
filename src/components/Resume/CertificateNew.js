import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Aksh.pdf";
import { AiOutlineDownload } from "react-icons/ai";


function CertificateNew() {
  
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>

          <Col md={2} style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Col>
          <Col md={2} style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Col>

        </Row>


      </Container>
    </div>
  );
}

export default CertificateNew;
