import "./dropdown.css";

const DropDown = (props) => {
  return (
    <div className="DropDown">
      <label>{props.label}</label>
      <select>
      <option value="" disabled selected>Selecione...</option>
        {props.itens.map((itens) => (
          <option key={itens}>{itens}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
