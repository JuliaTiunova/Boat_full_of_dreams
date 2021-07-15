import styles from "./Instruction.module.css";
import Title2 from "../Title2/Title2";
import Card from "../Card/Card";
import cn from "classnames";

const Instruction = () => {
  return (
    <div className={styles.instruction} id="instruction">
      <Title2 className={styles.title} text="Інструкція" />
      <div className={styles.wrapper}>
        <div className={styles.smokeWrapper}>
          <Card
            className={cn(
              styles.smoke,
              "animate__animated",
              "animate__fadeInRight"
            )}
            title="Перший крок"
            text="Сміливо заходь у вирій що на головній сторінці"
          />
        </div>
        <div className={styles.knightWrapper}>
          <Card
            className={cn(
              styles.knight,
              "animate__animated",
              "animate__fadeInRight"
            )}
            title="Твій вибір"
            text="Заповнюй казкову форму, обирай героя і т.п. та тисни кнопку 'лягти спати'"
          />
        </div>

        <Card
          className={cn(
            styles.cardBig,
            "animate__animated",
            "animate__fadeInRight"
          )}
          title="Найприємніше"
          text="коли казка готова - насолоджуйся! Не забудь зберегти, зробити скріншот чи роздрукувати. Також є можливість редагування."
        />
        <div className={styles.wizardWrapper}>
          <Card
            className={cn(
              styles.wizard,
              "animate__animated",
              "animate__fadeInRight"
            )}
            title="Будь творцем"
            text="доки генерується твоя казка, потренуйся говорити голосами майбутніх героїв"
          />
        </div>
        <div className={styles.bookWrapper}>
          <Card
            className={cn(
              styles.book,
              "animate__animated",
              "animate__fadeInRight"
            )}
            title="Солодких снів та високих замків!"
          />
        </div>
      </div>
    </div>
  );
};

export default Instruction;
