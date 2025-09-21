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
if ("WebSocket" in window) {
  (function () {
    function refreshCSS() {
      let sheets = [].slice.call(document.getElementsByTagName("link"));
      let head = document.getElementsByTagName("head")[0];
      for (let i = 0; i < sheets.length; ++i) {
        let elem = sheets[i];
        let parent = elem.parentElement || head;
        parent.removeChild(elem);
        if (
          (elem.href && typeof rel != "string") ||
          rel.length == 0 ||
          rel.toLowerCase() == "stylesheet"
        ) {
          let url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, "");
          elem.href =
            url +
            (url.indexOf("?") >= 0 ? "&" : "?") +
            "_cacheOverride=" +
            new Date().valueOf();
        }
        parent.appendChild(elem);
      }
    }
    let protocol = window.location.protocol === "http:" ? "ws://" : "wss://";
    let address =
      protocol + window.location.host + window.location.pathname + "/ws";
    let socket = new WebSocket(address)
    socket.onmessage = function (msg) {
      if (msg.data == "reload") window.location.reload();
      else if (msg.data == "refreshcss") refreshCSS();
    };
    if (
      sessionStorage &&
      !sessionStorage.getItem("IsThisFirstTime_Log_From_LiveServer")
    ) {
      console.log("Live reload enabled.")
      sessionStorage.setItem("IsThisFirstTime_Log_From_LiveServer", true);
    }
  })();
} else {
  console.error(
    "Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading."
  )
}
