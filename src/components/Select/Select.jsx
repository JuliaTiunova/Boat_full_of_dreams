import Option from "../Option/Option";

const Select = (props) => {
  return (
    <select
      className={props.className}
      name={props.name}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
    ></select>
  );
};

export default Select;
