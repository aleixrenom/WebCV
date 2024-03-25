import React from "react";
import ProfilePicAndIntro from "../components/cards/ProfilePicAndIntro";
import cvData from "../data.json";
import { CvData } from "../types/types";

interface AboutMeProps {
  header?: string;
}

const data: CvData = cvData;

const AboutMe = ({ header = "About me" }: AboutMeProps) => {
  return (
    <div>
      <ProfilePicAndIntro
        imageAddress={data.photoLink}
        imageAlt="Profile picture"
        text={data.introduction}
        textHeader="Pofile"
      />
    </div>
  );
};

export default AboutMe;
