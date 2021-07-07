import { nanoid } from "nanoid";

const Option = (props) => {
  return props.array.map((item) => (
    <option key={nanoid()} value={item}>
      {item}
    </option>
  ));
};

export default Option;
