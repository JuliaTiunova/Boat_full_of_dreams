import styles from "./BurgerButton.module.css";
import cn from "classnames";
import MenuBurger from "../MenuBurger/MenuBurger";

const BurgerButton = (props) => {
  function handleClick() {}
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
