import React from "react";

interface EducationProps {
  header?: string;
}

const Education = ({ header = "Education" }: EducationProps) => {
  return (
    <div>
      <h1 className="text-bold text-3xl">{header}</h1>
    </div>
  );
};

export default Education;
