function digitalTime(){
    var date= new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss= date.getSeconds();    
    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;        
    var time = hh + ":" + mm+ ":" + ss;
    document.getElementById("time").innerHTML=time;        
    hh = toBinary(hh);
    mm = toBinary(mm);
    ss = toBinary(ss);  
    blink(hh,"h");
    blink(mm,"m");
    blink(ss,"s");
    setTimeout(digitalTime,1000);
}

function toBinary(x){    
    return(parseInt(x,10).toString(2));    
}

function blink(op,y)
{   
    op=op.split("").reverse().join("");    
    for(let i=0;i<op.length;i++)
    {
       let temp=i+1;
        if(parseInt(op[i]))
        {                   
            document.getElementById(y+"indicator"+temp).style.backgroundColor="#17d4feff";
        }
        else
        {
            document.getElementById(y+"indicator"+temp).style.backgroundColor="white";
        }
    }
}

digitalTime();