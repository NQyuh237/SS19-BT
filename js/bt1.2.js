let hien = document.getElementById("hien")
let box = document.getElementById("box")
let an = document.getElementById("an")
let color = document.querySelector("#color")
hien.addEventListener("click", function () {
    box.style.display = "block"
    color.style.display = "block"
})
an.addEventListener("click", function () {
    box.style.display = "none"
    color.style.display = "none"
})