let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#resSert")
let newGame = document.querySelector("#new-game");
let magcontainer = document.querySelector(".mag-continer");
let mag = document.querySelector("#mag");


let turnO = true;

const shareBtn = document.querySelector(".shir");

shareBtn.addEventListener("click", async () => {
  const link = window.location.href;

    navigator.clipboard.writeText(link);

  alert("Game link copied! Now you can paste it anywhere.");
});

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  magcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was click")
        if (turnO) {
            box.innerText = "X";
            turnO = false;
        } else {
            box.innerText = "O";
            turnO = true;
        }

        box.disabled = true;

        checkWinner()

    });
});

const disabledBoxes = () =>{
  for (let box of boxes) {
   box.disabled = true;
    
  }
}

const enableBoxes = () =>{
  for (let box of boxes) {
   box.disabled = false;
   box.innerText = "";
  }
}



const showWinner = (winner) => {
  mag.innerText = `Congratulations, Winner is ${winner}`;
  magcontainer.classList.remove("hide");
  disabledBoxes()
};

const checkWinner = () => {
  for (let pattern of winpatterns) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner",pos1Val)
        showWinner(pos1Val);
      }
    }
  }
};


newGame.addEventListener("click",resetGame)
reset.addEventListener("click",resetGame)
