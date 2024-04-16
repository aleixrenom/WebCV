import React from "react";
import ProfilePicAndIntro from "../components/cards/ProfilePicAndIntro";
import cvData from "../data.json";
import { CvData, ListProps } from "../types/types";
import ListGroup from "../components/cards/ListGroup";

const data: CvData = cvData;
const lists: ListProps[] = [
  { header: "Skills", elements: data.skills },
  {
    header: "Languages",
    elements: data.languages.map((e) => (
      <p>
        <span>{e.language}</span> - <span>{e.proficiency}</span>
      </p>
    )),
  },
];

const AboutMe = () => {
  return (
    <div className="flex flex-col">
      <ProfilePicAndIntro
        imageAddress={data.photoLink}
        imageAlt="Profile picture"
        text={data.introduction}
        textHeader="Profile"
      />
      <ListGroup lists={lists} />
    </div>
  );
};

export default AboutMe;
