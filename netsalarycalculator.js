function netSalaryCalculator() {
    let basicSalary = parseFloat(prompt("Enter basic salary:"));
    let benefits = parseFloat(prompt("Enter benefits:"));

    let grossSalary = basicSalary + benefits;
    
    // Simplified tax calculation
    let tax = 0;
    if (grossSalary <= 24000) {
        tax = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        tax = 2400 + ((grossSalary - 24000) * 0.25);
    } else {
        tax = 4483.25 + ((grossSalary - 32333) * 0.3);
    }

    // NHIF Deduction (simplified for demo purposes)
    let nhifDeductions = 500; // Fixed amount for simplicity

    // NSSF Deduction (simplified for demo purposes)
    let nssfDeductions = 200; // Fixed amount for simplicity

    let netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;

    console.log("Gross Salary: " + grossSalary);
    console.log("Tax: " + tax);
    console.log("NHIF Deductions: " + nhifDeductions);
    console.log("NSSF Deductions: " + nssfDeductions);
    console.log("Net Salary: " + netSalary);
}

netSalaryCalculator();
