function reverseString() {
  const input = document.getElementById("reverseInput").value.trim();
  const result = document.getElementById("reverseResult");

  if (!input) {
    result.textcontent = "please enter a string";
    return;
  }
  result.textContent = `Reversed: ${input.split("").reverse().join("")}`;
}

function checkPalindrome() {
  const input = document.getElementById("palindromeInput").value.trim();
  const result = document.getElementById("palindromeResult");

  if (!input) {
    result.textcontent = "please enter a string";
    return;
  }
  const cleaned = input.toLowerCase().replace(/[^a-z0-9]/g, "");
  const isPalindrome = cleaned === cleaned.split("").reverse().join("");
  result.textContent = isPalindrome
    ? `"${input}" is a plaindrome`
    : `"${input}" is not a palindrome`;
}

function replaceChar(isReplaceAll) {
  const input = document.getElementById("replaceInput").value;
  const oldChar = document.getElementById("oldChar").value;
  const newChar = document.getElementById("newChar").value;
  const result = document.getElementById("replaceResult");
  if (!input || !oldChar || !newChar) {
    result.textContent = "please fill all fields";
    return;
  }
  if (!input.includes(oldChar)) {
    result.textContent = `Character "${oldChar}" not found in the string.`;
    return;
  }
  const output = isReplaceAll
    ? input.split(oldChar).join(newChar)
    : input.replace(oldChar, newChar);
  result.textContent = `Result:${output}`;
}
