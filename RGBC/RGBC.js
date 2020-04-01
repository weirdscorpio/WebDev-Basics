function Changer()
{
    var r=document.getElementById("Red").value;
    var g=document.getElementById("Green").value;
    var b=document.getElementById("Blue").value;
    var o=document.getElementById("Opacity").value;
    document.getElementById("Color").style.backgroundColor='rgba(' + r + ',' + g + ',' + b + ','+ o + ')';
    r1=parseInt(r);
    g1=parseInt(g);
    b1=parseInt(b);
    o1=parseInt(o);
    var lolor="#"+hex(r1)+hex(g1)+hex(b1)+hex(o1);
    document.getElementById("Hexadec").innerHTML=lolor.toUpperCase();
}

function hex(v) 
{
    var hex = v.toString(16);
    if (v < 16) {
        hex = "0" + hex;
    }
    return hex;
}
