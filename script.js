// Lista de objetos

const praticas = [
    {
        nome: "Irrigação Inteligente",
        beneficio: "Economiza água",
        impacto: "Reduz desperdícios"
    },
    {
        nome: "Energia Solar",
        beneficio: "Energia limpa",
        impacto: "Menos poluição"
    },
    {
        nome: "Rotação de Culturas",
        beneficio: "Solo mais fértil",
        impacto: "Maior produtividade"
    }
];

// Função para criar cards

function criarCard(pratica) {
    return `
        <div class="card">
            <h3>${pratica.nome}</h3>
            <p><strong>Benefício:</strong> ${pratica.beneficio}</p>
            <p><strong>Impacto:</strong> ${pratica.impacto}</p>
        </div>
    `;
}

// Manipulação do DOM

function mostrarPraticas() {

    let html = "";

    praticas.forEach(pratica => {
        html += criarCard(pratica);
    });

    document.getElementById("lista").innerHTML = html;
}

document
    .getElementById("mostrarBtn")
    .addEventListener("click", mostrarPraticas);

// Quiz

function responder(acertou) {

    const resultado =
        document.getElementById("resultado");

    if(acertou){
        resultado.textContent =
            "✅ Correto! Energia solar é renovável.";
    } else {
        resultado.textContent =
            "❌ Incorreto. Tente novamente.";
    }
}

// IA

function analisarSolo() {

    const umidade =
        Math.floor(Math.random() * 100);

    let mensagem;

    if(umidade < 40){
        mensagem =
        `Umidade: ${umidade}% - IA recomenda irrigação.`;
    } else {
        mensagem =
        `Umidade: ${umidade}% - Solo adequado.`;
    }

    document
        .getElementById("iaResultado")
        .textContent = mensagem;
}