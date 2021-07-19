const InPlacePart2 = (place) => {
  let part2 = "";

  switch (place) {
    case "чарівний ліс":
      part2 += `в далекому чарівному лісі`;
      break;
    case "море/океан...":
      part2 += `на безлюдному острові в далекому океані`;
      break;
    case "гори":
      part2 += `в далеких горах, на самій вершині, що впирається в небо`;
      break;
    case "місто":
      part2 += `в далекому невідомому місті`;
      break;
    default:
  }

  return part2;
};

export default InPlacePart2;
