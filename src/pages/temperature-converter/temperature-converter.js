import '../../styles/main.css';

document.addEventListener('DOMContentLoaded', () => {
    const fahrenheit = document.getElementById('fahrenheit');
    const convertBtn = document.getElementById('convert');
    const result = document.getElementById('result');

    convertBtn.addEventListener('click', () => {
        const f = parseFloat(fahrenheit.value);
        const c = (f - 32) * 5/9;
        result.textContent = `${c.toFixed(2)}°C`;
    });
});
