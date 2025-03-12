alert("Please enter a valid weight and height");

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.calculator');
    const bmiText = document.getElementById('bmi');
    const descText = document.getElementById('desc');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            alert('Please enter a valid weight and height');
            return;
        }

        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        bmiText.textContent = bmi.toFixed(2);
        descText.textContent = getBMICategory(bmi);
    });

    function getBMICategory(bmi) {
        if (bmi < 16) return "Very Severely Underweight";
        if (bmi < 16.9) return "Severely Underweight";
        if (bmi < 18.4) return "Underweight";
        if (bmi < 24.9) return "Normal";
        if (bmi < 29.9) return "Overweight";
        if (bmi < 34.9) return "Obese";
        if (bmi < 39.9) return "Obese Class 2";
        return "Obese Class 3";
    }
});
