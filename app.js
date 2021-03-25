var player=0;
var obj={
        
};
function reset(){
    location.reload();
}
function playAgain(){
    var inp;
    inp=prompt("Do you want to play again?, Enter 'y'",'y');
        if(inp=='y' || inp=="Y"){
            reset();
        }
}
function winner(){
    var p1=document.createElement('i')
    p1.setAttribute("class","fa fa-check")
    if((obj.b1==0 && obj.b2==0 && obj.b3==0) || (obj.b1==0 && obj.b5==0 && obj.b9==0) || (obj.b1==0 && obj.b4==0 && obj.b7==0) ||
        (obj.b2==0 && obj.b5==0 && obj.b8==0) ||
        (obj.b3==0 && obj.b6==0 && obj.b9==0) || (obj.b3==0 && obj.b5==0 && obj.b7==0) ||
        (obj.b7==0 && obj.b8==0 && obj.b9==0) ||
        (obj.b4==0 && obj.b5==0 && obj.b6==0)
    ){

        alert("Congratulations! Player 1 Wins!")
        playAgain();
    }
    else if((obj.b1==1 && obj.b2==1 && obj.b3==1) || (obj.b1==1 && obj.b5==1 && obj.b9==1) || (obj.b1==0 && obj.b4==0 && obj.b7==0) ||
        (obj.b2==1 && obj.b5==1 && obj.b8==1) ||
        (obj.b3==1 && obj.b6==1 && obj.b9==1) || (obj.b3==1 && obj.b5==1 && obj.b7==1) ||
        (obj.b7==1 && obj.b8==1 && obj.b9==1) ||
        (obj.b4==1 && obj.b5==1 && obj.b6==1)
    ){

        alert("Congratulations! Player 2 Wins!")
        playAgain();
    }
    else if(obj.b1!=undefined && obj.b2!=undefined && obj.b3!=undefined && obj.b4!=undefined && obj.b5!=undefined && obj.b6!=undefined && obj.b7!=undefined && obj.b8!=undefined && obj.b9!=undefined ){
        alert("Sorry! Game Tie :(")
        playAgain();
    }
}

function tictac(e)
{
    
    var tick=document.getElementsByClassName('play1')
    var tickcln=tick[0].cloneNode(true)
    tickcln.classList.remove("hidden")
    var cross=document.getElementsByClassName('play2')
    var crosscln=cross[0].cloneNode(true)
    crosscln.classList.remove("hidden")
    // var tickspan=document.createElement('span')
    // var ticktxt=document.createTextNode("&#x2714;")
    // tickspan.appendChild(ticktxt)
    // tickspan.setAttribute("class","play1")
    var eId=e.id;
    
    
if(e.firstChild==null )
    {
        obj[eId]=player
    if(player==0 ){
           
        e.appendChild(tickcln)
        e.name=player
        player=1

    }
    else {
        e.appendChild(crosscln)
        e.name=player
        player=0
    }
    console.log(obj)
    setTimeout(() => {
        winner();    
    }, 200);
    
}
else{
    alert("The box you clicked is already filled!")
}
    // e.name=player
    // if(e.firstChild!=null)
    // {
    
    // }
}