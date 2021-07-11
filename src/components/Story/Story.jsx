import {
  beginning,
  creatures,
  expoHero,
  expoHeroess,
  mountainPlaceDragon,
  placesForest,
  waterPlace,
} from "../../arrays/arrays";
import { beginningPlus } from "../../arrays/arrays";
import styles from "./Story.module.css";

const findRandomIndex = (length) => {
  let index;
  do {
    index = Math.trunc(Math.random() * 10);
  } while (index < 0 || index >= length);

  return index;
};

const Story = (props) => {
  const beginningIndex = findRandomIndex(beginning.length);
  const creturesIndex = findRandomIndex(creatures.length);
  const waterPlaceIndex = findRandomIndex(waterPlace.length);
  const mountainPlaceDragonIndex = findRandomIndex(mountainPlaceDragon.length);
  const placesForestIndex = findRandomIndex(placesForest.length);

  const protagonist = props.protagonist;
  const place = props.place;
  const name = props.name;
  const mood = props.mood;
  const power = props.power;
  const helper = props.helper;

  let title = "";
  let beginningPlusStory = "";
  let protagonists = "";
  let beginningEndChain = "";
  let part2 = "";
  let part2_1 = "";
  let part2_2 = "";
  let part3 = "";

  if (beginningIndex <= 3) {
    beginningPlusStory = beginningPlus[findRandomIndex(beginningPlus.length)];
  } else {
    beginningPlusStory = "";
  }

  if (protagonist === "лицар" || protagonist === "чарівник") {
    beginningEndChain = `${
      expoHero[findRandomIndex(expoHero.length)]
    } ${protagonist} на ім'я ${name}.`;
  } else if (
    protagonist === "принцеса" ||
    protagonist === "чарівниця" ||
    protagonist === "дівчина"
  ) {
    beginningEndChain = `${
      expoHeroess[findRandomIndex(expoHeroess.length)]
    } ${protagonist} на ім'я ${name}.`;
  } else {
    if (protagonist === "русалка") {
      protagonists = "русалки";
    } else if (protagonist === "дракон") {
      protagonists = "дракони";
    } else if (protagonist === "ельф") {
      protagonists = "ельфи";
    } else if (protagonist === "єдиноріг") {
      protagonists = "єдинороги";
    } else if (protagonist === "") {
      protagonists = creatures[creturesIndex];
    }
    beginningEndChain = `існували ${protagonists}.`;
  }

  // for part2
  if (protagonists) {
    part2 = "Вони жили ";

    if (place === "чарівний ліс" && protagonist !== "русалка") {
      part2 += `у густих-густих лісах, ${placesForest[placesForestIndex]} `;
    }

    if (place === "гори") {
      part2 += "високо в горах ";
    }

    if (protagonist === "русалка" && place === "чарівний ліс") {
      part2 += `в озері захованому в хащах густого-густого лісу, хоча не раз їх бачили на болотах.`;
    }

    if (protagonist === "русалка" && place === "гори") {
      part2_1 = waterPlace[waterPlaceIndex];
      if (waterPlaceIndex === 0) {
        part2_2 = "озерн";
      } else {
        part2_2 = "річков";
      }
      part2 += `на дні ${part2_1} і їм було дуже-дуже холодно. Коли наставала зима, їхня луска тверділа, мов лід і русалки опускалися на ${part2_2}е дно, невзмозі поворухнути хвостами. Там вони лежали всю зиму, мов кришталеві скульптури`;

      if (mood === "моторошна") {
        part2 += ` i ніхто, крім потопельників, не міг побачити їх`;
      } else {
      }
      part2 += `. А наприкінці весни, коли лід танув, русалки підіймалися на поверхню, бентежили незворушні води і співали. З їхніх вуст зривався холодний подих і над ${part2_2}им плесом стелився туман. 
      Одну з таких русалок звали ${name}`;

      if (power === "вміння літати") {
        part2 += ` і вона все життя мріяла літати.`;
      }
    }

    if (protagonist === "дракон" && place === "гори") {
      part2 += `${mountainPlaceDragon[mountainPlaceDragonIndex]}. Коли їм снилися погані сни, їхні пазурі впивалися в каміння, а з їхніх пащ виривалося жовте полум'я. `;

      if (mood === "моторошна") {
        part2 += `Воно освітлювало дно урвища, де лежали обгризені черепи та кості давно вже забутих людей.`;
      }
    }
  }

  const story = `${beginning[beginningIndex]} ${beginningPlusStory} ${beginningEndChain} ${part2}`;
  console.log(story);
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <pre className={styles.text}>{story}</pre>
    </div>
  );
};

export default Story;
