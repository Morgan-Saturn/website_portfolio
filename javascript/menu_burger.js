let menu_button = document.getElementById("menu_button");
const nav = document.getElementById("nav");
const liens = document.querySelectorAll("nav li");
let iframe = document.querySelector("iframe");

menu_button.addEventListener("click", () => {
    nav.classList.toggle("active");
    iframe.classList.toggle("menu_actif")
    menu_button.classList.toggle("bouton_actif")
});

liens.forEach((lien) => {
    lien.addEventListener("click", () => {
        nav.classList.remove("active");
        iframe.classList.remove("menu_actif");
        menu_button.classList.remove("bouton_actif")
    })
})
//forEach pour ne pas faire d'eventlistener pour chaque lien//