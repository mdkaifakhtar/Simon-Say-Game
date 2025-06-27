let gameSeq=[];
let userSeq=[];
let btns=["blue","green","yellow","white"];
let started=false;
let level=0;
let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
   if(started== false){
    console.log("game is started..");
    started=true;

    levelup();
   }
});

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}


function levelup(){
  userSeq=[];
  level++;
  h3.innerText=`level ${level}`;

  // we create any random btn,color;

  let rndIdx=Math.floor(Math.random()* 4);
  let rndColor=btns[rndIdx];
  let rndBtn=document.querySelector(`.${rndColor}`);
  gameSeq.push(rndColor);
  gameFlash(rndBtn);
}

function checkAns(idx){
    if(gameSeq[idx]===userSeq[idx]){
        if(gameSeq.length===userSeq.length){
            setTimeout(levelup,1000);
        }
    }
        else{
            h3.innerHTML=`Game Over! your score is <b>${level}</b> plz press any key to restart the game..`;
            document.querySelector("body").style.backgroundColor="red";
           setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
           },150);
            reset();
        }
    }


function btnPress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1)
}

let allbtn=document.querySelectorAll(".btn");

for(btn of allbtn){
 btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}