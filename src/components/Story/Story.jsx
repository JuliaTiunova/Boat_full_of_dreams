import {
  beginning,
  creatures,
  expoHero,
  expoHeroess,
  mountainPlaceDragon,
  namesDragon,
  namesElf,
  namesMermaid,
  placesForest,
  placesPlusMountain,
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
  const placesPlusMountainIndex = findRandomIndex(placesPlusMountain.length);
  const namesDragonIndex = findRandomIndex(namesDragon.length);
  const namesElfIndex = findRandomIndex(namesElf.length);
  const namesMermaidIndex = findRandomIndex(namesMermaid.length);

  const protagonist = props.protagonist;
  const place = props.place;
  let name = props.name;
  let mood = props.mood;
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
  } else if (protagonist === "принцеса" || protagonist === "чарівниця") {
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
      // } else if (protagonist === "єдиноріг") {
      //   protagonists = "єдинороги";
    } else if (protagonist === "") {
      protagonists = creatures[creturesIndex];
    }
    beginningEndChain = `існували ${protagonists}.`;
  }

  // for part2
  if (!protagonists) {
    if (protagonist === "лицар" || protagonist === "чарівник") {
      if (mood === "повчальна") {
        part2 = `Він був дуже добрим, але ще дитиною його віддали на службу до злого короля.
         Почув одного дня король, що десь `;

        if (place === "чарівний ліс") {
          part2 += `у чарівному лісі `;
        } else if (place === "море/океан...") {
          part2 += `на безлюдному острові в океані `;
        } else if (place === "гори") {
          part2 += `в далеких горах, на самій вершині, що впирається в небо `;
        } else if (place === "місто") {
          part2 += `в далекому невідомому місті `;
        }

        part2 += `є чудодійне джерело, вода якого дарує вічну молодість. І задумав злий король жити вічно. Тож відправився ${protagonist} у далеку подорож і взяв він з собою тільки `;

        if (helper === "меч і щит") {
          part2 += `свої вірні меч і щит.`;
        } else if (helper === "чарівна палочка") {
          part2 += `свою вірну чарівну палочку`;
          if (protagonist === "лицар") {
            part2 += `: подарунок від придворного мага.`;
          } else {
            part2 += `.`;
          }
        } else if (helper === "лук і стріли") {
          part2 += `свої вірні лук і стріли.`;
        } else if (helper === "кінь") {
          part2 += `свого вірного коня.`;
        } else if (helper === "троянда") {
          part2 += `чарівну троянду.`;
        }
      }
    }

    if (protagonist === "принцеса" || protagonist === "чарівниця") {
      if (mood === "повчальна") {
        part2 = `Вона мала яскраве руде волосся, що, нажаль, було неприпустимим для її народу.
         Та одного разу її батьки почули про чарівне джерело, яке може виконати будь-яке бажання. Але знайти це джерело можна було тільки `;

        if (place === "чарівний ліс") {
          part2 += `в далекому чарівному лісі. `;
        } else if (place === "море/океан...") {
          part2 += `на безлюдному острові в далекому океані. `;
        } else if (place === "гори") {
          part2 += `в далеких горах, на самій вершині, що впирається в небо. `;
        } else if (place === "місто") {
          part2 += `в далекому невідомому місті. `;
        }

        part2 += `Тож зібралась ${protagonist} у далеку подорож і взяла з собою тільки `;

        if (helper === "меч і щит") {
          part2 += `свої вірні меч і щит.`;
        } else if (helper === "чарівна палочка") {
          part2 += `свою вірну чарівну палочку`;
          if (protagonist === "принцеса") {
            part2 += `, подарунок від придворного мага.`;
          } else {
            part2 += `.`;
          }
        } else if (helper === "лук і стріли") {
          part2 += `свої вірні лук і стріли.`;
        } else if (helper === "кінь") {
          part2 += `свого вірного коня.`;
        } else if (helper === "троянда") {
          part2 += `чарівну троянду.`;
        }
      }
    }
  }

  if (protagonists) {
    if (!name && protagonist === "дракон") {
      name = namesDragon[namesDragonIndex];
    }

    if (!name && protagonist === "ельф") {
      name = namesElf[namesElfIndex];
    }

    if (!name && protagonist === "русалка") {
      name = namesMermaid[namesMermaidIndex];
    }

    part2 = "Вони жили ";

    if (place === "чарівний ліс" && protagonist !== "русалка") {
      part2 += `у густих-густих лісах, ${placesForest[placesForestIndex]}. `;
    }

    if (place === "гори") {
      part2 += "високо в горах, ";
    }

    if (
      place === "гори" &&
      protagonist !== "русалка" &&
      protagonist !== "дракон"
    ) {
      part2 += `${placesPlusMountain[placesPlusMountainIndex]}.`;
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

  // for part3

  if (!protagonists) {
    if (protagonist === "лицар" || protagonist === "чарівник") {
      if (mood === "повчальна") {
        part3 = ``;
      }
    }
  }

  const story = `${beginning[beginningIndex]} ${beginningPlusStory} ${beginningEndChain} 
  ${part2}`;
  console.log(story);
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.text}>{story}</p>
    </div>
  );
};

export default Story;
