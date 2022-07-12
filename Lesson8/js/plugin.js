const buttons = document.querySelectorAll('[data-time]');
const stop = document.querySelector('.fa-btn');
const form = document.querySelector('#custom')

const timer = (function () {

    let countdown,
        timerDisplay,
        endTime,
        alarmSound,
        secondsLeft,
        lastSeconds;

    function init(settings) {
        timerDisplay = document.querySelector(settings.timeLeftSelector);
        endTime = document.querySelector(settings.timeEndSelector);

        if (settings.alarmSound) {
            alarmSound = new Audio(settings.alarmSound);
        }

        return this;
    }

    function start(seconds) {
        if (!timerDisplay || !endTime) {
            return console.log('Please init module first.');
        }

        if (!seconds || typeof seconds !== 'number') {
            return console.log('Please provide seconds.');
        }

        clearInterval(countdown);

        if (alarmSound) {
            alarmSound.pause();
            alarmSound.currentTime = 0;
        }

        const now = Date.now();
        const then = now + seconds * 1000;

        displayTimeLeft(seconds);
        displayEndTime(then);

        countdown = setInterval(() => {
            secondsLeft = Math.round((then - Date.now()) / 1000);
            lastSeconds = secondsLeft;
            if (secondsLeft < 0) {
                clearInterval(countdown);
                playsound();
                return;
            }
            displayTimeLeft(secondsLeft);
        }, 1000)
    }

    function getSeconds() {
        return lastSeconds;
    }

    function displayTimeLeft(seconds) {
        const minutes = Math.floor(seconds / 60 % 60);
        const remainedSeconds = seconds % 60;
        const hours = Math.floor(seconds / 60 / 60 % 24);
        const days = Math.floor(seconds / 60 / 60 / 24);

        const display = `${days ? days + (days < 5 ? days % 10 === 1 ? ' день ' : ' дня ' : ' дней ') : ''}${hours ? hours + ':' : ''}${minutes < 10 ? '0' : ''}${minutes}:${remainedSeconds < 10 ? '0' : ''}${remainedSeconds}`;
        document.title = display;
        timerDisplay.textContent = display;
    }

    function displayEndTime(timestamp) {
        const end = new Date(timestamp);
        const hour = end.getHours();
        const minutes = end.getMinutes();
        const days = end.getDate();
        const month = end.getMonth();

        endTime.textContent = `Be back at ${days}.${month > 9 ? month : '0' + month} ${hour ? hour + ':' : ''}${minutes < 10 ? '0' : ''}${minutes}`;
    }

    function stop() {
        clearInterval(countdown);
    }

    function playsound() {
        alarmSound.play();
    }

    return {
        init,
        start,
        stop,
        getSeconds,
    }
})();

timer.init({
    timeLeftSelector: '.display__time-left',
    timeEndSelector: '.display__end-time',
    alarmSound: 'audio/bell.mp3'
})

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer.start(seconds);
}

buttons.forEach(btn => btn.addEventListener('click', startTimer));

stop.addEventListener('click', () => {
    if (stop.classList.contains('stop')) {
        stop.classList.remove('stop');
        stop.textContent = 'Restart'
        timer.stop();
    } else {
        stop.classList.add('stop');
        stop.textContent = 'Stop'
        timer.start(timer.getSeconds())
    }
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let inputValue = document.querySelector('input').value;
    timer.start(inputValue * 60);
})
