import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import InternshipCard from "./InternshipCard";
import Particle from "../Particle";
import BharatIntern from "../../Assets/Internship/Bharat_Intern/bharatintern-logo.png"
import CodSoft from "../../Assets/Internship/CodeSoft/codsoft-logo.png"
import Compozent from "../../Assets/Internship/Compozent/compozent-logo.png"
import CreArt from "../../Assets/Internship/CreArt/creart-logo.svg"
import IBM from "../../Assets/Internship/IBM_SkillsBuild/ibm-logo.png"
import Oasis from "../../Assets/Internship/Oasis/oasis-logo.png"
import TechnoHack from "../../Assets/Internship/TechnoHack/technohack-logo.png"

import BharatInternCompletion from "../../Assets/Internship/Bharat_Intern/Completion_letter.pdf"
import CodSoftCompletion from "../../Assets/Internship/CodeSoft/Completion_letter.pdf"
import CompozentCompletion from "../../Assets/Internship/Compozent/Completion_letter.png"
import CreArtCompletion from "../../Assets/Internship/CreArt/Completion_letter.jpg"
import IBMCompletion from "../../Assets/Internship/IBM_SkillsBuild/Completion_letter.pdf"
import OasisCompletion from "../../Assets/Internship/Oasis/Completion_letter.pdf"
import TechnoHackCompletion from "../../Assets/Internship/TechnoHack/Completion_letter.png"


function Internships() {
  return (
    <Container fluid className="internship-section">
      <Particle />
      <Container>
        <h1 className="internship-heading">
          My Recent <strong className="purple">Internships </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few Internships I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="internship-card">
            <InternshipCard
              imgPath={Compozent}
              isBlog={false}
              title="DevOps Intern"
              description="I spearheaded the development of a streamlined CI/CD pipeline, harnessing Jenkins, Docker, and GitHub to automate code deployment and optimize processes. I scripted in Python and PowerShell to enhance testing efficiency, while a Selenium script ensured continuous website functionality. Collaborating seamlessly across teams, I delivered daily reports and earned a Letter of Recommendation and a Certificate of Completion, marking a transformative journey into the world of DevOps."
              ghLink="https://aksh2002.hashnode.dev/my-internship-journey-at-compozent"
              demoLink={CompozentCompletion}
            />
          </Col>
          <Col md={4} className="internship-card">
            <InternshipCard
              imgPath={IBM}
              isBlog={false}
              title="Cyber Security Intern"
              description="I delved deep into the realm of cybersecurity, taking on a hands-on project to develop a Python keylogger. This project allowed me to gain practical experience in capturing user keystrokes and understanding the intricacies of cybersecurity attacks. I completed a series of courses on the IBM SkillsBuild platform, enhancing my knowledge in this dynamic field. Mentor-led technical sessions and collaborative discussions enriched my skills, equipping me for a promising career in cybersecurity."
              ghLink="https://aksh2002.hashnode.dev/my-internship-journey-at-ibm-skillsbuild"
              demoLink={IBMCompletion}
            />
          </Col>

          <Col md={4} className="internship-card">
            <InternshipCard
              imgPath={TechnoHack}
              isBlog={false}
              title="Cyber Security and Ethical Hacking Intern"
              description="I spearheaded cybersecurity projects that included securing the target site http://testphp.vulnweb.com/. This hands-on experience involved mastering Kali Linux, utilizing Maltego for information gathering, conducting network scans using Nmap, and implementing defensive strategies. This internship equipped me with practical skills to enhance digital security, detect vulnerabilities, and contribute to safeguarding digital environments."
              ghLink="https://aksh2002.hashnode.dev/my-internship-journey-at-technohack"
              demoLink={TechnoHackCompletion}
            />
          </Col>

          <Col md={4} className="internship-card">
            <InternshipCard
              imgPath={CodSoft}
              isBlog={false}
              title="Python Developer Intern"
              description="I spearheaded Python projects, including creating a functional calculator, interactive quizzes, secure password generators, and real-time weather forecast applications. I successfully integrated APIs, handled data, and designed user-friendly graphical interfaces, showcasing my skills in practical software development. These experiences allowed me to apply my programming expertise to solve real-world challenges, cementing my passion for coding and problem-solving."
              ghLink="https://aksh2002.hashnode.dev/my-internship-journey-at-codsoft"
              demoLink={CodSoftCompletion}             
            />
          </Col>

          <Col md={4} className="internship-card">
            <InternshipCard
              imgPath={BharatIntern}
              isBlog={false}
              title="Full Stack Developer Intern"
              description="I spearheaded two remarkable projects. I led the development of VoxMeeting, a feature-rich video conferencing platform, crafting its intuitive frontend interface and integrating real-time audio-video interactions using ZEGOCLOUD technology. In parallel, I built a ClickUp clone for project management, mastering both frontend and backend development. This experience honed my skills in web development and project management, fueling my passion for tech innovation."
              ghLink="https://aksh2002.hashnode.dev/my-internship-journey-at-bharat-intern-a-path-to-full-stack-development"
              demoLink={BharatInternCompletion}             
            />
          </Col>

          <Col md={4} className="internship-card">
            <InternshipCard
              imgPath={CreArt}
              isBlog={false}
              title="Django Developer Intern"
              description="I played a pivotal role in developing NoticeHub, a web application facilitating efficient communication between administrators and students. I crafted critical features, including user authentication, notice posting, and notification management, while ensuring a seamless user experience. Collaborating within a cross-functional team, I designed an intuitive interface and conducted rigorous testing to guarantee platform reliability. This hands-on experience allowed me to contribute substantively to the project and enhance my practical web development skills."
              ghLink="https://aksh2002.hashnode.dev/my-internship-journey-at-creart"
              demoLink={CreArtCompletion}              
            />
          </Col>

          <Col md={4} className="internship-card">
            <InternshipCard
              imgPath={Oasis}
              isBlog={false}
              title="Java Developer Intern"
              description="I actively contributed to Java-based projects, including developing an Online Reservation System, creating a captivating Number Guessing Game, and crafting a user-friendly ATM Interface. My responsibilities included designing and implementing key features, debugging, and ensuring seamless user experiences. These experiences enhanced my Java programming skills and problem-solving abilities, setting the stage for future projects and endeavors."
              ghLink="https://aksh2002.hashnode.dev/internship-journey-at-oasis"
              demoLink={OasisCompletion}             
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Internships;
