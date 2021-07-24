const TakeHelper = (helper, protagonist) => {
  let text = "";
  switch (helper) {
    case "меч і щит":
      text += `свої вірні меч і щит.`;
      break;
    case "чарівна палочка":
      text += `свою вірну чарівну палочку`;
      if (protagonist === "лицар" || protagonist === "принцеса") {
        text += `: подарунок від придворного мага.`;
      } else {
        text += `.`;
      }
      break;
    case "лук і стріли":
      text += `свої вірні лук і стріли.`;
      break;
    case "кінь":
      text += `свого вірного коня.`;
      break;
    case "троянда":
      text += `чарівну троянду.`;
      break;
    default:
  }

  return text;
};

export default TakeHelper;
