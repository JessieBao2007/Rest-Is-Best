window.addEventListener("load", buildIt);

function buildIt() {
    startTime();
    hrsMenu();
    minsMenu();
    secsMenu();
    soundMenu();
    buildAudio();
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var time = checkZero(h) + ":" + checkZero(m) + ":" + checkZero(s);
    document.getElementById("time").innerHTML =
        time;
    var t = setTimeout(startTime, 500);
}

function checkZero(i) {
    if (i < 10) { i = "0" + i }
    return i;
}

function hrsMenu() {
    var select = document.getElementById("alarmHrs");
    var hours = 7;

    for (i = 7; i <= hours;i++) {
        select.options[select.options.length] = new Option(i < 10 ? "7"  : i, i);
    }
}

function minsMenu() {
    var select = document.getElementById("alarmMins");
    var mins = 30;

    for (i = 30; i <= mins; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "30" + i : i, i);
    }
}

function secsMenu() {
    var select = document.getElementById("alarmSecs");
    var secs = 59;

    for (i = 0; i <= secs; i++) {
        select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
    }
}

function soundMenu() {
    var select = document.getElementById("mySelect");

    var array = [
        {
            name: "Toy Duck",
            url: "https://www.freespecialeffects.co.uk/soundfx/cartoon/toyduck2.wav"
        },
        {
            name: "Phone",
            url: "https://www.freespecialeffects.co.uk/soundfx/telephone/phone_ring_1.wav"
        },
        {
            name: "Bells",
            url: "https://www.freespecialeffects.co.uk/soundfx/bells/church_bells_01.wav"
        },
        {
            name: "Trumpets",
            url: "https://www.freespecialeffects.co.uk/soundfx/music/trumpets.wav"
        },
        {
            name: "Nuke",
            url: "https://www.freespecialeffects.co.uk/soundfx/explosions/nuke_explosion_1.wav"
        },
        {
            name: "School Bell",
            url: "https://www.freespecialeffects.co.uk/soundfx/sirens/schoolbell.wav"
        },
        {
            name: "Car",
            url: "https://www.freespecialeffects.co.uk/soundfx/cars/car_accelerating_02.wav"
        }
    ];

    for (var i = 0; i < array.length; i++) {

        var option = document.createElement("option");
        option.value = array[i].url;
        option.text = array[i].name;
        select.appendChild(option);
    }
}

function buildAudio() {
    var myDiv = document.getElementById("myDiv");
    var myAudio = document.createElement("audio");

    myAudio.src = "https://www.freespecialeffects.co.uk/soundfx/various/forest.wav";
    myAudio.id = "myAudio_wake";
    myDiv.appendChild(myAudio);
}

document.getElementById("mySetButton").addEventListener("click", setAlarm);
document.getElementById("myClearButton").addEventListener("click", clearAlarm);
document.getElementById("mySelect").addEventListener("change", getSrc);

function getSrc() {
    document.getElementById("myAudio").src = document.getElementById("mySelect").value;
}


function setAlarm() {

    var hour = document.getElementById("alarmHrs");
    var min = document.getElementById("alarmMins");
    var sec = document.getElementById("alarmSecs");

    var selectedHour = 7;
    var selectedMin = 30;
    var selectedSec = 00;

    var alarmTime = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec);

    document.getElementById('alarmHrs').disabled = true;
    document.getElementById('alarmMins').disabled = true;
    document.getElementById('alarmSecs').disabled = true;
    document.getElementById('mySelect').disabled = true;


    setInterval(function playAlarmSound() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        var time = addZero(h) + ":" + addZero(m) + ":" + addZero(s);

        
        if (time == alarmTime) {
            myAudio_wake.play();
            myAudio_wake.loop = true;
            openPopup();
        }
    }, 1000);
}

function addZero(i) {
    if (i < 10) { i = "0" + i };
    return i;
}

function clearAlarm() {
    document.getElementById("alarmHrs").disabled = false;
    document.getElementById("alarmMins").disabled = false;
    document.getElementById("alarmSecs").disabled = false;
    document.getElementById("mySelect").disabled = false;
    document.getElementById("myAudio").disabled = false;
    myAudio_wake.pause();
}


