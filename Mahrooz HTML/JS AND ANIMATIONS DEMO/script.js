// constant reference to my button so I can manipulate it here
const btn = document.getElementById("alertbtn");
const body = document.getElementById("body");

// btn.addEventListener("click", sayHi)
btn.addEventListener("click", sayHi);
btn.addEventListener("mouseover", changeColor)

function sayHi(){
    alert("Hello, world!")
}

function changeColor(){
    //conditional
    if(body.style.backgroundColor === "aqua") {
    body.setAttribute("background-color", "green");
    console.log("background is green");
    } else {
        body.style.backgroundColor = "aqua";
        console.log("background is aqua");
    }
}