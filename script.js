console.log("Welcome to Tic Tac Toe")
let audioturn = new Audio("ting.mp3")
let gameOver = new Audio("gameover.mp3")
let turn = "X";
let checkGameOver=false;

const changeTurn =()=>{
    return turn==="X"?"0":"X"
}

const chechWin=()=>{
    let boxTexts = document.getElementsByClassName('boxText');
    let wins=[
        [0,1,2,1,6,0],
        [3,4,5,1,16,0],
        [6,7,8,1,27,0],
        [0,3,6,-10.5,16,90],
        [1,4,7,0.5,16,90],
        [2,5,8,11.5,16,90],
        [0,4,8,0,16,45],
        [2,4,6,1.5,15,-45],
    ]
    wins.forEach(e=>{
        if((boxTexts[e[0]].innerText===boxTexts[e[1]].innerText)&&(boxTexts[e[2]].innerText===boxTexts[e[1]].innerText) && (boxTexts[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxTexts[e[0]].innerText + " Won ";
            checkGameOver=true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.display="block";
            gameOver.play();
            document.querySelector('.line').style.display="block";
            document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxText = element.querySelector('.boxText')
    element.addEventListener('click',()=>{
        if(boxText.innerText===''){
            boxText.innerText =turn
            turn=changeTurn();
            chechWin();
           if(!checkGameOver){
            document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
            audioturn.play();
           }
        }
    })
})

reset.addEventListener('click',()=>{
    let boxTexts = document.getElementsByClassName('boxText');
    Array.from(boxTexts).forEach(element=>{
        element.innerText="";
    })
    turn="X";
    checkGameOver=false;
    document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.display="none";
    document.querySelector('.line').style.display="none";
}) 