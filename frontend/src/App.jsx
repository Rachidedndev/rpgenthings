export default function App() {
  
  // O 'async' avisa que essa função lida com requisições que demoram
  const fazerConexaoComBackend = async () => {
    console.log("Botão clicado! O mensageiro saiu correndo...");
    
    try {
      // O 'await fetch' manda o mensageiro ir na porta 8000 e ESPERA ele voltar
      const resposta = await fetch("http://localhost:8000/");
      
      // Quando ele volta, a resposta vem em formato de rede bruto.
      // O 'await resposta.json()' transforma isso num objeto JavaScript legível.
      const dados = await resposta.json();
      
      // Imprime a mensagem que veio lá do Python!
      console.log("A resposta do Python chegou:", dados);
      
    } catch (erro) {
      console.error("Deu ruim na viagem do mensageiro:", erro);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", color: "white" }}>
      <h1>🎲 A Forja de RPG</h1>
      <button 
        onClick={fazerConexaoComBackend}
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer", marginTop: "20px" }}
      >
        Acordar o Backend
      </button>
    </div>
  );
}