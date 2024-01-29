// script.js

function calculateBMI() {
  var heightInput = document.getElementById("height");
  var weightInput = document.getElementById("weight");
  var resultDiv = document.getElementById("result");

  // Clear previous BMI result
  resultDiv.innerHTML = "";

  var height = parseFloat(heightInput.value);
  var weight = parseFloat(weightInput.value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    resultDiv.innerHTML = "<p>Please enter valid height and weight values.</p>";
    return;
  }

  var measurementSystem = document.getElementById("measurementSystem").value;
  var bmi;

  if (measurementSystem === "metric") {
    // Calculate BMI using the metric system (height in meters, weight in kilograms)
    bmi = weight / Math.pow(height / 100, 2);
  } else if (measurementSystem === "imperial") {
    // Calculate BMI using the imperial system (height in inches, weight in pounds)
    bmi = (weight / Math.pow(height, 2)) * 703;
  }

  // Display the calculated BMI
  resultDiv.innerHTML =
    "<p>Your BMI is: <strong>" + bmi.toFixed(2) + "</strong></p>";

  // Display the BMI category
  if (bmi < 18.5) {
    resultDiv.innerHTML += "<p class='underweight'>Underweight</p>";
  } else if (bmi < 25) {
    resultDiv.innerHTML += "<p class='normal-weight'>Normal weight</p>";
  } else if (bmi < 30) {
    resultDiv.innerHTML += "<p class='overweight'>Overweight</p>";
  } else {
    resultDiv.innerHTML += "<p class='obese'>Obese</p>";
  }
}

function updatePlaceholders() {
  var measurementSystem = document.getElementById("measurementSystem").value;
  var heightInput = document.getElementById("height");
  var weightInput = document.getElementById("weight");
  var resultDiv = document.getElementById("result");

  // Clear the input fields when the measurement system is changed
  heightInput.value = "";
  weightInput.value = "";

  // Clear previous BMI result
  resultDiv.innerHTML = "";

  if (measurementSystem === "metric") {
    heightInput.placeholder = "Enter your height in centimeters";
    weightInput.placeholder = "Enter your weight in kilograms";
  } else if (measurementSystem === "imperial") {
    heightInput.placeholder = "Enter your height in inches";
    weightInput.placeholder = "Enter your weight in pounds";
  }
}

// Call updatePlaceholders() initially to set the initial placeholders
updatePlaceholders();
