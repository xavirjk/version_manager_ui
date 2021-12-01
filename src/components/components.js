export const InputField = (props) => {
  return (
    <input
      style={{ width: props.width }}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      onChange={(e) => {
        props.setField(e.target.value);
      }}
    />
  );
};
