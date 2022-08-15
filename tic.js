b1=document.querySelector(".b1");
b2=document.querySelector(".b2");
b3=document.querySelector(".b3");
b4=document.querySelector(".b4");
b5=document.querySelector(".b5");
b6=document.querySelector(".b6");
b7=document.querySelector(".b7");
b8=document.querySelector(".b8");
b9=document.querySelector(".b9");
turn=document.querySelector(".turn");
button=[b1,b2,b3,b4,b5,b6,b7,b8,b9];
turn.value="Player1 turn";
/*button[0]=b1;
button[1]=b2;
button[2]=b3;
button[3]=b4;
button[4]=b5;
button[5]=b6;
button[6]=b7;
button[7]=b8;
button[8]=b9;
send.onclick = ()=>
{
    p1=pl1.value;
    p2=pl2.value;
}*/
let p=1;
for(let i=0;i<9;i++)
{
    button[i].onclick = ()=>
    {
        if(p==1)
        {
            button[i].value="X"
            p=2;
            turn.value="Player2 turn";
        }
        else{
            button[i].value="0"
            p=1;
            turn.value="Player1 turn";
        }
        button[i].disabled=true;
        check();
    }
}
function check()
{
    for(let i=0;i<9;i++)
    {
        if(i==0 || i==3 || i==6)
        {
            if(button[i].value==button[i+1].value && button[i+1].value==button[i+2].value && button[i].value!="")
            {
                if(p==1)
                {
                    prompt("Player2 won the game");
                }
                else
                {
                prompt("Player1 won the game");
                }
                reset();
            }
        }  
        if(i<3)
        {
            if(button[i].value==button[i+3].value && button[i+3].value==button[i+6].value && button[i].value!="")
            {
                if(p==1)
                {
                    prompt("Player2 won the game");
                }
                else
                {
                    prompt("Player1 won the game");
                }
                reset();
            }
        }    
        if(i==0)
        {
            if(button[i].value==button[i+4].value && button[i+4].value==button[i+8].value && button[i].value!="")
            {
                if(p==1)
                {
                    prompt("Player2 won the game");
                }
                else
                {
                    prompt("Player1 won the game");
                }
                reset();
            }
        }
        if(i==2)
        {
            if(button[i].value==button[i+2].value && button[i+2].value==button[i+4].value && button[i].value!="")
            {
               if(p==1)
                {
                    prompt("Player2 won the game");
                }
                else
                {
                    prompt("Player1 won the game");
                }
                reset();
            }
        }
    }    
    for(let i=0,a=0;i<9;i++)
    {
        if(button[i].disabled==true)
        {
            a=a+1;
        }
        if(a==9)
        {
            reset();
            prompt("Game Draw");
        }
    }
} 
function reset()
{
    p=1;
    a=0;
    turn.value="Player1 turn";
    for(let i=0;i<9;i++)
    {
        button[i].value="";
        button[i].disabled=false;
    }
}   


 