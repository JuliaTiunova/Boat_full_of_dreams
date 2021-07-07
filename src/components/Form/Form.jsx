import { useState } from "react";
import Option from "../Option/Option";
import OptionPlace from "../OptionPlace/OptionPlace";
import styles from "./Form.module.css";

const Form = (props) => {
  const [protagonist, setProtagonist] = useState("");
  const [place, setPlace] = useState("");
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setProtagonist(event.target.value);
  };

  const handleSavePlace = (event) => {
    setPlace(event.target.value);
  };

  const handleSaveName = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAdd(protagonist, place, name);
    console.log(protagonist + " " + place + " " + name);
  };

  const handleReset = (event) => {
    setProtagonist("");
    setPlace("");
    setName("");
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
          value={protagonist}
          onChange={handleChange}
          name="protagonist"
          id="protagonist"
        >
          <option value="" hidden></option>
          <Option />
        </select>
        <label htmlFor="place">Обери світ</label>
        <select
          value={place}
          onChange={handleSavePlace}
          name="place"
          id="place"
        >
          <option value="" hidden></option>
          <OptionPlace />
        </select>
        <label htmlFor="name">Дай герою гідне ім'я</label>
        <input
          value={name}
          type="text"
          name="name"
          id="name"
          onChange={handleSaveName}
        />
        <button type="submit">submit</button>
        <button type="reset">reset</button>
      </form>
    </div>
  );
};

export default Form;
