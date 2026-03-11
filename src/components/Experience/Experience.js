import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import InternshipCard from "../Internships/InternshipCard";
import Particle from "../Particle";

import BaseSolveLogo from "../../Assets/Experience/basesolve-logo.png";
import QriousLogo from "../../Assets/Experience/qrious-logo.png";
import QuiniteLogo from "../../Assets/Experience/quinite-logo.jpg";
import OasisLogo from "../../Assets/Internship/Oasis/oasis-logo.png";
import CompozentLogo from "../../Assets/Internship/Compozent/compozent-logo.png";
import IBMLogo from "../../Assets/Internship/IBM_SkillsBuild/ibm-logo.png";
import TechnoHackLogo from "../../Assets/Internship/TechnoHack/technohack-logo.png";
import CodSoftLogo from "../../Assets/Internship/CodeSoft/codsoft-logo.png";
import BharatInternLogo from "../../Assets/Internship/Bharat_Intern/bharatintern-logo.png";
import CreArtLogo from "../../Assets/Internship/CreArt/creart-logo.svg";

import OasisCertificate from "../../Assets/Internship/Oasis/Completion_letter.pdf";
import CompozentCertificate from "../../Assets/Internship/Compozent/Completion_letter.png";
import IBMCertificate from "../../Assets/Internship/IBM_SkillsBuild/Completion_letter.pdf";
import TechnoHackCertificate from "../../Assets/Internship/TechnoHack/Completion_letter.png";
import CodSoftCertificate from "../../Assets/Internship/CodeSoft/Completion_letter.pdf";
import BharatInternCertificate from "../../Assets/Internship/Bharat_Intern/Completion_letter.pdf";
import CreArtCertificate from "../../Assets/Internship/CreArt/Completion_letter.jpg";

const experienceData = [
  {
    title: "DevOps Engineer",
    company: "BaseSolve Informatics Pvt. Ltd.",
    companyLink: "https://basesolve.com",
    dates: "Dec 2025 – Present",
    description:
      "Building and maintaining cloud infrastructure and deployment automation on AWS. IaC with Terraform/OpenTofu; Ansible for multi-environment app and data stack deployments. Designing and implementing a Kubernetes-based tenant-structured deployment model for multi-client workloads—reducing duplication, centralizing operations, and improving consistency at scale. CloudWatch dashboards, alarms, and Slack alerting; runbooks for support. Automated IAM key rotation and centralized PKI for TLS across services. Focus on reliability, observability, and security.",
    imgPath: BaseSolveLogo,
  },
  {
    title: "Software Developer",
    company: "Qrious Tech Team LLP",
    companyLink: "https://qrioustech.com",
    dates: "Jan 2024 – Dec 2025",
    description:
      "DevOps-oriented development: Spring Boot APIs and microservices, CI/CD in Jenkins and GitLab CI, and deployment on AWS (EC2, EKS, Lambda, RDS, S3). Terraform for infra; Docker and ECR for containers. CloudWatch and ELK for monitoring and logs. Worked with MySQL, PostgreSQL, and Nginx on Linux for high-availability setups.",
    imgPath: QriousLogo,
  },
  {
    title: "DevOps Engineer, Freelance",
    company: "Quinite Technologies",
    companyLink: null,
    dates: "Sep 2023 – Dec 2023",
    description:
      "On-prem and self-hosted deployments with Coolify. Bash scripting for environment setup and CI/CD. GitLab CI/CD pipelines (build, test, lint, deploy). Containerized frontends; monitored logs in EKS for reliable delivery.",
    imgPath: QuiniteLogo,
  },
];

