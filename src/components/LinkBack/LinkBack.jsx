import styles from "./LinkBack.module.css";
import cn from "classnames";

const LinkBack = (props) => {
  return (
    <button className={cn(styles.link, props.className)}>Повернутись</button>
  );
};

export default LinkBack;
