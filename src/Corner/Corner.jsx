import styles from "./Corner.module.css";

const Corner = () => {
  const handleClick = (event) => {
    event.preventDefault();
  };

  return <button className={styles.corner} onClick={handleClick}></button>;
};

export default Corner;
