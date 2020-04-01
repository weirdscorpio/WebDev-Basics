var from=1;
var to=1;

var result=document.getElementById("Result").innerHTML;

function From(x){
    switch(x)
    {
        case "Bit":from=1;
                    break;
        case "Byte":from=8;
                    break;
        case "Kilobyte":from=8000;
                    break;
        case "Megabyte":from=8000000;
                    break;
        case "Gigabyte":from=8000000000;
                    break;
        case "Terabyte":from=8000000000000;
                    break;            
    }
}

function To(y){
        
    switch(y)
    {
        case "Bit":to=1;
                    break;
        case "Byte":to=8;
                    break;
        case "Kilobyte":to=8000;
                    break;
        case "Megabyte":to=8000000;
                    break;
        case "Gigabyte":to=8000000000;
                    break;
        case "Terabyte":to=8000000000000;
                    break;            
    }
}

function Calc(){
    result = "Result : ";
    var inp = parseInt(document.getElementById("Input").value);
    document.getElementById("Result").innerHTML=result+(inp*from/to).toString();
}