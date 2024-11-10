const form = document.getElementById('calculator-form');
const statusElement = document.getElementById('status');

form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    let operation = document.getElementById('operation').value;

    if (isNaN(num1) || isNaN(num2) || num1 === "" || num2 === "") {
        alert("Please enter valid numbers.");
        return;
    }

    // URL encode the operation parameter
    operation = encodeURIComponent(operation);

    try {
        const response = await fetch(`/calculate?num1=${num1}&num2=${num2}&operation=${operation}`);
        const data = await response.json();

        if (data.error) {
            statusElement.textContent = `Error: ${data.error}`;
        } else {
            statusElement.textContent = `Result: ${data.result}`;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to calculate.");
    }
});
