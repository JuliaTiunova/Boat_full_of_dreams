import {
  beginning,
  creatures,
  expoHero,
  expoHeroess,
  moodOf,
  mountainPlaceDragon,
  namesDragon,
  namesElf,
  namesKnightWizard,
  namesMermaid,
  namesPrincessWitch,
  placesAll,
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
  const moodOfIndex = findRandomIndex(moodOf.length);
  const placesAllIndex = findRandomIndex(placesAll.length);
  const namesKnightWizardIndex = findRandomIndex(namesKnightWizard.length);
  const namesPrincessWitchIndex = findRandomIndex(namesPrincessWitch.length);

  let protagonist = props.protagonist;
  let place = props.place;
  let name = props.name;
  let mood = props.mood;
  // let power = props.power;
  let helper = props.helper;

  let title = "";
  let beginningPlusStory = "";
  let protagonists = "";
  let beginningEndChain = "";
  let part2 = "";
  let part2_1 = "";
  let part2_2 = "";
  let part3 = "";

  if (mood === "") {
    mood = moodOf[moodOfIndex];
  }
  if (place === "") {
    place = placesAll[placesAllIndex];
  }

  if (beginningIndex <= 3) {
    beginningPlusStory = beginningPlus[findRandomIndex(beginningPlus.length)];
  } else {
    beginningPlusStory = "";
  }

  if (protagonist === "лицар" || protagonist === "чарівник") {
    if (name === "") {
      name = namesKnightWizard[namesKnightWizardIndex];
    }
    beginningEndChain = `${
      expoHero[findRandomIndex(expoHero.length)]
    } ${protagonist} на ім'я ${name}.`;
  } else if (protagonist === "принцеса" || protagonist === "чарівниця") {
    if (name === "") {
      name = namesPrincessWitch[namesPrincessWitchIndex];
    }
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
        switch (place) {
          case "чарівний ліс":
            part2 += `у чарівному лісі `;
            break;
          case "море/океан...":
            part2 += `на безлюдному острові в океані `;
            break;
          case "гори":
            part2 += `в далеких горах, на самій вершині, що впирається в небо `;
            break;
          case "місто":
            part2 += `в далекому невідомому місті `;
            break;
          default:
        }

        part2 += `є чудодійне джерело, вода якого дарує вічну молодість. І задумав злий король жити вічно. Тож відправився ${protagonist} у далеку подорож і взяв він з собою тільки `;

        switch (helper) {
          case "меч і щит":
            part2 += `свої вірні меч і щит.`;
            break;
          case "чарівна палочка":
            part2 += `свою вірну чарівну палочку`;
            if (protagonist === "лицар") {
              part2 += `: подарунок від придворного мага.`;
            } else {
              part2 += `.`;
            }
            break;
          case "лук і стріли":
            part2 += `свої вірні лук і стріли.`;
            break;
          case "кінь":
            part2 += `свого вірного коня.`;
            break;
          case "троянда":
            part2 += `чарівну троянду.`;
            break;
          default:
        }
      }

      if (mood === "героїчна") {
        part2 += `Він мав надзвичайну силу і звичайні люди боялися його, тож ${protagonist} ${name}, почувши, що один король хоче взяти його на службу, відправився в далеку подорож. Жив король `;

        switch (place) {
          case "чарівний ліс":
            part2 += `в далекому чарівному лісі `;
            break;
          case "море/океан...":
            part2 += `на дні глибокого океану `;
            break;
          case "гори":
            part2 += `в печерах високих гір `;
            break;
          case "місто":
            part2 += `в великому місті далекої країни `;
            break;
          default:
        }
        part2 += `і щоб подорож його була легшою, ${name} взяв з собою `;
        switch (helper) {
          case "меч і щит":
            part2 += `свої вірні меч і щит.`;
            break;
          case "чарівна палочка":
            part2 += `свою вірну чарівну палочку`;
            if (protagonist === "лицар") {
              part2 += `: подарунок від придворного мага.`;
            } else {
              part2 += `.`;
            }
            break;
          case "лук і стріли":
            part2 += `свої вірні лук і стріли.`;
            break;
          case "кінь":
            part2 += `свого вірного коня.`;
            break;
          case "троянда":
            part2 += `чарівну троянду.`;
            break;
          default:
        }
      }

      if (mood === "моторошна") {
      }

      if (mood === "весела") {
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

      if (mood === "героїчна") {
      }

      if (mood === "моторошна") {
      }

      if (mood === "весела") {
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
      protagonist === "ельф" &&
      protagonist !== "дракон"
    ) {
      part2 += `${placesPlusMountain[placesPlusMountainIndex]}.`;
    }

    if (protagonist === "русалка") {
      if (place === "чарівний ліс") {
        part2 += `в озері захованому в хащах густого-густого лісу, хоча не раз їх бачили на болотах.`;
      }
      if (place === "гори") {
        part2_1 = waterPlace[waterPlaceIndex];
        if (waterPlaceIndex === 0) {
          part2_2 = "озерн";
        } else {
          part2_2 = "річков";
        }
        part2 += `на дні ${part2_1} і їм було дуже-дуже холодно. Коли наставала зима, їхня луска тверділа, мов лід і русалки опускалися на ${part2_2}е дно, невзмозі поворухнути хвостами. Там вони лежали всю зиму, мов кришталеві скульптури`;

        if (mood === "моторошна") {
          part2 += ` i ніхто, крім потопельників, не міг побачити їх`;
        }

        part2 += `. А наприкінці весни, коли лід танув, русалки підіймалися на поверхню, бентежили незворушні води і співали. З їхніх вуст зривався холодний подих і над ${part2_2}им плесом стелився туман. 
      Одну з таких русалок звали ${name}`;

        // if (power === "вміння літати") {
        //   part2 += ` і вона все життя мріяла літати.`;
        // }
      }
    }

    if (protagonist === "дракон") {
      if (place === "гори") {
        if (mood === "моторошна" || mood === "повчальна") {
          part2 += `${mountainPlaceDragon[mountainPlaceDragonIndex]}. Коли їм снилися погані сни, їхні пазурі впивалися в каміння, а з їхніх пащ виривалося жовте полум'я. `;

          if (mood === "моторошна") {
            part2 += `Воно освітлювало дно урвища, де лежали обгризені черепи та кості давно вже забутих людей.`;
          }
        }
      }
    }
  }

  // for part3

  if (!protagonists) {
    if (protagonist === "лицар" || protagonist === "чарівник") {
      if (mood === "повчальна") {
        part3 = `Першого ж дня зустрів ${name} на своєму шляху велетенське дерево, яке обсіли ворони. `;
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
