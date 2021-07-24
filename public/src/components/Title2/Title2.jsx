import styles from "./Title2.module.css";
import cn from "classnames";

const Title2 = (props) => {
  return (
    <h2 className={cn(styles.title, props.className)} id="about">
      {props.text}
    </h2>
  );
};

export default Title2;
