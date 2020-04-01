let res;
let flag=0;
let v=0;
let char;
function readval(x)
{   var y=document.getElementById("Result").innerHTML;  
    if(x=="erase")
    {    y=0;
        display(y);
        v=0;
    }
    if(x=="plusminus")
    {
        y=parseInt(y);
        y=-1*y;
        y=y.toString();
        display(y);
    }
    if(x=="percentage")
    {
        y=parseInt(y);
        y=y/100;
        y=y.toString();
        display(y);
    }
    if(x=="/" || x=="X" || x=="-" || x==="+")
    {
        char =x;
        res=parseInt(document.getElementById("Result").innerHTML);
        flag=1;
    }
    if( x=="4" ||x=="5" || x=="6" || x=="7" || x=="8" || x=="9" || x=="1" || x=="2" || x=="3" )
    {   if(flag==0)
        {   
            v=10*v+parseInt(x);
            y=v.toString();
            display(y);
        }
        else
        {
            y="";
            v=0;
            v=v+parseInt(x);
            y=v.toString();
            display(y);
            flag=0;
        }
    }
    if(x=="0")
    {   
        y=y+"0";
        display(y);
    }
    if(x==".")
    {
        y=y+".";
        display(y);
    }
    if(x=="=")
    {   
        if(char=="X")
            y=(res*parseInt(y)).toString();
        else if(char=="+")
            y=(res+parseInt(y)).toString();
        else if(char=="-")
            y=(res-parseInt(y)).toString();
        else
            y=(res/parseInt(y)).toString();
        display(y);
    }
}

function display(n)
{
    document.getElementById("Result").innerHTML=n;
}