// On cible les éléments à modifier
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const page = document.body;

// Vérifier si les éléments existent avant d'ajouter l'événement
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    // Mise à jour des attributs ARIA pour accessibilité
    toggle.ariaExpanded = isClosed;
    nav.ariaHidden = isOpen;
    page.classList.toggle("noscroll", isClosed);
  });
}
const carousel = document.querySelector(".carousel__container");
const nextButon = document.querySelector(".carousel__button--next");
const prevButon = document.querySelector(".carousel__button--prev");
const premierItem = document.querySelector(".carousel__item");

const scrollAmount = premierItem.clientWidth;

if (carousel) {
   prevButon.addEventListener("click", ()=>{
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" })
   }) 

    nextButon.addEventListener("click", ()=>{
     carousel.scrollBy({ left: +scrollAmount, behavior: "smooth" })
    }) 
 };