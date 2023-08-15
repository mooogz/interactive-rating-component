const cardContainer = document.querySelector(".cardContainer");
const thankYouContainer = document.querySelector(".thankYouCard"); 
const submitButton = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const numRating = document.querySelectorAll(".rate-btn");

submitButton.addEventListener("click", () => {
    thankYouContainer.classList.remove("hidden")
    cardContainer.style.display="none"
})

rateAgain.addEventListener("click", () => {
    cardContainer.style.display="block"
    thankYouContainer.classList.add("hidden")
})

numRating.forEach((rate) => {
rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML
})
})