function repeat()
{
    let today=new Date();
    let hrs=today.getHours();
    if(hrs==0)
        {
            document.getElementById("hrs").innerHTML=12;
            document.getElementById("daynight").innerHTML="AM";
        }
    else if(hrs>12)
        {
            document.getElementById("hrs").innerHTML=(hrs-12);
            document.getElementById("daynight").innerHTML="PM";
        }
    else
        {
            document.getElementById("hrs").innerHTML=hrs;
            document.getElementById("daynight").innerHTML="AM";

        }
    let mins=today.getMinutes();
    document.getElementById("mins").innerHTML=mins;
    let sec=today.getSeconds();
    document.getElementById("sec").innerHTML=sec;
    setTimeout(repeat,1000);
}

repeat();
