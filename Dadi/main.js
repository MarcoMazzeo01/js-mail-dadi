const button = document.getElementById("diceButton")
const userResult = document.getElementById("userResult")
const computerResult = document.getElementById("computerResult")
const msg = document.getElementById("result")

let results = []
const minNum = 1, maxNum = 6;
let biggestNum;

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


button.addEventListener("click",function (){

    results.push(randomInt(minNum,maxNum))
    results.push(randomInt(minNum,maxNum))
    console.table(results)


   if (results[0] > results[1]) {
    biggestNum = results[0] //giocatore vince
    msg.innerHTML = "Hai vinto!"
   } else {
    biggestNum = results[1] // computer vince
    msg.innerHTML = "Hai perso! :( Riprova, sarai più fortunato."
   }

   console.log(biggestNum)

  userResult.innerHTML = "Il tuo dado: " + results[0]
  computerResult.innerHTML = "Il dado dell'avversario: " + results[1]

  results = []

})