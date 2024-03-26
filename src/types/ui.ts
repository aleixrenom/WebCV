export interface NavButtonProps {
  text: string;
  route: string;
}

export interface NavbarProps {
  buttons: NavButtonProps[];
}

export interface HeaderProps {
  header: string;
}

export interface ListProps {
  elements: string[] | React.ReactElement[];
  header?: string;
}

export interface ProfilePicAndIntroProps {
  imageAddress: string;
  imageAlt?: string;
  textHeader?: string;
  text: string;
}
