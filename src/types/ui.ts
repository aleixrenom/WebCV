export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  className?: string;
}

export interface NavbarProps {
  buttons: ButtonProps[];
}
