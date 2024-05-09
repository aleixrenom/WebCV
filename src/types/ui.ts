import React from "react";

export interface NavButtonProps {
  text: string;
  route: string;
}

export interface NavbarProps {
  buttons: NavButtonProps[];
}

export interface HeaderProps {
  name: string;
  surname: string;
}

export interface ListProps {
  elements: string[] | React.ReactElement[];
  header?: string;
}

export interface ProfilePicAndIntroProps {
  imageAddress: string;
  imageAlt?: string;
  textHeader?: string | React.ReactElement;
  text: string;
}

export interface ListGroupProps {
  lists: ListProps[];
}

export interface ExperienceProps {
  title: string | React.ReactElement;
  subtitle?: string;
  years: string;
  takeaways?: string[] | React.ReactElement[];
  description?: string;
}
