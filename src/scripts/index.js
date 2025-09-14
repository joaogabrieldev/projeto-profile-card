let janelaAbertaGIT = null;
let janelaAbertaLKDN = null;

const urlGIT = "https://github.com/joaogabrieldev";

const urlLKDN = "https://www.linkedin.com/in/joaogabrielrocha/";

const botaoGIT = document.getElementById("icon-github");
const nomeJanelaGIT = "githubWindow";

const botaoLinkedin = document.getElementById("icon-linkedin");
const nomeJanelaLKDN = "linkedinWindow";

botaoGIT.addEventListener("click", () => {
  if (janelaAbertaGIT && !janelaAbertaGIT.closed) {
    janelaAbertaGIT.focus();
  } else {
    janelaAbertaGIT = window.open(urlGIT, nomeJanelaGIT);
  }
});

botaoLinkedin.addEventListener("click", () => {
  if (janelaAbertaLKDN && !janelaAbertaLKDN.closed) {
    janelaAbertaLKDN.focus();
  } else {
    janelaAbertaLKDN = window.open(urlLKDN, nomeJanelaLKDN);
  }
});
