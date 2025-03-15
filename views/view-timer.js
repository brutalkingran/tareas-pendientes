let segundos = 1500;

window.addEventListener('load', () => {
    const currentClockTime = document.querySelector('#current-clock-time');

    const interval = setInterval(() => {
        currentClockTime.textContent = String(segundos / 60);
        segundos -= 1;
    }, 1000);

    
})