var fr="C";
var to="C";
var k;
var res=document.getElementById("Result").innerHTML;
function Fr(x)
{ 
    fr=x;
}
function T(y)
{
    to=y;
}
function Calc()
{   res="Result : ";
    var n;
    var tem = parseInt(document.getElementById("tem").value);
    switch(fr)
    {   
        case "C":
            k=tem+273.15;
            break;
        
        case "F":
            k=(tem+459.67)*5/9;
            break;
                
        case "K":
            k=tem;
            break;    
    }

    switch(to)
    {   
        case "C":
            n=k-273.15;
            break;

        
        case "F":
            n=k*9/5 - 459.67;
            break;

        
        case "K":
            n=k;
            break;
    }
    
    document.getElementById("Result").innerHTML=res+n.toString()+" "+to;
    
}   

