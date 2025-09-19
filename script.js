// 🎯 Part 2: Functions with Parameters, Scope, Return Values
function calculateArea(width, height) {
  return width * height; // returns a value
}

function changeBoxSize(size) {
  const box = document.getElementById("box");
  box.style.width = size + "px";
  box.style.height = size + "px";
}

// Test in console
console.log("Box area:", calculateArea(100, 100)); // local scope demo

// 🎯 Part 3: Combine JS + CSS Animations
const box = document.getElementById("box");
const animateBtn = document.getElementById("animateBtn");

animateBtn.addEventListener("click", () => {
  // Toggle animation by adding/removing a class
  box.classList.toggle("move");
});

// Define the "move" animation with JS (dynamic styles)
box.addEventListener("transitionend", () => {
  console.log("Box animation finished!");
});

// 🎯 Bonus: Modal with animation
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.onclick = () => modal.style.display = "block";
closeModal.onclick = () => modal.style.display = "none";
