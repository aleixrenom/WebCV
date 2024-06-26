import React from "react";
import { CvData, ExperienceProps } from "../types/types";
import cvData from "../data.json";
import Card from "../components/Card";
import Experience from "../components/Experience";

const data: CvData = cvData;

const workExperiences: ExperienceProps[] = data.workExperience.map((e) => ({
  title: e.position,
  subtitle: e.company,
  years: e.years,
  description: e.description,
  takeaways: e.responsibilities,
}));

const WorkExperience = () => {
  return (
    <Card>
      <div className="flex flex-col items-center mt-5">
        {workExperiences &&
          workExperiences.map((e, index) => (
            <div className="mb-10 w-10/12">
              <Experience key={index} {...e} />
            </div>
          ))}
      </div>
    </Card>
  );
};

export default WorkExperience;
