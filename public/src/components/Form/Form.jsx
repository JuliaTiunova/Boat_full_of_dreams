import { useState } from "react";
import {
  helpers,
  moodOf,
  placesAll,
  // powers,
  protagonistsAll,
} from "../../arrays/arrays";
import Button from "../Button/Button";
import styles from "./Form.module.css";
// import Select from "../Select/Select";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";
// import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Options from "../Options/Options";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

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

  // const handleSavePower = (event) => {
  //   setPower(event.target.value);
  // };

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
        <Swiper
          className={styles.formSlide}
          slidesPerView={1}
          spaceBetween={100}
          navigation
          speed={500}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className={styles.inputWrapper}>
              <label htmlFor="protagonist">Обери свого героя</label>
              <select
                className={styles.input}
                value={protagonist}
                onChange={handleChange}
                name="protagonist"
                id="protagonist"
              >
                <option value="" hidden></option>
                <Options array={protagonistsAll} />
              </select>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.inputWrapper}>
              <label htmlFor="place">Обери світ</label>
              <select
                className={styles.input}
                value={place}
                onChange={handleSavePlace}
                name="place"
                id="place"
              >
                <option value="" hidden></option>
                <Options array={placesAll} />
              </select>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.inputWrapper}>
              <label htmlFor="name">Дай герою гідне ім'я</label>
              <input
                className={styles.input}
                value={name}
                type="text"
                name="name"
                id="name"
                onChange={handleSaveName}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.inputWrapper}>
              <label htmlFor="helpers">Допоможи герою</label>
              <select
                className={styles.input}
                value={helper}
                onChange={handleSaveHelpers}
                name="helpers"
                id="helpers"
              >
                <option value="" hidden></option>
                <Options array={helpers} />
              </select>
            </div>
          </SwiperSlide>
          {/* <label htmlFor="power">Надай йому/їй сили</label>
        <select
          className={styles.input}
          value={power}
          onChange={handleSavePower}
          name="power"
          id="power"
        >
          <option value="" hidden></option>
          <Option array={powers} />
        </select> */}
          <SwiperSlide>
            <div className={styles.inputWrapper}>
              <label htmlFor="mood">Обери настрій</label>
              <select
                className={styles.input}
                value={mood}
                onChange={handleSaveMood}
                name="mood"
                id="mood"
              >
                <option value="" hidden></option>
                <Options array={moodOf} />
              </select>
            </div>
          </SwiperSlide>
        </Swiper>
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
