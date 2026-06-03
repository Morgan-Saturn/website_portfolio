let icons = document.getElementById("icons");
console.log(icons);
const nav = document.getElementById("nav");
const liens = document.querySelectorAll("nav li");

icons.addEventListener("click", () => {
    nav.classList.toggle("active")
});

liens.forEach((lien) => {
    lien.addEventListener("click", () => {
        nav.classList.remove("active");
    })
})
//forEach pour ne pas faire d'eventlistener pour chaque lien//