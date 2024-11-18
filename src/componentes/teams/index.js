import './teams.css';
import CardPlayer from '../CardPlayer';

const Team = props => {
  return props.players.length > 0 ? (
    <section
      className="teams-cards"
      style={{ backgroundColor: props.secColor }}
    >
      <h3 style={{ borderColor: props.primeColor }}>{props.Team}</h3>
      <div className="player-cards">
        {props.players.map(playerCard => (
          <CardPlayer
            backgroundColor={props.primeColor}
            key={playerCard.name}
            image={playerCard.image}
            name={playerCard.name}
            pos={playerCard.pos}
            hero={playerCard.hero}
          />
        ))}
      </div>
    </section>
  ) : (
    ''
  );
};

export default Team;
