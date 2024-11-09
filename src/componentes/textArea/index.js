import "./textArea.css";

const TextArea = (props) => {
  console.log(props);
  return (
    <div className="text-area">
      <label>{props.label}</label>
      <input placeholder={props.placeholder} type="text" />
    </div>
  );
};

export default TextArea;
