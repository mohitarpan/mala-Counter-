document.addEventListener('DOMContentLoaded', function() {
    let clickCount = 0;
    let completedCounts = 0;
    let timerInterval;
    let seconds = 0;
    let minutes = 0;
    let timerStarted = false; // New variable to track if timer has started

    const clickButton = document.getElementById('clickButton');
    const clickCountElement = document.getElementById('clickCount');
    const completedCountsElement = document.getElementById('completedCounts');
    const timerElement = document.getElementById('timer');
    const imageContainer = document.getElementById('imageContainer');
    const lordKrishnaImage = document.getElementById('lordKrishnaImage');

    function updateClickCount() {
        if (!timerStarted) {
            startTimer();
            timerStarted = true;
        }

        clickCount++;
        clickCountElement.textContent = clickCount;
        
        if (clickCount === 108) {
            showLordKrishnaImage();
            completedCounts++;
            completedCountsElement.textContent = completedCounts;
            clickCount = 0;
        }
    }

    function showLordKrishnaImage() {
        imageContainer.style.display = 'block';
        setTimeout(hideLordKrishnaImage, 2000);
    }

    function hideLordKrishnaImage() {
        imageContainer.style.display = 'none';
    }

    function startTimer() {
        timerInterval = setInterval(function() {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            updateTimerDisplay();
        }, 1000);
    }

    function updateTimerDisplay() {
        const formattedTime = padZero(minutes) + ':' + padZero(seconds);
        timerElement.textContent = formattedTime;
    }

    function padZero(num) {
        return (num < 10) ? '0' + num : num;
    }

    clickButton.addEventListener('click', updateClickCount);
});
