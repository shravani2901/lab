function getInputs() {
  const number = parseInt(document.getElementById("numberInput").value);
  const limit = parseInt(document.getElementById("limitInput").value);
  if (isNaN(number) || isNaN(limit) || number === 0 || limit <= 0) {
    return null;
  }
  return { number, limit };
}

function showResult(id, text) {
  document.getElementById(id).innerHTML = text;
}

// for loop
function generateTableUsingForLoop() {
  const inputs = getInputs();
  if (!inputs) {
    showResult(
      "forResult",
      "Please enter a valid number and a positive limit.",
      true
    );
  }
  const { number, limit } = inputs;
  let output = `<strong>For Loop</strong>`;
  for (let i = 1; i <= limit; i++) {
    output += `${number} x ${i} = ${number * i}<br>`;
  }
  showResult("forResult", output);
}

//While loop
function generateTableUsingWhileLoop() {
  const inputs = getInputs();
  if (!inputs) {
    showResult(
      "whileResult",
      "Please enter a valid number and a positive limit.",
      true
    );
    return;
  }
  const { number, limit } = inputs;
  let output = `<strong>While Loop</strong>`;
  let i = 1;
  while (i <= limit) {
    output += `${number} x ${i} = ${number * i}<br>`;
    i++;
  }
  showResult("whileResult", output);
}

//Do while loop
function generateTableUsingDoWhileLoop() {
  const inputs = getInputs();
  if (!inputs) {
    showResult("doResult", "Please enter properly", true);
    return;
  }
  const { number, limit } = inputs;
  let output = `<strong>Do While Loop</strong>`;
  let i = 1;
  do {
    output += `${number} × ${i} = ${number * i}<br>`;
    i++;
  } while (i <= limit);
  showResult("doResult", output);
}

function generateAllTables() {
  generateTableUsingForLoop();
  generateTableUsingWhileLoop();
  generateTableUsingDoWhileLoop();
}
