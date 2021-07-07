import styles from "./Menu.module.css";
import cn from "classnames";

const Menu = (props) => {
  return (
    <nav className={cn(styles.menu, props.className)}>
      <ul className={styles.list}>
        <li className={styles.item}>Куди ви зайшли</li>
        <li className={styles.item}>Що далі</li>
        <li className={styles.item}>Інші проекти</li>
        <li className={styles.item}>Контакти</li>
      </ul>
    </nav>
  );
};

export default Menu;
