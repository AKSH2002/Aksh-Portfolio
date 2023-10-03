import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Aksh.pdf";
import { AiOutlineDownload } from "react-icons/ai";

import finance from "../../Assets/../Assets/Certificates/Coursera/Finance_for_Startup.pdf"

import SecurityAwareness from "../../Assets/../Assets/Certificates/IBM_SkillsBuild/Fortinet Infomation Security Awareness.pdf"
import SecurityFundamentals from "../../Assets/../Assets/Certificates/IBM_SkillsBuild/SkillsBuild Cyber Security Fundamentals.pdf"
import CyberSecurity from "../../Assets/../Assets/Certificates/IBM_SkillsBuild/SkillsBuild Edunet - Cyber Security.pdf"
import JobReadinessSkills from "../../Assets/../Assets/Certificates/IBM_SkillsBuild/SkillsBuild Job Readiness Skills.pdf"
import Onlinedatasecurity from "../../Assets/../Assets/Certificates/IBM_SkillsBuild/SkillsBuild Online data security.pdf"
import Whatiscybersecurity from "../../Assets/../Assets/Certificates/IBM_SkillsBuild/SkillsBuild what is cyber security.pdf"

import TCSION from "../../Assets/../Assets/Certificates/TCS_ION/TCS iON Career Edge - Young Professional.pdf"

import AI1 from "../../Assets/../Assets/Certificates/Great learning/Artificial_Intelligence_with_Python.jpg"
import Git from "../../Assets/../Assets/Certificates/Great learning/Git.jpg"
import AI2 from "../../Assets/../Assets/Certificates/Great learning/Introduction_to_Artificial_Intelligence.jpg"
import NodeJs from "../../Assets/../Assets/Certificates/Great learning/NodeJS_in_Hindi.jpg"
import ReactJs from "../../Assets/../Assets/Certificates/Great learning/ReactJS_Tutorial.jpg"

import AI3 from "../../Assets/../Assets/Certificates/Skillup/Introduction_to_Artificial_Intelegence.pdf"



import Sem3 from "../../Assets/../Assets/Certificates/Design_Engineering/Sem_3.pdf"
import Sem4 from "../../Assets/../Assets/Certificates/Design_Engineering/Sem_4.pdf"
import Sem5 from "../../Assets/../Assets/Certificates/Design_Engineering/Sem_5.pdf"
import Sem6 from "../../Assets/../Assets/Certificates/Design_Engineering/Sem_6.pdf"

import Tata from "../../Assets/../Assets/Certificates/Unstop/Tata.pdf"

import AndroidFundamentalswithCapstoneProject from "../../Assets/../Assets/Certificates/BootCamp/Android Fundamentals with Capstone Project.pdf"
import CloudComputing from "../../Assets/../Assets/Certificates/BootCamp/Cloud Computing.pdf"
import DataScienceexpertbootcamp from "../../Assets/../Assets/Certificates/BootCamp/Data Science expert - bootcamp.pdf"
import Flutter from "../../Assets/../Assets/Certificates/BootCamp/Flutter.pdf"
import IOT from "../../Assets/../Assets/Certificates/BootCamp/IOT.pdf"
import QuizonCOVID19Awareness from "../../Assets/../Assets/Certificates/BootCamp/Quiz on COVID-19 Awareness.pdf"
import WordPress from "../../Assets/../Assets/Certificates/BootCamp/WordPress.pdf"

import DevOpsFundamentals from "../../Assets/../Assets/Certificates/Udemy/DevOps Fundamentals.pdf"





