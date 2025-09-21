let numeroSecreto;
let tentativas;
console.log("Boas vindas ao jogo do número secreto");
document.getElementById('iniciarJogo').addEventListener('click', iniciarJogo);

function iniciarJogo() {
    numeroSecreto = parseInt(Math.random() * 10) + 1;
    tentativas = 0;
    console.log("Novo jogo iniciado. Número secreto:", numeroSecreto); 
    
    jogar();
}
function jogar() {
    let chute = prompt("Escolha um número entre 1 e 10");
    if (chute === null) {
        alert("Jogo cancelado.");
        return; 
    }

    chute = parseInt(chute);
    tentativas++;
    console.log("Chute do usuário:", chute, "| Tentativa nº:", tentativas);

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}!`);
        console.log("O usuário acertou!");
    
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}. Tente novamente!`);
            console.log("O número secreto é menor");
        } else {
            alert(`O número secreto é maior que ${chute}. Tente novamente!`);
            console.log("O número secreto é maior");
        }
        jogar();
    }
}