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
      <div className="size-3/12">
        <img className="rounded-full" src={imageAddress} alt={imageAlt} />
      </div>
      <div className="w-9/12 pl-4">
        {textHeader && <h2 className="font-bold">{textHeader}</h2>}
        <p>{text}</p>
      </div>
    </Card>
  );
};

export default ProfilePicAndIntro;
