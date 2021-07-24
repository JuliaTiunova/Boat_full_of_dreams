import findRandomIndex from "./findRandomIndex";

const findRandomElement = (arr) => {
  const index = findRandomIndex(arr.length);
  const element = arr[index];
  return element;
};

export default findRandomElement;
