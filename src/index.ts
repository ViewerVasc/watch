import './index.css';
import { ClockTime } from './clock-time';
enum Mode {NoEdit, HoursEdit, MinutesEdit}
enum Theme {Light,Dark}

//Get HTML Elements
const hoursDiv= document.getElementById("hours");
const minutesDiv = document.getElementById("minutes");
const modeBtn = document.getElementById("mode");
const increaseBtn = document.getElementById("increase");
const themeBtn = document.getElementById("theme");



//Initialization 
const initialTime = new Date();
const clockTime = new ClockTime(initialTime);
let currentMode : Mode = Mode.NoEdit;
let currentTheme: Theme = Theme.Dark;
updateView();
document.addEventListener("change", updateView);
modeBtn.addEventListener("click", onChangeMode);
increaseBtn.addEventListener("click", onIncrease);
themeBtn.addEventListener("click", onChangeTheme);

// utility functions 
function updateView(): void{
    hoursDiv.innerHTML = clockTime.getHours();
    minutesDiv.innerHTML = clockTime.getMinutes();
}

function onChangeMode(): void{
    switch(currentMode){
        case Mode.NoEdit:
            currentMode = Mode.HoursEdit;
            hoursDiv.style.color = "yellow";
            increaseBtn.classList.remove("disabled");
            break;
        
        case Mode.HoursEdit:
            currentMode = Mode.MinutesEdit;
            hoursDiv.style.removeProperty("color");
            minutesDiv.style.color = "yellow";
            break;
        
        case Mode.MinutesEdit:
            currentMode = Mode.NoEdit;
            minutesDiv.style.removeProperty("color");
            increaseBtn.classList.add("disabled");
            break;
    }
}

function onIncrease() : void {
    switch(currentMode){
        case Mode.HoursEdit:
            clockTime.addHour();
            break;

        case Mode.MinutesEdit:
            clockTime.addMinute();
            break;

        default:
            break;
    }
}

function onChangeTheme(): void{
    switch(currentTheme){
        case Theme.Light:
            document.body.classList.remove('light');
            document.body.classList.add('dark');
            themeBtn.classList.remove('dark');
            themeBtn.classList.add('light');
            themeBtn.innerHTML = "Light";
            currentTheme = Theme.Dark;
            break;

        case Theme.Dark:
            document.body.classList.remove('dark');
            document.body.classList.add('light');
            themeBtn.classList.remove('light');
            themeBtn.classList.add('dark');
            themeBtn.innerHTML = "Dark";
            currentTheme = Theme.Light;
            break;

    
    }
}

function addNewClock(gmt: number): void{
    const initialTime = new Date();
    const newClock = new ClockTime(initialTime);
}

