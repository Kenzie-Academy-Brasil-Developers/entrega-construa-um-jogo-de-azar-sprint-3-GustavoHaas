const min = Math.floor(0);
const max = Math.ceil(2);
const opcoes = ['Pedra', 'Papel', 'Tesoura'];
const possibilidades = [['Pedra', -1, 'Papel', 1],['Pedra', 1,'Tesoura', -1],['Pedra',  0,'Pedra', 0],['Papel', -1, 'Tesoura', 1],['Papel', 0, 'Papel', 0],
['Tesoura', 0, 'Tesoura', 0],['Tesoura', 1, 'Papel', -1],['Tesoura', -1, 'Pedra', 1],['Papel', 1, 'Pedra', -1]];
let playerChoice = "";
let pointsPC = 0;
let pointsPlayer = 0;

document.getElementById('pedra').addEventListener('click', playerPedra);
document.getElementById('papel').addEventListener('click', playerPapel);
document.getElementById('tesoura').addEventListener('click', playerTesoura);

function jokenpoComputador (playerChoice) {

    let rollComputador = Math.floor(Math.random() * (max - min + 1)) + min;
    rollComputador = opcoes[rollComputador];

    for (let i = 0; i < possibilidades.length; i++) {
        if ((rollComputador === possibilidades[i][0]) && (playerChoice === possibilidades[i][2])) {
            pointsPC = possibilidades[i][1];
            pointsPlayer = possibilidades[i][3];
        }
    }

    pcChoice(rollComputador);
    winningCondition(pointsPC, pointsPlayer);
}

function playerPedra () {
    playerChoice = 'Pedra';

    jokenpoComputador(playerChoice)
}

function playerPapel () {
    playerChoice = 'Papel';

    jokenpoComputador(playerChoice)
}

function playerTesoura () {
    playerChoice = 'Tesoura';

    jokenpoComputador(playerChoice)
}

function winningCondition (pointsPC, pointsPlayer) {
    if (pointsPC > pointsPlayer) {
        setTimeout(function() {window.location.href = "../HTML/pcWin.html"}, 3000);

    } else if (pointsPC < pointsPlayer){
        setTimeout(function() {window.location.href = "../HTML/playerWin.html"}, 3000);
    } else {
        setTimeout(function() {window.location.href = "../HTML/empate.html"}, 3000);
    }
}

function pcChoice (rollComputador) {

    const imgComputer = document.getElementById('imgComputador');


    if (rollComputador === 'Pedra') {
        imgComputer.src = '../imagens/dots.gif';
        setTimeout(function() {imgComputer.src = '../imagens/pedra.png'},2000);
    } else if (rollComputador === 'Papel') {
        imgComputer.src = '../imagens/dots.gif';
        setTimeout(function() {imgComputer.src = '../imagens/papel.png'},2000);
    } else {
        imgComputer.src = '../imagens/dots.gif';
        setTimeout(function() {imgComputer.src = '../imagens/tesoura.png'},2000);
    }
}