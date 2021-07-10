import styles from "./Subtitle.module.css";
import cn from "classnames";

const Subtitle = (props) => {
  return (
    <button className={cn(styles.subtitle, props.className)}>
      Зайти у вирій
    </button>
  );
};

export default Subtitle;
