import "./form.css";
import TextArea from "../textArea";
import DropDown from "../dropdown";
import { heroes, position, teams } from "../../data";
import BtnCreateCard from "../BtnCreatCard";
import { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [pos, setPos] = useState("");
  const [hero, setHero] = useState("");
  const [team, setTeam] = useState("");

  const loadForm = (e) => {
    e.preventDefault();
    props.setCardPlayer({
      name,
      pos,
      image,
      hero,
      team,
    });
  };

  return (
    <section className="form">
      <form onSubmit={loadForm}>
        <h2> Prencha os dados para criar o card do Pro-Player</h2>
        <TextArea
          required={true}
          label="Nome do Player"
          placeholder="Digite o nome"
          value={name}
          handleChange={(value) => setName(value)}
        />
        <TextArea
          label="Imagem do Player"
          placeholder="Informe o endereço da imagem"
          value={image}
          handleChange={(value) => setImage(value)}
        />
        <DropDown
          required={true}
          label="Posição"
          itens={position}
          value={pos}
          handleChange={(value) => setPos(value)}
        />
        <DropDown
          required={true}
          label="Heroi Favorito"
          itens={heroes}
          value={hero}
          handleChange={(value) => setHero(value)}
        />
        <DropDown
          required={true}
          label="Time"
          itens={teams}
          value={team}
          handleChange={(value) => setTeam(value)}
        />
        <BtnCreateCard text="Criar card" />
      </form>
    </section>
  );
};

export default Form;
