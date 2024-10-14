const button = document.getElementById('generateButton');
const nameDisplay = document.getElementById('nameDisplay');

const names = [
    'Alice',
    'Bob',
    'Charlie',
    'Diana',
    'Edward',
    'Fiona',
    'George',
    'Hannah',
    'Ian',
    'Jasmine'
];

// Function to generate a random name
function generateRandomName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

// Display a random name on page load
nameDisplay.textContent = generateRandomName();

// Add click event to the button
button.addEventListener('click', () => {
    nameDisplay.textContent = generateRandomName();
});
