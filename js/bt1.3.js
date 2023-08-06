let red = document.getElementById("red")
let blue = document.getElementById("blue")
let yellow = document.getElementById("yellow")
let body = document.querySelector("body")
red.addEventListener("mouseenter", () => {
    body.style.backgroundColor = "rgb(255, 216, 216)"
})
blue.addEventListener("mouseenter", () => {
    body.style.backgroundColor = "rgb(192, 192, 255)"
})
yellow.addEventListener("mouseenter", () => {
    body.style.backgroundColor = "rgb(250, 255, 206)"
})