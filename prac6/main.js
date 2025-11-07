let arr = [];

function createArray() {
  const size = +document.getElementById("arraySize").value;
  const input = document.getElementById("arrayInput").value.trim();
  const res = document.getElementById("createResult");

  if (!size || !input) {
    res.innerHTML = "Enter valid size and elements.";
    return;
  }

  // Manual input validation (instead of try-catch)
  if (!/^[\d,\[\]\s.-]+$/.test(input)) {
    res.innerHTML = "Invalid Format! Example: 3,[3,5],7";
    return;
  }

  const newArr = eval("[" + input + "]");

  if (arr.length + newArr.length > size) {
    res.innerHTML = `<span style="color:red;">Array size limit exceeded! Cannot add elements.</span>`;
    return;
  }

  arr = arr.concat(newArr);
  res.innerHTML = `Array: ${JSON.stringify(arr)}`;
}

function removeElement() {
  const val = document.getElementById("removeElement").value.trim();
  const res = document.getElementById("removeResult");
  if (!arr.length) {
    res.innerHTML = "Array is empty.";
    return;
  }

  const index = arr.findIndex((e) => JSON.stringify(e) === val || e == val);
  if (index > -1) {
    arr.splice(index, 1);
    res.innerHTML = `Removed '${val}' at index ${index}. Updated: ${JSON.stringify(
      arr
    )}`;
  } else {
    res.innerHTML = `'${val}' not found.`;
  }
}

function checkElement() {
  const val = document.getElementById("checkElement").value.trim();
  const res = document.getElementById("checkResult");
  if (!arr.length) {
    res.innerHTML = "Array is empty.";
    return;
  }

  const index = arr.findIndex((e) => JSON.stringify(e) === val || e == val);
  res.innerHTML =
    index > -1 ? `${val} found at index ${index}.` : `${val} not found.`;
}

function appendElement() {
  const val = document.getElementById("appendInput").value.trim();
  const res = document.getElementById("appendResult");
  const size = +document.getElementById("arraySize").value;

  if (!val) {
    res.innerHTML = "Enter a value to append:";
    return;
  }
  if (arr.length >= size) {
    res.innerHTML = `<span style="color:red;">Array is full! Cannot append more elements.</span>`;
    return;
  }

  const element = isNaN(val) ? val : +val;
  arr.push(element);
  res.innerHTML = `Appended '${element}' at index ${
    arr.length - 1
  }. Updated: ${JSON.stringify(arr)}`;
}

function emptyArray() {
  arr = [];
  document.getElementById("emptyResult").innerHTML = "Array emptied.";
}
