function studentGradeGenerator() {
    let marks = prompt("Enter student marks (between 0 and 100):");
    marks = parseInt(marks);

    if (marks > 79) {
        alert("Grade: A");
    } else if (marks >= 60 && marks <= 79) {
        alert("Grade: B");
    } else if (marks >= 49 && marks <= 59) {
        alert("Grade: C");
    } else if (marks >= 40 && marks <= 49) {
        alert("Grade: D");
    } else if (marks < 40) {
        alert("Grade: E");
    } else {
        alert("Invalid marks entered.");
    }
}
