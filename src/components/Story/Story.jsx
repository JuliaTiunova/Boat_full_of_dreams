import {
  beginning,
  creatures,
  expoHero,
  expoHeroess,
} from "../../arrays/arrays";
import { beginningPlus } from "../../arrays/arrays";

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
  const expoHeroIndex = findRandomIndex(expoHero.length);
  const expoHeroessIndex = findRandomIndex(expoHeroess.length);

  const protagonist = props.protagonist;
  const place = props.place;
  const name = props.name;

  let beginningPlusStory = "";

  if (beginningIndex <= 3) {
    beginningPlusStory = beginningPlus[findRandomIndex(beginningPlus.length)];
  } else {
    beginningPlusStory = "";
  }
  let beginningEndChain = "";
  // if protaF or protaM
  if (protagonist === "лицар" || protagonist === "чарівник") {
    beginningEndChain = `${expoHero[expoHeroIndex]} ${protagonist} на ім'я ${name}.`;
  } else if (protagonist === "принцеса" || protagonist === "чарівниця") {
    beginningEndChain = `${expoHeroess[expoHeroessIndex]} ${protagonist} на ім'я ${name}.`;
  } else {
    let protagonists = "";
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

  const story = `${beginning[beginningIndex]} ${beginningPlusStory} ${beginningEndChain}`;
  console.log(protagonist, place, name);
  return <p>{story}</p>;
};

export default Story;
