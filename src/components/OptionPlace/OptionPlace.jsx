import { nanoid } from "nanoid";
import { placesAll } from "../../arrays/arrays";

const OptionPlace = () => {
  return placesAll.map((item) => (
    <option key={nanoid()} value={item}>
      {item}
    </option>
  ));
};

export default OptionPlace;
