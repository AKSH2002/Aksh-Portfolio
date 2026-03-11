import React from "react";
import CertificateNew from "./CertificateNew";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Aksh.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <h1 style={{ justifyContent: "center", position: "relative", paddingBottom: "10px" }}>My Resume</h1>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <iframe
            src={pdf}
            height={600}
            title="Aksh Darji Resume PDF"
            className="resume-iframe"
          />
        </Row>

        {/*<Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row> */}

      </Container>
        <CertificateNew/>
    </div>
  );
}

export default ResumeNew;
