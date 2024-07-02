function speedDetector() {
    // Prompt the user to enter the speed of the car
    let speed = prompt("Enter the speed of the car:");
    
    // Convert the entered speed from a string to an integer
    speed = parseInt(speed);
    
    // Check if the speed is less than 70
    if (speed < 70) {
        // If the speed is less than 70, print "Ok" to the console
        console.log("Ok");
    } else {
        // If the speed is 70 or more, calculate demerit points
        // Demerit points are calculated as the floor value of (speed - 70) divided by 5
        let demeritPoints = Math.floor((speed - 70) / 5);
        
        // Check if demerit points are greater than 12
        if (demeritPoints > 12) {
            // If demerit points are more than 12, print "License suspended" to the console
            console.log("License suspended");
        } else {
            // If demerit points are 12 or less, print the points to the console
            console.log("Points: " + demeritPoints);
        }
    }
}

// Call the function to execute the speed detector
speedDetector();
