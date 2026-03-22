let show = true;
const menuContent = document.querySelector(".content");
const menuToggle = document.querySelector(".menuToggle");

menuToggle.addEventListener("click", ()=>{

    menuContent.classList.toggle("on", show);
    show = !show;
}
)
