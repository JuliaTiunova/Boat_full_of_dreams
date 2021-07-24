const InPlaceHeroic = (place) => {
  let text = "";
  switch (place) {
    case "чарівний ліс":
      text += `в далекому чарівному лісі `;
      break;
    case "море/океан...":
      text += `на дні глибокого океану `;
      break;
    case "гори":
      text += `в печерах високих гір `;
      break;
    case "місто":
      text += `в великому місті далекої країни `;
      break;
    default:
  }
  return text;
};

export default InPlaceHeroic;
