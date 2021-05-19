var panel = document.getElementsByClassName("gameArea")[0];
var startBtn = panel.getElementsByTagName("button")[0];
var boxObj = document.createElement("div");
    boxObj.style.width = "20px";
    boxObj.style.height = "20px";
    boxObj.style.position = "absolute";
    boxObj.style.backgroundColor = "black";
    boxObj.setAttribute("id", "box");

var scoreCounter = document.getElementById("score");
var timeCounter = document.getElementById("timer");

var score = 0;
var timer = 60;
var intv;
var date = new Date();

startBtn.addEventListener("click", ()=>{ 
    var rand = Math.floor(Math.random() * 100) + 0;
    boxObj.style.top = `${rand}px`;
    boxObj.style.left = `${rand}px`;
    boxObj.style.right = `${rand}px`;
    boxObj.style.bottom = `${rand}px`;
    scoreCounter.innerHTML = "Score : " + score;
    intv = setInterval(() => {
        timeCounter.innerHTML = `Time : ${timer -= 1}`;
        if(timer == 0){
            clearInterval(intv);
            alert(`Result :\nClicked : ${score}`);
            boxObj.style.display = "none";
        }
    }, 1000);
    panel.append(boxObj);
});


boxObj.addEventListener("click", ()=>{
    console.log("pressed");
    boxObj.style.top = `${ (Math.floor(Math.random() * 100) + 0) + date.getSeconds()}px`;
    boxObj.style.left = `${ (Math.floor(Math.random() * 100) + 0) + date.getSeconds()}px`;
    boxObj.style.right = `${ (Math.floor(Math.random() * 100) + 0) + date.getSeconds()}px`;
    boxObj.style.bottom = `${ (Math.floor(Math.random() * 100) + 0) + date.getSeconds()}px`;
    scoreCounter.innerHTML = `Score : ${score+=1}`;
    console.log(`top:${boxObj.style.top}, right:${boxObj.style.right}, left:${boxObj.style.left}, bottom:${boxObj.style.bottom}`);
});