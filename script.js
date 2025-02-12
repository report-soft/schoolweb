function toggle(){
let item = document.getElementById("hid")
item.classList.toggle("hide")
}

function hamburger(){
    let hamburger = document.querySelector(".hamburgerItems")
    hamburger.classList.toggle("show")
}

document.querySelector(".hamburger").addEventListener("click", hamburger)

document.querySelector(".academics").addEventListener("mouseenter", toggle)





