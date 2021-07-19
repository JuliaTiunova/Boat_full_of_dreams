const TakeHelper = (helper, protagonist) => {
  let part2 = "";
  switch (helper) {
    case "меч і щит":
      part2 += `свої вірні меч і щит.`;
      break;
    case "чарівна палочка":
      part2 += `свою вірну чарівну палочку`;
      if (protagonist === "лицар" || protagonist === "принцеса") {
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

  return part2;
};

export default TakeHelper;
