import './cardPlayer.css';

const CardPlayer = props => {
  const alt = `${props.name} image`;

  return (
    <div className="Card-Player">
      <div className="header-Card">
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