function CertificateNew() {
  
  return (
    <div>
      <Container fluid className="resume-section">


        <h1 style={{ justifyContent: "center", position: "relative", paddingBottom: "10px" }}>All my Course Certificates</h1>


        {/* -------------------------------- */}
        {/* --------IBM SkillsBuild--------- */}
        {/* -------------------------------- */}
        <h3 style={{ justifyContent: "center", position: "relative", paddingBottom: "10px" }}>IBM SkillsBuild</h3>
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>

          <Col md={2} style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>
            <Button
              variant="primary"
              href={CyberSecurity}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Cyber Security
            </Button>
          </Col>

          <Col md={2} style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>
            <Button
              variant="primary"
              href={SecurityFundamentals}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Cyber Security Fundamentals
            </Button>
          </Col>

          <Col md={2} style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>
            <Button
              variant="primary"
              href={SecurityAwareness}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Infomation Security Awareness
            </Button>
          </Col>

          <Col md={2} style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>
            <Button
              variant="primary"
              href={JobReadinessSkills}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Job Readiness Skills
            </Button>
          </Col>

          <Col md={2} style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>
            <Button
              variant="primary"
              href={Onlinedatasecurity}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Online data security
            </Button>
          </Col>

          <Col md={2} style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>
            <Button
              variant="primary"
              href={Whatiscybersecurity}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;What is cyber security
            </Button>
          </Col>
        </Row>
        
        {/* -------------------------------- */}
        {/* --------Great Learning---------- */}
        {/* -------------------------------- */}
        <h3 style={{ justifyContent: "center", position: "relative", paddingBottom: "10px" }}>Great Learning</h3>
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>

          <Col md={2} style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>
            <Button
              variant="primary"
              href={AI2}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Introduction to Artificial Intelligence
            </Button>
          </Col>

          <Col md={2} style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>
            <Button
              variant="primary"
              href={AI1}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Artificial Intelligence with Python
            </Button>
          </Col>
          
          <Col md={2} style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>
            <Button
              variant="primary"
              href={NodeJs}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;NodeJs in Hindi
            </Button>
          </Col>
          
          <Col md={2} style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>
            <Button
              variant="primary"
              href={ReactJs}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;ReactJs Tutorial
            </Button>
          </Col>

          <Col md={2} style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>
            <Button
              variant="primary"
              href={Git}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Git
            </Button>
          </Col>
        </Row>

        {/* -------------------------------- */}
        {/* ------------BootCamps----------- */}
        {/* -------------------------------- */}
        <h3 style={{ justifyContent: "center", position: "relative", paddingBottom: "10px" }}>BootCamps</h3>
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>

          <Col md={2} style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>
            <Button
              variant="primary"
              href={AndroidFundamentalswithCapstoneProject}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Android Fundamentals with Capstone Project
            </Button>
          </Col>

          <Col md={2} style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>
            <Button
              variant="primary"
              href={CloudComputing}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Cloud Computing
            </Button>
          </Col>

          <Col md={2} style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>
            <Button
              variant="primary"
              href={DataScienceexpertbootcamp}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Data Science expert
            </Button>
          </Col>

          <Col md={2} style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>
            <Button
              variant="primary"
              href={QuizonCOVID19Awareness}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Quiz on COVID-19 Awareness
            </Button>
          </Col>

          <Col md={2} style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>
            <Button
              variant="primary"
              href={Flutter}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Flutter
            </Button>
          </Col>

          <Col md={2} style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>
            <Button
              variant="primary"
              href={WordPress}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;WordPress
            </Button>
          </Col>

          <Col md={2} style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>
            <Button
              variant="primary"
              href={IOT}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;IOT
            </Button>
          </Col>
        </Row>

        {/* ----------------------------------- */}
        {/* --------Design Engineering--------- */}
        {/* ----------------------------------- */}
        <h3 style={{ justifyContent: "center", position: "relative", paddingBottom: "10px" }}>Design Engineering</h3>
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>

          <Col md={2} style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>
            <Button
              variant="primary"
              href={Sem3}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Sem 3 Design Engineering
            </Button>
          </Col>

          <Col md={2} style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>
            <Button
              variant="primary"
              href={Sem4}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Sem 4 Design Engineering
            </Button>
          </Col>

          <Col md={2} style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>
            <Button
              variant="primary"
              href={Sem5}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Sem 5 Design Engineering
            </Button>
          </Col>

          <Col md={2} style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>
            <Button
              variant="primary"
              href={Sem6}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Sem 6 Design Engineering
            </Button>
          </Col>

        </Row>

        {/* ----------------------------- */}
        {/* --------Coursera------------- */}
        {/* ----------------------------- */}       
        <h3 style={{ justifyContent: "center", position: "relative", paddingBottom: "10px" }}>Coursera</h3>
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>

          <Col md={2} style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>
            <Button
              variant="primary"
              href={finance}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Finance for Startup -Coursera
            </Button>
          </Col>          
        </Row>

        {/* ------------------------*/}
        {/* --------TCS ION--------- */}
        {/* ------------------------*/}
        <h3 style={{ justifyContent: "center", position: "relative", paddingBottom: "10px" }}>TCS ION</h3>
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>

          <Col md={2} style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>
            <Button
              variant="primary"
              href={TCSION}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;TCS iON Career Edge - Young Professional
            </Button>
          </Col>

        </Row>

        {/* -------------------------------- */}
        {/* --------Skillup----------------- */}
        {/* -------------------------------- */}
        <h3 style={{ justifyContent: "center", position: "relative", paddingBottom: "10px" }}>Skillup</h3>
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>

          <Col md={2} style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>
            <Button
              variant="primary"
              href={AI3}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Introduction to Artificial Intelegence
            </Button>
          </Col>
        </Row>

        {/* -------------------------------- */}
        {/* ------------Unstop-------------- */}
        {/* -------------------------------- */}
        <h3 style={{ justifyContent: "center", position: "relative", paddingBottom: "10px" }}>Unstop</h3>
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>

          <Col md={2} style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>
            <Button
              variant="primary"
              href={Tata}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Tata Imagination Challenge 2022
            </Button>
          </Col>
        </Row>

        {/* -------------------------------- */}
        {/* --------------Udemy------------- */}
        {/* -------------------------------- */}
        <h3 style={{ justifyContent: "center", position: "relative", paddingBottom: "10px" }}>Udemy</h3>
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>

          <Col md={2} style={{ justifyContent: "center", position: "relative", paddingBottom: "40px" }}>
            <Button
              variant="primary"
              href={DevOpsFundamentals}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;DevOps Fundamentals
            </Button>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default CertificateNew;
