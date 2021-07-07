import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h2 className={styles.title} id="about">
        Генератор Казок
      </h2>
      <div className={styles.wrapper}>
        <img
          src="./books.jpeg"
          alt="shelf full of books and one book flying in the air"
        />
        <p className={styles.text}>
          Брати Грім для вас надто жорстокі? Чи ви втомилися від геніальних
          Андерсена та Гессе? А може вам просто хочеться відчути себе
          найкрутішими батьками і прочитати для дітей казку, що наче була
          написана особисто для них? Не гайте часу, переходьте до короткої{" "}
          <span>інструкції</span> чи одразу пірнайте у{" "}
          <span id="vyriy">вирій</span>. На вас чекають пригоди!
        </p>
      </div>
    </div>
  );
};

export default About;
