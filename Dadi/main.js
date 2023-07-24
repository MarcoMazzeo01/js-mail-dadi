const button = document.getElementById("diceButton")
const userResult = document.getElementById("userResult")
const computerResult = document.getElementById("computerResult")
const msg = document.getElementById("result")

let results = []
const minNum = 1, maxNum = 6;

// userResult.style.display = "none";
// computerResult.style.display = "none";
// msg.style.display = "none";

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


button.addEventListener("click",function (){
    //let userNum = randomInt(minNum,maxNum)


    results.push(randomInt(minNum,maxNum))
    results.push(randomInt(minNum,maxNum))
    console.table(results)

})