import React from "react";
import { ListGroupProps } from "../../types/types";
import Card from "../Card";
import List from "../List";

const ListGroup = ({ lists }: ListGroupProps) => {
  return (
    <Card>
      <div className="size-full flex justify-evenly">
        {lists.map((l, index) => (
          <List elements={l.elements} header={l.header} key={index} />
        ))}
      </div>
    </Card>
  );
};

export default ListGroup;
