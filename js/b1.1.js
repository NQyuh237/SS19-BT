let hien = document.getElementById("Hien")
let an = document.getElementById("An")
let h = document.getElementById("hone")
an.addEventListener("click", function () {
    h.style.opacity = "0"
})
hien.addEventListener("click", function () {
    h.style.opacity = "1"
})