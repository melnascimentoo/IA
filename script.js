const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Era uma noite chuvosa e você decidiu preparar algo especial para o jantar. Abriu a geladeira, pensativo, e encontrou dois ingredientes principais: um belo pedaço de salmão fresco e um cesto de cogumelos recém-colhidos",
        alternativas: [
            {
                texto: "Preparar um salmão grelhado com ervas finas.",
                afirmacao: "você se anima com a ideia e vai buscar ingredientes "
            },
            {
                texto: "Fazer um risoto cremoso de cogumelos.",
                afirmacao: "você busca a receita na internet."
            }
        ]
    },
    {
        enunciado: "Você espera o prato principal esfriar um pouco, arruma a mesa e pega o celular nota que falta algo... A sobremesa é claro! Qual você escolhe?",
        alternativas: [
            {
                texto: "Fazer brownie de caramelo com amendoim e flor de sal.",
                afirmacao: "Agora tudo está perfeito para a janta!."
            },
            {
                texto: "Preparar cookies recheados.",
                afirmacao: "Você esqueceu dos cookies no forno e queimou todos."
            }
        ]
    },
    {
        enunciado: "Apos a janta você lava a louça e se deita no sofá, finalmente pega o controle e entra em uma plataforma de streaming. Qual filme irá ver hoje??",
        alternativas: [
            {
                texto: "Vingadores ultimato.",
                afirmacao: "Você assistiu todos os filmes de vingadores e foi domir tarde."
            },
            {
                texto: "Operação cupido.",
                afirmacao: "O filme foi incrível."
            }
        ]
    },
    {
        enunciado: "Antes de dormir você vai tomar banho e escole um pijama, qual deles é melhor?",
        alternativas: [
            {
                texto: "Conjunto combinando curto.",
                afirmacao: "Você passou frio a noite."
            },
            {
                texto: "Pijama comprido.",
                afirmacao: "Você teve uma ótima noite de sono!"
            }
        ]
    },
    {
        enunciado: "A janela do seu quarto está levemente aberta, oque fazer agora? ",
        alternativas: [
            {
                texto: "Fechar completamente.",
                afirmacao: "Bons sonhos."
            },
            {
                texto: "Deixar assim.",
                afirmacao: "Bons sonhos."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "No dia seguinte...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
