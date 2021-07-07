import styles from "./Instruction.module.css";
import Title2 from "../Title2/Title2";

const Instruction = () => {
  return (
    <div className={styles.wrapper}>
      <Title2 className={styles.title} text="Інструкція" />
    </div>
  );
};

export default Instruction;
