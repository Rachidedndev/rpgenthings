import { useState } from 'react';

export default function App() {
  
  const [taverna, setTaverna] = useState("A Forja está fria..."); 

  const gerarNovaTaverna = async () => {
    setTaverna("Forjando nome...");
    
    try {
      const resposta = await fetch("https://rpgenthings-backend.onrender.com/taverna");
      const dados = await resposta.json();
      
      setTaverna(dados.nome_taverna); 
      
    } catch (erro) {
      console.error("Erro:", erro);
      setTaverna("Erro ao forjar. O ferreiro tropeçou.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", color: "white" }}>
      <h1>🎲 Gerador de Tavernas</h1>
      
      <h2 style={{ color: "#a855f7", margin: "30px 0" }}>{taverna}</h2> 
      
      <button 
        onClick={gerarNovaTaverna}
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Gerar Nova Taverna
      </button>
    </div>
  );
}