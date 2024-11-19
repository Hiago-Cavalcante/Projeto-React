import { useState } from 'react';
import Banner from './componentes/banner';
import Form from './componentes/form';
import Team from './componentes/teams';
import EndPage from './componentes/endPage';

const app = function App() {
  const [teams, setTeams] = useState([
    {
      name: 'Team Liquid',
      Color: '#82CFFA',
    },
    {
      name: 'OG',
      Color: '#57C278',
    },
    {
      name: 'Team Spirit',
      Color: '#3f4d57',
    },
    {
      name: 'LGD Gaming',
      Color: '#E06B69',
    },
    {
      name: 'Virtus.pro',
      Color: '#ff8a29',
    },
    {
      name: 'Fnatic',
      Color: '#ff4500',
    },
    {
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
