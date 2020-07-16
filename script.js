const yourScore = document.querySelector(".your-score");
const compScore = document.querySelector(".computer-score");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const compRock = document.querySelector("#comp-rock");
const compPaper = document.querySelector("#comp-paper");
const compScissors = document.querySelector("#comp-scissors");
const yourChoices = document.querySelectorAll(".choice");

//assign a function to each button, that will upon clicking on it assign its 
// textContent to a variable "choice"
let choice = "";
yourChoices.forEach(btnClick);

function btnClick(item){
    item.onclick = function(){
        choice = item.textContent;
        makePlay(choice, computerPlay());   
        scoreEval();
        }
     }
//if score sum is 5 or greater, evaluates who's winner a pops an alert stating a win/lose, score and then resets score
function scoreEval(){
    if(parseInt(yourScore.textContent) + parseInt(compScore.textContent) >= 5){
         if (parseInt(yourScore.textContent) > parseInt(compScore.textContent)){
             window.alert(`You win ${yourScore.textContent} to ${compScore.textContent}`);
        } else {
             window.alert(`You lose ${yourScore.textContent} to ${compScore.textContent}`);
         }
        yourScore.textContent = 0;
        compScore.textContent = 0;
        }
    }
//randomly selects computer's choice
function computerPlay(){
    let selection = ["Rock", "Paper", "Scissors"];
    return selection[Math.floor(Math.random()*selection.length)];
 }
    
// sees who's won depending on computerPlay() to generate a random choice and player's choice decided by clicking a button
function makePlay(myChoice, compChoice){
    if(myChoice == compChoice){
        return console.log(`draw ${myChoice} ${compChoice}` );
    } else if (myChoice == "Rock" && compChoice == "Scissors" ||
                myChoice == "Paper" && compChoice =="Rock" ||
                myChoice == "Scissors" && compChoice == "Paper")
                {
                    yourScore.textContent = parseInt(yourScore.textContent) + 1;
                    console.log(`You win the round: ${myChoice} vs ${compChoice}`);
                } else {
                    compScore.textContent = parseInt(compScore.textContent) +1;
                    console.log(`You lose the round: ${myChoice} vs ${compChoice}`);
                }
    
            }    


