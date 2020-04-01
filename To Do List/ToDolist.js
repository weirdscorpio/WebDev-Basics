var counter=1;
var r="";
function Add()
{
    r=document.getElementById("Text").value;
    r=r.trim();
    console.log(r);
    if(r.length!=0)
    {   console.log(r);
        var prev=document.getElementById("Table").innerHTML;    
        document.getElementById("Table").innerHTML=prev+'<br/>' + counter+" : "+r+'<br/>' ;        
        document.getElementById("Text").value=" ";
        counter=counter+1;
        r="";
    }
}