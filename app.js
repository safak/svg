const list = document.querySelector(".list")
const circle = document.querySelector(".circle")
const lines = document.querySelector(".lines")
const line1 = document.querySelector(".line-1")
const line2 = document.querySelector(".line-2")
const line3 = document.querySelector(".line-3")

lines.addEventListener("click",()=>{
    list.classList.toggle("active")
    circle.classList.toggle("active")
    line1.classList.toggle("active")
    line2.classList.toggle("active")
    line3.classList.toggle("active")
})

