let min = 0, sec = 0, msec = 0, interval;

const minDisplay = document.querySelector('.min');
const secDisplay = document.querySelector('.sec');
const msecDisplay = document.querySelector('.msec');
const playBtn = document.querySelector('.playbtn');
const resetBtn = document.querySelector('.resetbtn');
const lapBtn = document.querySelector('.lapbtn');
const clearBtn = document.querySelector('.clearbtn');
const laps = document.querySelector('.laps');

function updateDisplay() {
    minDisplay.textContent = `${String(min).padStart(2, '0')} :`;
    secDisplay.textContent = `${String(sec).padStart(2, '0')} :`;
    msecDisplay.textContent = `${String(Math.floor(msec / 10)).padStart(2, '0')}`;
}

function startTimer() {
    interval = setInterval(() => {
        msec += 10;
        if (msec === 1000) {
            msec = 0;
            sec++;
        }
        if (sec === 60) {
            sec = 0;
            min++;
        }
        updateDisplay();
    }, 10);
}

function stopTimer() {
    clearInterval(interval);
}

playBtn.addEventListener('click', () => {
    if (playBtn.textContent === 'Play') {
        startTimer();
        playBtn.textContent = 'Pause';
        playBtn.classList.remove('play');
        playBtn.classList.add('pause');
        resetBtn.classList.remove('visibility');
        lapBtn.classList.remove('visibility');
    } else {
        stopTimer();
        playBtn.textContent = 'Play';
        playBtn.classList.remove('pause');
        playBtn.classList.add('play');
    }
});

resetBtn.addEventListener('click', () => {
    stopTimer();
    min = 0;
    sec = 0;
    msec = 0;
    updateDisplay();
    playBtn.textContent = 'Play';
    playBtn.classList.remove('pause');
    playBtn.classList.add('play');
    resetBtn.classList.add('visibility');
    lapBtn.classList.add('visibility');
    laps.innerHTML = '';
    clearBtn.classList.add('visibility');
});

lapBtn.addEventListener('click', () => {
    const lapTime = `${String(min).padStart(2, '0')} : ${String(sec).padStart(2, '0')} : ${String(Math.floor(msec / 10)).padStart(2, '0')}`;
    const li = document.createElement('li');
    li.textContent = lapTime;
    laps.appendChild(li);
    clearBtn.classList.remove('visibility');
});

clearBtn.addEventListener('click', () => {
    laps.innerHTML = '';
    clearBtn.classList.add('visibility');
});
