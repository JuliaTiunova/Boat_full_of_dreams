import styles from "./Social.module.css";

const Social = () => {
  return (
    <ul className={styles.list}>
      <li>
        <a href="#" className={styles.link}>
          <i className="icon-linkedin"></i>
        </a>
      </li>
      <li>
        <a href="#" className={styles.link}>
          <i className="icon-twitter"></i>
        </a>
      </li>
      <li>
        <a href="#" className={styles.link}>
          <i className="icon-github-big-logo"></i>
        </a>
      </li>
    </ul>
  );
};
export default Social;
