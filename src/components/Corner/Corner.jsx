import styles from "./Corner.module.css";

const Corner = () => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log("You've clicked it!");
  };

  return <button className={styles.corner} onClick={handleClick}></button>;

  //   return (
  //     <button className={styles.circle} onClick={handleClick}>
  //       <div className={styles.circleTop}></div>
  //       <div className={styles.circleRight}></div>
  //       <div className={styles.circleBottom}></div>
  //       <div className={styles.circleLeft}></div>
  //     </button>
  //   );
};

export default Corner;
