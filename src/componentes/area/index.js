import "./Area.css";

const Area = (props) => {
  return (
    <div className={`area area-${props.type}`}>
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={(e) => props.handleChange(e.target.value)}
        required={props.required}
        placeholder={props.placeholder}
        type={props.type}
      />
    </div>
  );
};

export default Area;
