const motions = [
    
    {
        "motion": "EC permitiria o uso de câmeras corporais para policiais.",
        "infoslide": "O uso de câmeras corporais pode aumentar a transparência e a responsabilidade, mas também levanta preocupações sobre privacidade e a manipulação de provas."
    },
    {
        "motion": "EC legalizaria a eutanásia para pacientes terminais.",
        "infoslide": "A eutanásia levanta questões éticas sobre o direito à morte digna versus o valor da vida e o papel do Estado na regulamentação dessas escolhas."
    },
    {
        "motion": "EC proíbe o uso de animais em testes científicos.",
        "infoslide": "O uso de animais em pesquisas científicas tem sido uma prática comum, mas também gera debate sobre o sofrimento animal e os métodos alternativos disponíveis."
    },
    {
        "motion": "EC baniria a publicidade de alimentos não saudáveis direcionada a crianças.",
        "infoslide": "Com o aumento da obesidade infantil, a restrição à publicidade de alimentos não saudáveis visa reduzir a exposição a marketing que influencia negativamente os hábitos alimentares das crianças."
    },
    {
        "motion": "EC tornaria obrigatório o ensino de programação nas escolas.",
        "infoslide": "A educação em programação é vista como uma habilidade essencial para o século XXI, mas a obrigatoriedade poderia sobrecarregar um currículo já desafiador."
    },
    {
        "motion": "EC criaria uma renda básica universal.",
        "infoslide": "A renda básica universal propõe fornecer uma quantia fixa a todos os cidadãos, visando reduzir a pobreza e combater a desigualdade, mas pode ser economicamente inviável em algumas regiões."
    },
    {
        "motion": "EC proibiria o uso de reconhecimento facial em espaços públicos.",
        "infoslide": "O uso de reconhecimento facial levanta preocupações sobre vigilância em massa, privacidade e a possibilidade de discriminação algorítmica."
    },
    {
        "motion": "EC legalizaria o uso recreativo da maconha.",
        "infoslide": "A legalização da maconha busca reduzir o mercado ilegal e aumentar a arrecadação de impostos, mas também pode aumentar o uso recreativo e os riscos associados à saúde pública."
    },
    {
        "motion": "EC estabeleceria uma jornada de trabalho de 30 horas semanais.",
        "infoslide": "Reduzir a carga horária pode melhorar a qualidade de vida e aumentar a produtividade, mas algumas empresas podem enfrentar dificuldades econômicas para se ajustar."
    },
    {
        "motion": "EC proibiria a fabricação de plásticos de uso único.",
        "infoslide": "A proibição de plásticos de uso único visa reduzir o impacto ambiental, mas pode criar desafios logísticos e econômicos em diversas indústrias."
    },
    {
        "motion": "EC regulamentaria as criptomoedas.",
        "infoslide": "As criptomoedas oferecem uma alternativa descentralizada ao sistema financeiro tradicional, mas sua natureza volátil e o risco de uso ilícito exigem regulamentação."
    },
    {
        "motion": "EC obrigaria todas as empresas a adotarem práticas de sustentabilidade.",
        "infoslide": "Empresas com práticas sustentáveis podem ajudar a combater as mudanças climáticas, mas os custos de implementação podem ser um obstáculo, especialmente para pequenas empresas."
    },
    {
        "motion": "EC proibiria a venda de armas de fogo para civis.",
        "infoslide": "A proibição de armas de fogo pode reduzir a violência armada, mas também pode levantar preocupações sobre os direitos dos cidadãos e a eficácia da medida."
    },
    {
        "motion": "EC permitiria que as escolas públicas adotassem uniformes.",
        "infoslide": "Os uniformes escolares podem promover igualdade social e melhorar a disciplina, mas também podem ser vistos como uma limitação à liberdade de expressão."
    },
    {
        "motion": "EC adotaria uma política de fronteiras abertas.",
        "infoslide": "As fronteiras abertas podem fomentar o crescimento econômico e a diversidade cultural, mas podem gerar desafios relacionados à segurança, recursos e assimilação de imigrantes."
    },
    {
        "motion": "EC tornaria ilegal o uso de veículos movidos a combustíveis fósseis.",
        "infoslide": "A transição para veículos elétricos pode reduzir a poluição e as emissões de gases de efeito estufa, mas exige grandes investimentos em infraestrutura e pode afetar setores da economia dependentes do petróleo."
    },
    {
        "motion": "EC permitiria que os estudantes escolhessem suas próprias matérias na escola.",
        "infoslide": "A autonomia curricular pode motivar os estudantes, mas pode também resultar em uma educação fragmentada e desigual, dependendo da disponibilidade de recursos."
    },
    {
        "motion": "EC instituiria um imposto sobre grandes fortunas.",
        "infoslide": "Impostos sobre grandes fortunas visam reduzir a desigualdade, mas podem ser vistos como desincentivadores do investimento e crescimento econômico."
    },
    {
        "motion": "EC proíbe a construção de novos aeroportos.",
        "infoslide": "Restringir a expansão dos aeroportos pode reduzir os impactos ambientais e o tráfego aéreo, mas pode também limitar a conectividade e o desenvolvimento econômico."
    },
    {
        "motion": "EC instituiria uma moratória sobre novos desenvolvimentos urbanos.",
        "infoslide": "Impedir novos desenvolvimentos urbanos pode ajudar a conservar o meio ambiente, mas também pode limitar o crescimento das cidades e a oferta de moradias."
    },
    {
        "motion": "EC proibiria o uso de energia nuclear.",
        "infoslide": "A energia nuclear oferece uma fonte de energia de baixo carbono, mas os riscos de acidentes e o descarte de resíduos nucleares são preocupações significativas."
    },
    {
        "motion": "EC permitiria que as empresas implementassem sistemas de vigilância total de seus funcionários.",
        "infoslide": "Embora a vigilância no trabalho possa melhorar a segurança e a produtividade, ela também levanta questões sobre a privacidade e os direitos dos trabalhadores."
    },
    {
        "motion": "EC tornaria a educação superior gratuita.",
        "infoslide": "A educação superior gratuita poderia aumentar a equidade social e o acesso ao conhecimento, mas poderia sobrecarregar o orçamento público e desvalorizar o ensino."
    },
    {
        "motion": "EC proibiria a venda de bebidas alcoólicas para menores de 21 anos.",
        "infoslide": "A proibição do consumo de álcool por menores de 21 anos visa reduzir o consumo precoce e seus efeitos prejudiciais à saúde, mas pode ser vista como uma violação da autonomia."
    },
    {
        "motion": "EC criaria um sistema de saúde universal e gratuito.",
        "infoslide": "A criação de um sistema de saúde universal pode garantir acesso igualitário à saúde, mas pode resultar em longas filas de espera e sobrecarregar os recursos disponíveis."
    },
    {
        "motion": "EC proibiria o uso de dispositivos móveis nas escolas.",
        "infoslide": "O uso de dispositivos móveis pode ser uma distração, mas também oferece recursos educativos e pode ser uma ferramenta importante para a aprendizagem."
    },
    {
        "motion": "EC regulamentaria o uso de algoritmos na tomada de decisões jurídicas.",
        "infoslide": "O uso de algoritmos em decisões jurídicas pode aumentar a eficiência, mas também pode perpetuar preconceitos e injustiças se não forem adequadamente regulamentados."
    },
    {
        "motion": "EC permitira que cidadãos adotassem animais de estimação de abrigos gratuitamente.",
        "infoslide": "Adotar animais gratuitamente pode reduzir a superpopulação de abrigos, mas pode também resultar em adoções irresponsáveis sem o compromisso necessário."
    },
    {
        "motion": "EC implementaria políticas para reduzir a desigualdade salarial entre gêneros.",
        "infoslide": "Medidas para reduzir a desigualdade salarial de gênero podem promover a equidade no local de trabalho, mas podem encontrar resistência por parte das empresas e sindicatos."
    },
    {
        "motion": "EC limitariam os direitos de propriedade intelectual sobre softwares.",
        "infoslide": "Limitar os direitos de propriedade intelectual pode incentivar a inovação e o acesso, mas pode desincentivar investimentos em pesquisas e desenvolvimento."
    },
    {
        "motion": "EC incentivaria a adoção de veículos compartilhados em vez de carros individuais.",
        "infoslide": "O uso compartilhado de veículos pode reduzir congestionamentos e emissões de carbono, mas exige grandes mudanças nos hábitos e infraestrutura urbana."
    },
    {
        "motion": "EC proibiría a venda de produtos de beleza testados em animais.",
        "infoslide": "Proibir a venda de produtos de beleza testados em animais poderia reduzir a crueldade animal, mas também pode aumentar os custos de produção e limitar as opções de consumo."
    },
    {
        "motion": "EC legalizaria o casamento entre pessoas do mesmo sexo em todos os países.",
        "infoslide": "O casamento entre pessoas do mesmo sexo é uma questão de direitos civis, mas enfrenta resistência devido a valores culturais e religiosos em algumas regiões."
    },

];

