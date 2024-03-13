import React from "react";

interface OtherExperienceProps {
  header?: string;
}

const OtherExperience = ({
  header = "Other experience",
}: OtherExperienceProps) => {
  return (
    <div>
      <h1 className="text-bold text-3xl">{header}</h1>
    </div>
  );
};

export default OtherExperience;
