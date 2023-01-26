import classes from "./link.module.css";

type LinkProps = {
  children: React.ReactNode;
};

export function Link(props: LinkProps) {
  const { children } = props;
  return <div className={classes.link}>{children}</div>;
}
