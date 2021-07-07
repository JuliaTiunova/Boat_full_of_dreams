import { protagonistsAll } from "../../arrays/arrays";
import { nanoid } from "nanoid";

const Option = () => {
  return protagonistsAll.map((item) => (
    <option key={nanoid()} value={item}>
      {item}
    </option>
  ));
};

export default Option;
