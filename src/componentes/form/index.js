import "./form.css";
import TextArea from "../textArea";

const Form = () => {
  return (
    <section className="form">
      <form>
        <h2> Prencha os dados para criar o card do Player</h2>
        <TextArea label="Nome do Player" placeholder="Digite o nome" />
        <TextArea label="Posição" placeholder="Digite a posição" />
        <TextArea label="Imagem" placeholder="Informe o endereço da imagem" />
      </form>
    </section>
  );
};

export default Form;
