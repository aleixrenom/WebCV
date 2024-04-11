import React from "react";
import { CvData, ExperienceProps } from "../types/types";
import cvData from "../data.json";
import Card from "../components/Card";
import Experience from "../components/Experience";

const data: CvData = cvData;

const ownProjects: ExperienceProps[] = data.otherExperience.ownProjects.map(
  (e) => ({
    title: e.link ? (
      <a href={e.link} className="underline text-blue-700">
        {e.title}
      </a>
    ) : (
      e.title
    ),
    years: e.year,
    description: e.description,
    takeaways: e.takeaways,
  })
);

const volunteerWork: ExperienceProps[] = data.otherExperience.volunteerWork.map(
  (e) => ({
    title: e.title,
    years: e.year,
    description: e.description,
    takeaways: e.takeaways,
  })
);

const OtherExperience = () => {
  return (
    <Card>
      <div className="flex flex-col">
        <h3>Own Projects</h3>
        <div className="flex flex-col">
          {ownProjects &&
            ownProjects.map((e, index) => (
              <div className="mb-3">
                <Experience key={index} {...e} />
              </div>
            ))}
        </div>
        <h3>Volunteer Work</h3>
        <div className="flex flex-col">
          {volunteerWork &&
            volunteerWork.map((e, index) => (
              <div className="mb-3">
                <Experience key={index} {...e} />
              </div>
            ))}
        </div>
      </div>
    </Card>
  );
};

export default OtherExperience;
