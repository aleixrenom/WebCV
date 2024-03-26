import React from "react";
import { ListProps } from "../types/types";

const List = ({ elements, header }: ListProps) => {
  return (
    <div className="size-full">
      {header && <h6 className="font-bold">{header}</h6>}
      <ul>
        {elements.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
