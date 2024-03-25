import React from "react";
import { ListProps } from "../types/types";

const List = ({ elements }: ListProps) => {
  return (
    <ul>
      {elements.map((e, index) => (
        <li key={index}>{e}</li>
      ))}
    </ul>
  );
};

export default List;
