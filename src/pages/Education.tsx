import React from "react";
import Card from "../components/Card";
import cvData from "../data.json";
import { CvData, ExperienceProps } from "../types/types";
import Experience from "../components/Experience";

const data: CvData = cvData;

const educations: ExperienceProps[] = data.education.map((e) => ({
  title: e.degree,
  years: e.years,
  subtitle: e.institution,
  description: e.description,
}));

const Education = () => {
  return (
    <Card>
      <div className="flex flex-col">
        {educations &&
          educations.map((e, index) => (
            <div className="mb-3">
              <Experience key={index} {...e} />
            </div>
          ))}
      </div>
    </Card>
  );
};

export default Education;
