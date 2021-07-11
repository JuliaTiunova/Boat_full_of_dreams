import styles from "./Contacts.module.css";
import Social from "../Social/Social";

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <form className={styles.form} action="#">
        <label htmlFor="name">Твоє ім'я</label>
        <input className={styles.input} type="text" id="name" minLength="3" />
        <label htmlFor="email">Твоя електронна адреса</label>
        <input
          className={styles.input}
          type="email"
          name="email"
          id="email"
          required
        />
        <label htmlFor="message">Залиш повідомлення</label>
        <textarea
          className={styles.input}
          name=""
          id="message"
          cols="20"
          rows="4"
          minLength="10"
        ></textarea>
        <button className={styles.button} type="submit">
          Надіслати
        </button>
      </form>
      <div className={styles.social}>
        <p>Ходи за нами</p>
        <Social />
      </div>
    </div>
  );
};

export default Contacts;
