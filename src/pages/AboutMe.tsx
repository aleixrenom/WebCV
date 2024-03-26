import React from "react";
import ProfilePicAndIntro from "../components/cards/ProfilePicAndIntro";
import cvData from "../data.json";
import { CvData, ListProps } from "../types/types";
import ListGroup from "../components/cards/ListGroup";

interface AboutMeProps {
  header?: string;
}

const data: CvData = cvData;
const lists: ListProps[] = [
  { header: "Skills", elements: data.skills },
  { header: "Languages", elements: data.skills },
];

const AboutMe = ({ header = "About me" }: AboutMeProps) => {
  return (
    <div className="flex flex-col">
      <ProfilePicAndIntro
        imageAddress={data.photoLink}
        imageAlt="Profile picture"
        text={data.introduction}
        textHeader="Pofile"
      />
      <ListGroup lists={lists} />
    </div>
  );
};

export default AboutMe;
