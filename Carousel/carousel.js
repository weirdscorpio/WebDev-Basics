let ImageSLide=document.querySelectorAll(".Img");
let LeftButton=document.querySelector(".Prev");
let RightButton=document.querySelector(".Next");

let counter=0;
function slideLeft()
{
    ImageSLide[counter].classList.remove('active');
    counter=counter===0? ImageSLide.length-1:counter-1;
    ImageSLide[counter].classList.add('active');
}

function slideRight()
{
    ImageSLide[counter].classList.remove('active');
    counter=(counter===ImageSLide.length-1)? 0: counter+1;
    ImageSLide[counter].classList.add('active');
}