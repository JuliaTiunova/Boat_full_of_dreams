import styles from "./Menu.module.css";
import cn from "classnames";

const Menu = (props) => {
  const about = document.getElementById("about");
  function handleScrollAbout() {
    about.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className={cn(styles.menu, props.className)}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <button className={styles.button} onClick={handleScrollAbout}>
            Про цей сайт
          </button>
        </li>
        <li className={styles.item}>
          <button className={styles.button}>Інструкції</button>
        </li>
        <li className={styles.item}>
          <button className={styles.button}>Інші проекти</button>
        </li>
        <li className={styles.item}>
          <button className={styles.button}>Контакти</button>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
