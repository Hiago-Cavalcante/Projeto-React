import "./dropdown.css";

const DropDown = (props) => {
  return (
    <div className="DropDown">
      <label>{props.label}</label>
      <select
        onChange={(e) => props.handleChange(e.target.value)}
        required={props.required}
        value={props.value}
      >
        <option value="" disabled>
          Selecione...
        </option>
        {props.itens.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
