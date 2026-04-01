console.log("Script started")

function start() {
    console.log("Click");
    console.log(Math.random() * window.innerWidth);
    createCircle();
}

function createCircle() {
    // create a div for the circle
    let circle = document.createElement("div");

    //set some text and styles
    circle.innerText = "1";
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
}

function getRandomX() {
    let x = Math.random() * window.innerWidth;
    return x;
}

function getRandomY() {
    let y = Math.random() * window.innerHeight;
    return y;
}