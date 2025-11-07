let myArray = [];
let maxSize = 0;

function createArray() {
  maxSize = parseInt(document.getElementById("arraySize").value);
  const res = document.getElementById("createArrayResult");

  if (isNaN(maxSize) || maxSize <= 0) {
    res.innerHTML = "Enter a valid positive size.";
    return;
  }

  myArray = [];
  res.innerHTML = `Array created with size:${maxSize}`;
}

function addElement() {
  const res = document.getElementById("addElementResult");
  if (myArray.length >= maxSize) {
    res.innerHTML = "Array is full";
    return;
  }
  const value = document.getElementById("addElement").value.trim();
  if (value === "") {
    res.innerHTML = "Enter a value";
    return;
  }

  myArray.push(value);
  res.innerHTML = `Added at index ${myArray.length - 1}: ${JSON.stringify(
    element
  )}`;
}

function checkArrayObject() {
  const index = parseInt(document.getElementById("checkIndex").value);
  const res = document.getElementById("checkArrayResult");

  if (isNaN(index) || index < 0 || index >= myArray.length) {
    res.innerHTML = "Enter a valid index";
    return;
  }

  const element = myArray[index];
  res.innerHTML = Array.isArray(element)
    ? `Element at index ${index} is an array:${JSON.stringify(element)}`
    : `Element at index ${index} is not an array:${element}`;
}

function viewArray() {
  document.getElementById("viewArrayResult").innerText =
    "Current Array: " + JSON.stringify(myArray);
}
