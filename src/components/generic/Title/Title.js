import "./Title.css";
import cn from "classnames";

function Title({ title, mix }) {
  const classNames = cn("title", mix);

  return <h1 className={classNames}>{title}</h1>;
}

export default Title;
