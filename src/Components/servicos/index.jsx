import React from "react";
import { Container, Row, Col, Stack, Card, Button, Table, Form, FloatingLabel } from "react-bootstrap";
import "./servicos.css";
import { ArrowLeft } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";


function Servicos() {
    const navigate = useNavigate();

    const handleClickBack = () => {
        navigate("/");
    }
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

            <Container fluid className="mt-5" >
                <Row className="gap-4 justify-content-center align-items-center">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top mt-2" src="/img/escova.jpeg" />
                        <Card.Body>
                            <Card.Title className="text-center">ESCOVA</Card.Title>
                            <Card.Text>
                            A escova de cabelo desembaraça e modela os fios, melhorando sua aparência e a saúde dos fios.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top mt-2" src="/img/corte.jpeg" />
                        <Card.Body>
                            <Card.Title className="text-center">CORTE</Card.Title>
                            <Card.Text>
                            O corte de cabelo é uma forma de renovar o visual e destacar a personalidade, e ser mais prático ou ousado no dia a dia.
                            </Card.Text>
                           
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top mt-2" src="/img/sobrancelha.jpeg" />
                        <Card.Body>
                            <Card.Title className="text-center">SOBRANCELHA</Card.Title>
                            <Card.Text>
                            Os serviços de sobrancelha incluem design, correção do formato, remoção de pelos com pinça ou cera, e tintura.
                            </Card.Text>
                           
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top mt-2" src="/img/trancas.jpeg" />
                        <Card.Body>
                            <Card.Title className="text-center">TRANÇAS</Card.Title>
                            <Card.Text>
                            Os serviços de trança incluem estilos como tranças embutidas, box braids e tranças soltas, oferecendo um visual elegante.
                            </Card.Text>
                           
                        </Card.Body>
                    </Card>
                
                </Row>
                <Row className="gap-4 justify-content-center align-items-center mt-5"> 
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top mt-2" src="/img/make.jpeg" />
                        <Card.Body>
                            <Card.Title className="text-center">MAQUIAGEM</Card.Title>
                            <Card.Text>
                            Os serviços de maquiagem incluem preparação da pele, aplicação de produtos como base, sombras e batom.
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top mt-2" src="/img/mao.jpeg" />
                        <Card.Body>
                            <Card.Title className="text-center">UNHA</Card.Title>
                            <Card.Text>
                            Manicure incluem corte, lixamento, remoção de cutículas, aplicação de esmalte, alongamento e decoração.
                            </Card.Text>
                           
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top mt-2" src="/img/spa.jpeg" />
                        <Card.Body>
                            <Card.Title className="text-center">SPA</Card.Title>
                            <Card.Text>
                            Os serviços de spa incluem massagens relaxantes, tratamentos faciais e esfoliação corporal.
 
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top mt-2" src="/img/cilios.jpeg" />
                        <Card.Body>
                            <Card.Title className="text-center">CÍLIOS</Card.Title>
                            <Card.Text>
                            Os serviços de cílios incluem aplicação de extensões, lifting e tintura, proporcionando um olhar mais volumoso.
                            </Card.Text>
                         
                        </Card.Body>
                    </Card>
                
                </Row>
                

            </Container>
        </div>
    )
}


export default Servicos;