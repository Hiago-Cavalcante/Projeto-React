import './form.css';
import Area from '../area';
import DropDown from '../dropdown';
import { heroes, position, teams } from '../../data';
import BtnCreateCard from '../BtnCreatCard';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = props => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [pos, setPos] = useState('');
  const [hero, setHero] = useState('');
  const [team, setTeam] = useState('');
  const [newTeam, setNewTeam] = useState('');
  const [newTeamColor, setNewTeamColor] = useState('');

  const loadForm = e => {
    e.preventDefault();
    props.setCardPlayer({
      name,
      pos,
      image,
      hero,
      team,
      id: uuidv4(),
    });
    setName('');
    setPos('');
    setImage('');
    setHero('');
    setTeam('');
  };

  const loadNewTeam = e => {
    e.preventDefault();
    props.CreateNewTeam({
      name: newTeam,
      Color: newTeamColor,
    });
    setNewTeamColor('');
    setNewTeam('');
  };

  return (
    <section className="form">
      <form onSubmit={loadForm}>
        <h2> Prencha os dados para criar o card do Pro-Player</h2>
        <Area
          required
          label="Nome do Player"
          placeholder="Digite o nome"
          value={name}
          handleChange={value => setName(value)}
          type="text"
        />
        <Area
          label="Imagem do Player"
          placeholder="Informe o endereço da imagem"
          value={image}
          handleChange={value => setImage(value)}
          type="text"
        />
        <DropDown
          required
          label="Posição"
          itens={position}
          value={pos}
          handleChange={value => setPos(value)}
        />
        <DropDown
          required
          label="Heroi Favorito"
          itens={heroes}
          value={hero}
          handleChange={value => setHero(value)}
        />
        <DropDown
          required
          label="Time"
          itens={props.teamsNames}
          value={team}
          handleChange={value => setTeam(value)}
        />
        <BtnCreateCard text="Criar card" />
      </form>
      <form onSubmit={loadNewTeam}>
        <h2> Prencha os dados para criar um Time</h2>
        <Area
          required
          label="Nome do Time"
          placeholder="Digite o nome"
          value={newTeam}
          handleChange={value => setNewTeam(value)}
          type="text"
        />
        <Area
          required
          label="Cor do time"
          placeholder="digite a cor do time"
          value={newTeamColor}
          handleChange={value => setNewTeamColor(value)}
          type="color"
        />
        <BtnCreateCard text="Criar time" />
      </form>
    </section>
  );
};

export default Form;
