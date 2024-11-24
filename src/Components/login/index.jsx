import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ArrowLeft } from "react-bootstrap-icons";
import "./login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate("/");

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
              type="emailt"
              id="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
          
          <div className="mb-3">
            <input
              type="text"
              id="senha"
              className="form-control"
              placeholder="Senha"
            />
          </div>

          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="submit">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
