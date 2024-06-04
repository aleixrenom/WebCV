import React from "react";
import { ExperienceProps } from "../types/types";
import Button from "./Button";
import { ReactComponent as UpArrow } from "./icons/upArrow.svg";
import { ReactComponent as DownArrow } from "./icons/downArrow.svg";

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
        className="bg-secondary flex flex-row justify-between p-2 text-primary rounded-md shadow-md"
      >
        <div id="leftElements" className="flex flex-col">
          <p className="max-w-sm font-bold">{title}</p>
          {subtitle && <p className="max-w-xs font-light">{subtitle}</p>}
        </div>
        <div id="rightElements" className="flex flex-row justify-center">
          <p className="font-bold content-center">{years}</p>
          <Button content={<UpArrow />} twStyle="ml-3 fill-tertiary" />
        </div>
      </div>
      <div id="info" className="bg-slate-200 rounded-md shadow-md">
        {takeaways && (
          <div id="takeaways" className="p-2">
            {takeaways.map((e, index) => (
              <p key={index}>- {e}</p>
            ))}
          </div>
        )}
        {description && (
          <div id="description" className="p-2">
            <p>{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
