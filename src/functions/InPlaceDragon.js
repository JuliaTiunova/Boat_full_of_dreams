import { manInWhite } from "../constants/constants";

const InPlaceDragon = (place, protagonist) => {
  let text = "";

  switch (place) {
    case "гори":
      text += `височіє гора, якої ${protagonist} раніше не бачив. А на тій горі ${manInWhite}`;
      break;
    case "море/океан...":
      text += `високе дерево, що росте прямо з морських глибин. А на дереві, на самому вершечку ${manInWhite}`;
      break;
    case "місто":
      text += `велике шумне місто, повне людей. Посеред міста стояла висока вежа, а на тій вежі ${manInWhite}`;
      break;
    case "чарівний ліс":
      text += `густий ліс, а посеред нього високий замок. А на найвищій вежі того замку ${manInWhite}`;
      break;
    default:
  }
  return text;
};

export default InPlaceDragon;
