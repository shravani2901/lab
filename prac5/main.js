let timerId = null;

function startCountdown() {
  const inputDate = document.getElementById("endDate").value;
  const display = document.getElementById("countdown");

  // Clear previous timer if any
  if (timerId) clearInterval(timerId);

  const targetTime = new Date(inputDate).getTime();
  const now = Date.now();

  // ❌ Cases to show "Enter valid date and time":
  // 1. No input
  // 2. Input is not a valid date (NaN)
  if (!inputDate || isNaN(targetTime)) {
    display.innerHTML = "Enter a valid date and time";
    return;
  }

  // Update immediately and start interval
  updateCountdown(targetTime, display);
  timerId = setInterval(() => updateCountdown(targetTime, display), 1000);
}

function updateCountdown(targetTime, display) {
  const remaining = targetTime - Date.now();

  // ❌ Case to show "Countdown expired":
  // Time has reached or passed the target
  if (remaining <= 0) {
    clearInterval(timerId);
    timerId = null;
    display.innerHTML = "Countdown expired";
    return;
  }

  // Calculate years, months, days, hours, minutes, seconds
  const totalDays = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const years = Math.floor(totalDays / 365);
  const months = Math.floor((totalDays % 365) / 30);
  const days = totalDays % 30;
  const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((remaining / (1000 * 60)) % 60);
  const seconds = Math.floor((remaining / 1000) % 60);

  display.innerHTML = `${years}y ${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`;
}
