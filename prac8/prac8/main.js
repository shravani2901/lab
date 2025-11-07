const nameRow = document.getElementById("nameRow");
const rollRow = document.getElementById("rollRow");
const batchInput = document.getElementById("batch-input");

let batchFocused = false;

function setPageColor(color) {
  document.body.style.background = color;
}

//name hover
nameRow.addEventListener("mouseover", () => {
  if (!batchFocused) setPageColor("#7fdca8ff");
});
nameRow.addEventListener("mouseout", () => {
  if (!batchFocused) setPageColor("#f4f4f4");
});

//roll hover
rollRow.addEventListener("mouseover", () => {
  if (!batchFocused) setPageColor("#7fdca8ff");
});
rollRow.addEventListener("mouseout", () => {
  if (!batchFocused) setPageColor("#f4f4f4");
});

//batch focus
batchInput.addEventListener("focus", () => {
  batchFocused = true;
  setPageColor("#ae9456ff");
  batchInput.style.background = "#0affd6";
});

batchInput.addEventListener("blur", () => {
  batchInput.style.background = "#ffffff";
  setPageColor("#00ffff");
});

document.addEventListener("dbclick", () => {
  batchFocused = false;
  setPageColor("#f4f4f4");
});
