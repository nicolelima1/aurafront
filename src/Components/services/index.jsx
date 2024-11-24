import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ArrowLeft } from "react-bootstrap-icons";
import "./services.css";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate("/");
  };

  // Estado para armazenar o valor do preço
  const [preco, setPreco] = useState("");
  const [nome, setNome] = useState("");
  const [especializacao, setEspecializacao] = useState("");

  // Função para validar e formatar o preço
  const handlePrecoChange = (e) => {
    let value = e.target.value;
    // Remove tudo que não for número
    value = value.replace(/[^\d]/g, "");
    // Formata o número para R$ 00,00
    if (value) {
      let formattedValue = value.replace(/(\d)(\d{2})$/, '$1,$2'); // Formata com a vírgula como separador decimal
      if (formattedValue.length > 6) {
        formattedValue = formattedValue.replace(/(\d)(\d{3})(\d{3})$/, '$1$2,$3'); // Adiciona os separadores de milhar
      }
      setPreco("R$ " + formattedValue);
    } else {
      setPreco("");
    }
  };

  // Função para garantir que apenas letras sejam digitadas no nome
  const handleNomeChange = (e) => {
    let value = e.target.value;
    // Permite apenas letras e espaços
    value = value.replace(/[^a-zA-Z\s]/g, "");
    setNome(value);
  };

  const handleEspecializacaoChange = (e) => {
    let value = e.target.value;
    // Permite apenas letras e espaços
    value = value.replace(/[^a-zA-Z\s]/g, "");
    setEspecializacao(value);
  };

  return (
    <div>
      {/* Barra Superior */}
      <div className="d-flex align-items-center barra-superior">
        <img
          src="img/LogoBranco.png"
          alt="Logo"
          className="imagem-logo-barra"
        />
        <button
          className="btn me-2"
          style={{ padding: "0px 0px" }}
          onClick={handleClickBack}
        >
          <ArrowLeft size={27} className="icon-arrow-left" />
        </button>
      </div>

      {/* Formulário de Cadastro */}
      <div className="fundo-cadastro mx-auto">
        <div className="text-center">
          <img
            src="img/Logo01.png"
            alt="Logo"
            className="imagem-logo mb-3"
          />
        </div>
        <form>
          <div className="mb-3">
            <input
              type="text"
              id="nome"
              className="form-control"
              placeholder="Nome do serviço"
              value={nome}
              onChange={handleNomeChange} // Validação de letras apenas
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              id="especializacao"
              className="form-control"
              placeholder="Especialização"
              value={especializacao}
              onChange={handleEspecializacaoChange} // Validação de letras apenas
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              id="preco"
              className="form-control"
              placeholder="Preço (R$)"
              value={preco}
              onChange={handlePrecoChange} // Validação e formatação do preço
            />
          </div>

          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="submit">
              Cadastrar serviço
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Services;
