import { useState } from 'react';
import Banner from './componentes/banner';
import Form from './componentes/form';
import Team from './componentes/teams';
import { teams } from './data';
import EndPage from './componentes/endPage';

const app = function App() {
  const [playerCards, setPlayerCards] = useState([]);

  const newPlayerCard = players => {
    setPlayerCards([...playerCards, players]);
  };

  const toDeleteCardPlayer = function (e) {
    console.log(e);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        teamsNames={teams.map(teams => teams.name)}
        setCardPlayer={players => newPlayerCard(players)}
      />
      {teams.map(teams => (
        <Team
          key={teams.name}
          Team={teams.name}
          primeColor={teams.primeColor}
          secColor={teams.secColor}
          players={playerCards.filter(players => players.team === teams.name)}
          toDeleteTeamCard={toDeleteCardPlayer}
        />
      ))}
      <EndPage />
    </div>
  );
};

export default app;
