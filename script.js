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
        return makePlay(choice, computerPlay());
        }
     }




function makePlay(myChoice, compChoice){
    if(myChoice == compChoice){
        return console.log(`draw ${myChoice} ${compChoice}` );
    } else if (myChoice == "Rock" && compChoice == "Scissors" ||
                myChoice == "Paper" && compChoice =="Rock" ||
                myChoice == "Scissors" && compChoice == "Paper"){
                    return console.log(`win ${myChoice} ${compChoice}`);
                } else {
                    return console.log(`lose ${myChoice} ${compChoice}`);
                }
    
            }    


function computerPlay(){
    let selection = ["Rock", "Paper", "Scissors"];

    return selection[Math.floor(Math.random()*selection.length)];
}


