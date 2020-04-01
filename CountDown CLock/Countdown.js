
function Count()
{   var now=new Date();
    let val=document.getElementById("Dat").value;
    var end= new Date(val);
    var tot=end.getTime()-now.getTime();
    let ss = Math.floor( tot/ 1000);
    let mm = Math.floor(ss / 60);
    let hh = Math.floor(mm / 60);
    let dd = Math.floor(hh / 24);
    hh %= 24;
    mm %= 60;
    ss %= 60;
    hh = (hh < 0) ? '0' : (hh < 10) ? '0' + hh : hh;
    mm = (mm < 0) ? '0' : (mm < 10) ? '0' + mm : mm;
    ss = (ss < 0) ? '0' : (ss < 10) ? '0' + ss : ss;
    document.getElementById("Dy").innerHTML=dd;
    document.getElementById("Hr").innerHTML=hh;
    document.getElementById("Mn").innerHTML=mm;
    document.getElementById("Sc").innerHTML=ss;
    setTimeout(Count,1000);   
}
