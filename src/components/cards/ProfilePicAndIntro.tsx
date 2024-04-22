import React from "react";
import Card from "../Card";
import { ProfilePicAndIntroProps } from "../../types/types";

const ProfilePicAndIntro = ({
  imageAddress,
  imageAlt = "",
  textHeader,
  text,
}: ProfilePicAndIntroProps) => {
  return (
    <Card>
      <div
        id="container"
        className="flex flex-row justify-center items-center my-4 font-sans text-secondary"
      >
        <div id="intro" className="w-6/12 pl-4 flex flex-col justify-center">
          {textHeader && (
            <h2 className="font-extralight text-5xl mb-2">{textHeader}</h2>
          )}
          <p className="text-lg">{text}</p>
        </div>
        <div id="profilePic" className="size-3/12 ml-14">
          <img className="rounded-full" src={imageAddress} alt={imageAlt} />
        </div>
      </div>
    </Card>
  );
};

export default ProfilePicAndIntro;
