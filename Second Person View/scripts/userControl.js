var fox = document.querySelector("#walkingfox");
var walkRight = document.querySelector("#walkRight");
walkRight.addEventListener("click", rightBtnClick, false);
var walkLeft = document.querySelector("#walkLeft");
walkLeft.addEventListener("click", leftBtnClick, false);
var foxLeftPos = fox.offsetLeft;

function rightBtnClick()
{
    moveRight();
}

function leftBtnClick()
{
    moveLeft();
}

function moveRight()
{
    foxLeftPos += 25;
    //console.log(foxLeftPos);
    fox.style.left = foxLeftPos + "px";
    //console.log(foxLeftPos + "px");
}

function moveLeft()
{
    foxLeftPos -= 25;
    //console.log(foxLeftPos);
    fox.style.left = foxLeftPos + "px";
    //console.log(foxLeftPos + "px");
}