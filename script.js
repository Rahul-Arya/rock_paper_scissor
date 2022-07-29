// const choices = document.querySelectorAll('.rpsButton')
// let computerChoice = choices[(Math.floor(Math.random()*3))].value;
// console.log(computerChoice)

function getComputerChoice() {
  let rpsChoices = ['Rock', 'Paper', 'Scissors']
  let computerChoice = rpsChoices[Math.floor(Math.random() * 3)]
  // console.log(computerChoice)
  return computerChoice
}

function getResult(playerChoice, computerChoice) {
  let score;
  if(playerChoice===computerChoice)
  {
    score = 0;
  }
  else if(playerChoice==="Rock" && computerChoice==="Scissors")
  {
    score=1;
  }
  else if(playerChoice==="Scissors" && computerChoice==="Paper")
  {
    score=1;
  }
  else if(playerChoice==="Paper" && computerChoice==="Rock")
  {
    score=1;
  }
  else{
    score=-1;
  }
  return score;
}

function showResult(score, playerChoice, computerChoice) {

 let result = document.getElementById('result')
 if(score==-1)
 {
    result.innerText = "\nहग्गू फिर हार गया तू";
 }
 else if(score==0){
    result.innerText = "\nलौडू ड्रा होग्या!😂";
 }
 else{
    result.innerText = "\nजीत गया रे मदरचोद तू!!!";
 }
 let playerScore = document.getElementById('player-score')
 let hands = document.getElementById('hands')
 playerScore.innerText = `${Number(playerScore.innerText) + score}`
   hands.innerText = `You Choose=> ${playerChoice}  ---vs---  Computer Choose==>${computerChoice}`
}
function onClickRPS(playerChoice) {
  const cs = getComputerChoice();
  const score = getResult(playerChoice.value,cs);
  showResult(score,playerChoice.value,cs)
}
function playGame() {
  let choices = document.querySelectorAll('.rpsButton')
  choices.forEach(choice=>{
    choice.onclick=()=>onClickRPS(choice);
    })
    
  let endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame()
  
}
function endGame() {
    let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  let result = document.getElementById('result')
  playerScore.innerText = ''
  hands.innerText = ''
  result.innerText = ''

  
}

playGame()