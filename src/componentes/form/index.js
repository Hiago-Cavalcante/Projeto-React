import "./form.css";
import TextArea from "../textArea";
import DropDown from "../dropdown";
import { heroes } from "../../data";
import { teams } from "../../data";
import { pos } from "../../data";

const Form = () => {
  return (
    <section className="form">
      <form>
        <h2> Prencha os dados para criar o card do Pro-Player</h2>
        <TextArea label="Nome do Player" placeholder="Digite o nome" />
        <TextArea
          label="Imagem do Player"
          placeholder="Informe o endereço da imagem"
        />
        <DropDown label="Posição" itens={pos} />
        <DropDown label="Heroi Favorito" itens={heroes} />
        <DropDown label="Time" itens={teams} />
      </form>
    </section>
  );
};

export default Form;
