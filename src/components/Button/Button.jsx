import styles from "./Button.module.css";
import cn from "classnames";

const Button = (props) => {
  return (
    <button
      className={cn(styles.button, props.className)}
      type={props.type}
      href={props.href}
    >
      {props.text}
    </button>
  );
};

export default Button;