const internshipData = [
  {
    imgPath: OasisLogo,
    title: "Java Developer Intern",
    description:
      "I actively contributed to Java-based projects, including developing an Online Reservation System, creating a captivating Number Guessing Game, and crafting a user-friendly ATM Interface. My responsibilities included designing and implementing key features, debugging, and ensuring seamless user experiences. These experiences enhanced my Java programming skills and problem-solving abilities, setting the stage for future projects and endeavors.",
    ghLink: "https://aksh2002.hashnode.dev/internship-journey-at-oasis",
    demoLink: OasisCertificate,
  },
  {
    imgPath: CompozentLogo,
    title: "DevOps Intern",
    description:
      "I spearheaded the development of a streamlined CI/CD pipeline, harnessing Jenkins, Docker, and GitHub to automate code deployment and optimize processes. I scripted in Python and PowerShell to enhance testing efficiency, while a Selenium script ensured continuous website functionality. Collaborating seamlessly across teams, I delivered daily reports and earned a Letter of Recommendation and a Certificate of Completion, marking a transformative journey into the world of DevOps.",
    ghLink: "https://aksh2002.hashnode.dev/my-internship-journey-at-compozent",
    demoLink: CompozentCertificate,
  },
  {
    imgPath: IBMLogo,
    title: "Cyber Security Intern",
    description:
      "I delved deep into the realm of cybersecurity, taking on a hands-on project to develop a Python keylogger. This project allowed me to gain practical experience in capturing user keystrokes and understanding the intricacies of cybersecurity attacks. I completed a series of courses on the IBM SkillsBuild platform, enhancing my knowledge in this dynamic field. Mentor-led technical sessions and collaborative discussions enriched my skills, equipping me for a promising career in cybersecurity.",
    ghLink: "https://aksh2002.hashnode.dev/my-internship-journey-at-ibm-skillsbuild",
    demoLink: IBMCertificate,
  },
  {
    imgPath: TechnoHackLogo,
    title: "Cyber Security and Ethical Hacking Intern",
    description:
      "I spearheaded cybersecurity projects that included securing the target site http://testphp.vulnweb.com/. This hands-on experience involved mastering Kali Linux, utilizing Maltego for information gathering, conducting network scans using Nmap, and implementing defensive strategies. This internship equipped me with practical skills to enhance digital security, detect vulnerabilities, and contribute to safeguarding digital environments.",
    ghLink: "https://aksh2002.hashnode.dev/my-internship-journey-at-technohack",
    demoLink: TechnoHackCertificate,
  },
  {
    imgPath: CodSoftLogo,
    title: "Python Developer Intern",
    description:
      "I spearheaded Python projects, including creating a functional calculator, interactive quizzes, secure password generators, and real-time weather forecast applications. I successfully integrated APIs, handled data, and designed user-friendly graphical interfaces, showcasing my skills in practical software development. These experiences allowed me to apply my programming expertise to solve real-world challenges, cementing my passion for coding and problem-solving.",
    ghLink: "https://aksh2002.hashnode.dev/my-internship-journey-at-codsoft",
    demoLink: CodSoftCertificate,
  },
  {
    imgPath: BharatInternLogo,
    title: "Full Stack Developer Intern",
    description:
      "I spearheaded two remarkable projects. I led the development of VoxMeeting, a feature-rich video conferencing platform, crafting its intuitive frontend interface and integrating real-time audio-video interactions using ZEGOCLOUD technology. In parallel, I built a ClickUp clone for project management, mastering both frontend and backend development. This experience honed my skills in web development and project management, fueling my passion for tech innovation.",
    ghLink: "https://aksh2002.hashnode.dev/my-internship-journey-at-bharat-intern-a-path-to-full-stack-development",
    demoLink: BharatInternCertificate,
  },
  {
    imgPath: CreArtLogo,
    title: "Django Developer Intern",
    description:
      "I played a pivotal role in developing NoticeHub, a web application facilitating efficient communication between administrators and students. I crafted critical features, including user authentication, notice posting, and notification management, while ensuring a seamless user experience. Collaborating within a cross-functional team, I designed an intuitive interface and conducted rigorous testing to guarantee platform reliability. This hands-on experience allowed me to contribute substantively to the project and enhance my practical web development skills.",
    ghLink: "https://aksh2002.hashnode.dev/my-internship-journey-at-creart",
    demoLink: CreArtCertificate,
  },
];

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "white", paddingBottom: "30px" }}>
          Full-time and freelance roles.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          {experienceData.map((exp, idx) => (
            <Col key={idx} md={6} lg={4} className="experience-card-col">
              <ExperienceCard
                imgPath={exp.imgPath}
                title={exp.title}
                company={exp.company}
                companyLink={exp.companyLink}
                dates={exp.dates}
                description={exp.description}
              />
            </Col>
          ))}
        </Row>

        <h1 className="project-heading" style={{ paddingTop: "40px" }}>
          <strong className="purple">Internships</strong>
        </h1>
        <p style={{ color: "white", paddingBottom: "20px" }}>
          Here are internships I've completed.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {internshipData.map((intern, idx) => (
            <Col key={idx} md={4} className="internship-card">
              <InternshipCard
                imgPath={intern.imgPath}
                isBlog={false}
                title={intern.title}
                description={intern.description}
                ghLink={intern.ghLink}
                demoLink={intern.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
