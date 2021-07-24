import { nanoid } from "nanoid";

const Options = (props) => {
  return props.array.map((item) => (
    <option key={nanoid()} value={item}>
      {item}
    </option>
  ));
};

export default Options;
