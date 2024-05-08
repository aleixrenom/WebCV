import React from "react";
import { CvData, ExperienceProps } from "../types/types";
import cvData from "../data.json";
import Card from "../components/Card";
import Experience from "../components/Experience";

const data: CvData = cvData;

const ownProjects: ExperienceProps[] = data.otherExperience.ownProjects.map(
  (e) => ({
    title: e.link ? (
      <a href={e.link} className="underline">
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

const sectionHeaderStyle: string =
  "font-extralight text-3xl mb-5 text-secondary";
const sectionContainerStyle: string = "flex flex-col w-10/12";

const OtherExperience = () => {
  return (
    <Card>
      <div className="flex flex-col items-center mt-5">
        <h3 className={sectionHeaderStyle}>Own Projects</h3>
        <div className={sectionContainerStyle}>
          {ownProjects &&
            ownProjects.map((e, index) => (
              <div className="mb-10">
                <Experience key={index} {...e} />
              </div>
            ))}
        </div>
        <h3 className={sectionHeaderStyle}>Volunteer Work</h3>
        <div className={sectionContainerStyle}>
          {volunteerWork &&
            volunteerWork.map((e, index) => (
              <div className="mb-10">
                <Experience key={index} {...e} />
              </div>
            ))}
        </div>
      </div>
    </Card>
  );
};

export default OtherExperience;
