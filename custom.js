const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const newYear = '1 Jan 2024';

function countTimer(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds =(newYearDate-currentDate)/1000;

    const daysCalc = Math.floor(totalSeconds / 3600/ 24);
    const hoursCalc = Math.floor(totalSeconds / 3600) % 24;
    const minutesCalc = Math.floor(totalSeconds / 60)% 60;
    const secondsCalc = Math.floor(totalSeconds % 60);
    
    days.innerHTML = daysCalc;
    hours.innerHTML = hoursCalc;
    minutes.innerHTML = minutesCalc;
    seconds.innerHTML = secondsCalc;

}

countTimer();

setInterval(countTimer, 1000);