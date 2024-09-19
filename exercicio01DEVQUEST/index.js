//Pegar o elemento do botão aqui no JS
const btnTrocaCor = document.getElementById('btn-troca-cor')

//Pegar o elemento do quadrado azul aqui no JS
const quadradoAzul = document.querySelector('.azul')

//Quando o usuário clicar no botão precisamos disparar a ação de mudar a cor do fundo do quadrado azul
btnTrocaCor.addEventListener("click", trocarCor)

//Para mudar a cor de fundo podemos adicionar e remover as classes que o elemento tem
function trocarCor() {
  quadradoAzul.classList.remove("azul")
  quadradoAzul.classList.add("amarelo")
}