function calculateTriangleArea() {
  let a = parseFloat(document.getElementById("sideA").value);
  let b = parseFloat(document.getElementById("sideB").value);
  let c = parseFloat(document.getElementById("sideC").value);
  let result = document.getElementById("triangleResult");
  if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    result.innerHTML = "ENter valid positive sides";
    return;
  }
  if (a + b <= c || a + c <= b || b + c <= a) {
    result.innerHTML = "The given sides do not form a valid triangle";
    return;
  }
  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  result.innerHTML = `Area of Triangle:${area.toFixed(2)}`;
}
function calculateRectangleArea() {
  let length = parsefloat(document.getElementById("rectLength").value);
  let breadth = parsefloat(document.getElementById("rectBreadth").value);
  let result = document.getElementById("rectangleResult");
  if (isNaN(length) || isNaN(breadth) || length <= 0 || breadth <= 0) {
    result.innerHTML = "ENter valid Dimensions";
    return;
  }
  let area = length * breadth;
  result.innerHTML = `Area of Rectangle:${area.toFixed(2)}`;
}
function calculateCircleArea() {
  let radius = parseFloat(document.getElementById("circleRadius").value);
  let result = document.getElementById("circleResult");

  if (isNaN(radius) || radius <= 0) {
    result.innerHTML = "Enter valid radius.";
    return;
  }

  let area = Math.PI * radius * radius;
  result.innerHTML = `Area of Circle: ${area.toFixed(2)}`;
}
