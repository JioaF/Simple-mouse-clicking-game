class domObj{
    constructor(element, method){
        switch (method) {
            case "create":
                this.element = document.createElement(element);
                break;
            case "id":
                this.element = document.getElementById(element);
            break;
            case "class":
                this.element = document.getElementsByClassName(element)[0];
            break;
        }
        
    } 

    getElement(){
        return this.element;
    }

    setObjProps(width, height, bgcolor, position = "static", props = ""){
        this.element.style.width = width;
        this.element.style.height = height;
        this.element.style.position = position;
        this.element.style.backgroundColor = bgcolor;
        this.element.setAttribute("id", props);
    }

}

class gameManager{
    constructor(score, time){
        this.score = score;
        this.time = time;
        this.rand;
    }
    
    scoreCounter(nStart,obj){
        return obj.innerHTML = `Score : ${this.score += nStart}`;
    }

    timeCounter(ms = 0, obj1, obj2){
        let intv = setInterval(() => {
            obj1.innerHTML = `Time : ${this.time -= 1}`;
            if(this.time == 0){
                clearInterval(intv);
                obj2.style.display = "none";
                alert(`Result :\nClicked : ${this.score}`);
            }
        }, ms);
    }

    rng(nstart, nmax){
        this.rand = Math.floor(Math.random() * nmax) + nstart;
        console.log("rng" + this.rand);
        return this.rand;
    }

    movepos(position = 0, obj){
        obj.style.top =`${position}px`;
        obj.style.right =`${position}px`;
        obj.style.bottom =`${position}px`;
        obj.style.left =`${position}px`; 
    }

    logging(obj){
        let str = `top:${obj.style.top}, right:${obj.style.right}, left:${obj.style.left}, bottom:${obj.style.bottom}`;
        return str;
    }

}
const panel = new domObj("gameArea", "class");
const startBtn = new domObj("start", "id");
var box = new domObj("div", "create");
box.setObjProps("20px", "20px", "black", "absolute", "box");
var scoreCounter = new domObj("score", "id");
var timer = new domObj("timer", "id");

var gm = new gameManager(0, 10);
var date = new Date();

let maxPos = 450
let isStartClicked = false;

function isOverlap(el1, el2) {
    const domRect1 = el1.getBoundingClientRect();
    const domRect2 = el2.getBoundingClientRect();

    return !(
        domRect1.top > domRect2.bottom ||
        domRect1.right < domRect2.left ||
        domRect1.bottom < domRect2.top ||
        domRect1.left > domRect2.right
    )
}

startBtn.getElement().addEventListener("click", ()=>{
    panel.getElement().append(box.getElement());
    gm.movepos(gm.rng(0, maxPos), box.getElement());
    gm.timeCounter(1000, timer.getElement(), box.getElement());
    gm.scoreCounter(0, scoreCounter.getElement());
});

box.getElement().addEventListener("click", ()=>{
    gm.scoreCounter(1, scoreCounter.getElement());
    gm.movepos(gm.rng(0, maxPos), box.getElement());
    // console.log(gm.logging(box.getElement()));
    while (!isOverlap(box.getElement(), panel.getElement())) {
        gm.movepos(gm.rng(0, maxPos), box.getElement());
    }
});

