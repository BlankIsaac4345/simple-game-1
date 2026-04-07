console.log("Script started")

// var to track current number
let currentNum = 1;
let level = 1;

function start() {
    console.log("Click");
    startLevel1();
}

function startLevel1() {
     currentNum = 1;
     level = 1;
    console.log("Click");
    setTimeout(createCircle, 1000, 1);
    setTimeout(createCircle, 2000, 2);
    setTimeout(createCircle, 3000, 3);
}

function startLevel2() {
    currentNum = 1;
    level = 2;
    setTimeout(createCircle, 1000, 1);
    setTimeout(createCircle, 2000, 2);
    setTimeout(createCircle, 3000, 3);
    setTimeout(createCircle, 4000, 4);
    setTimeout(createCircle, 5000, 5);
}

function createCircle(num) {
    // create a div for the circle
    let circle = document.createElement("div");

    //set some text and styles
    circle.innerText = num;
    circle.style.width = "100px";
    circle.style.height = "100px";
    circle.style.backgroundColor = "red";
    circle.style.borderRadius = "500px";
    circle.style.textAlign = "center";
    circle.style.alignContent = "center";
    circle.style.fontSize = "30px";
    circle.style.color = "white";
    // position circle randomly using absolute
    circle.style.position = "absolute";
    circle.style.left = getRandomX() + "px";
    circle.style.top = getRandomY() + "px";

    // add to the page
    document.body.appendChild(circle);

    // Make it clickable
circle.addEventListener("click", checkForRemove)
}


function getRandomX() {
    let x = Math.random() * window.innerWidth;
    return x;
}

function getRandomY() {
    let y = Math.random() * window.innerHeight;
    return y;
}

// checks for right choice and removes it
function checkForRemove(event) {
    let circle = event.target;
    console.log(circle.innerText);
    if (circle.innerText == currentNum) {
        circle.remove();
        currentNum++;
        if (currentNum == 4 && level == 1) {
            startLevel2();
        }
        else if (currentNum == 6 && level == 2) {
            startLevel3();
        }
    }
}