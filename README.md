# BMI Calculator

- [Description](#description)
- [Author](#author)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [How to Run Locally](#how-to-run-locally)
  - [Prerequisites](#prerequisites-for-linux-and-windows)
  - [For Linux](#for-linux)
  - [For Windows](#for-windows)
- [How to Use](#how-to-use)

## Description

This project provides a user-friendly BMI calculator implemented in HTML, CSS, and JavaScript that allows users to input their height and weight, choose between the metric and imperial measurement systems, and instantly get their BMI along with a corresponding category (Underweight, Normal weight, Overweight, or Obese).

## Author

- [Kevin Coovi](https://www.linkedin.com/in/kevin-coovi/)
- [GitHub](https://github.com/kcoovi)

## Features

- Calculate BMI based on user input (height and weight).
- Support for both metric (kg/cm) and imperial (lb/in) measurement systems.
- Display BMI categories for quick interpretation.

## Prerequisite for Linux and Windows

1. Ensure you have Python and git installed on your system.

   - [Python](https://www.python.org/downloads/) & [Git](https://git-scm.com/download/win) for Windows.

2. Install Flask **if not** already installed

```bash
pip install Flask

```

## Technologies Used

- HTML
- CSS
- JavaScript
- Python
- Flask

## How to Run Locally

1. Clone the repository to your local machine by opening the Terminal on Linux or Command prompt on Windows.

```bash
git clone https://github.com/kcoovi/bmi-calculator.git

```

2. Navigate to the project directory.

### Linux Terminal:

```bash
cd bmi-calculator

```

### Windows Comand Prompt:

```bash
CD bmi-calculator

```

3. Run the application using a local server.

### For Linux:

```bash
python3 run.py

```

### For Windows:

```bash
python run.py

```

4. Open your browser at http://127.0.0.1:5000/ to use the calculator.

## How to Use

1. Open the [BMI Calculator](http://127.0.0.1:5000/) in your web browser.
2. Select your preferred measurement system (Metric or Imperial).
3. Enter your height and weight in the provided fields.
4. Click the "Calculate BMI" button to see your BMI result and category.
5. Change the measurement system to switch between units.
