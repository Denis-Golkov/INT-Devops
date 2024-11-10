const Form = document.getElementById('check-Temp');
const statusElement = document.getElementById('status');

Form.addEventListener('submit', function(event) {
    console.log('Form is submitted!');
    event.preventDefault();
    const temp = document.getElementById('temp').value;
    console.log(`Temperature: ${temp}`);
    if (isNaN(temp) || temp === "") {
        alert("Please enter a valid number.");
        return;
    }
    TempConv(temp);
});

async function TempConv(temp) {
    try {
        const response = await fetch(`/get_Temp?temp=${temp}`);
        const data = await response.json();
        
        if (data['Temperature in Fahrenheit']) {
            statusElement.textContent = `Temperature in Fahrenheit: ${data['Temperature in Fahrenheit']}`;
        } else {
            alert(data.error || "Conversion failed.");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to convert temperature.");
    }
};