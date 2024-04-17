import React from "react";
import { ExperienceProps } from "../types/types";

const Experience = ({
  title,
  years,
  subtitle,
  takeaways,
  description,
}: ExperienceProps) => {
  return (
    <div>
      <div
        id="header"
        className="bg-blue-700 flex flex-row justify-between p-2 text-white rounded-t-md"
      >
        <div id="leftElements" className="flex flex-row">
          <p className="max-w-80">{title}</p>
          {subtitle && <p className="max-w-80 ml-2">{subtitle}</p>}
        </div>
        <div id="rightElements">
          <p className="">{years}</p>
        </div>
      </div>
      {takeaways && (
        <div id="takeaways" className="bg-blue-200 p-2">
          {takeaways.map((e, index) => (
            <p key={index}>- {e}</p>
          ))}
        </div>
      )}
      {description && (
        <div id="description" className="bg-blue-100 p-2">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Experience;
