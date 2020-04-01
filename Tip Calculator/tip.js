var y=document.getElementById("Result").innerHTML;
function Calculate()
{   
    var am=0;
    var per=0;
    var peop=0;
    var total=0;
    var res="";
    am=parseInt(document.getElementById("Amount").value);
    per=document.getElementById("Percentage").value;
    peo=document.getElementById("People").value;
    total=(am+am*per*0.01)/peo;
    res=y+total.toString();
    document.getElementById("Result").innerHTML=res;
}