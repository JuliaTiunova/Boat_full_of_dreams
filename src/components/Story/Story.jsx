import {
  beginning,
  beginningPlus,
  expoHero,
  expoHeroess,
  helpers,
  moodOf,
  mountainPlaceDragon,
  namesDragon,
  // namesElf,
  namesKnightWizard,
  namesMermaid,
  namesPrincessWitch,
  placesAll,
  placesForest,
  // placesPlusMountain,
  protagonistsAll,
} from "../../arrays/arrays";
import { river, tree, oldManRiver } from "../../constants/constants";
import BoatRiverSpeach from "../../functions/BoatRiverSpeach";
import findRandomElement from "../../functions/findRandomElement";
import findRandomIndex from "../../functions/findRandomIndex";
import HelperAcrossRiver from "../../functions/HelperAcrossRiver";
import HelperTree from "../../functions/HelperTree";
import InPlaceDragon from "../../functions/InPlaceDragon";
import InPlaceHeroic from "../../functions/InPlaceHeroic";
import InPlacePart2 from "../../functions/InPlacePart2";
import ManInBoatSpeach from "../../functions/ManInBoatSpeach";
import ManInWhiteSpeach from "../../functions/ManInWhiteSpeach";
import MermaidPart2 from "../../functions/MermaidPart2";
import TakeHelper from "../../functions/TakeHelper";

import styles from "./Story.module.css";

