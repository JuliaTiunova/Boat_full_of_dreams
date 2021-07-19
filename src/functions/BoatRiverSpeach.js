const BoatRiverSpeach = (protagonist) => {
  let part4_2 = "";
  part4_2 += `- Врятуй мене, молодий ${protagonist}`;
  switch (protagonist) {
    case "лицар":
      part4_2 += `ю, `;
      break;
    case "чарівник":
      part4_2 += `у, `;
      break;
    case "ельф" || "дракон":
      part4_2 += `е, `;
      break;
    default:
  }

  part4_2 += `від цього страшного чоловіка. Багато років назад він хитрістю заманив мене до себе на службу і все моє життя відтоді протікає між цими берегами. Якщо ти звільниш мене, я тобі віддячу. `;

  return part4_2;
};

export default BoatRiverSpeach;
