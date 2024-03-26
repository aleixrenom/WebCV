import React from "react";
import { ListProps } from "../../types/types";
import Card from "../Card";
import List from "../List";

interface ListGroupProps {
  lists: ListProps[];
}

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
