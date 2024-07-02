function studentGradeGenerator() {
    // Prompt the user to enter student marks between 0 and 100
    let marks = prompt("Enter student marks (between 0 and 100):");
    
    // Convert the entered marks from a string to an integer
    marks = parseInt(marks);

    // Check if the marks are greater than 79
    if (marks > 79) {
        // If marks are greater than 79, print "Grade: A" to the console
        console.log("Grade: A");
    } 
    // Check if the marks are between 60 and 79 (inclusive)
    else if (marks >= 60 && marks <= 79) {
        // If marks are between 60 and 79, print "Grade: B" to the console
        console.log("Grade: B");
    } 
    // Check if the marks are between 49 and 59 (inclusive)
    else if (marks >= 49 && marks <= 59) {
        // If marks are between 49 and 59, print "Grade: C" to the console
        console.log("Grade: C");
    } 
    // Check if the marks are between 40 and 49 (inclusive)
    else if (marks >= 40 && marks <= 49) {
        // If marks are between 40 and 49, print "Grade: D" to the console
        console.log("Grade: D");
    } 
    // Check if the marks are less than 40
    else if (marks < 40) {
        // If marks are less than 40, print "Grade: E" to the console
        console.log("Grade: E");
    } 
    // If none of the above conditions are met, the entered marks are invalid
    else {
        // Print "Invalid marks entered." to the console
        console.log("Invalid marks entered.");
    }
}

// Call the function to execute the student grade generator
studentGradeGenerator();
