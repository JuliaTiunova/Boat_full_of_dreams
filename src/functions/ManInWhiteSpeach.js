const ManInWhiteSpeach = (protagonist, place) => {
  let text = "";
  text += `- Вітаю тебе, могутній `;
  switch (protagonist) {
    case "дракон":
      text += `драконе! Бачу, ти `;
      switch (place) {
        case "море/океан...":
          text += `пливеш `;
          break;
        default:
          text += `летиш `;
      }
      break;
    default:
  }
  text += `до мене здалеку, тож я допоможу тобі, лиш не `;

  switch (place) {
    case "чарівний ліс":
      text += `спалюй мій ліс та не руйнуй мою вежу. `;
      break;
    case "море/океан...":
      text += `топи мій острів та не губи моє дерево. `;
      break;
    case "гори":
      text += `руйнуй мою гору. `;
      break;
    case "місто":
      text += `губи моє місто та цих людей. `;
      break;
    default:
  }

  return text;
};

export default ManInWhiteSpeach;
