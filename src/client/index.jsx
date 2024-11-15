import './client.css';
const Client = () => {
    return (
        <div class="formulario-container">
    <form class="formulario">
        <h2>Cadastro de Usuário</h2>

        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required />

        <label for="telefone">Telefone:</label>
        <input type="tel" id="telefone" name="telefone" placeholder="Digite seu telefone" required />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Digite seu email" required />

        <div class="botoes">
            <button type="submit" class="botao salvar">Salvar</button>
            <button type="button" class="botao alterar">Alterar</button>
            <button type="button" class="botao excluir">Excluir</button>
        </div>
    </form>
</div>

    )

}
export default Client 
