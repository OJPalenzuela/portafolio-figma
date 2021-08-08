const tog = document.querySelector(".toggle")
const nav = document.querySelector("#nav-ul")

tog.addEventListener("click", ()=>{
    nav.classList.toggle("nav-ul-visible");
})

const links = document.querySelectorAll(".link")

links.forEach(li =>(
    li.addEventListener("click", ()=>{
            nav.classList.toggle("nav-ul-visible");
    })
))