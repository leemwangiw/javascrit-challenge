# JavaScript Toy Problems

This project includes three simple JavaScript programs designed to solve specific challenges: Student Grade Generator, Speed Detector, and Net Salary Calculator.

## File Structure
.
├── index.html
├── studentGradeGenerator.js
├── speedDetector.js
└── netSalaryCalculator.js

markdown
Copy code

### 1. Student Grade Generator

This function prompts the user to enter student marks (between 0 and 100) and outputs the corresponding grade based on the following scale:
- **A**: Marks greater than 79
- **B**: Marks between 60 and 79
- **C**: Marks between 49 and 59
- **D**: Marks between 40 and 49
- **E**: Marks less than 40

### 2. Speed Detector

This program takes the speed of a car as input and calculates demerit points:
- If the speed is less than 70, it prints "Ok."
- For every 5 km/s above the speed limit (70), it gives one demerit point.
- If demerit points exceed 12, it prints "License suspended."

### 3. Net Salary Calculator

This program calculates an individual's net salary based on inputs for basic salary and benefits. It calculates tax, NHIF deductions, NSSF deductions, gross salary, and net salary.

## How to Run

1. **Clone the Repository**
   ```sh
   git clone <repository-url>
   cd <repository-directory>
Open index.html in a Web Browser

Double-click on the index.html file, or right-click and choose "Open with" and select your preferred web browser.
Alternatively, you can open the browser and drag the index.html file into it.
Interact with the Application

You will see a webpage with three buttons: "Student Grade Generator," "Speed Detector," and "Net Salary Calculator."
Click on any button to run the corresponding JavaScript function.
Follow the Prompts

A prompt will appear asking for the necessary input (e.g., student marks, car speed, basic salary, and benefits).
Enter the required input and press "OK."
The results will be displayed using alert boxes.