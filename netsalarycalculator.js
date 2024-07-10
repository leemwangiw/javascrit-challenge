function netSalaryCalculator() {
    let basicSalary = parseFloat(prompt("Enter basic salary:"));
    let benefits = parseFloat(prompt("Enter benefits:"));
    let grossSalary = basicSalary + benefits;

    let tax = 0;
    if (grossSalary <= 24000) {
        tax = grossSalary * 0.10;
    } else if (grossSalary <= 32333) {
        tax = 24000 * 0.10 + (grossSalary - 24000) * 0.25;
    } else if (grossSalary <= 500000) {
        tax = 24000 * 0.10 + (32333 - 24000) * 0.25 + (grossSalary - 32333) * 0.30;
    } else if (grossSalary <= 800000) {
        tax = 24000 * 0.10 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (grossSalary - 500000) * 0.325;
    } else {
        tax = 24000 * 0.10 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (800000 - 500000) * 0.325 + (grossSalary - 800000) * 0.35;
    }

    let nhifDeductions = 500; // Simplified for demo purposes
    let nssfDeductions = 200; // Simplified for demo purposes

    let netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;

    alert("Gross Salary: " + grossSalary +
          "\nTax: " + tax +
          "\nNHIF Deductions: " + nhifDeductions +
          "\nNSSF Deductions: " + nssfDeductions +
          "\nNet Salary: " + netSalary);
}
