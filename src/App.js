import { useState } from 'react';
import Banner from './componentes/banner';
import Form from './componentes/form';
import Team from './componentes/teams';
import EndPage from './componentes/endPage';
import { v4 as uuidv4 } from 'uuid';

const app = function App() {
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Team Liquid',
      Color: '#82CFFA',
    },
    {
      id: uuidv4(),
      name: 'OG',
      Color: '#57C278',
    },
    {
      id: uuidv4(),
      name: 'Team Spirit',
      Color: '#3f4d57',
    },
    {
      id: uuidv4(),
      name: 'LGD Gaming',
      Color: '#E06B69',
    },
    {
      id: uuidv4(),
      name: 'Virtus.pro',
      Color: '#ff8a29',
    },
    {
      id: uuidv4(),
      name: 'Fnatic',
      Color: '#ff4500',
    },
    {
      id: uuidv4(),
      name: 'Natus Vincere',
      Color: '#ffBA05',
    },
  ]);

  const changeTeamColor = function (color, name) {
    setTeams(
      teams.map(team => {
        if (team.name === name) {
          team.Color = color;
        }
        return team;
      })
    );
  };

  const [playerCards, setPlayerCards] = useState([]);

  const newPlayerCard = players => {
    setPlayerCards([...playerCards, players]);
    console.log(players);
  };

  const toDeleteCardPlayer = function (id) {
    setPlayerCards(playerCards.filter(player => player.id !== id));
    console.log(id);
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
          changeColor={changeTeamColor}
          key={teams.name}
          Team={teams.name}
          Color={teams.Color}
          players={playerCards.filter(players => players.team === teams.name)}
          toDeleteTeamCard={toDeleteCardPlayer}
        />
      ))}
      <EndPage />
    </div>
  );
};

export default app;
