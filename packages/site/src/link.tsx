import React from "react";
import classes from "./link.module.css";

type LinkProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

export function Link(props: LinkProps) {
  const { children, href = "#", onClick } = props;
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick?.();
  };
  return (
    <a className={classes.link} href={href} onClick={handleClick}>
      {children}
    </a>
  );
}
