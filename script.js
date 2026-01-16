var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

function makeBubble(){
  var clutter = "";
  
  for(var i = 1;i<= 168;i++){
  var rn = Math.floor(Math.random() * 10);
  clutter += `<div class="bubble">${rn}</div>`
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function getNewHit(){
  hitrn = Math.floor(Math.random()*10);
  document.querySelector("#hitVal").textContent = hitrn;
}

function runTimer() {
  var interval = setInterval(() => {
    timer--;
    document.querySelector("#timeVal").textContent = timer;
    if(timer <= 0){
      clearInterval(interval);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

//bubbling CONCEPT = Jab main kisi bubble pe click karunga tab ek event listen hoga, agar woh nhi hua toh woh uske parent par event listen uspe bhi nhi hua toh uske bhi parent pe hoga

document.querySelector("#pbtm").addEventListener("click", function(details){
  var clickedNum = Number(details.target.textContent);
  if(clickedNum === hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

makeBubble();
getNewHit();
runTimer();