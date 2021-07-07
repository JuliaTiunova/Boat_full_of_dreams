// export const protaF = ["дівчина", "принцеса", "чарівниця", "квітка", "русалка"];

// export const protaM = [
//   "хлопець",
//   "лицар",
//   "чарівник",
//   "дракон",
//   "ельф",
//   "єдиноріг",
// ];

export const protagonistsAll = [
  "лицар",
  "дракон",
  "чарівник",
  "єдиноріг",
  "ельф",
  "принцеса",
  "чарівниця",
  "дівчина",
  "русалка",
];

export const placesAll = ["чарівний ліс", "море", "гори", "місто"];

export const creatures = ["дракони", "ельфи", "русалки", "єдинороги"];

export const helpers = [
  "меч і щит",
  "сокира",
  "лук і стріли",
  "кінь",
  "троянда",
];

export const powers = [
  "вміння літати",
  "невидимість",
  "швидкість",
  "суперстла",
  "почуття гумору",
];

export const beginning = [
  "Давним-давно,",
  "Було це дуже і дуже давно,",
  "Легенди розповідають, що колись,",
  "Розповідала моя бабуся, а їй її бабуся, що колись,",
  "В одній далекій країні, якої давно вже нема,",
  "За семи горами, за семи морями",
  "В одному далекому-далекому світі",
];

export const beginningPlus = [
  "коли люди ще вірили в різні чудеса,",
  "коли різноманітні боги жили з людьми на цій землі,",
  "коли сонце сходило на заході, а сідало на сході,",
  "коли Земля оберталася в інший бік,",
  "коли Земля крутилася так швидко, що рік минав удвічі швидше, ніж тепер,",
];

export const expoHero = [`жив-був`, `жив такий собі`, `жив один`];
export const expoHeroess = [`жила-була`, `жила`, `жила одна`];

export const continue1 = [
  "у густих-густих лісах", // if forest
  "в печерах високих гір",
  "високо в горах",
  "на дні моря",
  "високо в горах на дні глибокого озера",
  "в озері серед густого-густого лісу", // if mermaid && forest
  "на кам'яному дні глибокої річки",
  "у великому місті",
];

export const continue1Forest = [
  `високо на деревах, в домівках, сплетених з гілок і листя`,
  `де земля встелена оксамитовим мохом і всіяна маленькими квітами, мов зірочками. В бутонах цих квітів і жили ${creatures}`, // if forest, "високо в горах"
  `що приховані від усіх густим туманом`,
  `що ховається за густими хмарами`,
  `що приховані від цікавих очей звичайних`,
];

export const continue1Mountain = [
  // if places["високо в горах"]
  `на широких полонинах, де росли дикі маки і видно було, як сонце сідає за обрій`,
  "вигнані жорстокими людьми зі своїх рідних лісів, приречені існувати серед скель і палючого сонця",
  `оточені кільцем високих скель. У місті, до якого не вела жодна стежка, і дістатися якого не можна було жодним шляхом крім того, як прилетіти на спині великого птаха`,

  // if dragons
  `${"на кам'яних схилах, випалених їхнім гарячим подихом"}${"на голих скелях, що звисали над прірвою"}. 
    Коли їм снилися погані сни, їхні пазурі впивалися в каміння, а з їхніх пащ виривалося жовте полум'я. ${"Воно освітлювало дно урвища, де лежали обгризені черепи та кості давно вже забутих людей."}`,
];

export const placesPlusWater = [
  // if mermaid and "високо в горах на дні глибокого озера"|| "на кам'яному дні глибокої річки"
  `і їм було дуже-дуже холодно. Коли наставала зима, їхня луска тверділа, мов лід і русалки опускалися на ${"озерн"}${"річков"}е дно, невзмозі поворухнути хвостами. 
    Там вони лежали всю зиму, мов кришталеві скульптури ${"i ніхто, крім потопельників, не міг побачити їх"}.
    А наприкінці весни, коли лід танув, русалки підіймалися на поверхню, бентежили незворушні води і співали. З їхніх вуст зривався холодний подих і над ${"озерн"}${"річков"}им дном стелився туман`,
  // if palace
  `і будували вони собі великі коралові палаци`,
];

export const city = [
  // if city
  `поневолені жорстоким людом, загнані в рабство і приречені на вічне служіння`,
];

export const palace = [
  `і тільки й робили, що змагалися за те, чий палац більший`,
  // if water
  `в яких ніхто ніколи не жив. Вежі здіймалися з глибин, немов покинуті скульптури, і жили собі серед води порожні і самотні.`,
];
