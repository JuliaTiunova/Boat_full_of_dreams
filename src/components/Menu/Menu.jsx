import styles from "./Menu.module.css";
import cn from "classnames";

const Menu = (props) => {
  const about = document.getElementById("about");
  const instruction = document.getElementById("instruction");
  const contacts = document.getElementById("contacts");

  function handleScroll() {
    about.scrollIntoView({ behavior: "smooth" });
  }

  function handleScrollInstruction() {
    instruction.scrollIntoView({ behavior: "smooth" });
  }

  function handleScrollContacts() {
    contacts.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className={cn(styles.menu, props.className)}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <button className={styles.button} onClick={handleScroll}>
            Про цей сайт
          </button>
        </li>
        <li className={styles.item}>
          <button className={styles.button} onClick={handleScrollInstruction}>
            Інструкції
          </button>
        </li>
        <li className={styles.item}>
          <button className={styles.button} onClick={handleScrollContacts}>
            Написати нам
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
