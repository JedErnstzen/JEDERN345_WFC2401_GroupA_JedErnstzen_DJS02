// Select elements
const formEl = document.querySelector('[data-form]'); // Get the form element
const resultEl = document.querySelector('[data-result]'); // Get the result element
const dividendEl = document.getElementById('dividend'); // Get the dividend input element
const dividerEl = document.getElementById('divider'); // Get the divider input element

// Event listener
formEl.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission

  // Get input values
  const dividend = dividendEl.value.trim(); // Get trimmed dividend value
  const divider = dividerEl.value.trim(); // Get trimmed divider value

  // Validate inputs
  if (!dividend || !divider) { // Check if either input is empty
    resultEl.textContent = 'Please enter both values.'; // Display error message
    return; // Exit function
  }

  const dividendNum = Number(dividend); // Convert dividend to number
  const dividerNum = Number(divider); // Convert divider to number

  if (Number.isNaN(dividendNum) || Number.isNaN(dividerNum)) { // Check if either input is not a number
    logError('Invalid input. Please enter numbers only.'); // Log error message
    displayError('Something went wrong. Please try again.'); // Display error message
    return; // Exit function
  }

  if (dividerNum === 0) { // Check if divider is zero
    logError('Cannot divide by zero.'); // Log error message
    resultEl.textContent = 'Cannot divide by zero.'; // Display error message
    return; // Exit function
  }

  // Perform division
  const quotient = Math.floor(dividendNum / dividerNum); // Calculate quotient and round down
  resultEl.textContent = quotient; // Display the result
});

// Helper functions
function logError(message) { // Function to log errors to console
  console.error(`Error: ${message}`);
}

function displayError(message) { // Function to display error messages
  resultEl.textContent = message;
}