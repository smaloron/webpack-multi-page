import '../../styles/main.css';

document.addEventListener('DOMContentLoaded', () => {
    const pounds = document.getElementById('pounds');
    const convertBtn = document.getElementById('convert');
    const result = document.getElementById('result');

    convertBtn.addEventListener('click', () => {
        const lbs = parseFloat(pounds.value);
        const kg = lbs * 0.453592;
        result.textContent = `${kg.toFixed(2)} kg`;
    });
});
