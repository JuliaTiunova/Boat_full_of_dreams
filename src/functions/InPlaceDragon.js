const InPlaceDragon = (place, protagonist) => {
  let text = "";

  switch (place) {
    case "гори":
      text += `височіє гора, якої ${protagonist} раніше не бачив. `;
      break;
    case "море/океан...":
      text += `високе дерево, що росте прямо з морських глибин. `;
      break;
    case "місто":
      text += `велике шумне місто, повне людей. `;
      break;
    case "чарівний ліс":
      text += `густий ліс, а посеред нього високий замок. `;
      break;
    default:
  }
  return text;
};

export default InPlaceDragon;
