var marked=[0,0,0,0,0,0,0,0,0,0];
var X=[];
var O=[];
var count=1;
var p1=0;
var p2=0;
var done=0;

function XO(v){
    if(count===1){
        X[v]=-1;
        count=2;
        return "O";
    }
    else{
        X[v]=1;
        count=1;
        return "X";
    }
}

function Mark(x){
    if(marked[x]===0)
    {
        marked[x]=1;
        switch(x){
            case 1:
                document.getElementById("b1").innerHTML=XO(1);                                
                Calculate();
                break;
            case 2:
                document.getElementById("b2").innerHTML=XO(2);                
                Calculate();
                break;
            case 3:
                document.getElementById("b3").innerHTML=XO(3);
                Calculate();
                break;
            case 4:
                document.getElementById("b4").innerHTML=XO(4);
                Calculate();
                break;            
            case 5:
                document.getElementById("b5").innerHTML=XO(5);
                Calculate();
                break;                            
            case 6:
                document.getElementById("b6").innerHTML=XO(6);
                Calculate();
                break;            
            case 7:
                document.getElementById("b7").innerHTML=XO(7);
                Calculate();
                break;     
            case 8:
                document.getElementById("b8").innerHTML=XO(8);
                Calculate();
                break;     
            case 9:
                document.getElementById("b9").innerHTML=XO(9);
                Calculate();
                break;     
        }
    }    
    else{
        if(done==0)
            alert("ERROR : Cannot input in same spot again !!!");
        else
            alert("ERROR : Game has finished !");
    }    
}

function resultXO(a)
{   done=1;
    if(a=="x")
    {
        p1++;
        document.getElementById("Resu").innerHTML=p1;            
        document.getElementById("Ress").innerHTML="Player 1 Wins !!!"        
    }
    else if(a=="o")
    {
        p2++;
        document.getElementById("Resc").innerHTML=p2;            
        document.getElementById("Ress").innerHTML="Player 2 Wins !!!"

    }
    for(let i=0;i<10;i++)
        marked[i]=1;
}

