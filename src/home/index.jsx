import './home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate(); // Corrigir o nome do hook aqui
  
    const pageClient = () => {
      navigate("/clientes"); // Usar navigate corretamente
    };
    return (
        <div className="barraSuperior">
            <div className="containerBotoesImagens">
                <button className="botaoImagemPerfil">
                    <img
                        src="public/img/Perfil.png"
                        alt="Imagem de Perfil"
                        onClick={pageClient}
                    />
                </button>
                <button className="botaoImagemPerfil">
                    <img src="public/img/Calendario.png" alt="Imagem de Calendário" />
                </button>
                <button className="botaoImagemPerfil">
                    <img src="public/img/Servicos.png" alt="Imagem de Serviços" />
                </button>
                <button texto="NOVO AGENDAMENTO" className='botaoAgendamento' />
            </div>
            <img src="public/img/LogoBranco.png" alt="Logo" className="imagemLogoBarra" />


            <img src="public/img/Capa.png" alt="Capa" className="imagemCapa" />

            <div className="LinhaFundo"></div>

            <div className="imagensEntreLinhaEBarra">
                <img src="public/img/Cabelo.jpg" alt="Imagem 1" />
                <img src="public/img/Manicure.jpg" alt="Imagem 2" />
                <img src="public/img/Maquiagem.jpeg" alt="Imagem 3" />
            </div>

            <div className="textoCapaContainer">
                <div className="textoCapa">Título Muito Foda</div>
                <div className="textoCapaDescricao">
                    Aqui eu vou colocar um texto muito foda que é só um template pra eu arrumar depois
                </div>
            </div>

            <div className="barraInferior">
                <div className="textoAcimaBotao">
                    Texto muito foda template aaaaaaaaaaaaaaaaaaa
                </div>
                <button className="botaoAgendamentoBarraInferior">MARQUE SEU HORÁRIO</button>
                <div className="linhaBarraInferior"></div>
            </div>

            <button className="botaoAgendamentoFrente">AGENDE AQUI</button>
        </div>
    );
};

export default Home;

