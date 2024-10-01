const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Function to parse CSV data
function parseCSV(csv) {
    let currentCell = '';
    let cells = [];

    for (let i = 0; i < csv.length; i++) {
        const char = csv[i];

        if (char === ',') {
            cells.push(currentCell); // Store the current cell
            currentCell = ''; // Reset for next cell
        } 
        // Check for newline character
        else if (char === '\n') {
            cells.push(currentCell); // Store the last cell of the row
            console.log(...cells); // Log the row
            cells = []; // Reset cells for the next row
            currentCell = ''; // Reset current cell for the next row
        } else {
            currentCell += char; // Build the current cell
        }
    }

    if (currentCell) {
        cells.push(currentCell);
        console.log(...cells); // Log the final row
    }
}

// Call the function with the CSV data
parseCSV(csvData);
