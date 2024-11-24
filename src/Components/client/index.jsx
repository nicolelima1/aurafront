import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ArrowLeft } from "react-bootstrap-icons";
import "./client.css";
import { useNavigate } from "react-router-dom";

function Client() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate("/");
  };
  const handleClickProfissional = () => {
    navigate("/profissional");
  };
  const handleClickLogin = () => {
    navigate("/login");
  };

  // Estados para armazenar os valores dos campos
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  // Função para validar apenas letras no campo nome
  const handleNomeChange = (e) => {
    const value = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(value)) { // Permite apenas letras e espaços
      setNome(value);
    }
  };

  // Função para validar o telefone
  const handleTelefoneChange = (e) => {
    const value = e.target.value;
    if (/^[0-9]{0,11}$/.test(value)) { // Permite apenas números e até 11 dígitos
      setTelefone(value);
    }
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
              placeholder="Nome"
              value={nome}
              onChange={handleNomeChange} // Valida o nome enquanto digita
            />
          </div>
          
          <div className="mb-3">
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Armazena o valor do email
              required
            />
          </div>
          
          <div className="mb-3">
            <input
              type="tel"
              id="telefone"
              className="form-control"
              placeholder="Telefone"
              value={telefone}
              onChange={handleTelefoneChange} // Valida o telefone enquanto digita
              pattern="[0-9]{10,11}"
              title="Digite um número de telefone válido"
              required
            />
          </div>

          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="submit">
              Cadastrar
            </button>
            <button className="btn btn-primary" type="button" onClick={handleClickProfissional}>
              É um profissional? Cadastre-se
            </button>
            <p className="text-center mt-3">
              Já tem uma conta?{" "}
              <span className="link-btn" onClick={handleClickLogin}>
                Faça login
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Client;
