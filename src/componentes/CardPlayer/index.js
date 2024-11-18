import './cardPlayer.css';
import { IoCloseCircle } from 'react-icons/io5';

const CardPlayer = props => {
  const alt = `${props.name} image`;

  return (
    <div className="Card-Player">
      <IoCloseCircle className="Delete" onClick={props.teamCardDel} />
      <div
        className="header-Card"
        style={{ backgroundColor: props.backgroundColor }}
      >
        <img src={props.image} alt={alt} />
      </div>
      <div className="info-Card">
        <h4>{props.name}</h4>
        <h5>{props.pos}</h5>
        <h5>Heroi favorito: {props.hero}</h5>
      </div>
    </div>
  );
};

export default CardPlayer;
