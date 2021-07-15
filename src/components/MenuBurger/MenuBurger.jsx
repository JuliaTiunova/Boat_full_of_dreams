import Button from "../Button/Button";
import styles from "./MenuBurger.module.css";
import cn from "classnames";

const MenuBurger = (props) => {
  return (
    <nav className={cn(styles.menu, props.className)} ref={props.ref}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Button className={styles.link} text="Про цей сайт" />
        </li>
        <li className={styles.item}>
          <Button className={styles.link} text="Інструкції" />
        </li>
        <li className={styles.item}>
          <Button className={styles.link} text="Написати нам" />
        </li>
      </ul>
    </nav>
  );
};

export default MenuBurger;
