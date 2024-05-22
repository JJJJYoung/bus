 function getCurrentTime24HourFormat() {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            return `${hours}:${minutes}:${seconds}`;
        }

        function updateClock() {
            const timeElement = document.getElementById('time');
            timeElement.textContent = getCurrentTime24HourFormat();
        }

        
        document.addEventListener('DOMContentLoaded', (event) => {
            updateClock();
            setInterval(updateClock, 1000);
        });