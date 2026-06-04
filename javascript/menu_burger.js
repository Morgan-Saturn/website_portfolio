let icons = document.getElementById("icons");
console.log(icons);
const nav = document.getElementById("nav");
const liens = document.querySelectorAll("nav li");
let iframe = document.querySelector("iframe");

icons.addEventListener("click", () => {
    nav.classList.toggle("active");
    iframe.classList.toggle("menu_actif")
});

liens.forEach((lien) => {
    lien.addEventListener("click", () => {
        nav.classList.remove("active");
        iframe.classList.remove("menu_actif");
    })
})
//forEach pour ne pas faire d'eventlistener pour chaque lien//