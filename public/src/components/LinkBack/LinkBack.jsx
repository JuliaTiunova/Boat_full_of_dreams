import styles from "./LinkBack.module.css";
import cn from "classnames";
import Button from "../Button/Button";

const LinkBack = (props) => {
  return (
    <Button className={cn(styles.link, props.className)} text="на головну" />
  );
};

export default LinkBack;
