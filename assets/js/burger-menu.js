// document.addEventListener("DOMContentLoaded", () => {
//     const viewButton = document.querySelector(".view-button");
//     const thirdOfType = document.querySelector(".third-of-type");

//     viewButton.addEventListener("click", () => {
//         // Toggle the visibility of the third-of-type block
//         if (thirdOfType.style.display === "none" || thirdOfType.style.display === "") {
//             thirdOfType.style.display = "block"; // Show the third block
//             viewButton.textContent = "View Less"; // Change button text
//         } else {
//             thirdOfType.style.display = "none"; // Hide the third block
//             viewButton.textContent = "View More"; // Reset button text
//         }
//     });
// });

// viewButton.addEventListener("click", () => {
//     thirdOfType.classList.toggle("show");
//     if (thirdOfType.classList.contains("show")) {
//         viewButton.textContent = "View Less";
//     } else {
//         viewButton.textContent = "View More";
//     }
// });