import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

function ExperienceCard(props) {
  const { imgPath, title, company, companyLink, dates, description } = props;
  return (
    <Card className="experience-card-view">
      <Card.Body>
        <div className="experience-card-header">
          {imgPath ? (
            <Card.Img
              variant="top"
              src={imgPath}
              alt={company}
              className="experience-card-logo"
            />
          ) : (
            <div className="experience-card-logo-placeholder">
              <HiOutlineOfficeBuilding />
            </div>
          )}
          <div className="experience-card-meta">
            <Card.Title className="experience-card-title">{title}</Card.Title>
            <Card.Subtitle className="experience-card-company">
              {companyLink ? (
                <a href={companyLink} target="_blank" rel="noopener noreferrer">
                  {company}
                </a>
              ) : (
                company
              )}
            </Card.Subtitle>
            <Card.Subtitle className="experience-card-dates text-muted">
              {dates}
            </Card.Subtitle>
          </div>
        </div>
        <Card.Text style={{ textAlign: "justify" }} className="experience-card-description">
          {description}
        </Card.Text>
        {companyLink && (
          <Button variant="primary" href={companyLink} target="_blank" rel="noopener noreferrer" size="sm">
            Company
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
