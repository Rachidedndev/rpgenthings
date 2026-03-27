import random # Trazendo a ferramenta de sorteio para o projeto
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://rpgenthings.vercel.app/"
        ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Nossa rota antiga de boas-vindas
@app.get("/")
def read_root():
    return {"status": "E aí, bora começar?", "versao": "1.0"}

# ---------------------------------------------------------
# NOSSA NOVA ROTA: O GERADOR DE TAVERNAS
# ---------------------------------------------------------
@app.get("/taverna")
def gerar_taverna():
    # 1. Definimos a matéria-prima
    adjetivos = ["Bêbado", "Caolho", "Sorridente", "Sangrento", "Manco", "Dourado"]
    substantivos = ["Pônei", "Dragão", "Orc", "Caneco", "Goblin", "Grifo"]
    
    # 2. Usamos o random.choice para sortear um de cada
    adjetivo_sorteado = random.choice(adjetivos)
    substantivo_sorteado = random.choice(substantivos)
    
    # 3. Montamos a string final juntando tudo
    nome_final = f"O {substantivo_sorteado} {adjetivo_sorteado}"
    
    # 4. Retornamos o JSON que vai ser enviado pela rede
    return {"nome_taverna": nome_final}