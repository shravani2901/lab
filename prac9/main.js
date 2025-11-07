function validateForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const roll = document.getElementById("roll").value.trim();
  const address = document.getElementById("address").value.trim();
  const pincode = document.getElementById("pincode").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');
  const state = document.getElementById("state").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const email = document.getElementById("email").value.trim();

  const nameError = document.getElementById("nameError");
  const rollError = document.getElementById("rollError");
  const addressError = document.getElementById("addressError");
  const pincodeError = document.getElementById("pincodeError");
  const genderError = document.getElementById("genderError");
  const stateError = document.getElementById("stateError");
  const mobileError = document.getElementById("mobileError");
  const emailError = document.getElementById("emailError");

  nameError.textContent = "";
  rollError.textContent = "";
  addressError.textContent = "";
  pincodeError.textContent = "";
  genderError.textContent = "";
  stateError.textContent = "";
  mobileError.textContent = "";
  emailError.textContent = "";

  let isValid = true;

  if (name === "" || !/^[A-Za-z\s]+$/.test(name)) {
    nameError.textContent = "ENter a valid name(alphabets only)";
    isValid = false;
  }

  if (!/^\d{5}$/.test(roll)) {
    rollError.textContent = "Roll number must be exactly 5 digits";
    isValid = false;
  }

  if (!/^[A-Za-z0-9\s,]+$/.test(address)) {
    addressError.textContent = "Enter a valid address (no special characters)";
    isValid = false;
  }

  if (!/^\d{6}$/.test(pincode)) {
    pincodeError.textContent = "Enter a valid 6-digit pincode";
    isValid = false;
  }

  if (!gender) {
    genderError.textContent = "Please select your gender";
    isValid = false;
  }

  if (state === "") {
    stateError.textContent = "Please select your state";
    isValid = false;
  }

  if (!/^[6-9]\d{9}$/.test(mobile)) {
    mobileError.textContent =
      "Enter a valid 10-digit mobile number starting with 6,7,8, or 9";
    isValid = false;
  }

  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-z]{2,}$/.test(email)) {
    emailError.textContent =
      "Enter a valid email address (e.g. name@email.com)";
    isValid = false;
  }

  if (isValid) {
    window.location.href = "home.html";
  }
}
