
//timer
function initializeClock(id, endtime) {
    let intervalId;
    let clock = document.getElementById(id);
    let hoursSpan = clock.querySelector('.hours');
    let minutesSpan = clock.querySelector('.minutes');
    let secondsSpan = clock.querySelector('.seconds');


    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());

        let seconds = Math.floor((t / 1000) % 60);
        let minutes = Math.floor((t / 1000 / 60) % 60);
        let hours = Math.floor((t / (1000 * 60 * 60)) % 24);

        return {
            total: t,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }

    function updateClock() {
        let t = getTimeRemaining(endtime);

        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0 && intervalId) {
            clearInterval(intervalId);
        }
    }

    updateClock();
    intervalId = setInterval(updateClock, 1000);
}

let today = new Date();
let end = new Date(
    today.setHours(23,59,59,999)
);

initializeClock('countdown', end);
initializeClock('countdown-2', end);