
//Variáveis
let randomNumber =  Math.round(Math.random() * 10)
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnTryAgain = document.querySelector("#btnTryAgain")
let xAttempts = 1

//Eventos
btnTry.addEventListener('click', handleTryClick) 
btnTryAgain.addEventListener('click', handleTryAgainClick)
document.addEventListener('keydown', handleKeyDown)

//Funções
function handleTryClick(event) {
  event.preventDefault() //não faça o padrão

  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()   
    screen2.querySelector("h2").innerText = `Você acertou em ${xAttempts} tentativas`
  }
  
  inputNumber.value = ""
  xAttempts++
}

function handleTryAgainClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber =  Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function handleKeyDown() {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleTryAgainClick()
  }
}
