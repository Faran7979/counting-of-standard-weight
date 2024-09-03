const weightInput = document.querySelector("#weight");
const heightInput = document.querySelector("#height");
const heightVal = document.querySelector("#height-val");
const weightVal = document.querySelector("#weight-val");
const bmiResult = document.querySelector("#result");
const categoryElem = document.querySelector("#category");

function bmiCalculator() {
  let weightInputValue = weightInput.value;
  let heightInputValue = heightInput.value;

  weightVal.innerHTML = weightInputValue;
  heightVal.innerHTML = heightInputValue;

  let bmiValue = (
    weightInputValue / Math.pow(heightInputValue / 100, 2)
  ).toFixed(2);

  bmiResult.innerHTML = bmiValue;

  if (bmiValue < 18.5) {
    // Low weight
    categoryElem.innerHTML = "Under Weight";
    bmiResult.style.color = "#ffc44d";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    // Normal weight
    categoryElem.innerHTML = "Normal Weight";
    bmiResult.style.color = "#0be881";
  } else if (bmiValue >= 25 && bmiValue < 29.9) {
    //higher weight
    categoryElem.innerHTML = "Higher Weight";
    bmiResult.style.color = "#ff884d";
  } else {
    // Fat
    categoryElem.innerHTML = "Obese";
    bmiResult.style.color = "#ff5e4d";
  }
}
weightInput.addEventListener("input", bmiCalculator);
heightInput.addEventListener("input", bmiCalculator);
