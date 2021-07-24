const InPlacePart2 = (place) => {
  let text = "";

  switch (place) {
    case "чарівний ліс":
      text += `в далекому чарівному лісі`;
      break;
    case "море/океан...":
      text += `на безлюдному острові в далекому океані`;
      break;
    case "гори":
      text += `в далеких горах, на самій вершині, що впирається в небо`;
      break;
    case "місто":
      text += `в далекому невідомому місті`;
      break;
    default:
  }

  return text;
};

export default InPlacePart2;
