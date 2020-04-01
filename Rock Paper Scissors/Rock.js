var u=0;
var c=0;
function Res(x)
{
    var y=Math.floor(Math.random()*3);
    if(x==y)
        document.getElementById("Ress").innerHTML="Draw";
    else if(x==0 && y==1)
    {
        document.getElementById("Ress").innerHTML="Player Won";
        u=u+1;
        document.getElementById("Resu").innerHTML=u + " : ";
    }
    else if(x==0 && y==2)
    {
        document.getElementById("Ress").innerHTML="Computer Won";
        c=c+1;
        document.getElementById("Resc").innerHTML=c;
    }
    else if(x==1 && y==2)
    {
        document.getElementById("Ress").innerHTML="Player Won";
        u=u+1;
        document.getElementById("Resu").innerHTML=u + " : ";
    }
    else if(x==1 && y==0)
    {
        document.getElementById("Ress").innerHTML="Computer Won";
        c=c+1;
        document.getElementById("Resc").innerHTML=c;
    }
    else if(x==2 && y==0)
    {
        document.getElementById("Ress").innerHTML="Player Won";
        u=u+1;
        document.getElementById("Resu").innerHTML=u + " : ";
    }
    else if(x==2 && y==1)
    {
        document.getElementById("Ress").innerHTML="Computer Won";
        c=c+1;
        document.getElementById("Resc").innerHTML=c;
    }
}