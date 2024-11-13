import { useState } from 'react';
import Banner from './componentes/banner';
import Form from './componentes/form';
import Team from './componentes/teams';
import { teams } from './data';

const app = function App() {
  const teams = [
    {
      name: 'Team Liquid',
      primeColor: '#0a1723',
      secColor: '#bbad41',
    },
    {
      name: 'OG',
      primeColor: '#022554',
      secColor: '#ffcc00',
    },
    {
      name: 'Team Spirit',
      primeColor: '#BDF935',
      secColor: '#A3B9C4',
    },
    {
      name: 'LGD Gaming',
      primeColor: '#cb2026',
      secColor: '#ffffff',
    },
    {
      name: 'Virtus.pro',
      primeColor: '#f97300',
      secColor: '#1C1C1C',
    },
    {
      name: 'Evil Geniuses',
      primeColor: '#000080',
      secColor: '#FFFFFF',
    },
    {
      name: 'Fnatic',
      primeColor: '#ff4500',
      secColor: '#FFFFFF',
    },
    {
      name: 'Natus Vincere',
      primeColor: '#FFD700',
      secColor: '#1C1C1C',
    },
    {
      name: 'Tundra Esports',
      primeColor: '#5F9EA0',
      secColor: '#8A2BE2',
    },
    {
      name: 'Gaimin Gladiators',
      primeColor: '#228B22',
      secColor: '#1C1C1C',
    },
    {
      name: 'BetBoom Team',
      primeColor: '#1C1C1C',
      secColor: '#FFD700',
    },
  ];

  const [playerCards, setPlayerCards] = useState([]);

  const newPlayerCard = players => {
    setPlayerCards([...playerCards, players]);
    console.log(playerCards);
  };

  return (
    <div className="App">
      <Banner />
      <Form setCardPlayer={players => newPlayerCard(players)} />
      <h2>Times Profissionais</h2>
      {teams.map(teams => (
        <Team
          key={teams.name}
          Team={teams.name}
          primeColor={teams.primeColor}
          secColor={teams.secColor}
        />
      ))}
    </div>
  );
};

export default app;