function Calculate()
{       
        if(X[1]==1 && X[2]==1 && X[3]==1)
        {       
            let ex="b1";                         
            document.getElementById(ex).style.backgroundColor='rgb(' + 0 + ',' + 255 + ',' + 0 + ')';
            document.getElementById("b2").style.backgroundColor='rgb(' + 0 + ',' + 255 + ',' + 0 + ')';
            document.getElementById("b3").style.backgroundColor='rgb(' + 0 + ',' + 255 + ',' + 0 + ')';                
            resultXO("x");
        }
        else if(X[4]==1 && X[5]==1 && X[6]==1)
        {                
            document.getElementById("b4").style.backgroundColor='rgb(' + 0 + ',' + 255 + ',' + 0 + ')';
            document.getElementById("b5").style.backgroundColor='rgb(' + 0 + ',' + 255 + ',' + 0 + ')';
            document.getElementById("b6").style.backgroundColor='rgb(' + 0 + ',' + 255 + ',' + 0 + ')';
            resultXO("x");
        }
        else if(X[7]==1 && X[8]==1 && X[9]==1)
        {                
            document.getElementById("b7").style.backgroundColor='rgb(' + 0 + ',' + 255 + ',' + 0 + ')';
            document.getElementById("b8").style.backgroundColor='rgb(' + 0 + ',' + 255 + ',' + 0 + ')';
            document.getElementById("b9").style.backgroundColor='rgb(' + 0 + ',' + 255 + ',' + 0 + ')';
            resultXO("x");
        }
        else if(X[1]==1 && X[4]==1 && X[7]==1)
        {                
            document.getElementById("b1").style.backgroundColor='rgb(' + 0 + ',' + 255 + ',' + 0 + ')';
            document.getElementById("b4").style.backgroundColor='rgb(' + 0 + ',' + 255 + ',' + 0 + ')';
            document.getElementById("b7").style.backgroundColor='rgb(' + 0 + ',' + 255 + ',' + 0 + ')';
            resultXO("x");
        }
        else if(X[2]==1 && X[5]==1 && X[8]==1)
        {                
            document.getElementById("b2").style.backgroundColor='rgb(' + 0 + ',' + 255 + ',' + 0 + ')';
            document.getElementById("b5").style.backgroundColor='rgb(' + 0 + ',' + 255 + ',' + 0 + ')';
            document.getElementById("b8").style.backgroundColor='rgb(' + 0 + ',' + 255 + ',' + 0 + ')';
            resultXO("x");
        }
        else if(X[3]==1 && X[6]==1 && X[9]==1)
        {                
            document.getElementById("b3").style.backgroundColor='rgb(' + 0 + ',' + 255 + ',' + 0 + ')';
            document.getElementById("b6").style.backgroundColor='rgb(' + 0 + ',' + 255 + ',' + 0 + ')';
            document.getElementById("b9").style.backgroundColor='rgb(' + 0 + ',' + 255 + ',' + 0 + ')';
            resultXO("x");
        }
        else if(X[1]==1 && X[5]==1 && X[9]==1)
        {                
            document.getElementById("b1").style.backgroundColor='rgb(' + 0 + ',' + 255 + ',' + 0 + ')';
            document.getElementById("b5").style.backgroundColor='rgb(' + 0 + ',' + 255 + ',' + 0 + ')';
            document.getElementById("b9").style.backgroundColor='rgb(' + 0 + ',' + 255 + ',' + 0 + ')';
            resultXO("x");
        }
        else if(X[3]==1 && X[5]==1 && X[7]==1)
        {                
            document.getElementById("b3").style.backgroundColor='rgb(' + 0 + ',' + 255 + ',' + 0 + ')';
            document.getElementById("b5").style.backgroundColor='rgb(' + 0 + ',' + 255 + ',' + 0 + ')';
            document.getElementById("b7").style.backgroundColor='rgb(' + 0 + ',' + 255 + ',' + 0 + ')';
            resultXO("x");
        }
        else if(X[1]==-1 && X[2]==-1 && X[3]==-1)
        {                                
            document.getElementById("b1").style.backgroundColor='rgb(' + 0 + ',' + 55 + ',' + 0 + ')';
            document.getElementById("b2").style.backgroundColor='rgb(' + 0 + ',' + 55 + ',' + 0 + ')';
            document.getElementById("b3").style.backgroundColor='rgb(' + 0 + ',' + 55 + ',' + 0 + ')';                
            resultXO("o");
        }
        else if(X[4]==-1 && X[5]==-1 && X[6]==-1)
        {                
            document.getElementById("b4").style.backgroundColor='rgb(' + 0 + ',' + 55 + ',' + 0 + ')';
            document.getElementById("b5").style.backgroundColor='rgb(' + 0 + ',' + 55 + ',' + 0 + ')';
            document.getElementById("b6").style.backgroundColor='rgb(' + 0 + ',' + 55 + ',' + 0 + ')';
            resultXO("o");
        }
        else if(X[7]==-1 && X[8]==-1 && X[9]==-1)
        {                
            document.getElementById("b7").style.backgroundColor='rgb(' + 0 + ',' + 55 + ',' + 0 + ')';
            document.getElementById("b8").style.backgroundColor='rgb(' + 0 + ',' + 55 + ',' + 0 + ')';
            document.getElementById("b9").style.backgroundColor='rgb(' + 0 + ',' + 55 + ',' + 0 + ')';
            resultXO("o");
        }
        else if(X[1]==-1 && X[4]==-1 && X[7]==-1)
        {                
            document.getElementById("b1").style.backgroundColor='rgb(' + 0 + ',' + 55 + ',' + 0 + ')';
            document.getElementById("b4").style.backgroundColor='rgb(' + 0 + ',' + 55 + ',' + 0 + ')';
            document.getElementById("b7").style.backgroundColor='rgb(' + 0 + ',' + 55 + ',' + 0 + ')';
            resultXO("o");
        }
        else if(X[2]==-1 && X[5]==-1 && X[8]==-1)
        {                
            document.getElementById("b2").style.backgroundColor='rgb(' + 0 + ',' + 55 + ',' + 0 + ')';
            document.getElementById("b5").style.backgroundColor='rgb(' + 0 + ',' + 55 + ',' + 0 + ')';
            document.getElementById("b8").style.backgroundColor='rgb(' + 0 + ',' + 55 + ',' + 0 + ')';
            resultXO("o");
        }
        else if(X[3]==-1 && X[6]==-1 && X[9]==-1)
        {                
            document.getElementById("b3").style.backgroundColor='rgb(' + 0 + ',' + 55 + ',' + 0 + ')';
            document.getElementById("b6").style.backgroundColor='rgb(' + 0 + ',' + 55 + ',' + 0 + ')';
            document.getElementById("b9").style.backgroundColor='rgb(' + 0 + ',' + 55 + ',' + 0 + ')';
            resultXO("o");
        }
        else if(X[1]==-1 && X[5]==-1 && X[9]==-1)
        {                
            document.getElementById("b1").style.backgroundColor='rgb(' + 0 + ',' + 55 + ',' + 0 + ')';
            document.getElementById("b5").style.backgroundColor='rgb(' + 0 + ',' + 55 + ',' + 0 + ')';
            document.getElementById("b9").style.backgroundColor='rgb(' + 0 + ',' + 55 + ',' + 0 + ')';
            resultXO("o");
        }
        else if(X[3]==-1 && X[5]==-1 && X[7]==-1)
        {                
            document.getElementById("b3").style.backgroundColor='rgb(' + 0 + ',' + 55 + ',' + 0 + ')';
            document.getElementById("b5").style.backgroundColor='rgb(' + 0 + ',' + 55 + ',' + 0 + ')';
            document.getElementById("b7").style.backgroundColor='rgb(' + 0 + ',' + 55 + ',' + 0 + ')';            
            resultXO("o");
        }    
    
}

function Reset(){
    marked=[0,0,0,0,0,0,0,0,0,0];
    X=[0,0,0,0,0,0,0,0,0,0];    
    count=1;
    var Button=document.querySelectorAll(".But");
    for(let i=0;i<9;i++)
    {    Button[i].innerHTML="";
        Button[i].style.backgroundColor='rgb(' + 0 + ',' + 0 + ',' + 0 + ')';
    }
}