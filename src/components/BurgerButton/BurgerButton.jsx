import styles from "./BurgerButton.module.css";
import cn from "classnames";

const BurgerButton = (props) => {
  return (
    <button
      className={cn(styles.burgerButton, props.className)}
      type={props.type}
      onClick={props.onClick}
    >
      <span></span>
    </button>
  );
};

export default BurgerButton;
