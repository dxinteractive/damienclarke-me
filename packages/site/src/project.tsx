import classes from "./project.module.css";

type ProjectProps = {
  index: number;
  name: string;
  href: string;
  children: React.ReactNode;
};

export function Project(props: ProjectProps) {
  const { children, index, name } = props;
  const number = index < 10 ? `0${index}` : `${index}`;
  return (
    <div className={classes.project}>
      <span className={classes.index}>{number}. </span>
      <span className={classes.name}>{name}</span>
      <span className={classes.desc}>{children}</span>
    </div>
  );
}
