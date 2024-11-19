import './teams.css';
import CardPlayer from '../CardPlayer';
import hexToRgba from 'hex-to-rgba';

const Team = props => {
  return props.players.length > 0 ? (
    <section
      className="teams-cards"
      style={{ backgroundColor: hexToRgba(props.Color, '0.6') }}
    >
      <input
        value={props.Color}
        onChange={e => props.changeColor(e.target.value, props.Team)}
        type="color"
        className="input-color"
      />
      <h3 style={{ borderColor: props.Color }}>{props.Team}</h3>
      <div className="player-cards">
        {props.players.map(playerCard => {
          return (
            <CardPlayer
              backgroundColor={props.Color}
              key={playerCard.name}
              image={playerCard.image}
              name={playerCard.name}
              pos={playerCard.pos}
              hero={playerCard.hero}
              teamCardDel={props.toDeleteTeamCard}
            />
          );
        })}
      </div>
    </section>
  ) : (
    ''
  );
};

export default Team;