const Story = (props) => {
  const beginningIndex = findRandomIndex(beginning.length);

  let protagonist = props.protagonist;
  let place = props.place;
  let name = props.name;
  let mood = props.mood;
  let helper = props.helper;

  let beginningPlusStory = "";
  let protagonists = "";
  let beginningEndChain = "";
  let part2 = "";
  let part2_1 = "";
  let part3 = "";
  let part3_1 = "";
  let part3_2 = "";
  let part4 = "";
  let part4_1 = "";
  let part4_2 = "";
  let part4_3 = "";

  if (mood === "") {
    mood = findRandomElement(moodOf);
  }

  if (place === "") {
    place = findRandomElement(placesAll);
  }

  if (protagonist === "") {
    protagonist = findRandomElement(protagonistsAll);
  }

  if (helper === "") {
    helper = findRandomElement(helpers);
  }

  if (beginningIndex <= 3) {
    beginningPlusStory = findRandomElement(beginningPlus);
  } else {
    beginningPlusStory = "";
  }

  if (protagonist === "лицар" || protagonist === "чарівник") {
    if (name === "") {
      name = findRandomElement(namesKnightWizard);
    }
    beginningEndChain = `${findRandomElement(
      expoHero
    )} ${protagonist} на ім'я ${name}.`;
  } else if (protagonist === "принцеса" || protagonist === "чарівниця") {
    if (name === "") {
      name = findRandomElement(namesPrincessWitch);
    }
    beginningEndChain = `${findRandomElement(
      expoHeroess
    )} ${protagonist} на ім'я ${name}.`;
  } else {
    if (protagonist === "русалка") {
      protagonists = "русалки";
    } else if (protagonist === "дракон") {
      protagonists = "дракони";
    } else if (protagonist === "ельф") {
      protagonists = "ельфи";
      // } else if (protagonist === "єдиноріг") {
      //   protagonists = "єдинороги";
    }
    beginningEndChain = `існували ${protagonists}.`;
  }

  // for part2

  if (!protagonists) {
    if (protagonist === "лицар" || protagonist === "чарівник") {
      if (mood === "повчальна" || mood === "моторошна") {
        part2 += `Він був дуже добрим, але ще дитиною його віддали на службу до злого короля.
         Почув одного дня король, що десь ${InPlacePart2(place)} `;

        part2 += `є чудодійне джерело, вода якого дарує вічну молодість. І задумав злий король жити вічно. Тож відправився ${protagonist} у далеку подорож і взяв він з собою тільки ${TakeHelper(
          helper,
          protagonist
        )}`;
      }

      if (mood === "героїчна") {
        part2 += `Він мав надзвичайну силу і прості люди боялися його, тож ${protagonist} ${name}, почувши, що один король хоче взяти його на службу, відправився в далеку подорож. Жив король ${InPlaceHeroic(
          place
        )}`;

        part2 += `і щоб подорож його була легшою, ${name} взяв з собою ${TakeHelper(
          helper,
          protagonist
        )}`;
      }

      // for part3

      if (mood === "повчальна" || mood === "моторошна" || mood === "героїчна") {
        part3 += `Першого ж дня зустрів ${name} на своєму шляху ${tree}. Він хотів було `;
        if (helper !== "кінь") {
          part3 += `пройти `;
        } else {
          part3 += `проїхати `;
        }
        part3 += `повз, але раптом дерево заговорило:`;
        part3_1 += `- Ти напевно сильний та сміливий ${protagonist}, якщо ідеш цією дорогою. Благаю, допоможи мені позбутися цих ворон. `;
        part3_2 += `${name}, не довго думаючи, ${HelperTree(
          helper,
          protagonist
        )}`;

        part3_2 += `і всі ворони, як одна, полетіли в небо. `;

        // for part 4

        part4 += `Наступного дня ${protagonist} побачив перед собою ${river}. ${oldManRiver}. `;

        part4_1 += `${name} спробував розбудити діда, але той навіть не поворухнувся. Сів ${protagonist} на берег та й задумався, раптом чує - човен до нього промовляє: `;
        part4_2 += `${BoatRiverSpeach(protagonist)}`;
        part4_3 += `${name} послухав своє добре серце і вирішив допомогти. `;
        if (protagonist === "чарівник") {
          part4_3 += `Змахнув руками, прошепотів закляття перед старим`;
        } else if (protagonist === "лицар") {
          part4_3 += `Взяв старого на руки `;
        }
        part4_3 += `і так переніс його на берег. Тоді забрав у діда весла, ${HelperAcrossRiver(
          helper,
          name
        )}`;
        part4_3 += `і поплив собі геть. `;
      }

      // for part 5
    }

    if (protagonist === "принцеса" || protagonist === "чарівниця") {
      // for part 2

      if (mood === "повчальна" || mood === "моторошна") {
        part2 += `Вона мала яскраве руде волосся, що, нажаль, було неприпустимим для її народу.
         Та одного разу її батьки почули про чарівне джерело, яке може виконати будь-яке бажання. Але знайти це джерело можна було тільки ${InPlacePart2(
           place
         )}. `;

        part2 += `Тож зібралась ${protagonist} у далеку подорож і взяла з собою лише ${TakeHelper(
          helper,
          protagonist
        )}`;
      }

      if (mood === "героїчна") {
        part2 += `Вона мала надзвичайну силу, тому прості люди, і навіть власні батьки її боялися.`;

        part2_1 += `Та ось почула якось ${protagonist}, що живе ${InPlaceHeroic(
          place
        )} `;

        part2_1 += `одна королева, яка нічого не боїться. ${name} взяла ${TakeHelper(
          helper,
          protagonist
        )}`;

        part2_1 += `і вирушила на пошуки королеви, шукати поради. `;
      }

      // for part 3

      if (mood === "повчальна" || mood === "моторошна" || mood === "героїчна") {
        if (helper === !"кінь") {
          part3 += `Їхала `;
        } else {
          part3 += `Йшла `;
        }
        part3 += `${protagonist} три дні і три ночі, коли побачила на своєму шляху ${river}. ${oldManRiver}. Підійшла до нього ${protagonist} `;
      }
      if (mood === "повчальна" || mood === "героїчна") {
        part3 += `і спробувала розбудити, але дідо міцно спав. `;
      }

      if (mood === "моторошна") {
        part3 += `і побачила, що дід синій, як лід, і не дихає. `;
      }

      part3 += `${name} хотіла взяти з його рук весла, аж раптом він розплющив очі і каже: `;

      part3_1 += ManInBoatSpeach(protagonist, mood);
      // part3_2 += ``;
    }
  }

  if (protagonists) {
    if (!name && protagonist === "дракон") {
      name = findRandomElement(namesDragon);
    }

    // if (!name && protagonist === "ельф") {
    //   name = findRandomElement(namesElf);
    // }

    if (!name && protagonist === "русалка") {
      name = findRandomElement(namesMermaid);
    }

    part2 += "Вони жили ";

    if (place === "чарівний ліс" && protagonist !== "русалка") {
      part2 += `у густих-густих лісах, ${findRandomElement(placesForest)}. `;
    }

    if (place === "гори") {
      part2 += "високо в горах, ";
    }

    // if (protagonist === "ельф") {
    //   if (mood === "моторошна" || mood === "повчальна" || mood === "героїчна") {
    //     if (place === "гори") {
    //       part2 += `${findRandomElement(placesPlusMountain)}. `;
    //     }
    //     if (place === "море/океан...") {
    //       part2 += `в чарівному королівстві під водою і там будували собі високі палаци. `;
    //     }
    //     if (place === "місто") {
    //       part2 += `у великих містах. `;
    //     }
    //   }
    // }

    if (protagonist === "русалка") {
      if (mood === "моторошна" || mood === "повчальна" || mood === "героїчна") {
        part2 += MermaidPart2(place, mood);

        part2_1 += `Одну з тих русалок звали ${name} і найбільше за все вона мріяла `;
        if (place !== "місто") {
          part2_1 += `побачити світ. `;
        } else {
          part2_1 += `про порятунок. `;
        }
      }
    }

    if (protagonist === "дракон") {
      if (mood === "моторошна" || mood === "повчальна" || mood === "героїчна") {
        if (place === "гори") {
          part2 += `${findRandomElement(
            mountainPlaceDragon
          )}. Коли їм снилися погані сни, їхні пазурі впивалися в каміння, а з їхніх пащ виривалося жовте полум'я. `;

          if (mood === "моторошна") {
            part2 += `Воно освітлювало дно урвища, де лежали обгризені черепи та кості давно вже забутих людей. `;
          }
        }
        if (place === "море/океан...") {
          part2 += `на водах океану. Обплутані водоростями та оброслі мохом - їх часто плутали з плавучими островами. `;
        }
        if (place === "місто") {
          part2 += `колись у високих горах і полювали на гномів, але врешті люди винищили усіх, крім одного. Звали його ${name}. `;
        }

        if (place !== "місто") {
          part2 += `Одного з них звали ${name} `;
        } else {
          part2 += ``;
        }

        part2 += `і більше за все він любив золото та коштовне каміння. `;

        part2_1 += `Тож відправився ${protagonist} ${name} одного дня на пошуки нових скарбів. `;
      }
      if (mood === "моторошна" || mood === "повчальна") {
        if (place === "море/океан...") {
          part3 += `Плив `;
        } else {
          part3 += `Летів `;
        }

        part3 += `${name} три дні і три ночі коли побачив попереду ${InPlaceDragon(
          place,
          protagonist
        )}. Побачив чоловік, що `;

        if (place === "море/океан...") {
          part3 += `пливе `;
        } else {
          part3 += `летить `;
        }

        part3 += `до нього великий дракон, звівся на ноги і таке промовив: `;

        part3_1 += `${ManInWhiteSpeach(protagonist, place)}`;
        part3_2 += ``;
      }
    }
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        {protagonist} {name}
      </h1>
      <div className={styles.textWrapper}>
        <div
          className={styles.editWrapper}
          // onClick={handleClick}
        >
          <svg
            className={styles.edit}
            width="42px"
            height="42px"
            fill="#ffffff"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 334.876 334.876"
          >
            <g>
              <path
                d="M35.243,94.888c12.885,19.483,24.198,42.637,25.982,46.618c0.511,1.148,1.316,3.856,2.219,7.169
		c6.282-8.877,13.946-16.214,23.105-21.599c13.07-7.68,28.093-10.845,44.312-10.084c-3.916-6.217-7.479-12.619-9.192-17.601
		c-4.4-12.776-20.348-65.53-29.676-88.053c-9.323-22.523-44.834-6.494-65.47,5.238S4.73,42.765,6.829,46.747
		C8.923,50.728,22.358,75.405,35.243,94.888z"
              />
              <path
                d="M114.37,167.478c27.446-11.313,33.314,2.41,33.314,2.41c8.697-8.066,2.622-17.601,2.622-17.601
		s2.197-4.085-1.36-8.278c-2.176-2.556-9.187-11.835-15.322-21.582c-16.219-0.761-31.242,2.404-44.312,10.084
		c-9.159,5.385-16.823,12.717-23.105,21.599c2.235,8.186,5.102,20.179,5.847,22.268c1.05,2.932,3.769,6.913,6.288,7.435
		c2.513,0.522,3.981,2.932,3.981,2.932c3.247,6.598,13.407,7.016,13.407,7.016S86.919,178.791,114.37,167.478z"
              />
              <path
                d="M319.156,225.659c-8.409-6.576-19.662-9.736-28.631-15.556
		c-23.187-15.044,6.848-28.903,16.79-37.867c16.883-15.219,21.316-32.754,14.326-54.048c-2.186-6.663-6.924-13.69-4.737-7.033
		c11.95,36.42-26.026,53.825-45.313,74.189c-7.103,7.5-6.124,15.632,1.256,23.116c14.278,14.479,57.23,26.7,30.606,49.207
		c-18.661,15.773-47.624,17.187-68.309,30.508c-2.796,1.8-3.122,6.641-0.31,8.61c20.315,14.207,48.44,10.786,68.456,23.687
		c-34.527,10.389-70.746,3.612-106.252,0.359c0.141-1.006,0.016-1.86,0.016-1.86c-4.514-27.658-4.971-33.657-2.877-47.488
		c2.094-13.826,0-15.088,0-15.088c-21.37-29.333-47.331-84.73-47.331-84.73c-3.459-5.76-17.182-8.202-34.152-0.631
		c-17.601,7.859-16.344,18.645-16.344,18.645l29.86,88.026c1.05,2.828,5.869,4.188,5.869,4.188
		c27.973,8.066,50.774,36.333,53.814,40.733c3.04,4.4,5.238,2.725,5.238,2.725l-32.623-73.063c-2.491-0.571-5.031-2.736-6.527-5.945
		c-2.165-4.65-1.305-9.633,1.92-11.134c3.225-1.501,7.593,1.05,9.758,5.7c1.632,3.503,1.539,7.19,0.022,9.442l31.101,70.273
		c-0.228-0.022-0.457-0.044-0.685-0.065c-6.94-0.598,0.343,8.262,19.842,10.71c43.458,5.455,60.455,5.118,102.336-3.753
		c4.297-0.908,4.373-6.396,1.55-9.274c-18.547-18.928-45.704-14.892-67.939-25.232C278.173,281.1,355.778,254.301,319.156,225.659z"
              />
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </div>
        <p className={styles.text}>
          {beginning[beginningIndex]} {beginningPlusStory} {beginningEndChain}{" "}
          {part2} <br /> {part2_1} <br /> {part3} <br /> {part3_1} <br />{" "}
          {part3_2} <br />
          <br /> {part4} <br /> {part4_1} <br />
          {part4_2} <br /> {part4_3}
        </p>{" "}
      </div>
    </div>
  );
};

export default Story;
