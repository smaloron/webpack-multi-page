import '../../styles/main.css';

document.addEventListener('DOMContentLoaded', () => {
    const feet = document.getElementById('feet');
    const inches = document.getElementById('inches');
    const convertBtn = document.getElementById('convert');
    const result = document.getElementById('result');

    convertBtn.addEventListener('click', () => {
        const totalInches = parseInt(feet.value) * 12 + parseInt(inches.value);
        const cm = totalInches * 2.54;
        result.textContent = `${cm.toFixed(2)} cm`;
    });
});
