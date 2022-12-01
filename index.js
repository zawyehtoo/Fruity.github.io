const menubartag=document.querySelector(".menubar-icon")
const menutag=document.querySelector(".menubar")

menubartag.addEventListener("click",()=>{
    menutag.classList.toggle("show")
})