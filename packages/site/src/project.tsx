import classes from "./project.module.css";
import { Link } from "./link";

type ProjectProps = {
  index?: number;
  name: string;
  href?: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

export function Project(props: ProjectProps) {
  const { children, index, name, href, onClick } = props;
  const number =
    index === undefined ? `` : index < 10 ? `0${index}. ` : `${index}. `;
  return (
    <div className={classes.project}>
      <span className={classes.index}>{number}</span>
      <span className={classes.name}>
        <Link href={href} onClick={onClick}>
          {name}
        </Link>
      </span>
      <span className={classes.desc}>{children}</span>
      {/* <span className={classes.more}> - more info</span> */}
    </div>
  );
}
