import React from "react";

interface WorkExperienceProps {
  header?: string;
}

const WorkExperience = ({
  header = "Work experience",
}: WorkExperienceProps) => {
  return (
    <div>
      <h1 className="text-bold text-3xl">{header}</h1>
    </div>
  );
};

export default WorkExperience;
