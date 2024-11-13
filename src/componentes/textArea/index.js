import "./textArea.css";

const TextArea = (props) => {
  return (
    <div className="text-area">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={(e) => props.handleChange(e.target.value)}
        required={props.required}
        placeholder={props.placeholder}
        type="text"
      />
    </div>
  );
};

export default TextArea;
