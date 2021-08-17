const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
}

class CountdownTimer {
    constructor({ endDate }) {
        this.endDate = endDate;
        this.onStart();
        this.start();
    };

    onStart() {
        const zeroTime = this.getTimeComponents(0);
        this.setClockValues(zeroTime);
    };

    start() {
        setInterval(() => {
            const currentTime = Date.now();
            const timeLeft = this.endDate - currentTime;
            const timeComponents = this.getTimeComponents(timeLeft);
            this.setClockValues(timeComponents)
        }, 1000);
    };

    getTimeComponents(time) {
        return {
            days: this.addZero(Math.floor(time / (1000 * 60 * 60 * 24))),
            mins: this.addZero(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))),
            secs: this.addZero(Math.floor((time % (1000 * 60)) / 1000)),
            hours: this.addZero(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
        }
    };

    addZero(num) {
        return num < 10 ? '0' + num : num;
    };

    setClockValues({ days, hours, mins, secs }) {
        refs.days.textContent = days;
        refs.hours.textContent = hours;
        refs.mins.textContent = mins;
        refs.secs.textContent = secs;
    };

};

const newTimer = new CountdownTimer({
    selector: '#timer-1',
    endDate: new Date('Dec 31, 2021'),
});