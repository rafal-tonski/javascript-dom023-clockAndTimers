// ZEGAR
const clock = document.querySelector('.clock span');

const  watch = () => {
    let time = new Date()
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    clock.textContent = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

setInterval(watch, 1000);


// ODLICZANIE

const days = document.querySelector("#d");
const hours= document.querySelector("#h");
const minutes = document.querySelector("#m");
const seconds = document.querySelector("#s");

const endDate = new Date('2022-01-01 00:00:00').getTime();

const timer = () => {
    const nowDate = new Date().getTime();

    const daysLeft = Math.floor((endDate - nowDate)/1000/60/60/24);
    const hoursLeft = Math.floor((endDate - nowDate)/1000/60/60%24);
    const minutesLeft = Math.floor((endDate - nowDate)/1000/60%60);
    const secondsLeft = Math.floor((endDate - nowDate)/1000%60);

    days.textContent = daysLeft + "d";
    hours.textContent = hoursLeft < 10 ? "0" + hoursLeft + "h": hoursLeft + "h";
    minutes.textContent = minutesLeft < 10 ? "0" + minutesLeft + "m" : minutesLeft + "m"; 
    seconds.textContent = secondsLeft < 10 ? "0" + secondsLeft + "s": secondsLeft + "s"; 
};

setInterval(timer, 1000);


// TIMER

const btnMain = document.querySelector(".main");
const btnReset = document.querySelector(".reset");
const timerHolder = document.querySelector(".timer2 div");


let btnActive = false;
let startCounting;
let timer2 = 0;

const buttonChanger = () => {
    btnActive = !btnActive;
    btnActive ? btnMain.textContent = "Stop" :  btnMain.textContent = "Start";
};

const counter = () => {
    timer2++;
    timerHolder.textContent = (timer2/100).toFixed(2);

};

const reset = () => {
    timer2 = 0;
    btnActive = false;
    timerHolder.textContent = "---";
    clearInterval(startCounting);
};

const onOffTimer = () => {
    if (!btnActive) {
        buttonChanger();
        startCounting = setInterval(counter, 10);
    } else {
        buttonChanger();
        clearInterval(startCounting);
    }
};



btnMain.addEventListener("click", onOffTimer);
btnReset.addEventListener("click", reset);



