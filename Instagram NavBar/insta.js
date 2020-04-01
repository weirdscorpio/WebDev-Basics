let iconNo=document.querySelectorAll(".Img");
let count=0;
let arr=[1,0,1,0,1,0,1,0,1,0];
function Change(x)
{   
    if(x%2==0)
    {   
        for(var i=0;i<10;i++)
            if(i%2==0)
                arr[i]=1;
            else
                arr[i]=0;
        arr[x]=0;
        arr[x+1]=1;
    }
    else
    {   for(var i=0;i<10;i++)
        if(i%2==0)
            arr[i]=1;
        else
            arr[i]=0;
        arr[x]=0;
        arr[x-1]=1;
    }
    for(var i=0;i<10;i++)
        if(arr[i]==1)
            iconNo[i].classList.add('active');
        else
            iconNo[i].classList.remove('active');
}