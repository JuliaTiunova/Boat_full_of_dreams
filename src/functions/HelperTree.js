const HelperTree = (helper, protagonist) => {
  let text = "";
  switch (helper) {
    case "меч і щит":
      text += `змахнув своїм мечем `;
      break;
    case "чарівна палочка":
      text += `змахнув чарівною палочкою `;

      break;
    case "лук і стріли":
      text += `пустив стрілу зі свого лука `;
      break;
    case "кінь":
      text += `зійшов зі свого коня `;
      if (protagonist === "лицар") {
        text += `та як потрусив могутнє дерево з усієї сили `;
      } else if (protagonist === "чарівник") {
        text += `і почав чаклувати над деревом `;
      }
      break;
    case "троянда":
      text += `притулив до стовбура чарівну троянду `;
      break;
    default:
  }
  return text;
};

export default HelperTree;
