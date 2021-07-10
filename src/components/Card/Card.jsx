import styles from "./Card.module.css";
import cn from "classnames";

const Card = (props) => {
  return (
    <div className={cn(styles.card, props.className)}>
      <img src={props.src} alt={props.alt} />
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.text}>{props.text}</p>
    </div>
  );
};

export default Card;
