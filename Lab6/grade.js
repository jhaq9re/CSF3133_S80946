
/*
ERROR IDENTIFICATION:

Error 1 (grade.js, Line 5):
Used assignment operator (=) instead of comparison operator (==).

Error 2 (grade.html, Line 9):
The form does not return the function result, causing the page to reload.

Error 3 (grade.html, Line 19):
Incorrect JavaScript filename "grades.js". It should be "grade.js".

Error 4 (grade.html, Line 17):
Function name showtable() does not match showTable().

Error 5 (grade.js, Line 9):
Used isNan() instead of isNaN().

Error 6 (grade.js, Line 14):
Used && instead of || for mark range validation.

Error 7 (grade.js, Line 28):
Used getElementByID() instead of getElementById().

Error 8 (grade.js, Line 30):
Used style.colour instead of style.color.

Error 9 (grade.js, Line 38):
Loop starts at 1 instead of 0, causing grade A to be missing.

Error 10 (grade.js, Line 42):
Used innerHtml instead of innerHTML.
*/

// Function to check student mark
function checkMark(event) {

    // Prevent form from refreshing the page
    event.preventDefault();

    let name = document.forms["gradeForm"]["name"].value;
    let mark = document.forms["gradeForm"]["mark"].value;

    // Check empty name
    if (name.trim() == "") {
        alert("Name must be filled out.");
        return false;
    }

    // Check empty mark
    if (mark.trim() == "") {
        alert("Mark field cannot be empty.");
        return false;
    }

    // Check whether mark is numeric
    if (isNaN(mark)) {
        alert("Please enter a valid numeric value.");
        return false;
    }

    mark = Number(mark);

    // Check mark range
    if (mark < 0 || mark > 100) {
        alert("Mark must be between 0 and 100.");
        return false;
    }

    // Determine student grade
    let grade;

    if (mark >= 80) {
        grade = "A";
    } else if (mark >= 65) {
        grade = "B";
    } else if (mark >= 50) {
        grade = "C";
    } else {
        grade = "F";
    }

    // Display result
    document.getElementById("result").innerHTML =
        name + " got grade " + grade;

    // Change result colour according to grade
    if (grade == "A" || grade == "B") {
        document.getElementById("result").style.color = "green";
    } else if (grade == "C") {
        document.getElementById("result").style.color = "orange";
    } else {
        document.getElementById("result").style.color = "red";
    }

    // Display date and time
    document.getElementById("checkTime").innerHTML =
        "Checked on: " + new Date();

    return false;
}

// Function to display grade table
function showTable() {

    let grades = ["A", "B", "C", "F"];
    let ranges = ["80-100", "65-79", "50-64", "0-49"];

    let tableHTML = "<table>";

    // Table heading
    tableHTML += "<tr><th>Grade</th><th>Mark range</th></tr>";

    // Loop through all grades
    for (let i = 0; i < grades.length; i++) {

        tableHTML += "<tr><td>" + grades[i] +
                     "</td><td>" + ranges[i] +
                     "</td></tr>";
    }

    tableHTML += "</table>";

    // Display table
    document.getElementById("tableContainer").innerHTML = tableHTML;
}

// Function to generate random mark
function randomMark() {

    let random = Math.floor(Math.random() * 101);

    document.getElementById("mark").value = random;
}
