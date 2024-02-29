const gameBox = document.querySelectorAll(".box");
const resetButton = document.querySelector("#reset-btn");
const msg = document.querySelector("[data-Winner]");
const newGame = document.querySelector(".NewGame");
const msgContainer = document.querySelector(".WinnerPage");
const ticContainer = document.querySelector(".container");

ticContainer.classList.remove("active");

let turnO = true; //turn of the player, false is for X and true is for O
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () =>{
    turnO =true;
    enableBox();
    msgContainer.classList.add("hide");
    
};

const newGameBegin = () =>{
    turnO =true;
    enableBox();
    msgContainer.classList.add("hide");
    ticContainer.classList.remove("active");
};

gameBox.forEach((box) =>{
    box.addEventListener("click", ()=> {
        if (turnO){
            box.innerText = "0";
            box.style.color = "red";
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color = "blue";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
})

const disableBox = ()=> {
    for(let box of gameBox){
        box.disabled = true;
    }
};

const enableBox = ()=> {
    for(let box of gameBox){
        box.disabled = false;
        box.innerText = "";
    }
};

function msgWinner(winner){
    msg.innerText = `Congratulations! ${winner} wins.`;
    msgContainer.classList.remove("hide");
    ticContainer.classList.add("active");
    disableBox();
}

function checkWinner() {
    for (Pattern of winPattern ){
        let val1 =  gameBox[Pattern[0]].innerText;
        let val2 =  gameBox[Pattern[1]].innerText;
        let val3 =  gameBox[Pattern[2]].innerText;

        if (val1 != "" && val2 != "" && val3 != ""){
            if (val1 === val2 && val2 === val3){
                msgWinner(val1);
            }
        }
    }

}

resetButton.addEventListener('click', resetGame)
newGame.addEventListener('click', newGameBegin);