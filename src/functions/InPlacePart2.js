const InPlacePart2 = (place) => {
  let part2 = "";

  switch (place) {
    case place === "чарівний ліс":
      part2 += `в далекому чарівному лісі`;
      break;
    case place === "море/океан...":
      part2 += `на безлюдному острові в далекому океані`;
      break;
    case place === "гори":
      part2 += `в далеких горах, на самій вершині, що впирається в небо`;
      break;
    case place === "місто":
      part2 += `в далекому невідомому місті`;
      break;
    default:
  }

  return part2;
};

export default InPlacePart2;
