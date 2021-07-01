import styles from "./Corner.module.css";

const Corner = () => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log("You've clicked it!");
  };

  return <button className={styles.corner} onClick={handleClick}></button>;
};

export default Corner;
