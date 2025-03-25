const motions = [
    {
        motion: "ECH proibiria o financiamento privado de campanhas eleitorais.",
        infoslide: "Nos sistemas eleitorais modernos, os partidos políticos e candidatos muitas vezes recebem doações privadas para financiar suas campanhas. Alguns argumentam que isso favorece candidatos com mais acesso a recursos e influencia políticas públicas em favor de grandes doadores."
    },
    {
        motion: "ECH permitiria o voto obrigatório.",
        infoslide: "Em alguns países, como Brasil e Austrália, o voto é obrigatório, enquanto em outros, como os EUA, é facultativo. Defensores argumentam que isso fortalece a democracia, enquanto críticos alegam que viola a liberdade individual."
    }
];

const stages = [
    { name: "Preparação", time: 15 * 60 },
    { name: "1º Governo", time: 7 * 60 + 15 },
    { name: "1º Oposição", time: 7 * 60 + 15 },
    { name: "2º Governo", time: 7 * 60 + 15 },
    { name: "2º Oposição", time: 7 * 60 + 15 },
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


