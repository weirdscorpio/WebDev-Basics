let base=2;
let number;
let res=document.getElementById("result").innerHTML;

function validate(){
    if(base==2){
        return /^[01]+$/.test(number)
    }
    else if(base==8) {
        return /^[01234567]+$/.test(number)
    }
    else if(base==10) {
        return /^[0123456789]+$/.test(number);
    }
    else{
        return /^[0123456789ABCDE]+$/.test(number)
    }
}


function Str(x)
{
    base=x;
}

function Calc(x)
{   if(base!=16)
    {        
        number=parseInt(document.getElementById("number").value);
    }
    else
    {        
        number=document.getElementById("number").value;
    }
    var n=validate();
    if(n)
    {
        var op=parseInt(number,base).toString(x);
        document.getElementById("result").innerHTML=res+" : "+op;
    }
    else
    {
        alert("Wrong input format");
        document.getElementById("result").innerHTML=res;
    }
}
