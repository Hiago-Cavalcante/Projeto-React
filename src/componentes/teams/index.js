import './teams.css';

const Team = props => {

  return (
    <section className="teams-cards" style={{ backgroundColor: props.primeColor }}>
      <h3 style={{borderColor: props.secColor}}>{props.Team}</h3>
    </section>
  );
};

export default Team;
