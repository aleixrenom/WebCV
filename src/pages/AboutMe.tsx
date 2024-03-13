import React from "react";

interface AboutMeProps {
  header?: string;
}

const AboutMe = ({ header = "About me" }: AboutMeProps) => {
  return (
    <div>
      <h1 className="text-bold text-3xl">{header}</h1>
    </div>
  );
};

export default AboutMe;
