const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");

//  for (let card of cards) { 
//   card.addEventListener("click", function() {
//     const recipeImage = card.querySelector("img").src;
//     const recipeAlt = card.querySelector("img").alt;
//     const recipeName = card.querySelector("h3").innerHTML;
//     const recipeAuthor = card.querySelector("p").innerHTML;
//     modalOverlay.classList.add("active");
//     modalOverlay.querySelector("img").src = recipeImage;
//     modalOverlay.querySelector("img").alt = recipeAlt;
//     modalOverlay.querySelector("h3").innerHTML = recipeName;
//     modalOverlay.querySelector("p").innerHTML = recipeAuthor;
//   });
// }

document.querySelector('.close-modal').addEventListener ("click", function() {
        modalOverlay.classList.remove('active')

})


