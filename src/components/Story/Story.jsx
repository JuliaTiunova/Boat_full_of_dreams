import { beginning } from "../../arrays/arrays";
import { beginningPlus } from "../../arrays/arrays";

const findRandomIndex = (length) => {
  let index;
  do {
    index = Math.trunc(Math.random() * 10);
  } while (index < 0 || index >= length);

  return index;
};

const Story = () => {
  <beginning />;
  const lengthBeginning = beginning.length;
  <beginningPlus />;
  const lengthBeginningPlus = beginningPlus.length;
  const beginningIndex = findRandomIndex(lengthBeginning);
  let beginningPlusStory = "";
  if (beginningIndex <= 3) {
    beginningPlusStory = beginningPlus[findRandomIndex(lengthBeginningPlus)];
  } else {
    beginningPlusStory = "";
  }
  const story = `${beginning[beginningIndex]}, ${beginningPlusStory}`;
  console.log(story);
  return <p>{story}</p>;
};

export default Story;
