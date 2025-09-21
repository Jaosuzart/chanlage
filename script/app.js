let numeroSecreto;
let tentativas = 0;
console.log("Boas vindas ao jogo do número secreto");
document.getElementById('iniciarJogo').addEventListener('click', iniciarJogo);

function iniciarJogo() {
  numeroSecreto = parseInt(Math.random() * 10) + 1; // 1 a 10
  tentativas = 0;
  console.log("Número secreto gerado:", numeroSecreto);
  jogar();
}

function jogar() {
  let chute = prompt("Escolha um número entre 1 e 10");
  if (chute === null) return; 
  chute = parseInt(chute);
  tentativas++;
  console.log("Chute do usuário:", chute, "Tentativa:", tentativas);

  if (chute == numeroSecreto) {
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}`);
    console.log("Acertou!");
  } else {
    if (chute > numeroSecreto) {
      console.log("O número secreto é menor");
    } else {
      console.log("O número secreto é maior");
    }
    jogar();
  }
}