const stages = [
    { name: "Preparação", time: 15 * 60 },
    { name: "1º Governo", time: 7 * 60 + 15 },
    { name: "1º Oposição", time: 7 * 60 + 15 },
    { name: "2º membro do 1º Governo", time: 7 * 60 + 15 },
    { name: "2º membro da 1º Oposição", time: 7 * 60 + 15 },
    { name: "Extensão Defesa", time: 7 * 60 + 15 },
    { name: "Extensão Oposição", time: 7 * 60 + 15 },
    { name: "Whip Defesa", time: 7 * 60 + 15 },
    { name: "Whip Oposição", time: 7 * 60 + 15 }
];

let stageIndex = 0;
let timeLeft = stages[0].time;
let isRunning = false;
let timerInterval;

document.addEventListener("DOMContentLoaded", () => {
    updateUI();
});

function pickMotion() {
    let randomMotion = motions[Math.floor(Math.random() * motions.length)];
    document.getElementById("motion").innerHTML = `<strong>Moção:</strong> ${randomMotion.motion}<br><br><strong>Infoslide:</strong> ${randomMotion.infoslide}`;
}

function updateUI() {
    document.getElementById("stage").innerText = stages[stageIndex].name;
    document.getElementById("timer").innerText = formatTime(timeLeft);
}

