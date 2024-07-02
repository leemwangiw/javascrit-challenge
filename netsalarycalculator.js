function netSalaryCalculator() {
    // Prompt the user to enter the basic salary and parse it as a floating point number
    let basicSalary = parseFloat(prompt("Enter basic salary:"));
    
    // Prompt the user to enter the benefits and parse it as a floating point number
    let benefits = parseFloat(prompt("Enter benefits:"));
    
    // Calculate the gross salary by adding basic salary and benefits
    let grossSalary = basicSalary + benefits;

    // Initialize the tax variable
    let tax = 0;

    // Calculate the tax based on the gross salary using progressive tax rates
    if (grossSalary <= 24000) {
        tax = grossSalary * 0.10; // 10% tax for salaries up to 24,000
    } else if (grossSalary <= 32333) {
        tax = 24000 * 0.10 + (grossSalary - 24000) * 0.25; // 10% for the first 24,000 and 25% for the remainder
    } else if (grossSalary <= 500000) {
        tax = 24000 * 0.10 + (32333 - 24000) * 0.25 + (grossSalary - 32333) * 0.30; // Previous rates plus 30% for the next bracket
    } else if (grossSalary <= 800000) {
        tax = 24000 * 0.10 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (grossSalary - 500000) * 0.325; // Previous rates plus 32.5% for the next bracket
    } else {
        tax = 24000 * 0.10 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (800000 - 500000) * 0.325 + (grossSalary - 800000) * 0.35; // Previous rates plus 35% for the remainder
    }

    // Simplified NHIF deductions (National Hospital Insurance Fund)
    let nhifDeductions = 500;
    
    // Simplified NSSF deductions (National Social Security Fund)
    let nssfDeductions = 200;

    // Calculate the net salary by subtracting tax, NHIF, and NSSF deductions from the gross salary
    let netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;

    // Log the gross salary, tax, NHIF deductions, NSSF deductions, and net salary to the console
    console.log("Gross Salary: " + grossSalary);
    console.log("Tax: " + tax);
    console.log("NHIF Deductions: " + nhifDeductions);
    console.log("NSSF Deductions: " + nssfDeductions);
    console.log("Net Salary: " + netSalary);
}

// Call the function to execute the net salary calculator
netSalaryCalculator();
