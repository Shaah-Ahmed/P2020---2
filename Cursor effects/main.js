const cursorPointer = document.querySelector(".cursor");
const btn = document.querySelector(".btn");
// const newP = document.querySelector(".para");
window.addEventListener("mousemove", cursor);
const text = document.createTextNode("Thank you for hovering over me!!");
const pTag = document.createElement("p");
pTag.appendChild(text);
pTag.classList.add(".para");

function cursor(e) {
  cursorPointer.style.left = e.pageX + "px";
  cursorPointer.style.top = e.pageY + "px";
}

btn.addEventListener("mouseover", () => {
  cursorPointer.classList.add("cur-grow");
  btn.appendChild(pTag);
});

btn.addEventListener("mouseleave", () => {
  cursorPointer.classList.remove("cur-grow");
  btn.removeChild(pTag);
});
