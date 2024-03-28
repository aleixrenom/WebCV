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
      <div className="bg-slate-400">
        <p className="flex flex-row">
          <span className="w-4/12">{title}</span>
          {subtitle && <span className="w-3/12"> - {subtitle}</span>}
          <span className="w-2/12">{years}</span>
        </p>
      </div>
    </div>
  );
};

export default Experience;
