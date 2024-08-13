const fs = require('fs');



// Function to generate random string of given length
function generateRandomString(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        result += charset[randomIndex];
    }
    return result;
}

// Parameters
const numEntries = 50000;
const entrySize = 50;
const filePath = 'input.txt';

// Generate the data
let data = '';
for (let i = 0; i < numEntries; i++) {
    data += generateRandomString(entrySize) + '\n'; // Append random string and newline
}

// Write data to file
fs.writeFile(filePath, data, 'utf8', (err) => {
    if (err) {
        console.error(`Error writing file: ${err}`);
    } else {
        console.log(`File saved as ${filePath}`);
    }
});
