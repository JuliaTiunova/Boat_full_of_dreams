import { useState } from "react";
import {
  helpers,
  moodOf,
  placesAll,
  powers,
  protagonistsAll,
} from "../../arrays/arrays";
import Button from "../Button/Button";
import Option from "../Option/Option";
import styles from "./Form.module.css";

const Form = (props) => {
  const [protagonist, setProtagonist] = useState("");
  const [place, setPlace] = useState("");
  const [name, setName] = useState("");
  const [helper, setHelper] = useState("");
  const [power, setPower] = useState("");
  const [mood, setMood] = useState("");

  const handleChange = (event) => {
    setProtagonist(event.target.value);
  };

  const handleSavePlace = (event) => {
    setPlace(event.target.value);
  };

  const handleSaveName = (event) => {
    setName(event.target.value);
  };
  const handleSaveHelpers = (event) => {
    setHelper(event.target.value);
  };

  const handleSavePower = (event) => {
    setPower(event.target.value);
  };

  const handleSaveMood = (event) => {
    setMood(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAdd({ protagonist, place, name, helper, power, mood });
  };

  const handleReset = (event) => {
    setProtagonist("");
    setPlace("");
    setName("");
    setHelper("");
    setPower("");
    setMood("");
  };

  return (
    <div className={styles.wrapper}>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <label htmlFor="protagonist">Обери свого героя</label>
        <select
          className={styles.input}
          value={protagonist}
          onChange={handleChange}
          name="protagonist"
          id="protagonist"
        >
          <option value="" hidden></option>
          <Option array={protagonistsAll} />
        </select>
        <label htmlFor="place">Обери світ</label>
        <select
          className={styles.input}
          value={place}
          onChange={handleSavePlace}
          name="place"
          id="place"
        >
          <option value="" hidden></option>
          <Option array={placesAll} />
        </select>
        <label htmlFor="name">Дай герою гідне ім'я</label>
        <input
          className={styles.input}
          value={name}
          type="text"
          name="name"
          id="name"
          onChange={handleSaveName}
        />
        <label htmlFor="helpers">Допоможи герою</label>
        <select
          className={styles.input}
          value={helper}
          onChange={handleSaveHelpers}
          name="helpers"
          id="helpers"
        >
          <option value="" hidden></option>
          <Option array={helpers} />
        </select>
        <label htmlFor="power">Надай йому/їй сили</label>
        <select
          className={styles.input}
          value={power}
          onChange={handleSavePower}
          name="power"
          id="power"
        >
          <option value="" hidden></option>
          <Option array={powers} />
        </select>
        <label htmlFor="mood">Обери настрій</label>
        <select
          className={styles.input}
          value={mood}
          onChange={handleSaveMood}
          name="mood"
          id="mood"
        >
          <option value="" hidden></option>
          <Option array={moodOf} />
        </select>
        <div className={styles.buttonWrapper}>
          <Button className={styles.button} type="submit" text="Лягти спати" />
          <Button
            className={styles.button}
            type="reset"
            text="Очистити форму"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
