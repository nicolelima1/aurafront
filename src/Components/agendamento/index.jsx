
import { Container, Row, Col, Stack, Card, Button, Table, Form, FloatingLabel } from "react-bootstrap";
import "./agendamento.css";
import { ArrowLeft } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import React, { useState } from 'react';

function Agendamento() {

    const navigate = useNavigate();

    const handleClickBack = () => {
        navigate("/");
    }
    const horarios = [
        "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
        "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"
    ];
    const [date, setDate] = useState(new Date()); // Estado para armazenar a data selecionada

    const handleDateChange = (newDate) => {
        setDate(newDate); // Atualiza o estado com a nova data selecionada
    };
    const [selectedService, setSelectedService] = useState("Selecione");
    const [selectedProfessional, setSelectedProfessional] = useState("Selecione");

    // Função para atualizar o serviço selecionado
    const handleServiceSelect = (service) => {
        setSelectedService(service);
    };

    // Função para atualizar o profissional selecionado
    const handleProfessionalSelect = (professional) => {
        setSelectedProfessional(professional);
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
            <Container fluid className="mt-5 " style={{ height: "70vh" }}>
                <Row className="h-100 d-flex justify-content-center gap-1">

                    <Col md={5} className="d-flex flex-column gap-4 justify-content-center">
                        <Row className="h-25 ">
                            <Card style={{ background: "pink" }} className="p-3">
                                {/* Linha para selecionar o serviço */}
                                <div>
            {/* Linha para selecionar o serviço */}
            <div className="d-flex align-items-center mb-3 justify-content-center">
                <span className="me-2" style={{ fontSize: "20px", color: "white", fontWeight: "bold", fontFamily: "'Arial', sans-serif" }}>
                    Selecione o serviço desejado:
                </span>
                <DropdownButton
                    id="dropdown-basic-button"
                    title={selectedService} // Título do botão atualizado com a seleção
                >
                    <Dropdown.Item onClick={() => handleServiceSelect("Unha")}>Unha</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleServiceSelect("Cílios")}>Cílios</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleServiceSelect("Maquiagem")}>Maquiagem</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleServiceSelect("Escova")}>Escova</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleServiceSelect("Corte")}>Corte</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleServiceSelect("Sobrancelha")}>Sobrancelha</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleServiceSelect("Tranças")}>Tranças</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleServiceSelect("Spa")}>Spa</Dropdown.Item>
                </DropdownButton>
            </div>

            {/* Linha para selecionar o profissional */}
            <div className="d-flex align-items-center justify-content-center">
                <span className="me-2" style={{ fontSize: "20px", color: "white", fontWeight: "bold", fontFamily: "'Arial', sans-serif" }}>
                    Selecione o profissional desejado:
                </span>
                <DropdownButton
                    id="dropdown-basic-button"
                    title={selectedProfessional} // Título do botão atualizado com a seleção
                >
                    <Dropdown.Item onClick={() => handleProfessionalSelect("Isabele")}>Isabele</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleProfessionalSelect("Mariana")}>Mariana</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleProfessionalSelect("Lucas")}>Lucas</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleProfessionalSelect("Helena")}>Helena</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleProfessionalSelect("Sofia")}>Sofia</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleProfessionalSelect("Samanta")}>Samanta</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleProfessionalSelect("Luciana")}>Luciana</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleProfessionalSelect("Marcelo")}>Marcelo</Dropdown.Item>
                </DropdownButton>
            </div>
        </div>
                            </Card>
                        </Row>
                        <Row className="h-75">
                            <Card style={{ background: "pink" }}>
                                    <h3 className="text-center mt-2" style={{
                                        fontSize: "20px", // Tamanho da fonte
                                        color: "white",    // Cor do texto
                                        fontWeight: "bold", // Peso da fonte
                                        fontFamily: "'Arial', sans-serif", // Família da fonte
                                    }}>Escolha uma data:</h3>
                                    <Calendar className="w-100"
                                        onChange={handleDateChange} // Chama a função para atualizar o estado
                                        value={date} // Exibe a data selecionada
                                    />
                                    <p className="text-center mt-2"style={{
                                        fontSize: "20px", // Tamanho da fonte
                                        color: "white",    // Cor do texto
                                        fontWeight: "bold", // Peso da fonte
                                        fontFamily: "'Arial', sans-serif", // Família da fonte
                                    }}>Data Selecionada: {date.toLocaleDateString()}</p> {/* Exibe a data selecionada */}
                                


                            </Card>
                        </Row>
                    </Col>
                    <Col md={3} className="px-3 d-flex flex-column align-items-center justify-content-center">
                        <Card className="h-100" style={{ background: "pink" }}>
                            <Card.Body>
                                <Row className="justify-content-center">
                                    {horarios.map((horario, index) => (
                                        <Col
                                            key={index}
                                            xs={4}
                                            className="mt-2 mb-2 d-flex justify-content-center align-items-center"
                                        >
                                            <Button
                                                variant="light"
                                                style={{
                                                    padding: '10px 20px',
                                                    borderRadius: '8px',
                                                    width: '100%' // Forçando o botão a ocupar toda a largura da coluna
                                                }}
                                            >
                                                {horario}
                                            </Button>
                                        </Col>
                                    ))}
                                </Row>


                            </Card.Body>

                            {/* Centralizando o botão Confirmar */}
                            <Card.Footer className="d-flex align-items-center justify-content-center">
                                <Button variant="primary" style={{ width: '100%' }}>
                                    CONFIRMAR
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Agendamento;
