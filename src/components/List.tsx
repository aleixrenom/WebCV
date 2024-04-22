import React from "react";
import { ListProps } from "../types/types";

const List = ({ elements, header }: ListProps) => {
  return (
    <div className="w-4/12 text-secondary">
      {header && <h6 className="font-normal text-3xl mb-1">{header}</h6>}
      <ul>
        {elements.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