function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
}

function startStop() {
    if (isRunning) {
        clearInterval(timerInterval);
        document.getElementById("startBtn").innerText = "Iniciar";
    } else {
        timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateUI();
            } else {
                nextStage();
            }
        }, 1000);
        document.getElementById("startBtn").innerText = "Pausar";
    }
    isRunning = !isRunning;
}

function nextStage() {
    if (stageIndex < stages.length - 1) {
        stageIndex++;
        timeLeft = stages[stageIndex].time;
        updateUI();
    } else {
        clearInterval(timerInterval);
        isRunning = false;
        document.getElementById("startBtn").innerText = "Iniciar";
    }
}

function skipStage() {
    clearInterval(timerInterval);
    isRunning = false;
    document.getElementById("startBtn").innerText = "Iniciar";
    nextStage();
}

function reset() {
    clearInterval(timerInterval);
    stageIndex = 0;
    timeLeft = stages[0].time;
    isRunning = false;
    document.getElementById("startBtn").innerText = "Iniciar";
    updateUI();
}












function calcularBreak() {
    const numRodadas = parseInt(document.getElementById('numRodadas').value);
    const numDuplas = parseInt(document.getElementById('numDuplas').value);
    const tipoTorneio = document.getElementById('tipoTorneio').value;
    const numBreak = tipoTorneio === 'semifinal' ? 8 : 4;

    // Validações
    if (numDuplas < numBreak) {
        alert(`Mínimo de ${numBreak} duplas para este formato!`);
        return;
    }

    // Cálculos precisos
    const melhorCaso = calcularMinimoParaPossivelBreak(numRodadas, numBreak, numDuplas);
    const piorCaso = calcularPontuacaoGarantida(numRodadas, numBreak, numDuplas);

    // Exibir
    document.getElementById('melhorCaso').textContent = 
        `Melhor caso: ${melhorCaso}pts (mínimo para chance de break)`;
    document.getElementById('piorCaso').textContent = 
        `Pior caso: ${piorCaso}pts (garantia absoluta de break)`;
}

function calcularMinimoParaPossivelBreak(rodadas, numBreak, totalDuplas) {
    // Lógica para o cenário mais favorável
    const pontosPorRodada = 3;
    const pontosMaximos = rodadas * pontosPorRodada;
    
    if (numBreak === 8) {  // Top 8
        if (rodadas === 3) return 7;  // Ex: 3 times com 9pts, 5 com 6pts
        if (rodadas === 4) return 9;
        if (rodadas === 5) return 11;
        if (rodadas === 6) return 13;
    } else {  // Top 4
        if (rodadas === 3) return 6;
        if (rodadas === 4) return 8;
        if (rodadas === 5) return 10;
        if (rodadas === 6) return 12;
    }
    return Math.floor(pontosMaximos * 0.7);  // Fórmula genérica
}

function calcularPontuacaoGarantida(rodadas, numBreak, totalDuplas) {
    // Lógica para o cenário mais competitivo
    if (numBreak === 8) {
        if (rodadas === 3) return 9;  // Ex: 8 times precisam ter >8pts
        if (rodadas === 4) return 11;
        if (rodadas === 5) return 13;
        if (rodadas === 6) return 15;
    } else {
        if (rodadas === 3) return 8;
        if (rodadas === 4) return 10;
        if (rodadas === 5) return 12;
        if (rodadas === 6) return 14;
    }
    return Math.floor(rodadas * 3 * 0.9);  // Fórmula genérica
}








  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");
  
    menuToggle.addEventListener("click", function () {
      nav.classList.toggle("active");
    });
  });
  