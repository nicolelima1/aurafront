import React, { useState } from "react";
import { Container, Row, Col, Stack, Card, Button, Table, Form } from "react-bootstrap";
import "./perfil.css";
import chupetas from "../../assets/chupetas.jpeg";
import { ArrowLeft } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

function Perfil() {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate("/");
  };

  // Estado para armazenar os valores dos campos
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  // Validação de nome (apenas letras e espaços)
  const handleNomeChange = (e) => {
    const value = e.target.value;
    const regex = /^[a-zA-Z\s]*$/; // Apenas letras e espaços
    if (regex.test(value) || value === "") {
      setNome(value);
    }
  };

  // Validação de telefone (formato (XX) XXXXX-XXXX)
  const handleTelefoneChange = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, ""); // Remove qualquer caracter que não seja número
    if (value.length <= 11) {
      // Aplica a máscara (XX) XXXXX-XXXX
      value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
      setTelefone(value);
    }
  };

  // Validação de email
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value); // Permite digitação normal
  };

  // Função para validar o email quando o campo perder o foco
  const validateEmail = () => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regex.test(email) && email !== "") {
      alert("Email inválido! Por favor, insira um email válido.");
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

      <Container fluid className="mt-4 px-3" style={{ height: "70vh" }}>
        <Row className="h-100 justify-content-center gap-3">
          <Col md={3} className="px-3 d-flex flex-column align-itens-center justify-content-center">
            <Card className="h-100" style={{ background: "pink" }}>
              <Card.Header className="d-flex align-items-center justify-content-center">
                <div className="d-flex flex-column">
                  <Card.Img
                    src={chupetas} // Substitua pela URL da sua imagem
                    alt="Foto de Perfil"
                    className="rounded-circle mt-4 mb-4 align-items-center"
                    style={{ width: "120px", height: "120px", objectFit: "cover", border: "3px solid white" }} // Estilo da imagem
                  />
                  <span className="align-items-center mb-2">Nome do usuário</span>
                </div>
              </Card.Header>
              <Card.Body>
                <Stack gap={3} className="align-items-center">
                  {/* Nome */}
                  <Form.Control
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={handleNomeChange} // Validação de nome
                  />
                  {/* Telefone */}
                  <Form.Control
                    type="tel"
                    placeholder="Telefone"
                    value={telefone}
                    onChange={handleTelefoneChange} // Validação de telefone
                  />
                  {/* Email */}
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange} // Permite digitação normal
                    onBlur={validateEmail} // Valida o email quando o campo perder o foco
                  />
                </Stack>
              </Card.Body>
              <Card.Footer className="d-flex align-itens-center justify-content-center">
                <Button variant="primary">Alterar informações</Button>
              </Card.Footer>
            </Card>
          </Col>

          <Col md={5} className="d-flex flex-column gap-2 justify-content-center">
            <Row className="mb-1 h-50">
              <Card style={{ background: "pink" }}>
                <Card.Body>
                  <div className="d-flex justify-content-center flex-column">
                    <Row className="d-flex text-center"><h2 className="text-light">MAIS UTILIZADOS</h2></Row>
                    <hr />
                    <Col><Table striped bordered hover>
                      <thead>
                        <tr>
                          <th className="text-secondary">DESCRIÇÃO</th>
                          <th className="text-secondary">ESPECIALIZAÇÃO</th>
                          <th className="text-secondary">PREÇO</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Mão</td>
                          <td>Unha de fibra</td>
                          <td>R$150,00</td>
                        </tr>
                        <tr>
                          <td>Cílios</td>
                          <td>Lash</td>
                          <td>R$120,00</td>
                        </tr>
                        <tr>
                          <td>Pé</td>
                          <td>Comum</td>
                          <td>R$35,00</td>
                        </tr>
                      </tbody>
                    </Table></Col>
                  </div>
                </Card.Body>
              </Card>
            </Row>
            <Row className="h-50">
              <Card style={{ background: "pink" }}>
                <Card.Body>
                  <div className="d-flex flex-column">
                    <Col className="d-flex justify-content-center"><h3 className="text-light">ÚLTIMOS SERVIÇOS</h3></Col>
                    <hr />
                    <Col><Table striped bordered hover>
                      <thead>
                        <tr>
                          <th className="text-secondary">SERVIÇO</th>
                          <th className="text-secondary">DATA</th>
                          <th className="text-secondary">HORÁRIO</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td> Pé</td>
                          <td>20/11/2024</td>
                          <td>14:00</td>
                        </tr>
                        <tr>
                          <td>Mão</td>
                          <td>20/11/2024</td>
                          <td>14:30</td>
                        </tr>
                        <tr>
                          <td>Escova</td>
                          <td>15/11/2024</td>
                          <td>09:00</td>
                        </tr>
                      </tbody>
                    </Table></Col>
                  </div>
                </Card.Body>
              </Card>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Perfil;
