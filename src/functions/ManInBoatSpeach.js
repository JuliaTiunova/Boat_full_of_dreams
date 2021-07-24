const ManInBoatSpeach = (protagonist, mood) => {
  let text = "";
  text += `- Вітаю вас, о `;
  switch (protagonist) {
    case "принцеса":
      text += `чарівна принцесо. `;
      break;
    case "чарівниця":
      text += `могутня чарівнице. `;
      break;
    default:
  }
  text += `Давно вже я не бачив живої душі в цих краях. `;
  if (mood === "моторошна") {
    text += `Я вже був на порозі смерті, коли ви мене розбудили. `;
  }
  text += `Ви, мабуть, хочете потрапити на той берег. Але мій човен дуже постарів, доки я спав, якщо вам вдасться розбудити його, я перевезу вас. `;

  return text;
};

export default ManInBoatSpeach;
