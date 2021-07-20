import styles from "./Menu.module.css";
import cn from "classnames";
import React from "react";

const Menu = (props) => {
  return (
    <nav className={cn(styles.menu, props.className)}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="#about" className={styles.button}>
            Про цей сайт
          </a>
        </li>
        <li className={styles.item}>
          <a href="#instruction" className={styles.button}>
            Інструкції
          </a>
        </li>
        <li className={styles.item}>
          <a href="#contact" className={styles.button}>
            Написати нам
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
