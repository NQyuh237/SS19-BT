let btn = document.getElementById("btn")
let btn2 = document.getElementById("btn2")
let body = document.querySelector("body")
let h = document.querySelector("body > h1")
let p = document.querySelector("body > p")
btn2.addEventListener("click", function () {
    body.style.backgroundColor = "white"
    h.style.color = "black"
    p.style.color = "black"
    btn2.style.display = "none"
    btn.style.display = "block"
})
btn.addEventListener("click", function () {
    body.style.backgroundColor = "black"
    h.style.color = "white"
    p.style.color = "white"
    btn2.style.display = "block"
    btn.style.display = "none"
})


