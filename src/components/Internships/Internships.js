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
              title="Image Upload"
              description="I created a fundamental CI/CD pipeline using Jenkins, Git, and Docker, demonstrating my proficiency in automating software deployment. The pipeline starts with Git code commits, proceeds with Jenkins-driven continuous integration, and concludes with Dockerized builds, extensive testing, and effortless deployments. This project highlights my expertise in establishing robust development workflows and provides a solid foundation for future, more intricate CI/CD setups."
              ghLink="https://github.com/AKSH2002/ImageUpload"
              demoLink="https://github.com/AKSH2002/Aksh-Portfolio/blob/master/src/Assets/Projects/UploadImages.png?raw=true"
            />
          </Col>
          <Col md={4} className="internship-card">
            <InternshipCard
              imgPath={IBM}
              isBlog={false}
              title="Online Blood Donation System (DoNation)"
              description="Website proposes a Web 3.0 site (React Js) which will connect all blood banks with people as well as with hospitals. This proposed system Notify the user for emergency requirement of blood and blood camps using Firebase type cloud database, distributed ledger (blockchain) to securely manage the data, provide a good system interface to easily track locations needed & immediate request/response feature to meet medical requirements in emergency."
              ghLink="https://github.com/AKSH2002/DoNation-DE-Project"
              demoLink="https://github.com/AKSH2002/Aksh-Portfolio/blob/master/src/Assets/Projects/blood.png?raw=true"
            />
          </Col>

          <Col md={4} className="internship-card">
            <InternshipCard
              imgPath={TechnoHack}
              isBlog={false}
              title="RAKSHA-Women-Safety-App"
              description="Reverse Engineering on RAKSHA-Women-Safety-App build with React Native which is available in playstore. It is all about women's safety involves strategies, practices and policies which aim to reduce gender-based violence.

              This App is designed specifically for woman and child. These apps can provide peace of mind, immediate communication, and access to help in an emergency"
              ghLink="https://github.com/AKSH2002/RAKSHA-Women-Safety-App"
              demoLink="https://github.com/AKSH2002/Aksh-Portfolio/blob/master/src/Assets/Projects/app.png?raw=true"
            />
          </Col>

          <Col md={4} className="internship-card">
            <InternshipCard
              imgPath={CodSoft}
              isBlog={false}
              title="Professional Services Provider"
              description="Professional Service Provider build with html,css and javascript, it is a website which provide service of Software Engineers, Accountants, Researcher, Advertising, Financial advisers, Technicians, Bloggers, Photographers, Project managers, labors, etc. Customers can book the service provider. Here service provider can be provided his service at reasonable price at any time and selected location. A customer also has feature to rating the service provider's service so that another customer's benefit."
              ghLink="https://github.com/AKSH2002/Professional-Service-Provider"
              demoLink="https://aksh2002.github.io/Professional-Service-Provider/"              
            />
          </Col>

          <Col md={4} className="internship-card">
            <InternshipCard
              imgPath={BharatIntern}
              isBlog={false}
              title="Professional Services Provider"
              description="Professional Service Provider build with html,css and javascript, it is a website which provide service of Software Engineers, Accountants, Researcher, Advertising, Financial advisers, Technicians, Bloggers, Photographers, Project managers, labors, etc. Customers can book the service provider. Here service provider can be provided his service at reasonable price at any time and selected location. A customer also has feature to rating the service provider's service so that another customer's benefit."
              ghLink="https://github.com/AKSH2002/Professional-Service-Provider"
              demoLink="https://aksh2002.github.io/Professional-Service-Provider/"              
            />
          </Col>

          <Col md={4} className="internship-card">
            <InternshipCard
              imgPath={CreArt}
              isBlog={false}
              title="Professional Services Provider"
              description="Professional Service Provider build with html,css and javascript, it is a website which provide service of Software Engineers, Accountants, Researcher, Advertising, Financial advisers, Technicians, Bloggers, Photographers, Project managers, labors, etc. Customers can book the service provider. Here service provider can be provided his service at reasonable price at any time and selected location. A customer also has feature to rating the service provider's service so that another customer's benefit."
              ghLink="https://github.com/AKSH2002/Professional-Service-Provider"
              demoLink="https://aksh2002.github.io/Professional-Service-Provider/"              
            />
          </Col>

          <Col md={4} className="internship-card">
            <InternshipCard
              imgPath={Oasis}
              isBlog={false}
              title="Professional Services Provider"
              description="Professional Service Provider build with html,css and javascript, it is a website which provide service of Software Engineers, Accountants, Researcher, Advertising, Financial advisers, Technicians, Bloggers, Photographers, Project managers, labors, etc. Customers can book the service provider. Here service provider can be provided his service at reasonable price at any time and selected location. A customer also has feature to rating the service provider's service so that another customer's benefit."
              ghLink="https://github.com/AKSH2002/Professional-Service-Provider"
              demoLink="https://aksh2002.github.io/Professional-Service-Provider/"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Internships;
