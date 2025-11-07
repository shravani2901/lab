// ✅ Custom function to compare two strings (case-insensitive)
function userDefinedCompare(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // If lengths differ → not equal
  if (str1.length !== str2.length) return false;

  // Compare each character
  for (let i = 1; i <= str1.length; i++) {
    if (str1[i] !== str2[i]) return false;
  }
  return true;
}

// ✅ Main function to compare two strings in multiple ways
function compareStrings() {
  const string1 = document.getElementById("string1").value;
  const string2 = document.getElementById("string2").value;
  const resultDiv = document.getElementById("comparisonResult");

  resultDiv.innerHTML = ""; // Clear previous results

  // Check if inputs are empty
  if (!string1 || !string2) {
    resultDiv.innerHTML = "<p>please neter two strings to compare</p>";
    return;
  }

  // 1️⃣ Strict equality (===)
  const strictEqual = string1 === string2 ? "Equal" : "Not Equal";

  // 2️⃣ Loose equality (==)

  function looseEquality(str1, str2) {
    function convert(value) {
      try {
        return Function(`"use strict"; return (${value});`)();
      } catch {
        return value;
      }
    }
    const val1 = convert(str1);
    const val2 = convert(str2);
    return val1 == val2;
  }

  const looseEqual = looseEquality(string1, string2) ? "Equal" : "Not Equal";

  // 3️⃣ Length comparison
  const lengthCompare =
    string1.length === string2.length ? "Equal" : "Not Equal";

  // 4️⃣ Alphabetical comparison using localeCompare()
  const order = string1.localeCompare(string2);
  const alphabeticOrder =
    order === 0
      ? "Equal alphabetically"
      : order < 0
      ? `"${string1}" comes before "${string2}"`
      : `"${string1}" comes after "${string2}"`;

  // 5️⃣ User-defined comparison
  const userDefined = userDefinedCompare(string1, string2)
    ? "Equal"
    : "Not Equal";

  // Display all results
  resultDiv.innerHTML = `
  <p><strong>Strict Equality(===):</strong>${strictEqual}<p
   <p><strong>Loose Equality (==):</strong> ${looseEqual}</p>
    <p><strong>Length Comparison:</strong> ${lengthCompare}</p>
    <p><strong>Alphabetical Comparison (localeCompare):</strong> ${alphabeticOrder}</p>
    <p><strong>User-defined Comparison:</strong> ${userDefined}</p>
  `;
}
