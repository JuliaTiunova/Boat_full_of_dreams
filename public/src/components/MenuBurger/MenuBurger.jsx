import styles from "./MenuBurger.module.css";
import cn from "classnames";

const MenuBurger = (props) => {
  return (
    <nav className={cn(styles.menu, props.className)}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a className={styles.link} href="#about">
            Про цей сайт
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#instruction">
            Інструкція
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="#contact">
            Контакти
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuBurger;
