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

const Name = () => <span className="font-semibold">Aleix</span>;

const slogans = [
  <p>
    Hi, I'm <Name />
  </p>,
  <p>
    <Name />, the real critical hit
  </p>,
  <p>
    Some call me <Name />
  </p>,
  <p>
    When life gives you lemons, get yourself an <Name />
  </p>,
  <p>
    The name's Renom, <Name /> Renom
  </p>,
  <p>
    Welcome to <Name />
    's emporium!
  </p>,
  <p>
    Who's this <Name /> everyone's talking about?
  </p>,
  <p>
    Your next hire will be called <Name />
  </p>,
  <p>
    Beleive in the <Name />
  </p>,
];

const AboutMe = () => {
  const [num, setNum] = React.useState(0);
  return (
    <div className="flex flex-col">
      <ProfilePicAndIntro
        imageAddress={data.photoLink}
        imageAlt="Profile picture"
        text={data.introduction}
        textHeader={slogans[num]}
      />
      {/* <button
        onClick={() => setNum(num + 1)}
        className="bg-secondary text-primary w-1/12"
      >
        Next header
      </button> */}
      <ListGroup lists={lists} />
    </div>
  );
};

export default AboutMe;
