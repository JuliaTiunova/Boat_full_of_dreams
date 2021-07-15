import styles from "./Contacts.module.css";
import Social from "../Social/Social";
import Button from "../Button/Button";

const Contacts = (props) => {
  return (
    <div className={styles.contacts}>
      <form className={styles.form} action="#">
        <label htmlFor="name">Ім'я</label>
        <input className={styles.input} type="text" id="name" minLength="3" />
        <label htmlFor="email">Електронна адреса</label>
        <input
          className={styles.input}
          type="email"
          name="email"
          id="email"
          required
        />
        <label htmlFor="message">Повідомлення</label>
        <textarea
          className={styles.input}
          name=""
          id="message"
          cols="20"
          rows="4"
          minLength="10"
        ></textarea>
        <Button className={styles.button} text="Надіслати" type="submit" />
      </form>
      <div className={styles.social}>
        <p>Ходи за нами</p>
        <Social />
      </div>
    </div>
  );
};

export default Contacts;
