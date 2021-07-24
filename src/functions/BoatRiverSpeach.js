const BoatRiverSpeach = (protagonist) => {
  let text = "";
  text += `- Врятуй мене, молодий ${protagonist}`;
  switch (protagonist) {
    case "лицар":
      text += `ю, `;
      break;
    case "чарівник":
      text += `у, `;
      break;
    case "ельф" || "дракон":
      text += `е, `;
      break;
    default:
  }

  text += `від цього страшного чоловіка. Багато років назад він хитрістю заманив мене до себе на службу і все моє життя відтоді протікає між цими берегами. Якщо ти звільниш мене, я тобі віддячу. `;

  return text;
};

export default BoatRiverSpeach;
