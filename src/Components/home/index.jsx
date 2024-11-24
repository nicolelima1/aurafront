import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import { FaCalendar, FaRegHandScissors } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const handleClickCadastre = () => {
        navigate("/clientes");
    };
    const handleClickPerfil = () => {
        navigate ("/perfil");
    }
    const handleClickServicos = () => {
        navigate ("/servicos");
    }
    const handleClickAgendamento = () => {
        navigate ("/agendamento");
    }
    


    return (
        <div>
            {/* Barra Superior */}
            <div
                className="d-flex align-items-center justify-content-between px-3"
                style={{
                    backgroundColor: "pink",
                    height: "10vh",
                }}
            >
                <div className="d-flex align-items-center gap-3">
                    <Button variant="outline-light" size="lg" className="" onClick={handleClickPerfil}>
                        <IoPersonCircleOutline />
                    </Button>
                    <Button variant="outline-light" size="lg" className="" onClick={handleClickAgendamento}>
                        <FaCalendar></FaCalendar>
                    </Button>
                    <Button variant="outline-light" size="lg" className=""  onClick={handleClickServicos}>
                        <FaRegHandScissors />
                    </Button>
                </div>
                <img
                    src="img/LogoBranco.png"
                    alt="Logo"
                    style={{
                        height: "10%",
                        position: "absolute",
                        left: "50%",
                        transform: "translateX(-50%)",
                    }}
                />
                <Button onClick={handleClickAgendamento}
                    variant="outline-light"
                    className="border-2"

                >
                    Novo Agendamento
                </Button>
            </div>

            {/* Imagem da Capa */}
            <img
                src="img/Capa.png"
                alt="Capa"
                style={{ width: "100%", height: "90vh", objectFit: "cover" }}
            />

            {/* Linha de Fundo */}
            <div
                className="mx-auto"
                style={{
                    width: "20vw",
                    height: "3px",
                    backgroundColor: "rgb(250, 171, 184)",
                    marginTop: "10px",
                }}
            ></div>

            {/* Imagens Entre Linha e Barra */}
            <Container className="d-flex justify-content-center gap-4 my-4">
                <img
                    src="img/Cabelo.jpg"
                    alt="Imagem 1"
                    style={{ width: "25%", borderRadius: "40px", objectFit: "cover" }}
                />
                <img
                    src="img/Manicure.jpg"
                    alt="Imagem 2"
                    style={{ width: "25%", borderRadius: "40px", objectFit: "cover" }}
                />
                <img
                    src="img/Maquiagem.jpeg"
                    alt="Imagem 3"
                    style={{ width: "25%", borderRadius: "40px", objectFit: "cover" }}
                />
            </Container>

            {/* Texto Capa */}
            <div
                className="text-center"
                style={{
                    position: "absolute",
                    top: "70vh",
                    left: "50%",
                    transform: "translateX(-50%)",
                }}
            >
                <h1 style={{ fontSize: "50px", color: "white", fontWeight: "bold" }}>
                Realce o melhor de você
                </h1>
                <p style={{ fontSize: "20px", color: "white" }}>
                    Cadastre-se agora e descubra seu potencial!
                </p>
            </div>

            {/* Botão "Cadastre-se" */}
            <Button
                variant="outline-light"
                className="border-2"
                onClick={handleClickCadastre}
                style={{
                    position: "absolute",
                    top: "90vh",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "white",
                    color: "pink",
                    width: "200px",
                    height: "50px",
                    fontSize: "22px",
                    borderRadius: "15px",
                }}
            >
                CADASTRE-SE
            </Button>

            {/* Barra Inferior */}
            <div
                className="text-center"
                style={{
                    backgroundColor: "pink",
                    height: "30vh",
                    borderRadius: "15px",
                    marginTop: "10px",
                }}
            >
                <h3 
                    style={{
                        fontSize: "24px",
                        color: "white",
                        fontWeight: "bold",
                        marginBottom: "20px",
                       
                    }}
                >
                    Temos diversos serviços e profissionais qualificados à sua disposição.
                </h3>
                <Button  onClick={handleClickServicos}
                    variant="outline-light"
                    className="border-2"
                    style={{
                        backgroundColor: "white",
                        color: "pink",
                        width: "300px",
                        height: "60px",
                        fontSize: "22px",
                        borderRadius: "10px",
                    }}
                >
                    VEJA NOSSOS SERVIÇOS
                </Button>
                <div
                    className="mx-auto"
                    style={{
                        width: "200px",
                        height: "3px",
                        backgroundColor: "white",
                        marginTop: "20px",
                    }}
                ></div>
            </div>
        </div>
    );
}

export default Home;
